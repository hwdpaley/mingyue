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
//    graph.zoomToOverview();
//    flowingSupport.start();
//监听面板调整大小事件，同步graph大小
//    $('#graph_panel').resize(
//        function (w, h) {
//            graph.zoomToOverview();
//            graph.moveToCenter();
//            alert('loaded successfully');
//    });
    $(window).resize(function(){
//        var width = $(window).width()-20;
//        var height = $(window).height()-30;
//        grid.datagrid('resize',{
//            width:width,
//            height:height
//        });
        graph.zoomToOverview();
        graph.moveToCenter();
//        alert('loaded successfully');
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
        interactionModes: [
            {
                name: "默认模式",
                value: Q.Consts.INTERACTION_MODE_DEFAULT,
                selected: true,
                icon: 'plug-in/qunee/images/default_icon.png',
                action: setInteractionMode
            },
            {
                name: '框选模式',
                value: Q.Consts.INTERACTION_MODE_SELECTION,
                icon: 'plug-in/qunee/images/rectangle_selection_icon.png',
                action: setInteractionMode
            },
            {
                name: '浏览模式',
                value: Q.Consts.INTERACTION_MODE_VIEW,
                icon: 'plug-in/qunee/images/pan_icon.png',
                action: setInteractionMode
            },
            {
                name: "放大", icon: "plug-in/qunee/images/zoomin_icon.png", action: function () {
                graph.zoomIn()
            }
            },
            {
                name: "缩小", icon: "plug-in/qunee/images/zoomout_icon.png", action: function () {
                graph.zoomOut()
            }
            },
            {
                name: "1:1", action: function () {
                graph.scale = 1;
            }
            },
            {
                name: '纵览', icon: 'plug-in/qunee/images/overview_icon.png', action: function () {
                this.zoomToOverview()
            }
            },

//            {
//                name: '最大化', icon: 'plug-in/qunee/images/fullscreen_icon.png', action: function () {
//                if ($("#graph_panel").hasClass("maximize")) {
//                    $("#graph_panel").removeClass("maximize")
//                } else {
//                    $("#graph_panel").addClass("maximize")
//                }
//                graph.updateViewport();
//            }
//            },
            {
                name: '保存', icon: 'plug-in/qunee/images/fullscreen_icon.png', action: function (evt, info) {
//                var name = info.input.value;
//                if (!name) {
//                    return;
//                }
                var pdata = [];
                graph.forEach(function (e) {

                    if (!e.info) {
                        var data = {"id": e._id, "x": e.x, "y": e.y};
                        pdata.push(data);
                    }

//                    if (e instanceof Q.Node && (name == e.name || (e.info && e.info.name == name))) {
//                        graph.setSelection(e);
//                        ensureVisible(e);
//                        return false;
//                    }
                }, graph);
                $.ajax({
                    url: '/departController.do?departMentXY',
                    type: 'post',
                    data: {xy:JSON.stringify(pdata)},
                    dataType:'json',
                    cache: false,
                    success: function (data) {
                        var d = $.parseJSON(data);
//                        if (d.success) {
//                            var msg = d.msg;
//                            alert(msg);
//                        }
                    }
                });
                tip("坐标保存成功");
            }
            }
        ]

    };
    createToolBar(buttons, toolbar, graph, false, false);
}

function initToolbox() {
    var toolbox = document.getElementById("toolbox");

    createToolBar({
        a: [
            {
                name: '普通连线',
                value: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
                icon: 'plug-in/qunee/images/edge_icon.png',
                action: setInteractionMode
            },
            {
                name: '正交直线',
                value: Q.Consts.INTERACTION_MODE_CREATE_EDGE,
                icon: 'plug-in/qunee/images/edge_orthogonal_icon.png',
                action: setInteractionMode,
                edgeType: Q.Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL
            }
        ]
    }, toolbox, graph, "btn-group-vertical", false);

    createDNDImage(toolbox, "plug-in/qunee/images/node_icon.png", "终端", {type: "Node", label: "Mac", image: "Q.Graphs.node"});
    createDNDImage(toolbox, "plug-in/qunee/images/exchanger_icon.png", "交换机", {
        type: "Node",
        label: "交换机",
        image: "Q.Graphs.exchanger2"
    });
    createDNDImage(toolbox, "plug-in/qunee/images/server_icon.png", "服务器", {type: "Node", label: "服务器", image: "Q.Graphs.server"});
}

function initDatas() {//"/bulidTreeGraph?name="+"主楼"

    Q.loadJSON("/departController.do?departMentTree&departname=眸之悦", function (json) {

        var topoNodes = json.obj.nodes;
        var relations = json.obj.relations;
//        initTopology(topoNodes, relations);
        init_data(topoNodes, relations);
        graph.callLater(function () {//
//                var layouter = new Q.TreeLayouter(graph);
//                layouter.radius = 100;
//                layouter.doLayout({
//                    byAnimate: true,
//                    callback: function () {
////
//                        graph.zoomToOverview();
//                    }
//                });
                graph.zoomToOverview();
                graph.moveToCenter();
            }
        )

        var datas = [];
        var map = {};
        graph.graphModel.forEachByBreadthFirst(function (d) {
            var name = d.name;//|| d.type;
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
    })
    ;
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
                var treeData = {data: [
                    {id: data.id, text: data.name, iconCls: getTreeIcon(data)}
                ]};
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

//var timer = setTimeout(function A() {
//    var alarmSeverity = AlarmSeverity.random;
//    Q.loadJSON("/assetController.do?getState", function (json) {
//        if (json.success) {
////            nodes.forEach(function(node){
////
////            });
//            graph.forEach(function (element) {
//                var oob = json.obj[element.ip];
//                if (element.info) {
//                    if (oob.state != 1) {
//                        element.alarmLabel = oob.msg;
//                        element.alarmColor = alarmSeverity.color;
//                    } else {
//                        element.alarmLabel = null;
//                        element.alarmColor = null;
//                    }
//                }else{
//                    element.set("incoming",oob.msg);
//                    element.set("assetmsg",oob.assetmsg);
//                }
//            });
//        }
//    });
//    timer = setTimeout(A, 3000);
//}, 1500);

function destroy() {
//    clearTimeout(timer);
}
function init_data(topoNodes, topoRelations) {
    var map = {};
    for (var i = 0; i < topoNodes.length; i++) {
        var node = topoNodes[i];//Q.Graphs.exchanger2
        var server = createServer(node.name, '', node.path);
        if (node.x == null || node.x == 0)
            node.x = -150;
        if (node.y == null || node.y == 0)
            node.y = -150;
        server.x = node.x;
        server.y = node.y;
        server.name = node.name;
        server._id = node.id;
//        server.ip = node.ip;
        server.showDetail = false;
        nodes.push(server);
        map[node.id] = server;
    }
//    graph.createEdge(server, server01);
//    graph.createEdge(server, server02);
//    graph.createEdge(server, server03);
//    graph.createEdge(server, server04);
//    graph.createEdge(server, server05);
//    graph.createEdge(server, server06);
//    graph.createEdge(server, server07);
//    graph.createEdge(server, server08);
//    graph.createEdge(server, server09);
//    graph.createEdge(server, server10);
    graph.ondblclick = function (evt) {
        var element = evt.getData();
        if (element) {
            element.showDetail = !element.showDetail;
        }
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
    var flowingSupport = new FlowingSupport(graph);
    for (var i = 0; i < topoRelations.length; i++) {
        var relation = topoRelations[i];
        var nodeFrom = map[relation.from];
        var nodeTo = map[relation.to];
        if (nodeFrom && nodeTo) {
            var edge = this.createEdge(nodeFrom, nodeTo, null, 3, "green");
            edge.info = relation;
//            edge.ip = relation.ip;
            flowingSupport.addFlowing(edge, 2);
//            edge.mac = relation.mac;
        }
    }
    flowingSupport.start();
}
function initTopology(topoNodes, topoRelations) {
    var map = {};
    for (var i = 0; i < topoNodes.length; i++) {
        var node = topoNodes[i];
        var qNode = new Q.Node();
        qNode.name = node.name;
//        qNode.type = node.type;
        qNode._id = node.id;
//        qNode.ip = node.ip;
//        var server = createServer(node.name, node.ip, Q.Graphs.exchanger2);
//        if(node.x==null||node.x==0)
//            node.x=-150;
//        if(node.y==null||node.y==0)
//            node.y=-150;
//        server.x=node.x;
//        server.y=node.y;
//        server.showDetail = false;
//        nodes.push(server);

//        qNode.location = new Q.Point(node.x, node.y);
//        if (qNode.ip == null||qNode.ip.length==0) {
//            qNode.name = node.name;
//            qNode.image = "plug-in/qunee/images/server2.png";
//        } else {
//            qNode.image = node.path;//Q.Graphs.exchanger2;
//        }
        qNode.image = node.path;
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
    var flowingSupport = new FlowingSupport(graph);
    for (var i = 0; i < topoRelations.length; i++) {
        var relation = topoRelations[i];
        var nodeFrom = map[relation.from];
        var nodeTo = map[relation.to];
        if (nodeFrom && nodeTo) {
            var edge = this.createEdge(nodeFrom, nodeTo, null, 3, "green");
            edge.info = relation;
//            edge.ip = relation.ip;
            flowingSupport.addFlowing(edge, 2);
//            edge.mac = relation.mac;
        }
    }
    flowingSupport.start();
}