<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker,Map"></t:base>


<div style="height: 600px;" id="canvas"></div>

<script>
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


    map.loadTopoJSON('plug-in/map/data/jingzhou.json', {
        zIndex: -1, callback: function (area) {
            area.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, colors[index++ % colors.length]);
            area.name = null;
            area.setStyle(Q.Styles.SHAPE_STROKE, 1);
            area.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0x77555555));
            area.zIndex = -9.5;
        }, onfinish: function (map) {
//    var beijing = map.createNode("北京", 2400, -798.6);
//    beijing.image = Q.Graphs.server;
//    var shanghai = map.createNode("上海", 2525, -715);
//    var changsha = map.createNode("长沙", 2421, -700);
//    var edge = map.createEdge(beijing, shanghai);
//    // var edge = map.createEdge("北京 > 上海", beijing, shanghai);
//    edge.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");
//    edge.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, "rgba(255,255,255,0.7)");
//    edge = map.createEdge("上海 > 长沙", shanghai, changsha);
//    edge.setStyle(Q.Styles.EDGE_COLOR, "#2898E0");
//    edge.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, "rgba(255,255,255,0.7)");
//    map.zoomToOverview();
            map.zoomToOverview();
            var shanghai = map.createMapNode("荆州市检察院",112.757345,
                    30.603843);
            shanghai.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 10, 10);
            shanghai.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0xEEFF0000));
            shanghai.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai.setStyle(Q.Styles.SHAPE_STROKE, 1);
            var shanghai1 = map.createMapNode("石首市检察院", 112.517345,
                    29.723843);
            shanghai1.image = Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, 0, 0, 8, 8);
            shanghai1.setStyle(Q.Styles.SHAPE_FILL_COLOR, Q.toColor(0x00FF0000));
            shanghai1.setStyle(Q.Styles.SHAPE_STROKE_STYLE, Q.toColor(0xEE00FFFF));
            shanghai1.setStyle(Q.Styles.SHAPE_STROKE, 0);

//          map.loadTopoJSON('plug-in/map/shengjie.json', {
//              zIndex: -9,
//              callback: function(element){
//                  if(element.name == '甘肃'){
//                      element.setStyle(Q.Styles.LABEL_OFFSET_X, 50);
//                  }else if(element.name == '河北'){
//                      element.setStyle(Q.Styles.LABEL_OFFSET_X, -30);
//                  }else if(element.name == '内蒙古'){
//                      element.setStyle(Q.Styles.LABEL_OFFSET_Y, 50);
//                  }else if(element.name == '广东'){
//                      element.setStyle(Q.Styles.LABEL_OFFSET_Y, -30);
//                  }else if(element.name == '香港'){
//                      element.setStyle(Q.Styles.LABEL_OFFSET_X, 15);
//                  }else if(element.name == '澳门'){
//                      element.setStyle(Q.Styles.LABEL_OFFSET_X, -15);
//                  }
//                  element.setStyle(Q.Styles.SHAPE_FILL_COLOR, stateColors[index++ % stateColors.length]);
//                  element.setStyle(Q.Styles.SHAPE_STROKE_STYLE, '#EEE');
//                  element.setStyle(Q.Styles.SHAPE_STROKE, 1);
//              }
//          })

        }
    });
</script>
