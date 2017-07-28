<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<script type="text/javascript">
    $(function () {
//给时间控件加上样式
//        var li_east = 0;
    });
    function sqxd(id, roomName) {
        if (li_east == 0) {
            $('#system_function_mzycpkcsqList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzycpkcsqController.do?sqxd&sqkcId=" + id
                }
        );
        $('#function-panel').panel("refresh");
    }
    //删除角色
    function delCustom(id) {
        var tabName = 'mzycpkcsqList';
        var url = 'mzycpkcsqController.do?del&id=' + id;
        $.dialog.confirm('<t:mutiLang langKey="confirm.delete.this.record"/>', function () {
            doSubmit(url, tabName);
            rowid = '';
            $("#function-panel").html("");//删除角色后，清空对应的权限
        }, function () {
        });
    }
    function showSqList(rowIndex, rowData) {
        sqxd(rowData.id,null);
    }
</script>
<div id="system_function_mzycpkcsqList" class="easyui-layout" fit="true">
    <div region="center" style="width: 1000px;padding:1px;">
        <t:datagrid name="mzycpkcsqList" title="产品进货申请表" actionUrl="mzycpkcsqController.do?datagrid" idField="id"
        queryMode="group"     fitColumns="false"   onDblClick=""    fit="true" pageSize="20">
            <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="申请编号" field="sqbh" width="150" query="true" frozenColumn="true" align="center"></t:dgCol>
            <t:dgCol title="店面" field="tsDepart.departname" width="150" frozenColumn="true" align="center"></t:dgCol>
            <t:dgCol title="申请状态" field="status" dictionary="kcsqStatus" query="true" width="100" align="center"></t:dgCol>

            <t:dgCol title="申请日期" field="sqdate" formatter="yyyy-MM-dd HH:mm:ss" width="180" align="center"></t:dgCol>
            <t:dgCol title="申请人" field="tsUser.realName"  width="80" align="center"></t:dgCol>
            <t:dgCol title="通过时间" field="pfdate" formatter="yyyy-MM-dd HH:mm:ss" width="180" align="center"></t:dgCol>
            <t:dgCol title="审核人" field="tsUserSh.realName"  width="80" align="center"></t:dgCol>
            <t:dgCol title="发货时间" field="fhdate" formatter="yyyy-MM-dd HH:mm:ss" width="180" align="center"></t:dgCol>
            <t:dgCol title="到货时间" field="daodadate" formatter="yyyy-MM-dd HH:mm:ss" width="180"
                     align="center"></t:dgCol>
            <c:if test="${departIsNotOne >1 }">
                <t:dgCol title="操作" field="opt" width="200" align="center"></t:dgCol>
            <%--<t:dgFunOpt funname="sqxd(id,title)" title="申请详单"></t:dgFunOpt>--%>
                <t:dgFunOpt funname="delCustom(id)" title="common.delete"></t:dgFunOpt>
            </c:if>
            <%--<t:dgDelOpt title="删除" url="mzycpkcsqController.do?del&id={id}"/>--%>
            <t:dgToolBar title="产品进货申请录入" icon="icon-add" url="mzycpkcsqController.do?addorupdate" height="600"
                         funname="add"></t:dgToolBar>
            <t:dgToolBar title="产品进货申请编辑" icon="icon-edit" url="mzycpkcsqController.do?addorupdate"
                  height="600"       funname="update"></t:dgToolBar>
            <%--<t:dgToolBar title="查看" icon="icon-search" url="mzycpkcsqController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
        </t:datagrid>
    </div>
</div>
<%--<div data-options="region:'east',--%>
	<%--title:'产品进货申请详单',--%>
	<%--collapsed:true,--%>
	<%--split:true,--%>
	<%--border:false,--%>
	<%--onExpand : function(){--%>
		<%--li_east = 1;--%>
	<%--},--%>
	<%--onCollapse : function() {--%>
	    <%--li_east = 0;--%>
	<%--}"--%>
     <%--style="width: 990px; overflow: hidden;">--%>
    <%--<div class="easyui-panel" style="padding: 1px;" fit="true" border="false" id="function-panel">--%>

    <%--</div>--%>
<%--</div>--%>