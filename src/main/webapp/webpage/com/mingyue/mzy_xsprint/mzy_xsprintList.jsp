<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<script type="text/javascript">
    $(function () {
        //给时间控件加上样式
        var li_east_xs = 0;
        var datagrid = $("#mzy_xsprintListtb");
        if (test =${departIsNotOne >1 }) {
            datagrid.find("div[name='searchColums']").append($("#tempSearchColums div[name='searchColums']").html());
        }
    });
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
    function xfListbyXsprint(id, roomName) {
        if (li_east_xs == 0) {
            $('#system_function_mzy_xsprintList').layout('expand', 'east');
        }
        $("#function-panel_xs").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzy_xsprintController.do?xiaoshouByid&xsprintId=" + id
                }
        );
        $('#function-panel_xs').panel("refresh");
    }
    function printXsprint(id, roomName) {
        if (li_east_xs == 0) {
            $('#system_function_mzy_xsprintList').layout('expand', 'east');
        }
        $("#function-panel_xs").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzy_xsprintController.do?print&xsprintId=" + id
                }
        );
        $('#function-panel_xs').panel("refresh");
    }
    //删除角色
    function delXsprint(id) {
        var tabName = 'mzy_xsprintList';
        var url = 'mzy_xsprintController.do?delXsprint&id=' + id;
        $.dialog.confirm('<t:mutiLang langKey="confirm.delete.this.record"/>', function () {
            doSubmit(url, tabName);
            rowid = '';
            $("#function-panel").html("");//删除角色后，清空对应的权限
        }, function () {
        });
    }
    function showSqList(rowIndex, rowData) {
        xfListbyXsprint(rowData.id, null);
    }
</script>
<div id="tempSearchColums" style="display: none">
    <div name="searchColums">
        <span style="display:-moz-inline-box;display:inline-block;">
            <span style="vertical-align:middle;display:-moz-inline-box;display:inline-block;width: 80px;text-align:right;"
                  title="店面">
                店面：
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
<div id="system_function_mzy_xsprintList" class="easyui-layout" fit="true">
    <div region="center" style="padding:1px;">
        <t:datagrid name="mzy_xsprintList" title="顾客销售清单" actionUrl="mzy_xsprintController.do?datagrid" idField="id"
                    pagination="true" queryMode="group" pageSize="20" fitColumns="false" onDblClick="showSqList">
            <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="顾客" field="mzyCustomEntity.realName" frozenColumn="true" width="100" query="true"
                     align="center"></t:dgCol>
            <t:dgCol title="销售单号" field="idDanNum" width="120" query="true" align="center"></t:dgCol>
            <t:dgCol title="所属店面" field="tsDepart.departname" width="100" align="center"></t:dgCol>

            <t:dgCol title="总金额" field="total" width="80" align="center"></t:dgCol>
            <t:dgCol title="支付方式" field="iscard" dictionary="xjCard" width="50" align="center"></t:dgCol>
            <t:dgCol title="时间" field="createDate" formatter="yyyy-MM-dd hh:mm" width="150" align="center"></t:dgCol>
            <t:dgCol title="开单人" field="tsUser.realName" width="120" align="center"></t:dgCol>
            <t:dgCol title="备注" field="note" width="200" align="center"></t:dgCol>
            <t:dgCol title="是否打印" field="isPrint" dictionary="isPrint" width="100" align="center"></t:dgCol>
            <t:dgCol title="操作" field="opt" width="200" align="center"></t:dgCol>
            <%--<%--<t:dgDelOpt title="删除" url="mzy_xsprintController.do?del&id={id}"/>--%>
            <%--<t:dgToolBar title="销售单录入" icon="icon-add" url="mzy_xsprintController.do?addorupdate"--%>
            <%--funname="add"></t:dgToolBar>--%>
            <%--<t:dgToolBar title="销售单编辑" icon="icon-edit" url="mzy_xsprintController.do?addorupdate"--%>
            <%--funname="update"></t:dgToolBar>--%>
            <%--<t:dgToolBar title="销售打单" icon="icon-edit" url="mzy_xiaoshouController.do?print&customId=${customId}"--%>
            <%--funname="update"></t:dgToolBar>--%>
            <t:dgFunOpt funname="xfListbyXsprint(id,title)" title="详细清单"></t:dgFunOpt>
            <%--<t:dgFunOpt funname="printXsprint(id)" title="销售打单"></t:dgFunOpt>--%>
            <c:if test="${isAdmin >0 }">
                <t:dgFunOpt funname="delXsprint(id)" title="common.delete"></t:dgFunOpt>
            </c:if>
            <%--<t:dgFunOpt funname="delXsprint(id)" title="common.delete"></t:dgFunOpt>--%>

        </t:datagrid>
    </div>
</div>
<div data-options="region:'east',
	title:'详细清单',
	collapsed:true,
	split:true,
	border:false,
	onExpand : function(){
		li_east_xs = 1;
	},
	onCollapse : function() {
	    li_east_xs = 0;
	}"
     style="width: 900px; overflow: hidden;">
    <div class="easyui-panel" style="padding: 1px;" fit="true" border="false" id="function-panel_xs">

    </div>
</div>