<%--<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>--%>
<%--<%@include file="/context/mytags.jsp" %>--%>
<%--<t:base type="jquery,easyui,tools,DatePicker"></t:base>--%>

<%--<div class="easyui-layout" fit="true">--%>
    <%--<div region="center" style="padding:1px;">--%>
        <%--<t:datagrid name="mcuiList" title="UI界面" actionUrl="mcuiController.do?datagrid" queryMode="group" idField="id" fit="true">--%>
            <%--<t:dgCol title="编号" field="id" hidden="true"></t:dgCol>--%>
            <%--<t:dgCol title="X坐标" field="x" width="50" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="Y坐标" field="y" width="50" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="宽度" field="width" width="50" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="高度" field="height" width="50" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="图片名称" field="picname"  imageSize="50px,50px"--%>
                     <%--align="center"></t:dgCol>--%>
            <%--<t:dgCol title="按钮功能" field="functionname" width="80" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="按钮文字" field="text" width="80" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="排序" field="uiorder" width="50" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="功能名称" field="name" query="true" queryMode="single" width="80" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="按钮标识" field="type" query="true" queryMode="single" width="80" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="背景图片" field="backimage"  imageSize="50px,50px"--%>
                     <%--align="center"></t:dgCol>--%>
            <%--<t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>--%>
            <%--<t:dgDelOpt title="删除" url="mcuiController.do?del&id={id}"/>--%>
            <%--<t:dgToolBar title="录入" icon="icon-add" url="mcuiController.do?addorupdate" funname="add" height="700"></t:dgToolBar>--%>
            <%--<t:dgToolBar title="编辑" icon="icon-edit" url="mcuiController.do?addorupdate" funname="update" height="700"></t:dgToolBar>--%>
            <%--&lt;%&ndash;<t:dgToolBar title="查看" icon="icon-search" url="mcuiController.do?addorupdate"&ndash;%&gt;--%>
                         <%--&lt;%&ndash;funname="detail"></t:dgToolBar>&ndash;%&gt;--%>
        <%--</t:datagrid>--%>
    <%--</div>--%>
<%--</div>--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<%--   update-start--Author:duanql  Date:20130619 for：操作按钮窗口显示控制--%>
<div id="mc_assetList" class="easyui-layout" fit="true"><%--   update-end--Author:duanql  Date:20130619 for：操作按钮窗口显示控制--%>
    <div region="center" style="padding: 1px;">
        <t:datagrid name="mcuiList" title="树型功能UI"  actionUrl="mcuiController.do?mcuiGrid" idField="id" treegrid="true" pagination="true" queryMode="group" onDblClick="editMcui(rowData);">
            <t:dgCol title="common.id" field="id" treefield="id" hidden="true"></t:dgCol>
            <t:dgCol title="功能名称" field="name" treefield="text" width="60" align="left" query="true" ></t:dgCol>
            <t:dgCol title="按钮图片" field="iconName" treefield="iconName" imageSize="80,80"  align="center"></t:dgCol>
            <t:dgCol title="高亮图片" field="iconName_h" treefield="iconName_h" imageSize="80,80"  align="center"></t:dgCol>
            <t:dgCol title="按钮类型" field="type" treefield="type" width="50" align="center"></t:dgCol>
            <t:dgCol title="X坐标" field="x" treefield="x" width="50" align="center"></t:dgCol>
            <t:dgCol title="Y坐标" field="y" treefield="y" width="50" align="center"></t:dgCol>
            <t:dgCol title="宽度" field="width" treefield="width" width="50" align="center"></t:dgCol>
            <t:dgCol title="高度" field="height" treefield="height" width="50" align="center"></t:dgCol>
            <t:dgCol title="功能" field="functionname" treefield="functionname" width="50" align="center"></t:dgCol>
            <%--<t:dgCol title="IP地址" field="ip" treefield="ip" width="100" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="设备图片" field="picname" treefield="picname" imageSize="100,100"  align="center"></t:dgCol>--%>
            <%--<t:dgCol title="设备类型" field="TSIcon_iconName" treefield="iconName"  width="80" align="center"></t:dgCol>--%>
            <%--&lt;%&ndash;<t:dgCol title="common.icon" field="TSIcon_iconPath" treefield="code" image="true" width="50" align="center"></t:dgCol>&ndash;%&gt;--%>
            <%--&lt;%&ndash;<t:dgCol title="funcType" field="functionType" treefield="functionType" replace="funcType.page_0,funcType.from_1" width="50" align="center"></t:dgCol>&ndash;%&gt;--%>
            <%--&lt;%&ndash;<t:dgCol title="menu.url" field="functionUrl" treefield="src" width="150" align="center"></t:dgCol>&ndash;%&gt;--%>
            <%--<t:dgCol title="层级" field="level" treefield="level" width="50" align="center"></t:dgCol>--%>
            <t:dgCol title="排序" field="order" treefield="order" width="50" align="center"></t:dgCol>
            <t:dgCol title="common.operation" field="opt"  width="50" align="center"></t:dgCol>
            <t:dgDelOpt title="删除" url="mcuiController.do?del&id={id}" ></t:dgDelOpt>


            <t:dgToolBar title="UI录入" icon="icon-add" url="mcuiController.do?addorupdate" funname="add" height="650"></t:dgToolBar>
            <t:dgToolBar title="UI编辑" icon="icon-edit" url="mcuiController.do?addorupdate" funname="update" height="650"></t:dgToolBar>
        </t:datagrid>
    </div>
</div>
<%--   update-start--Author:duanql  Date:20130619 for：操作按钮窗口显示控制--%>


<script type="text/javascript">
    <%--   update-start--Author:anchao  Date:20130415 for：按钮权限控制--%>
    $(function() {
        var li_east = 0;
    });
    //数据规则权数
    function  operationData(fucntionId){
        if(li_east == 0){
            $('#system_function_functionList').layout('expand','east');
        }
        $('#operationDetailpanel').panel("refresh", "functionController.do?dataRule&functionId=" +fucntionId);
    }
    function operationDetail(functionId)
    {
        if(li_east == 0){
            $('#system_function_functionList').layout('expand','east');
        }
        $('#operationDetailpanel').panel("refresh", "functionController.do?operation&functionId=" +functionId);
    }
    <%--   update-end--Author:anchao  Date:20130415 for：按钮权限控制--%>
    <%--   update-start--Author:jueyue  Date:20130622 for：菜单录入代入父菜单--%>
    function addFun(title,url, id,width,height) {
        var rowData = $('#'+id).datagrid('getSelected');
        if (rowData) {
            url += '&TSFunction.id='+rowData.id;
        }
        add(title,url,'functionList',width,height);
    }
    function editMcui(rowData)
    {
        alert(rowData.id);
        createwindow('编辑', 'mcuiController.do?addorupdate&sid=' + rowData.id, 700, 550);

    }
    <%--   update-end--Author:jueyue  Date:20130622 for：菜单录入代入父菜单--%>
</script>
