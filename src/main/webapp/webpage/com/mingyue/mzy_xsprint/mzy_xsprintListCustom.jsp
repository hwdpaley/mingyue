<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<%--<t:base type="jquery,easyui,tools,DatePicker"></t:base>--%>
<script type="text/javascript">
    $(function () {
        //给时间控件加上样式
        var li_east_xs = 0;
    });
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
    <%--function printXsprint(id, roomName) {--%>
    <%--if (li_east_xs == 0) {--%>
    <%--$('#system_function_mzy_xsprintList').layout('expand', 'east');--%>
    <%--}--%>
    <%--$("#function-panel_xs").panel(--%>
    <%--{--%>
    <%--&lt;%&ndash;title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',&ndash;%&gt;--%>
    <%--href: "mzy_xsprintController.do?xsprint&xsprintId=" + id--%>
    <%--}--%>
    <%--);--%>
    <%--$('#function-panel_xs').panel("refresh");--%>
    //    }
    //删除角色
    function delXsprint(id) {
        var tabName = 'mzy_xsprintList';
        var url = 'mzy_xsprintController.do?delXsprint&id=' + id;
        $.dialog.confirm('<t:mutiLang langKey="confirm.delete.this.record"/>', function () {
            doSubmit(url, tabName);
            rowid = '';
//            $("#function-panel").html("");//删除角色后，清空对应的权限
        }, function () {
        });
    }
    //积分兑换
    function jfdhXs(id) {
        var tabName = 'mzy_xsprintList';
        var url = 'mzy_xsprintController.do?jfdhXs&id=' + id;
        $.dialog.confirm('确定兑换积分', function () {
            doSubmit(url, tabName);
            rowid = '';
//            $("#function-panel").html("");//删除角色后，清空对应的权限
        }, function () {
        });
    }
    function dbClick(rowIndex, rowData) {
        xfListbyXsprint(rowData.id, rowIndex);
    }
</script>
<div id="system_function_mzy_xsprintList" class="easyui-layout" fit="true">
    <div region="center" style="width: 1000px; padding:1px;">
        <t:datagrid name="mzy_xsprintList" title="顾客销售清单"
                    actionUrl="mzy_xsprintController.do?datagrid&customId=${customId}" idField="id"
                    pageSize="20" fitColumns="false" pagination="true" queryMode="group" fit="true"
                    onDblClick="dbClick">
            <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="单号" field="idDanNum" width="120" query="true" frozenColumn="true" align="center"></t:dgCol>
            <t:dgCol title="日期" field="createDate" formatter="yyyy-MM-dd hh:mm" width="200" align="center"></t:dgCol>
            <t:dgCol title="金额" field="total" width="120" align="center"></t:dgCol>

            <t:dgCol title="实收金额" field="realTotal" width="120" align="center"></t:dgCol>

            <t:dgCol title="支付方式" field="iscard" dictionary="xjCard" width="100" align="center"></t:dgCol>
            <t:dgCol title="积分兑换" field="jfdh" dictionary="jfdh" width="100" align="center"></t:dgCol>
            <t:dgCol title="所属店面" field="tsDepart.departname"  width="100" align="center"></t:dgCol>

            <t:dgCol title="是否打印" field="isPrint" dictionary="isPrint" width="100" align="center"></t:dgCol>
            <%--<t:dgCol title="开单人" field="tsUser.realName" width="80" query="true" align="center"></t:dgCol>--%>
            <t:dgCol title="备注" field="note" width="300" align="center"></t:dgCol>
            <t:dgCol title="操作" field="opt" width="250" align="center"></t:dgCol>
            <%--<t:dgDelOpt title="删除" url="mzy_xsprintController.do?del&id={id}"/>--%>
            <%--<t:dgToolBar title="销售单录入" icon="icon-add" url="mzy_xsprintController.do?addorupdateCustom&customId=${customId}"--%>
            <%--funname="add"></t:dgToolBar>--%>
            <t:dgToolBar title="销售单编辑" icon="icon-edit"
                         url="mzy_xsprintController.do?addorupdateCustom&customId=${customId}"
                         funname="update"></t:dgToolBar>
            <t:dgToolBar title="销售打单" icon="icon-print" url="mzy_xsprintController.do?xsprint_1"
                         funname="detail" width="1000" height="650"></t:dgToolBar>
            <t:dgFunOpt funname="xfListbyXsprint(id,title)" title="详细清单"></t:dgFunOpt>
            <t:dgFunOpt funname="jfdhXs(id)" title="积分兑换"></t:dgFunOpt>
            <c:if test="${isAdmin >0 }">
                <t:dgFunOpt funname="delXsprint(id)" title="common.delete"></t:dgFunOpt>
            </c:if>
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
     style="width: 1000px; overflow: hidden;">
    <div class="easyui-panel" style="padding: 1px;" fit="true" border="false" id="function-panel_xs">

    </div>
</div>