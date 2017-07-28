<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,Editor"></t:base>
<head>
    <meta charset=utf-8>
    <title>Qunee Graph Editor V2.0</title>
    <meta name=description content>
    <meta name=viewport content="width=device-width">
    <%--<link rel="shortcut icon" href=/favicon.ico>--%>
    <%--<link rel=stylesheet href=plug-in/qunee/css/bootstrap.css>--%>
    <%--<link rel=stylesheet href=plug-in/qunee/css/bootstrap-colorpicker.min.css>--%>
    <%--<link rel=stylesheet href=plug-in/qunee/css/graph.editor.css>--%>
    <%--<link rel=stylesheet href=plug-in/qunee/css/main.css>--%>
</head>
<body class=layout>
<header data-options="region:'north', height: '50'">
    <%--<a class=navbar-brand href=http://qunee.com>--%>
    <%--<div class=logo title=qunee.com></div>--%>
<%--</a> <span id=title>Light High Efficiency Graph Component</span>--%>
    <%--<ul class="nav navbar-nav navbar-right">--%>
        <%--<li><a href=http://qunee.com>Home</a></li>--%>
        <%--<li><a href=http://blog.qunee.com>Blog</a></li>--%>
        <%--<li><a href=http://doc.qunee.com>Doc</a></li>--%>
        <%--<li><a href=http://demo.qunee.com>Demo</a></li>--%>
        <%--<li class=active><a href="http://demo.qunee.com/editor/">Editor</a></li>--%>
        <%--<li class=new><a href="http://demo.qunee.com/svg2canvas/">SVG2Canvas</a></li>--%>
    <%--</ul>--%>
</header>
<div id=editor class=graph-editor data-options="region:'center'"></div>
<footer data-options="region:'south', height: '30'" class=footer>Copyright © 2015 上海酷利软件有限公司 Shanghai Kuli Software
    Co.,Ltd. All right reserved. Email: </footer>
<script src=plug-in/qunee/js/js.js></script>
<script src=plug-in/qunee/js/qunee-min.js></script>
<script src=plug-in/qunee/js/geditor.js></script>
<script src=plug-in/qunee/js/main123.js></script>
<script>
//    (function (b, o, i, l, e, r) {
//        b.GoogleAnalyticsObject = l;
//        b[l] || (b[l] =
//                function () {
//                    (b[l].q = b[l].q || []).push(arguments)
//                });
//        b[l].l = +new Date;
//        e = o.createElement(i);
//        r = o.getElementsByTagName(i)[0];
//        e.src = 'plug-in/qunee/js/analytics.js';
//        r.parentNode.insertBefore(e, r)
//    }(window, document, 'script', 'ga'));
//    ga('create', 'UA-48136854-1');
//    ga('send', 'pageview');
</script>
</body>
