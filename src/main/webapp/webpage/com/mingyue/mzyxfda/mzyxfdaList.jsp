<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
  <t:datagrid name="mzyxfdaList" title="顾客消费档案" actionUrl="mzyxfdaController.do?datagrid&customId=${customId}"
             fitColumns="false" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="购买次数" field="gmtimes"   width="120" align="center"></t:dgCol>
   <t:dgCol title="购买时间" field="gmdate" formatter="yyyy-MM-dd hh:mm"  width="200" align="center"></t:dgCol>
   <t:dgCol title="项目详情" field="gmneirong"   width="250" align="center"></t:dgCol>
   <t:dgCol title="金额" field="jiner"   width="120" align="center"></t:dgCol>
   <t:dgCol title="服务人员" field="fuwu"   width="120" align="center"></t:dgCol>
   <t:dgCol title="顾客签名" field="gksing"   width="120" align="center"></t:dgCol>
   <t:dgCol title="备注" field="note"   width="300" align="center"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>
   <t:dgDelOpt title="删除" url="mzyxfdaController.do?del&id={id}" />
   <t:dgToolBar title="消费档案录入" icon="icon-add" url="mzyxfdaController.do?addorupdate" funname="add" width="800"></t:dgToolBar>
   <t:dgToolBar title="消费档案编辑" icon="icon-edit" url="mzyxfdaController.do?addorupdate" funname="update" width="800"></t:dgToolBar>
   <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyxfdaController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
  </t:datagrid>