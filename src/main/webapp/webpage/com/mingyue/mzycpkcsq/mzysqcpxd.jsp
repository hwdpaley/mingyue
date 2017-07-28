<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
  <t:datagrid name="mzysqxdList" title="进货申请详单" actionUrl="mzycpkcsqController.do?sqcpxddatagrid&sqkcId=${sqkcId}"
              idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="产品名称" field="mzyProductEntity.name"   width="200" align="center"></t:dgCol>
   <t:dgCol title="数量" field="nums"   width="120" align="center"></t:dgCol>
   <t:dgCol title="备注" field="note"   width="300" align="center"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"  align="center"></t:dgCol>
   <t:dgDelOpt title="删除" url="mzyhlgzController.do?del&id={id}" />
   <t:dgToolBar title="进货录入" icon="icon-add" url="mzycpkcsqController.do?sqcpxdAddorupdate&sqkcId=${sqkcId}" funname="add"></t:dgToolBar>
   <t:dgToolBar title="进货编辑" icon="icon-edit" url="mzycpkcsqController.do?sqcpxdAddorupdate&sqkcId=${sqkcId}" funname="update"></t:dgToolBar>
   <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyhlgzController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
  </t:datagrid>