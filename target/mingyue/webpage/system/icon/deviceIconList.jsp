<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
<div region="center" style="padding: 1px;">
    <t:datagrid name="iconList" title="设备图片管理" actionUrl="iconController.do?deviceDatagrid" idField="id" pageSize="20" queryMode="group">
        <t:dgCol title="common.id" field="id" hidden="true"></t:dgCol>
        <t:dgCol title="common.icon.name" query="true"  field="iconName" width="100" align="center"></t:dgCol>
        <t:dgCol title="common.icon" field="iconPath" imageSize="80,80"   align="center"></t:dgCol>
        <t:dgCol title="common.icon.style" field="iconClas" width="100" align="center"></t:dgCol>
        <%--<t:dgCol title="common.icon.type" field="iconType" replace="system.icon_1,menu.icon_2,desktop.icon_3,device.icon_4" width="50" align="center"></t:dgCol>--%>
        <t:dgCol title="common.icon.type" field="extend" width="100" align="center"></t:dgCol>
        <t:dgCol title="common.operation" field="opt" width="100" align="center"></t:dgCol>
        <t:dgDelOpt url="iconController.do?del&id={id}" title="common.delete"></t:dgDelOpt>
        <t:dgToolBar title="录入"  icon="icon-add" url="iconController.do?addorupdate_dev" funname="add"></t:dgToolBar>
        <t:dgToolBar title="编辑"  icon="icon-edit" url="iconController.do?addorupdate_dev" funname="update"></t:dgToolBar>
        <%--<t:dgToolBar title="batch.generate.style" icon="icon-edit" url="iconController.do?repair" funname="doSubmit"></t:dgToolBar>--%>
    </t:datagrid>
</div>
</div>
