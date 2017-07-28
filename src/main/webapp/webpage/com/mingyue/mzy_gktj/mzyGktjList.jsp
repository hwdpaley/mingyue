<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<script type="text/javascript">
    $(function () {
        //给时间控件加上样式
//        var li_east = 0;
        $("#mzyGktjListtb").find("input[name='createDate']").attr("class", "Wdate").attr("style", "height:20px;width:120px;").click(function () {
            WdatePicker({dateFmt: 'yyyy-MM-dd'});
        });
        var datagrid = $("#mzyGktjListtb");
        datagrid.find("div[name='searchColums']").append($("#tempSearchColums div[name='searchColums']").html());

    });
    function choose_297e201048183a730148183ad85c0002() {
        if (typeof(windowapi) == 'undefined') {
            $.dialog({content: 'url:departController.do?mzyDepartSelect', zIndex: 2100, title: '<t:mutiLang langKey="common.department.list"/>', lock: true, width: 400, height: 350, left: '85%', top: '65%', opacity: 0.4, button: [
                {name: '<t:mutiLang langKey="common.confirm"/>', callback: clickcallback_297e201048183a730148183ad85c0002, focus: true},
                {name: '<t:mutiLang langKey="common.cancel"/>', callback: function () {
                }}
            ]});
        } else {
            $.dialog({content: 'url:departController.do?mzyDepartSelect', zIndex: 2100, title: '<t:mutiLang langKey="common.department.list"/>', lock: true, parent: windowapi, width: 400, height: 350, left: '85%', top: '65%', opacity: 0.4, button: [
                {name: '<t:mutiLang langKey="common.confirm"/>', callback: clickcallback_297e201048183a730148183ad85c0002, focus: true},
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
    function clickcallback_297e201048183a730148183ad85c0002() {
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
                   onclick="choose_297e201048183a730148183ad85c0002()"/>
            <%--<t:choose hiddenName="orgIds" hiddenid="id"--%>
                      <%--url="departController.do?departSelect" name="departList"--%>
                      <%--icon="icon-search" title="common.department.list"--%>
                      <%--textname="departname" isclear="true"></t:choose>--%>
        </span>
    </div>
</div>

<t:datagrid name="mzyGktjList" title="顾客数量统计" actionUrl="mzyGktjController.do?datagrid" idField="id" fit="true"
            queryMode="group">
    <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
    <t:dgCol title="统计时间" field="createDate" formatter="yyyy-MM-dd" query="true" width="120" align="center"></t:dgCol>
    <t:dgCol title="店面" field="shopName"  width="120" align="center"></t:dgCol>
    <t:dgCol title="咨询顾客数量" field="zxgks" width="120" align="center"></t:dgCol>
    <t:dgCol title="体验顾客数量" field="tygks" width="120" align="center"></t:dgCol>
    <t:dgCol title="康复疗程数量" field="kflcgks" width="120" align="center"></t:dgCol>
    <t:dgCol title="养护疗程数量" field="yhlcgks" width="120" align="center"></t:dgCol>
    <t:dgCol title="流失顾客数量" field="lsgks" width="120" align="center"></t:dgCol>
    <t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>
    <t:dgDelOpt title="删除" url="mzyGktjController.do?del&id={id}"/>
    <t:dgToolBar title="统计录入" icon="icon-add" url="mzyGktjController.do?addorupdate"
                 funname="add"></t:dgToolBar>
    <t:dgToolBar title="统计编辑" icon="icon-edit" url="mzyGktjController.do?addorupdate"
                 funname="update"></t:dgToolBar>
    <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyGktjController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
</t:datagrid>
