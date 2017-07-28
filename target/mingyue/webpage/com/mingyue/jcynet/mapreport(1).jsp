<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>

<title>地图拓扑图</title>
<t:base type="jquery,easyui,tools,DatePicker,Map"></t:base>


<div id="canvas" style="height: 800px;" ></div>
<%--<script src="/plug-in/map/src/qunee-min.js"></script>--%>
<%--<script src="/plug-in/map/src/js.js"></script>--%>
<script type="text/javascript" src="webpage/com/mingyue/jcynet/flowDemo.js"></script>

<script type="text/javascript">
    var colors = ["#D5E7C4", "#CDE6FF", "#EFDEE6", "#FFF8CC"];
    var stateColors = ['#2898E0', '#4BB9FF', '#2EADFF'];
    var index = 0;

    var map = new Q.MapChart('canvas');

    map.onclick = function (evt) {
        var currentElement = evt.getData();
        if (currentElement && map.selectionModel.isSelected(currentElement)) {
            this.centerElement(currentElement);
        }
    }

    var edge1,edge2,edge3,edge4,edge5,edge6,edge7,edge8;
    map.loadTopoJSON('plug-in/map/data/jingzhou.json', {
        zIndex: -1, callback: function (area) {
            area.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, colors[index++ % colors.length]);
            area.name = null;
            area.setStyle(Q.Styles.SHAPE_STROKE, 1);
            area.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0x77555555));
            area.zIndex = -9;
        }, onfinish: function (map) {
//
            var beijing = map.createNode("荆州市路由器", 2550, -800);
            beijing.image = Q.Graphs.server;


            var shanghai = map.createMapNode("石首市\n192.168.12.4", 123.48, 32.23);
            shanghai.image ='plug-in/qunee/images/路由器-24x21px.png';
//                    Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
//            shanghai.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEE00FF00));
//            shanghai.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
//            shanghai.setStyle(Q.Styles.SHAPE_STROKE, 1);

            var shanghai1 = map.createMapNode("松滋市\n192.168.12.5", 115.48, 34.83);
            shanghai1.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
            shanghai1.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEE00FF00));
            shanghai1.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai1.setStyle(Q.Styles.SHAPE_STROKE, 1);

            var shanghai2 = map.createMapNode("荆州区", 119.48, 37.83);
            shanghai2.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
            shanghai2.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEE00FF00));
            shanghai2.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai2.setStyle(Q.Styles.SHAPE_STROKE, 1);

            var shanghai3 = map.createMapNode("沙市区", 122.48, 36.83);
            shanghai3.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
            shanghai3.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEE00FF00));
            shanghai3.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai3.setStyle(Q.Styles.SHAPE_STROKE, 1);

            var shanghai4 = map.createMapNode("公安县", 120.48, 33.83);
            shanghai4.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
            shanghai4.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEE00FF00));
            shanghai4.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai4.setStyle(Q.Styles.SHAPE_STROKE, 1);

            var shanghai5 = map.createMapNode("江陵县", 123.08, 35.53);
            shanghai5.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
            shanghai5.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEE00FF00));
            shanghai5.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai5.setStyle(Q.Styles.SHAPE_STROKE, 1);

            var shanghai6 = map.createMapNode("监利县", 127.18, 33.83);
            shanghai6.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
            shanghai6.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEE00FF00));
            shanghai6.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai6.setStyle(Q.Styles.SHAPE_STROKE, 1);

            var shanghai7 = map.createMapNode("洪湖市", 132.18, 34.33);
            shanghai7.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
            shanghai7.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEE00FF00));
            shanghai7.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai7.setStyle(Q.Styles.SHAPE_STROKE, 1);

            edge1 = map.createEdge(beijing, shanghai);
            edge1.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");
            edge2 = map.createEdge(beijing, shanghai1);
            edge2.setStyle(Q.Styles.EDGE_COLOR, "#ff0000");
            edge3 = map.createEdge(beijing, shanghai2);
            edge3.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");
            edge4 = map.createEdge(beijing, shanghai3);
            edge4.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");
            edge5 = map.createEdge(beijing, shanghai4);
            edge5.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");
            edge6 = map.createEdge(beijing, shanghai5);
            edge6.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");
            edge7 = map.createEdge(beijing, shanghai6);
            edge7.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");
            edge8 = map.createEdge(beijing, shanghai7);
            edge8.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");

            var flowingSupport = new FlowingSupport(map);
            flowingSupport.addFlowing(edge1, 1);
            flowingSupport.addFlowing(edge2, 1);
            flowingSupport.addFlowing(edge3, 1);
            flowingSupport.addFlowing(edge4, 1);
            flowingSupport.addFlowing(edge5, 1);
            flowingSupport.addFlowing(edge6, 1);
            flowingSupport.addFlowing(edge7, 1);
            flowingSupport.addFlowing(edge8, 1);
            flowingSupport.start();
            map.zoomToOverview();
        }
    });

//    flowingSupport.addFlowing(edge2, 1);


</script>
