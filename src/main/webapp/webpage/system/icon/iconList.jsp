<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
<div region="center" style="padding: 1px;">
    <t:datagrid name="iconList" title="icon.list" actionUrl="iconController.do?datagrid" idField="id" pageSize="20">
        <t:dgCol title="common.id" field="id" hidden="true"></t:dgCol>
        <t:dgCol title="common.icon.name" query="true" field="iconName" width="100" align="center"></t:dgCol>
        <t:dgCol title="common.icon.style" field="iconClas" width="100" align="center"></t:dgCol>
        <t:dgCol title="common.icon.type" field="iconType" replace="system.icon_1,menu.icon_2,desktop.icon_3,device.icon_4" width="50" align="center"></t:dgCol>
        <t:dgCol title="common.icon" field="iconPath" imageSize="50,50" align="center"></t:dgCol>
        <t:dgCol title="common.icon.type" field="extend" width="100" align="center"></t:dgCol>
        <t:dgCol title="common.operation" field="opt" width="100" align="center"></t:dgCol>
        <t:dgDelOpt url="iconController.do?del&id={id}" title="common.delete"></t:dgDelOpt>
        <t:dgToolBar title="common.add.param" langArg="common.icon" icon="icon-add" url="iconController.do?addorupdate" funname="add"></t:dgToolBar>
        <t:dgToolBar title="common.edit.param" langArg="common.icon" icon="icon-edit" url="iconController.do?addorupdate" funname="update"></t:dgToolBar>
        <t:dgToolBar title="batch.generate.style" icon="icon-edit" url="iconController.do?repair" funname="doSubmit"></t:dgToolBar>
    </t:datagrid>
</div>
</div>