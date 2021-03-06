<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,Map,tools"></t:base>
<%--<script src="./qunee/js/qunee-min.js"></script>--%>

<%--<script src="./qunee/js/common.js"></script>--%>

<style>
    #graph_panel {
        height: 100%;
    }

    .tabs-panels .panel-body {
        border-left: solid 1px #DDD;
        border-right: solid 1px #DDD;
    }

    .tree-node {
        height: 20px;
    }

    .q-panel {
        padding-top: 40px;
        position: relative;
    }

    .q-toolbar {
        padding: 5px;
    }

    .q-panel .q-toolbar {
        position: absolute;
        top: 0px;
        height: 25px;
        width: 100%;
        z-index: 1;
    }

    .q-panel .q-content {
        height: 100%;
        background-color: #FFF;
        overflow: hidden;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        position: relative;
    }

    .q-canvas {
        height: 100%;
    }

    #canvas_panel {
        position: relative;
        overflow: hidden;
    }

    #canvas {
        width: 100%;
        /*background-color: #888;*/
        outline: none;
        overflow: hidden;
    }

    #toolbar {
        background-color: #F8F8F8;
        border-bottom: solid 1px #DDD;
        padding: 10px;
    }

    #toolbar .btn, #toolbar .btn-group {
        margin-right: 5px;
    }

    #toolbar .btn-group .btn {
        margin-right: 0px;
    }

    #toolbox {
        position: absolute;
        top: 0px;
        background-color: #F8F8F8;
        padding: 5px;
    }

    #toolbox > img, #toolbox > button {
        display: block;
        padding: 8px 7px 0 7px;
        border-radius: 0px;
    }

    .layout-split-west {
        border-right: 5px solid rgba(255, 255, 255, 0);
    }

    #center_panel {
        border: none;
    }

    .panel {
    <!-- -webkit-box-shadow : none;
    --> box-shadow: none;
    }

    #footer {
        text-align: center;
        padding: 8px;
        border-top: solid 1px #DDD;
        background-color: #EEE;
    }

    /*.node_icon{*/
    /*background: url('./images/node_icon.png') no-repeat;*/
    /*background-size: 18px;*/
    /*background-position:center;*/
    /*}*/
    /*.edge_icon{*/
    /*background: url('./images/edge_icon.png') no-repeat;*/
    /*background-size: 18px;*/
    /*background-position:center;*/
    /*}*/
</style>


<!--<div data-options="region:'west',split:true" border="false" style="width:200px;padding-left: 10px;">-->
<!--<h3 style="border-bottom:1px solid #ddd;padding:0 0 3px 5px;margin-top: 0px;">拓扑视图</h3>-->
<!--<ul id="tree" class="easyui-tree"></ul>-->
<!--</div>-->
<!--<div data-options="region:'north'" border="false" style="height:60px;"><h3 style="text-align: center;">Qunee + EasyUI 同步示例</h3></div>-->
<!--<div data-options="region:'east',split:true,collapsed:true,title:'East'" style="width:100px;padding:10px;">east region</div>-->
<%--<!--<div id="center_panel" data-options="region:'center'" style="padding-right: 10px;">-->--%>
<%--<!--<div class="easyui-tabs" data-options="fit:true,border:false,plain:true">-->--%>
<%--<div id="center_panel" data-options="region:'center'" style="padding-right: 10px;">--%>
<div title="网络视图" id="graph_panel" class="q-panel" >
    <div id="toolbar" class="q-toolbar"></div>
    <div id="canvas_panel" class="q-content" style="background-image: url('/plug-in/sliding/images/bg/背景图-1280x800px02-01.png')">
        <div id="canvas" class="q-canvas"></div>
        <div id="toolbox"></div>
    </div>
</div>ng
<%--</div>--%>
<%--<div id="center_panel" data-options="region:'center'" style="padding-right: 10px;">--%>
<script type="text/javascript" src="plug-in/qunee/js/JSONSerializer.js"></script>
<script type="text/javascript" src="plug-in/qunee/js/flowDemo.js"></script>
<script type="text/javascript" src="plug-in/qunee/js/BarUI.js"></script>
<script type="text/javascript" src="webpage/com/mingyue/mzy/departMentTop.js"></script>

<!--<div title="JSON" style="padding: 10px;" >JSON</div>-->
<!--<div title="JSON123" style="padding: 10px;" >JSON</div>-->
<!--</div>-->
<!--</div>-->
<!--<div id="footer" data-options="region:'south',border:false">Copyright © 2014 <a href="http://qunee.com">Qunee.com</a></div>-->

