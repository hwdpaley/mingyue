<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<%--<t:base type="jquery,easyui,tools,DatePicker"></t:base>--%>
<script type="text/javascript">
    $(function () {
        //给时间控件加上样式
//        var li_east_zxda = 0;
    });
    function xfListbyXsprint(id, roomName) {
        if (li_east_xs == 0) {
            $('#system_function_mzy_zxdaList').layout('expand', 'east');
        }
        $("#function-panel_zxda").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzy_xsprintController.do?xiaoshouByid&xsprintId=" + id
                }
        );
        $('#function-panel_zxda').panel("refresh");
    }
    <%--function printXsprint(id, roomName) {--%>
    <%--if (li_east_xs == 0) {--%>
    <%--$('#system_function_mzy_xsprintList').layout('expand', 'east');--%>
    <%--}--%>
    <%--$("#panel_zxda").panel(--%>
    <%--{--%>
    <%--&lt;%&ndash;title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',&ndash;%&gt;--%>
    <%--href: "mzy_xsprintController.do?xsprint&xsprintId=" + id--%>
    <%--}--%>
    <%--);--%>
    <%--$('#function-panel_zxda').panel("refresh");--%>
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

//    function dbClick(rowIndex, rowData) {
//        xfListbyXsprint(rowData.id, rowIndex);
//    }
    function dbClick(rowData)
    {
//        alert(rowData.id);
        createwindow('编辑', 'mzy_xsprintController.do?zxdaAddorupdateCustom&customId=${customId}&id=' + rowData.id, 700, 400);

    }
</script>
<div id="system_function_mzy_zxdaList" class="easyui-layout" fit="true">
    <div region="center" style="width: 1000px; padding:1px;">
        <t:datagrid name="mzy_xsprintList" title="顾客咨询档案清单"
                    actionUrl="mzy_xsprintController.do?zxdaDatagrid&customId=${customId}" idField="id"
                    pageSize="20" fitColumns="false" pagination="true" queryMode="group"  onDblClick="dbClick(rowData)"
                    >
            <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="建档日期" field="mzyCustomEntity.createDate" formatter="yyyy-MM-dd hh:mm" width="200" align="center"></t:dgCol>
            <t:dgCol title="所属店面" field="mzyCustomEntity.orgName"  width="100" align="center"></t:dgCol>
            <t:dgCol title="客户" field="mzyCustomEntity.realName" frozenColumn="true" width="120"  align="center"></t:dgCol>
            <t:dgCol title="回访日期" field="hfData" formatter="yyyy-MM-dd hh:mm" width="200" align="center"></t:dgCol>
            <t:dgCol title="服务评价" field="fwPj" width="200" align="center"></t:dgCol>
            <t:dgCol title="效果评价" field="xiaoguoPj" width="200" align="center"></t:dgCol>
            <t:dgCol title="回访备注" field="note" width="300" align="center"></t:dgCol>
            <t:dgCol title="回访人" field="tsUser.realName" width="100" align="center"></t:dgCol>




            <t:dgCol title="操作" field="opt" width="250" align="center"></t:dgCol>
            <t:dgDelOpt title="删除" url="mzy_xsprintController.do?delZxda&id={id}"/>
            <t:dgToolBar title="咨询档案录入" icon="icon-add" url="mzy_xsprintController.do?zxdaAddorupdateCustom&customId=${customId}"
            funname="add"></t:dgToolBar>
            <t:dgToolBar title="咨询档案编辑" icon="icon-edit"
                         url="mzy_xsprintController.do?zxdaAddorupdateCustom&customId=${customId}"
                         funname="update"></t:dgToolBar>
            <%--<c:if test="${isAdmin >0 }">--%>
                <%--<t:dgFunOpt funname="delXsprint(id)" title="common.delete"></t:dgFunOpt>--%>
            <%--</c:if>--%>
        </t:datagrid>
    </div>
</div>
