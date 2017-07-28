<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>


<t:datagrid name="mzy_xiaoshouList" title="销售清单" actionUrl="mzy_xiaoshouController.do?datagrid&xsprintId=${xsprintId}"
            idField="id"
            fit="true">
    <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
    <t:dgCol title="产品名称" field="mzyProductEntity.name" width="120" align="center"></t:dgCol>

    <t:dgCol title="数量" field="nums" width="120" align="center"></t:dgCol>
    <t:dgCol title="价格" field="price" width="120" align="center"></t:dgCol>
    <t:dgCol title="折扣" field="discount" width="120" align="center"></t:dgCol>
    <t:dgCol title="日期" field="createDate" formatter="yyyy-MM-dd hh:mm" width="120" align="center"></t:dgCol>

    <%--<t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>--%>
    <%--<t:dgDelOpt title="删除" url="mzy_xiaoshouController.do?del&id={id}"/>--%>
    <%--<t:dgToolBar title="销售录入" icon="icon-add" url="mzy_xiaoshouController.do?addorupdate&customId=${customId}"--%>
                 <%--funname="add"></t:dgToolBar>--%>
    <%--<t:dgToolBar title="销售编辑" icon="icon-edit" url="mzy_xiaoshouController.do?addorupdate&customId=${customId}"--%>
                 <%--funname="update"></t:dgToolBar>--%>
    <%--<t:dgToolBar title="销售打单" icon="icon-edit" url="mzy_xiaoshouController.do?print&customId=${customId}"--%>
                 <%--funname="update"></t:dgToolBar>--%>
</t:datagrid>