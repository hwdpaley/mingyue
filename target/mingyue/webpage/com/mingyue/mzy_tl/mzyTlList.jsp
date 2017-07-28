<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<script type="text/javascript">
    $(function () {
    });
    function sctyxiugai(id, title) {
        <%--if (li_east == 0) {--%>
        <%--$('#system_function_CustomList').layout('expand', 'east');--%>
        <%--}--%>
        <%--$("#function-panel").panel(--%>
        <%--{--%>
        <%--&lt;%&ndash;title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',&ndash;%&gt;--%>
        <%--//                    href: "mzyCustomController.do?sctyList&customId=" + id--%>
        <%--href: "mzyCustomController.do?sctyaddorupdate&customId=" + id--%>
        <%--}--%>
        <%--);--%>
        <%--$('#function-panel').panel("refresh");--%>
        update("首次体验","mzyCustomController.do?tladdorupdate&customId=${customId}","mzyTlList",800,700);
    }


    //删除角色
    function delTl(id) {
        var tabName = 'mzyTlList';
        var url = 'mzyCustomController.do?delTl&id=' + id;
        $.dialog.confirm('<t:mutiLang langKey="confirm.delete.this.record"/>', function () {
            doSubmit(url, tabName);
            rowid = '';
//            $("#function-panel").html("");//删除角色后，清空对应的权限
        }, function () {
        });
    }
    /*
     *	excel导出
     */
    function tlListExportXls() {
        JeecgExcelExport("mzyCustomController.do?exportTlXls&customId=${customId}","mzyTlList");
    }
</script>
<t:datagrid name="mzyTlList" title="调理记录" actionUrl="mzyCustomController.do?tlDatagrid&customId=${customId}" idField="id"
        fitColumns="false">
    <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
    <%--<t:dgCol title="顾客ID" field="gkid" width="120" align="center"></t:dgCol>--%>
    <t:dgCol title="训练时间" field="time" formatter="yyyy-MM-dd" width="120" frozenColumn="true" align="center"></t:dgCol>
    <t:dgCol title="天气情况" field="tqqk" width="120" align="center"></t:dgCol>
    <t:dgCol title="当初项目" field="dcxm" width="120" align="center"></t:dgCol>
    <t:dgCol title="锻炼地点距离" field="ddjl" width="120" align="center"></t:dgCol>
    <t:dgCol title="锻炼情况" field="dlqk" width="120" align="center"></t:dgCol>
    <t:dgCol title="右眼清晰视力" field="qxslRight" width="120" align="center"></t:dgCol>
    <t:dgCol title="左眼清晰视力" field="qxslLeft" width="120" align="center"></t:dgCol>
    <t:dgCol title="右眼极限视力" field="jxslRight" width="120" align="center"></t:dgCol>
    <t:dgCol title="左眼极限视力" field="jxslLeft" width="120" align="center"></t:dgCol>
    <t:dgCol title="顾客详细情况" field="gkdetail" width="300" align="center"></t:dgCol>
    <t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>
    <t:dgFunOpt funname="sctyxiugai(id,title)" title="修改"></t:dgFunOpt>
    <t:dgFunOpt funname="delTl(id)" title="common.delete"></t:dgFunOpt>

    <%--<t:dgDelOpt title="删除" url="mzyCustomController.do?delTl&id={id}"/>--%>
    <t:dgToolBar title="调理记录录入" icon="icon-add" url="mzyCustomController.do?tladdorupdate&customId=${customId}"
                 funname="add" height="650" width="800"></t:dgToolBar>
    <t:dgToolBar title="调理记录编辑" icon="icon-edit" url="mzyCustomController.do?tladdorupdate&customId=${customId}"
                 funname="update" height="650" width="800"></t:dgToolBar>
    <t:dgToolBar title="导出Excel" icon="icon-search" onclick="tlListExportXls();"></t:dgToolBar>

</t:datagrid>