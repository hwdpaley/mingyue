Q.Node.prototype.type = "Node";
Q.Text.prototype.type = "Text";
Q.Group.prototype.type = "Group";
Q.Edge.prototype.type = "Edge";

var graph;

$(function () {

    Q.addCSSRule(".maximize", "margin: 0px !important;position: fixed !important;top: 0px;bottom: 0px;right: 0px;left: 0px;z-index: 1030;height: auto !important; width: auto !important;");
    graph = new Q.Graph("canvas");

    var styles = {};
    styles[Q.Styles.SELECTION_COLOR] = "#0F0";
    graph.styles = styles;

    graph.originAtCenter = false;
    graph.editable = true;

    graph.onElementCreated = function (element, evt) {
        if (element instanceof Q.Edge) {
            var v = prompt("连线粗度");
            v = parseInt(v);
            if (v) {
                element.setStyle(Q.Styles.EDGE_WIDTH, v);
            } else {
                graph.removeElement(element);
            }
            if (element.edgeType && element.edgeType != Q.Consts.EDGE_TYPE_DEFAULT) {
                element.setStyle(Q.Styles.EDGE_BUNDLE, false);
            }
            return;
        }
        if (element instanceof Q.Text) {
            element.setStyle(Styles.LABEL_BACKGROUND_COLOR, "#2898E0");
            element.setStyle(Styles.LABEL_COLOR, "#FFF");
            element.setStyle(Styles.LABEL_PADDING, new Q.Insets(3, 5));
            return;
        }
    }

    graph.onLabelEdit = function (element, label, text, elementUI) {
        if (!text) {
            return false;
        }
        element.name = text;
        //此处调用后台保存
    }

    appendInteractionMenu(graph);

    initToolbar();

    //initToolbox();

    initDatas();
    graph.zoomToOverview();

//监听面板调整大小事件，同步graph大小
    $('#center_panel').panel({
        onResize: function (w, h) {
            graph.updateViewport();
        }
    });

});

function ensureVisible(node) {
    var bounds = graph.getUIBounds(node);
    var viewportBounds = graph.viewportBounds;
    if (!viewportBounds.contains(bounds)) {
        graph.sendToTop(node);
        graph.centerTo(node.x, node.y);
    }
}

function setInteractionMode(evt, info) {
    graph.interactionMode = info.value;
    currentInteractionMode = info.value;
    if (info.value == Q.Consts.INTERACTION_MODE_CREATE_EDGE) {
        graph.edgeUIClass = info.edgeUIClass;
        graph.edgeType = info.edgeType;
    }
}
function initToolbar() {
    var toolbar = document.getElementById("toolbar");
    var buttons = {
        interactionModes: [{
            name: "默认模式",
            value: Q.Consts.INTERACTION_MODE_DEFAULT,
            selected: true,
            icon: 'images/default_icon.png',
            action: setInteractionMode
        },
            {
                name: '框选模式',
                value: Q.Consts.INTERACTION_MODE_SELECTION,
                icon: 'images/rectangle_selection_icon.png',
                action: setInteractionMode
            },
            {
                name: '浏览模式',
                value: Q.Consts.INTERACTION_MODE_VIEW,
                icon: 'images/pan_icon.png',
                action: setInteractionMode
            },
            {
                name: "放大", icon: "images/zoomin_icon.png", action: function () {
                graph.zoomIn()
            }
            },
            {
                name: "缩小", icon: "images/zoomout_icon.png", action: function () {
                graph.zoomOut()
            }
            },
            {
                name: "1:1", action: function () {
                graph.scale = 1;
            }
            },
            {
                name: '纵览', icon: 'images/overview_icon.png', action: function () {
                this.zoomToOverview()
            }
            },

            {
                name: '最大化', icon: 'images/fullscreen_icon.png', action: function () {
                if ($("#graph_panel").hasClass("maximize")) {
                    $("#graph_panel").removeClass("maximize")
                } else {
                    $("#graph_panel").addClass("maximize")
                }
                graph.updateViewport();
            }
            },
            //{
            //    name: '查找', type: "input", action: function (evt, info) {
            //    var name = info.input.value;
            //    if (!name) {
            //        return;
            //    }
            //    graph.forEach(function (e) {
            //        if (e instanceof Q.Node && (name == e.name || (e.info && e.info.name == name))) {
            //            graph.setSelection(e);
            //            ensureVisible(e);
            //            return false;
            //        }
            //    }, graph);
            //}}
        ]

    };
    createToolBar(buttons, toolbar, graph, false, false);
    //graph.zoomToOverview();
}

function initToolbox() {
    var toolbox = document.getElementById("toolbox");

    createToolBar({
        a: [
            {
                name: '普通连线',
                value: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
                icon: 'images/edge_icon.png',
                action: setInteractionMode
            },
            {
                name: '正交直线',
                value: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
                icon: 'images/edge_orthogonal_icon.png',
                action: setInteractionMode,
                edgeType: Q.Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL
            }]
    }, toolbox, graph, "btn-group-vertical", false);

    createDNDImage(toolbox, "images/node_icon.png", "终端", {type: "Node", label: "Mac", image: "Q.Graphs.node"});
    createDNDImage(toolbox, "images/exchanger_icon.png", "交换机", {
        type: "Node",
        label: "交换机",
        image: "Q.Graphs.exchanger2"
    });
    createDNDImage(toolbox, "images/server_icon.png", "服务器", {type: "Node", label: "服务器", image: "Q.Graphs.server"});
}

function initDatas() {//"/bulidTreeGraph?name="+"主楼"

    Q.loadJSON("/bulidTreeGraph?name=" + "荆州市中心机房", function (json) {
        var topoNodes = json.nodes;
        var relations = json.relations;
        initTopology(topoNodes, relations);

        graph.callLater(function () {
            var layouter = new Q.BalloonLayouter(graph);
            layouter.radius = 350;
            layouter.doLayout({
                byAnimate: true,
                callback: function(){
                    graph.zoomToOverview();
                }
            });
            graph.moveToCenter();
        })

        var datas = [];
        var map = {};
        graph.graphModel.forEachByBreadthFirst(function (d) {
            var name = d.name || d.type;
            var data = {text: name, id: d.id, iconCls: getTreeIcon(d)};
            map[d.id] = data;
            var parent = d.parent;
            if (!parent) {
                datas.push(data);
                return;
            }
            parent = map[parent.id];
            var children = parent.children;
            if (!children) {
                children = parent.children = [];
            }
            children.push(data);
        });
        //$('#tree').tree({
        //    data: datas
        //});

        //syncSelectionTreeAndGraph("tree", graph);
        //syncDataTreeAndGraph("tree", graph);
    });
}

function getTreeIcon(d) {
    return d instanceof Q.Edge ? "edge_icon" : "node_icon";
}
function createEdge(from, to, type, lineWidth, color) {
    //var edge = graph.createEdge(from.name + " --> " + to.name, from, to);
    var edge = graph.createEdge(from, to);
    edge.setStyle(Q.Styles.EDGE_COLOR, color || "#000");
    edge.setStyle(Q.Styles.EDGE_WIDTH, lineWidth || 2);
    edge.edgeType = type || Q.Consts.EDGE_TYPE_DEFAULT;
    return edge;
}

function syncDataTreeAndGraph(treeId, graph) {
    treeId = "#" + treeId;
    graph.listChangeDispatcher.addListener(function (evt) {
        var data = evt.data;
        switch (evt.kind) {
            case Q.ListEvent.KIND_ADD :
                var treeData = {data: [{id: data.id, text: data.name, iconCls: getTreeIcon(data)}]};
                $(treeId).tree('append', treeData);
                break;
            case Q.ListEvent.KIND_REMOVE :
                Q.forEach(data, function (node) {
                    var node = $(treeId).tree('find', node.id);
                    if (node) {
                        $(treeId).tree('remove', node.target);
                    }
                });
                break;
            case Q.ListEvent.KIND_CLEAR :
                break;
        }
    });
}

function syncSelectionTreeAndGraph(treeId, graph) {
    treeId = "#" + treeId;
    var selectionAjdusting;
    graph.selectionChangeDispatcher.addListener(function (evt) {
        if (selectionAjdusting) {
            return;
        }
        selectionAjdusting = true;
        var selection = [];
        graph.selectionModel.forEach(function (node) {
            var node = $(treeId).tree('find', node.id);
            if (node) {
                selection.push(node.target);
            }
        });
        $(treeId).tree('select', selection);
        selectionAjdusting = false;
    });
    $(treeId).tree({
        onSelect: function () {
            if (selectionAjdusting) {
                return;
            }
            selectionAjdusting = true;
            var selected = $(treeId).tree("getSelected");
            if (selected) {
                var node = graph.getElement(selected.id);
                graph.selectionModel.set(node);
                if (node) {
                    ensureVisible(node);
                }
            }
            selectionAjdusting = false;
        }
    });
}

if (!Q.Element.prototype.initAlarmBalloon) {
    Q.Element.prototype.initAlarmBalloon = function () {
        var alarmUI = new Q.LabelUI();
        alarmUI.position = Q.Position.CENTER_TOP;
        alarmUI.anchorPosition = Q.Position.LEFT_BOTTOM;
        alarmUI.border = 1;
        alarmUI.backgroundGradient = Q.Gradient.LINEAR_GRADIENT_VERTICAL;
        alarmUI.padding = new Q.Insets(2, 5);
        alarmUI.showPointer = true;
        alarmUI.offsetY = -10;
        alarmUI.offsetX = -10;
        alarmUI.rotatable = false;
        alarmUI.showOnTop = true;
        this._alarmBalloon = alarmUI;
    }
    Q.Element.prototype._checkAlarmBalloon = function () {
        if (!this.alarmLabel || !this.alarmColor) {
            if (this._alarmBalloon) {
                this.removeUI(this._alarmBalloon);
            }
            return;
        }
        if (!this._alarmBalloon) {
            this.initAlarmBalloon();
        }
        this._alarmBalloon.data = this.alarmLabel;
        this._alarmBalloon.backgroundColor = this.alarmColor;
        if (this.addUI(this._alarmBalloon) === false) {
            this.invalidate();
        }
    }
    Object.defineProperties(Q.Element.prototype, {
        alarmLabel: {
            get: function () {
                return this._alarmLabel;
            },
            set: function (label) {
                if (this._alarmLabel == label) {
                    return;
                }
                this._alarmLabel = label;
                this._checkAlarmBalloon();
            }
        },
        alarmColor: {
            get: function () {
                return this._alarmColor;
            },
            set: function (color) {
                if (this._alarmColor == color) {
                    return;
                }
                this._alarmColor = color;
                this.setStyle(Q.Styles.RENDER_COLOR, color);
                this._checkAlarmBalloon();
            }
        }
    })
}
var AlarmSeverity = {
    CRITICAL: {color: Q.toColor(0xFFFF0000), sortName: "Cf"}
    //MAJOR: {color: Q.toColor(0xEEFFAA00), sortName: "qM"}
    //MINOR: {color: Q.toColor(0xEEFFFF00), sortName: "m122"},
    //WARNING: {color: Q.toColor(0xEE00FFFF), sortName: "W2222"}
}
var all = [];
for (var name in AlarmSeverity) {
    all.push(AlarmSeverity[name]);
}
AlarmSeverity.all = all;

Object.defineProperties(AlarmSeverity, {
    random: {
        get: function () {
            return this.all[Q.randomInt(this.all.length)];
        }
    }
})

var timer = setTimeout(function A() {
    graph.forEach(function (element) {
        //if(Q.randomBool()){
        //    element.alarmLabel = null;
        //    element.alarmColor = null;
        //    //return;
        //}
        if (!element.info) {
            return;
        }
        //if(element.type!="PC"){
        //    return;
        //}
        Q.loadJSON("/getElementByIp?ip=" + element.ip+"&mac='"+element.mac+"'", function (json) {
            if (json.success) {
                var alarmSeverity = AlarmSeverity.random;
                element.alarmLabel = json.msg;// "C盘空间不足\nCPU温度过高\nsssssssss" + (1 + Q.randomInt(100)) + alarmSeverity.sortName + (Q.randomBool() ? "+" : "");
                element.alarmColor = alarmSeverity.color;
            } else {
                element.alarmLabel = null;
                element.alarmColor = null;
            }
        });
        //var alarmSeverity = AlarmSeverity.random;
        //element.alarmLabel = "123";//C盘空间不足\nCPU温度过高\nsssssssss" + (1 + Q.randomInt(100)) + alarmSeverity.sortName + (Q.randomBool() ? "+" : "");
        //element.alarmColor = alarmSeverity.color;
    })
    timer = setTimeout(A, 3000);
}, 1500);

function destroy() {
    clearTimeout(timer);
}

function initTopology(topoNodes, topoRelations) {
    var map = {};
    for (var i = 0; i < topoNodes.length; i++) {
        var node = topoNodes[i];
        var qNode = new Q.Node();
        qNode.name = node.name + "\n" + node.ip;
        qNode.type = node.type;
        qNode._id = node.id;
        qNode.mac = node.mac;
        qNode.ip = node.ip;
        qNode.location = new Q.Point(node.x, node.y);
        if (qNode.ip == null) {
            qNode.name = node.name;
            qNode.image = "./images/路由器-100x100px.png";
        } else {
            qNode.image = Q.Graphs.exchanger2;
        }

        graph.graphModel.add(qNode);
        map[node.id] = qNode;
    }
    for (var i = 0; i < topoNodes.length; i++) {
        var node = topoNodes[i];
        var parent = node.parent;
        if (parent) {
            parent = map[parent];
            if (parent) {
                map[node.id].parent = parent;
            }
        }
    }
    for (var i = 0; i < topoRelations.length; i++) {
        var relation = topoRelations[i];
        var nodeFrom = map[relation.from];
        var nodeTo = map[relation.to];
        if (nodeFrom && nodeTo) {
            var edge = this.createEdge(nodeFrom, nodeTo, null, 2, "green");
            edge.info = relation;
            edge.ip = relation.ip;
            edge.mac = relation.mac;
        }
    }
}