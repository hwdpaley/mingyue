<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html >
<html>
<head>
<title>康复师列表</title>
<t:base type="jquery,easyui,tools"></t:base>
</head>
<body style="overflow-y: hidden" scroll="no">
<t:datagrid  pagination="true"  name="kfsList" title="康复师选择"  actionUrl="userController.do?mzydatagrid"
             idField="id" checkbox="true" showRefresh="false"  fit="true"  onLoadSuccess="initCheck" >
	<t:dgCol title="common.id" field="id" hidden="true"></t:dgCol>
    <t:dgCol title="common.username" sortable="false" field="userName"  width="100" align="center"></t:dgCol>
    <t:dgCol title="common.user.pic" field="picPath" imageSize="50,50" align="center"></t:dgCol>
    <t:dgCol title="common.real.name" field="realName"  width="100"  align="center"></t:dgCol>
    <t:dgCol title="common.status" sortable="true" field="status"  width="50"  align="center" replace="common.active_1,common.inactive_0,super.admin_-1"></t:dgCol>


</t:datagrid>
</body>
</html>
<script type="text/javascript">
function initCheck(data){
	var ids = "${ids}";
	var idArr = ids.split(",");
	for(var i=0;i<idArr.length;i++){
		if(idArr[i]!=""){
			$("#kfsList").datagrid("selectRecord",idArr[i]);
		}
	}
}
</script>