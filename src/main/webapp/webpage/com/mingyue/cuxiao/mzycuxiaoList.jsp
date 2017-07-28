<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<div class="easyui-layout" fit="true">
    <div region="center" style="padding:1px;">
        <t:datagrid name="mzycuxiaoList" title="产品促销" actionUrl="mzycuxiaoController.do?datagrid" idField="id"
                    fit="true" fitColumns="false">
            <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="产品名称" field="mzyProductEntity.name" width="120" align="center"></t:dgCol>
            <t:dgCol title="原价格" field="price" width="120" align="center"></t:dgCol>
            <t:dgCol title="折扣价格" field="disPrice" width="120" align="center"></t:dgCol>
            <t:dgCol title="折扣%" field="discount" width="120" align="center"></t:dgCol>
            <t:dgCol title="开始时间" field="sdate" formatter="yyyy-MM-dd hh:mm:ss" width="200" align="center"></t:dgCol>
            <t:dgCol title="结束时间" field="edate" formatter="yyyy-MM-dd hh:mm:ss" width="200" align="center"></t:dgCol>
            <t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>
            <t:dgDelOpt title="删除" url="mzycuxiaoController.do?del&id={id}"/>
            <t:dgToolBar title="促销产品录入" icon="icon-add" url="mzycuxiaoController.do?addorupdate"
                         funname="add"></t:dgToolBar>
            <t:dgToolBar title="促销产品编辑" icon="icon-edit" url="mzycuxiaoController.do?addorupdate"
                         funname="update"></t:dgToolBar>
            <%--<t:dgToolBar title="查看" icon="icon-search" url="mzycuxiaoController.do?addorupdate"--%>
                         <%--funname="detail"></t:dgToolBar>--%>
        </t:datagrid>
    </div>
</div>