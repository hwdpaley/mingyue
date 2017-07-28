<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<%--<t:base type="jquery,easyui,tools,DatePicker"></t:base>--%>
<%--<div id="system_function_mzySctyList" class="easyui-layout" fit="true">--%>
    <%--<div region="center" style="padding:1px;">--%>
        <t:datagrid name="mzySctyList" title="首次体验" actionUrl="mzyCustomController.do?sctyDatagrid&customId=${customId}"
                    idField="id" fit="true">
            <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="视标" field="sb" dictionary="miShu" width="120" align="center"></t:dgCol>
            <t:dgCol title="前清晰视力右" field="bqxslr_show" width="120" align="center"></t:dgCol>
            <t:dgCol title="前清晰视力左" field="bqxsll_show" width="120" align="center"></t:dgCol>
            <t:dgCol title="前极限视力右" field="bJxslR_show" width="120" align="center"></t:dgCol>
            <t:dgCol title="前极限视力左" field="bJxslL_show" width="120" align="center"></t:dgCol>
            <t:dgCol title="后清晰视力右" field="aQxslR_show" width="120" align="center"></t:dgCol>
            <t:dgCol title="后清晰视力左" field="aQxslL_show" width="120" align="center"></t:dgCol>
            <t:dgCol title="后极限视力右" field="aJxslR_show" width="120" align="center"></t:dgCol>
            <t:dgCol title="后极限视力左" field="aJxslL_show" width="120" align="center"></t:dgCol>
            <t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>
            <t:dgDelOpt title="删除" url="mzyCustomController.do?delScty&id={id}"/>
            <t:dgToolBar title="数据录入" icon="icon-add" url="mzyCustomController.do?sctyaddorupdate&customId=${customId}"
                         funname="add"></t:dgToolBar>
            <t:dgToolBar title="数据编辑" icon="icon-edit" url="mzyCustomController.do?sctyaddorupdate&customId=${customId}"
                         funname="update"></t:dgToolBar>
            <%--<t:dgToolBar title="查看" icon="icon-search" url="mzySctyController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
        </t:datagrid>
    <%--</div>--%>
<%--</div>--%>