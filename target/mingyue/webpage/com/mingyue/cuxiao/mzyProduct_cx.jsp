<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
    <div region="center" style="padding:1px;">
        <t:datagrid name="mzyProduct_cx" title="产品管理" actionUrl="mzyProductController.do?productgrid" idField="id" queryMode="group"
            checkbox="true"        treegrid="true"  pagination="true">
            <t:dgCol title="编号" field="id" treefield="id" hidden="true"></t:dgCol>
            <t:dgCol title="名称" field="name" treefield="text" width="120" align="center"></t:dgCol>
            <t:dgCol title="图片" field="src" treefield="src" imageSize="80,80"  align="center"></t:dgCol>
            <t:dgCol title="描述" field="description" treefield="description" width="200" align="center"></t:dgCol>
            <t:dgCol title="价格" field="price" treefield="price" width="50" align="center"></t:dgCol>
            <t:dgCol title="规格" field="guige" treefield="guige" width="80" align="center"></t:dgCol>
            <%--<t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>--%>
            <%--<t:dgDelOpt title="删除" url="mzyProductController.do?del&id={id}"/>--%>
            <%--<t:dgToolBar title="录入" icon="icon-add" url="mzyProductController.do?addorupdate"--%>
                         <%--funname="add"></t:dgToolBar>--%>
            <%--<t:dgToolBar title="编辑" icon="icon-edit" url="mzyProductController.do?addorupdate"--%>
                         <%--funname="update"></t:dgToolBar>--%>
            <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyProductController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
        </t:datagrid>
    </div>
</div>