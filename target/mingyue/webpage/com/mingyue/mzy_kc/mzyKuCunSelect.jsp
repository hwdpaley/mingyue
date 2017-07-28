<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>


<div class="easyui-layout" fit="true">
  <div region="center" style="padding:1px;">
  <t:datagrid name="mzyKuCunList" title="库存管理" actionUrl="mzyKuCunController.do?selectDatagrid&xsprintId=${xsprintId}" idField="id" fit="true" pagination="false" checkbox="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="产品名称" field="name"   width="120" align="center"></t:dgCol>
   <t:dgCol title="价格" field="mzyProductEntity.price"  width="50" align="center"></t:dgCol>
    <%--<t:dgCol title="图片" field="mzyProductEntity.src"  imageSize="80,80"  align="center"></t:dgCol>--%>
   <t:dgCol title="数量" field="nums"   width="50" align="center"></t:dgCol>
   <t:dgCol title="是否促销" field="isCx"   width="50" align="center"></t:dgCol>
   <t:dgCol title="所属店铺" field="TSPDepart.departname"  width="120" align="center"></t:dgCol>
   <%--<t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>--%>
   <%--<t:dgDelOpt title="删除" url="mzyKuCunController.do?del&id={id}" />--%>
   <%--<t:dgToolBar title="录入" icon="icon-add" url="mzyKuCunController.do?addorupdate" funname="add"></t:dgToolBar>--%>
   <%--<t:dgToolBar title="编辑" icon="icon-edit" url="mzyKuCunController.do?addorupdate" funname="update"></t:dgToolBar>--%>
   <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyKuCunController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
  </t:datagrid>
  </div>
 </div>