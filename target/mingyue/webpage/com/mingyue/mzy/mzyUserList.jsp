<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<%--<script type="text/javascript" src="webpage/com/mingyue/mzy/mzy.js"></script>--%>

<%--update-start--Author:zhangguoming  Date:20140827 for：添加 组织机构查询条件--%>
<script>
    $(function () {
        var datagrid = $("#userListtb");
        datagrid.find("div[name='searchColums']").append($("#tempSearchColums div[name='searchColums']").html());
    });
    function lockObj(title, url, id) {
        gridname = id;
        var rowsData = $('#' + id).datagrid('getSelections');
        if (!rowsData || rowsData.length == 0) {
            tip('<t:mutiLang langKey="common.please.select.edit.item"/>');
            return;
        }
        url += '&id=' + rowsData[0].id;

        $.dialog.confirm('<t:mutiLang langKey="common.lock.user.tips"/>', function () {
            lockuploadify(url, '&id');
        }, function () {
        });
    }
    function unlockObj(title, url, id) {
        gridname = id;
        var rowsData = $('#' + id).datagrid('getSelections');
        if (!rowsData || rowsData.length == 0) {
            tip('<t:mutiLang langKey="common.please.select.edit.item"/>');
            return;
        }
        url += '&id=' + rowsData[0].id;

        $.dialog.confirm('<t:mutiLang langKey="common.unlock.user.tips"/>', function () {
            lockuploadify(url, '&id');
        }, function () {
        });
    }
    function lockuploadify(url, id) {
        $.ajax({
            async: false,
            cache: false,
            type: 'POST',
            url: url,// 请求的action路径
            error: function () {// 请求失败处理函数
            },
            success: function (data) {
                var d = $.parseJSON(data);
                if (d.success) {
                    var msg = d.msg;
                    tip(msg);
                    reloadTable();
                }
            }
        });
    }
    function choose_297e201048183a730148183ad85c0001() {
        if (typeof(windowapi) == 'undefined') {
            $.dialog({content: 'url:departController.do?departSelect', zIndex: 2100, title: '<t:mutiLang langKey="common.department.list"/>', lock: true, width: 400, height: 350, left: '85%', top: '65%', opacity: 0.4, button: [
                {name: '<t:mutiLang langKey="common.confirm"/>', callback: clickcallback_297e201048183a730148183ad85c0001, focus: true},
                {name: '<t:mutiLang langKey="common.cancel"/>', callback: function () {
                }}
            ]});
        } else {
            $.dialog({content: 'url:departController.do?departSelect', zIndex: 2100, title: '<t:mutiLang langKey="common.department.list"/>', lock: true, parent: windowapi, width: 400, height: 350, left: '85%', top: '65%', opacity: 0.4, button: [
                {name: '<t:mutiLang langKey="common.confirm"/>', callback: clickcallback_297e201048183a730148183ad85c0001, focus: true},
                {name: '<t:mutiLang langKey="common.cancel"/>', callback: function () {
                }}
            ]});
        }
    }
    function clearAll_297e201048183a730148183ad85c0001() {
        if ($('#departname').length >= 1) {
            $('#departname').val('');
            $('#departname').blur();
        }
        if ($("input[name='departname']").length >= 1) {
            $("input[name='departname']").val('');
            $("input[name='departname']").blur();
        }
        $('#orgIds').val("");
    }
    function clickcallback_297e201048183a730148183ad85c0001() {
        iframe = this.iframe.contentWindow;
        var departname = iframe.getdepartListSelections('departname');
        if ($('#departname').length >= 1) {
            $('#departname').val(departname);
            $('#departname').blur();
        }
        if ($("input[name='departname']").length >= 1) {
            $("input[name='departname']").val(departname);
            $("input[name='departname']").blur();
        }
        var id = iframe.getdepartListSelections('id');
        if (id !== undefined && id != "") {
            $('#orgIds').val(id);
            $("input[name='orgIds']").val(id);
        }
    }
</script>
<div id="tempSearchColums" style="display: none">
    <div name="searchColums">
        <span style="display:-moz-inline-box;display:inline-block;">
            <span style="vertical-align:middle;display:-moz-inline-box;display:inline-block;width: 80px;text-align:right;"
                  title="<t:mutiLang langKey="common.department"/>">
                <t:mutiLang langKey="common.department"/>：
            </span>
            <input id="orgIds" name="orgIds" type="hidden">
            <input readonly="true" type="text" name="departname" style="width: 100px"
                   onclick="choose_297e201048183a730148183ad85c0001()"/>
            <%--<t:choose hiddenName="orgIds" hiddenid="id"--%>
                      <%--url="departController.do?departSelect" name="departList"--%>
                      <%--icon="icon-search" title="common.department.list"--%>
                      <%--textname="departname" isclear="true"></t:choose>--%>
        </span>
    </div>
</div>
<%--update-end--Author:zhangguoming  Date:20140827 for：添加 组织机构查询条件--%>

<t:datagrid name="userList" title="common.operation" actionUrl="userController.do?mzydatagrid"
            fit="true" fitColumns="false" idField="id" queryMode="group" sortName="createDate" sortOrder="desc">
    <t:dgCol title="common.id" field="id" hidden="true"></t:dgCol>
    <t:dgCol title="common.real.name" field="realName" width="100" query="true" align="center"></t:dgCol>
    <t:dgCol title="common.username" sortable="false" field="userName" query="true" width="100"
             align="center"></t:dgCol>
    <t:dgCol title="common.user.pic" field="picPath" imageSize="50,50" align="center"></t:dgCol>
    <%--update-start--Author:zhangguoming  Date:20140827 for：通过用户对象的关联属性值获取组织机构名称（多对多关联）--%>
    <%--<t:dgCol title="common.department" field="TSDepart_id" query="true" replace="${departsReplace}"></t:dgCol>--%>
    <t:dgCol title="common.department" sortable="false" field="userOrgList.tsDepart.departname" query="false"
             width="100" align="center"></t:dgCol>
    <%--update-end--Author:zhangguoming  Date:20140827 for：通过用户对象的关联属性值获取组织机构名称（多对多关联）--%>
    <t:dgCol title="职务" field="zhiwu" width="100" align="center"></t:dgCol>
    <t:dgCol title="年龄" field="age" width="100" align="center"></t:dgCol>
    <t:dgCol title="common.moblePhone" field="mobilePhone" width="120" align="center"></t:dgCol>
    <t:dgCol title="common.role" field="userKey" width="100" align="center"></t:dgCol>
    <%--<t:dgCol title="手机类型" field="devicetype" width="100" align="center" dictionary="deviceType"></t:dgCol>--%>
    <t:dgCol title="common.createby" field="createBy" hidden="true"></t:dgCol>
    <t:dgCol title="common.createtime" field="createDate" formatter="yyyy-MM-dd" hidden="true"></t:dgCol>
    <t:dgCol title="common.updateby" field="updateBy" hidden="true"></t:dgCol>
    <t:dgCol title="common.updatetime" field="updateDate" formatter="yyyy-MM-dd" hidden="true"></t:dgCol>
    <t:dgCol title="common.status" sortable="true" field="status"
             replace="common.active_1,common.inactive_0,super.admin_-1" align="center"></t:dgCol>
    <t:dgCol title="common.operation" field="opt" width="100" align="center"></t:dgCol>
    <c:if test="${isAdmin >0 }">
        <t:dgDelOpt title="common.delete" url="userController.do?del&id={id}&userName={userName}"/>
    </c:if>
    <t:dgToolBar title="common.add.param" langArg="common.user" icon="icon-add" url="userController.do?mzyAddorupdate"
                 funname="add" height="700"></t:dgToolBar>
    <t:dgToolBar title="common.edit.param" langArg="common.user" icon="icon-edit" url="userController.do?mzyAddorupdate"
                 funname="update" height="700"></t:dgToolBar>
    <c:if test="${isAdmin >0 }">
        <t:dgToolBar title="common.password.reset" icon="icon-edit" url="userController.do?changepasswordforuser"
                     funname="update"></t:dgToolBar>
        <t:dgToolBar title="common.lock.user" icon="icon-edit" url="userController.do?lock&lockvalue=0"
                     funname="lockObj"></t:dgToolBar>
        <t:dgToolBar title="common.unlock.user" icon="icon-edit" url="userController.do?lock&lockvalue=1"
                     funname="unlockObj"></t:dgToolBar>
    </c:if>

</t:datagrid>
