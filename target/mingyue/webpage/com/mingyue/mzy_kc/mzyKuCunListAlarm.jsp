<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<script>
    $(function () {
        var datagrid = $("#mzyKuCunListtb");
        datagrid.find("div[name='searchColums']").append($("#tempSearchColums div[name='searchColums']").html());
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
<div class="easyui-layout" fit="true">
    <div region="center" style="padding:1px;">
        <t:datagrid name="mzyKuCunList" title="库存管理" actionUrl="mzyKuCunController.do?datagridAlarm" idField="id" fit="true"
             fitColumns="false"       queryMode="group">
            <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="是否告警" field="isAlarm"  query="true" dictionary="sf_yn" hidden="true"></t:dgCol>
            <t:dgCol title="产品名称" field="mzyProductEntity.name" frozenColumn="true" query="true" width="200" align="center"></t:dgCol>
            <t:dgCol title="图片" field="mzyProductEntity.src" imageSize="80,80" align="center"></t:dgCol>
            <t:dgCol title="数量" field="nums" width="100" align="center"></t:dgCol>
            <t:dgCol title="告警数量" field="alarmNums" width="100" align="center"></t:dgCol>
            <t:dgCol title="价格" field="mzyProductEntity.price"  width="100" align="center"></t:dgCol>
            <t:dgCol title="折扣" field="mzyProductEntity.discount"  width="80" align="center"></t:dgCol>
            <t:dgCol title="所属店铺" field="TSPDepart.departname" width="200" align="center"></t:dgCol>
            <%--<t:dgCol title="操作" field="opt" width="200" align="center"></t:dgCol>--%>
            <%--<t:dgDelOpt title="删除" url="mzyKuCunController.do?del&id={id}"/>--%>
            <%--<t:dgToolBar title="录入" icon="icon-add" url="mzyKuCunController.do?addorupdate" funname="add"></t:dgToolBar>--%>
            <%--<t:dgToolBar title="编辑" icon="icon-edit" url="mzyKuCunController.do?addorupdate"--%>
                         <%--funname="update"></t:dgToolBar>--%>
            <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyKuCunController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
        </t:datagrid>
    </div>
</div>