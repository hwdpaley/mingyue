<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!-- context path -->
<t:base type="jquery,easyui,Highcharts"></t:base>
<%--<script type="text/javascript" src="plug-in/Highcharts-2.2.5/js/highcharts.src.js"></script>--%>
<%--<script type="text/javascript" src="plug-in/Highcharts-2.2.5/js/modules/exporting.src.js"></script>--%>
<t:tabs id="tt" iframe="false">
	<%--<t:tab href="logController.do?netAnsy&reportType=grid" icon="icon-search" title="网络数据分析 数据" id="pnode"></t:tab>--%>
    <t:tab closable="true" href="logController.do?netAnsy&reportType=pie" icon="icon-search" title="net.analysis.pie" id="pnode1" ></t:tab>
	<t:tab closable="true" href="logController.do?netAnsy&reportType=column" icon="icon-search" title="net.analysis.histogram" id="pnode2"></t:tab>
    <t:tab closable="true" href="logController.do?netAnsy&reportType=line" icon="icon-search" title="net.analysis.line" id="pnode3"></t:tab>
    <t:tab closable="true" href="logController.do?netAnsy&reportType=pie" icon="icon-search" title="net.analysis.pie" id="pnode"></t:tab>

</t:tabs>
