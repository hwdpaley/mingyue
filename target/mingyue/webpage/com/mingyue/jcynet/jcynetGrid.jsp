<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!-- context path -->
<t:base type="jquery,easyui"></t:base>


<%--<c:set var="ctxPath" value="${pageContext.request.contextPath}"/>--%>


<%--<div id="mc_assetList" class="easyui-layout" fit="true">--%>
    <div >
        <t:datagrid name="jcynetList" title="检察院网络状态统计"
                    actionUrl="reportDemoController.do?listAllNetByJdbc" idField="id" fit="true">
            <t:dgCol title="common.code" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="检察院名称" field="name" width="130" align="center"></t:dgCol>
            <t:dgCol title="网络状态" field="net" width="130" align="center"></t:dgCol>
            <t:dgCol title="时间" field="time" width="130" align="center"></t:dgCol>
            <t:dgCol title="common.proportion" field="rate" width="130" align="center"></t:dgCol>
        </t:datagrid>
    <%--</div>--%>
</div>