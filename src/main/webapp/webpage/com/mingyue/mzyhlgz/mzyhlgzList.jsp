<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
  <t:datagrid name="mzyhlgzList" title="顾客护理跟踪" actionUrl="mzyhlgzController.do?datagrid&customId=${customId}"
             fitColumns="false" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="日期" field="dtime" formatter="yyyy-MM-dd hh:mm:ss"  width="200" align="center"></t:dgCol>
   <t:dgCol title="卡项目服务" field="neirong"   width="120" align="center"></t:dgCol>
   <t:dgCol title="护理时间" field="hltime" formatter="yyyy-MM-dd hh:mm"  width="200" align="center"></t:dgCol>
   <t:dgCol title="剩余次数" field="shengyu"   width="120" align="center"></t:dgCol>
   <t:dgCol title="顾客建议签名" field="jianyi"   width="150" align="center"></t:dgCol>
   <t:dgCol title="备注" field="note"   width="250" align="center"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"  align="center"></t:dgCol>
   <t:dgDelOpt title="删除" url="mzyhlgzController.do?del&id={id}" />
   <t:dgToolBar title="护理跟踪录入" icon="icon-add" url="mzyhlgzController.do?addorupdate&customId=${customId}" funname="add"></t:dgToolBar>
   <t:dgToolBar title="护理跟踪编辑" icon="icon-edit" url="mzyhlgzController.do?addorupdate&customId=${customId}" funname="update"></t:dgToolBar>
   <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyhlgzController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
  </t:datagrid>