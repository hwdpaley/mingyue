<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools"></t:base>
<div class="easyui-layout" fit="true">
    <div region="center" style="padding:1px;">
        <t:datagrid name="switch01List" title="交换机信息" actionUrl="switch01Controller.do?switchGrid" idField="id"
                    treegrid="true" pagination="true">
            <t:dgCol title="common.id" field="id" treefield="id" hidden="true"></t:dgCol>
            <t:dgCol title="交换机名称" field="fullName" treefield="text" width="100" align="left"></t:dgCol>
            <t:dgCol title="IP地址" field="ip" treefield="ip" width="100" align="center"></t:dgCol>
            <t:dgCol title="设备图片" field="TSIcon_iconPath" treefield="code" imageSize="100,100" align="center"></t:dgCol>
            <t:dgCol title="交换机状态" field="state" treefield="isLink" replace="在线_1,离线_0" width="50" align="center"></t:dgCol>

            <t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>
            <t:dgDelOpt title="删除" url="switch01Controller.do?del&id={id}"/>
            <t:dgToolBar title="录入" icon="icon-add" url="switch01Controller.do?addorupdate" funname="add"></t:dgToolBar>
            <t:dgToolBar title="编辑" icon="icon-edit" url="switch01Controller.do?addorupdate"
                         funname="update"></t:dgToolBar>
            <%--<t:dgToolBar title="查看" icon="icon-search" url="switch01Controller.do?addorupdate" funname="detail"></t:dgToolBar>--%>
        </t:datagrid>
    </div>
</div>