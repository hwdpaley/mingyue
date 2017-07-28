<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
  <div region="center" style="padding:1px;">
  <t:datagrid name="inforuleList" title="规则订阅" actionUrl="inforuleController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="资产ID" field="assetid"   width="120" align="center"></t:dgCol>
   <t:dgCol title="名称" field="name"   width="120" align="center"></t:dgCol>
   <t:dgCol title="是否订阅" field="subscribed"   width="120" align="center"></t:dgCol>
   <t:dgCol title="告警或是信息" field="type"   width="120" align="center"></t:dgCol>
   <t:dgCol title="产生时间" field="createtime"   width="120" align="center"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="inforuleController.do?del&id={id}" />
   <t:dgToolBar title="录入" icon="icon-add" url="inforuleController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="编辑" icon="icon-edit" url="inforuleController.do?addorupdate" funname="update"></t:dgToolBar>
   <t:dgToolBar title="查看" icon="icon-search" url="inforuleController.do?addorupdate" funname="detail"></t:dgToolBar>
  </t:datagrid>
  </div>
 </div>