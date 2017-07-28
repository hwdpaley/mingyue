
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<%--   update-start--Author:duanql  Date:20130619 for：操作按钮窗口显示控制--%>
<div id="mc_assetList" class="easyui-layout" fit="true"><%--   update-end--Author:duanql  Date:20130619 for：操作按钮窗口显示控制--%>
    <div region="center" style="padding: 1px;">
        <t:datagrid name="assetList" title="树型资产"  actionUrl="assetController.do?assetGrid" idField="id" treegrid="true" pagination="true">
            <t:dgCol title="common.id" field="id" treefield="id" hidden="true"></t:dgCol>
            <t:dgCol title="资产名称" field="fullName" treefield="text" width="100" align="left"></t:dgCol>
            <t:dgCol title="IP地址" field="ip" treefield="ip" width="100" align="center"></t:dgCol>
            <t:dgCol title="设备图片" field="TSIcon_iconPath" treefield="code" imageSize="100,100"  align="center"></t:dgCol>
            <t:dgCol title="设备类型" field="TSIcon_iconName" treefield="iconName"  width="80" align="center"></t:dgCol>
            <t:dgCol title="资产ID" field="assetid" treefield="assetid"  width="80" align="center"></t:dgCol>
            <%--<t:dgCol title="common.icon" field="TSIcon_iconPath" treefield="code" image="true" width="50" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="funcType" field="functionType" treefield="functionType" replace="funcType.page_0,funcType.from_1" width="50" align="center"></t:dgCol>--%>
            <%--<t:dgCol title="menu.url" field="functionUrl" treefield="src" width="150" align="center"></t:dgCol>--%>
            <t:dgCol title="排序" field="assetorder" treefield="order" width="50" align="center"></t:dgCol>
            <t:dgCol title="common.operation" field="opt"  width="50" align="center"></t:dgCol>
            <t:dgDelOpt url="assetController.do?del&id={id}" title="common.delete"></t:dgDelOpt>
            <%--   update-start--Author:anchao  Date:20130415 for：按钮权限控制--%>
            <%--<t:dgFunOpt funname="operationDetail(id)" title="button.setting"></t:dgFunOpt>--%>
            <%--<t:dgFunOpt funname="operationData(id)" title="数据规则"></t:dgFunOpt>--%>
            <%--   update-end--Author:anchao  Date:20130415 for：按钮权限控制--%>
            <t:dgToolBar title="资产添加"  icon="icon-add" url="assetController.do?addorupdate" funname="addFun" height="400"></t:dgToolBar>
            <t:dgToolBar title="资产编辑"  icon="icon-edit" url="assetController.do?addorupdate" funname="update" height="400"></t:dgToolBar>
            <t:dgToolBar title="资产登记"  icon="icon-add" url="assetController.do?addNodes" funname="addNodes" height="400"></t:dgToolBar>
        </t:datagrid>
    </div>
</div>
<%--   update-start--Author:duanql  Date:20130619 for：操作按钮窗口显示控制--%>
<%--<div data-options="region:'east',--%>
	<%--title:'<t:mutiLang langKey="operate.button.list"/>',--%>
	<%--collapsed:true,--%>
	<%--split:true,--%>
	<%--border:false,--%>
	<%--onExpand : function(){--%>
		<%--li_east = 1;--%>
	<%--},--%>
	<%--onCollapse : function() {--%>
	    <%--li_east = 0;--%>
	<%--}"--%>
     <%--style="width: 400px; overflow: hidden;">--%>
    <%--<div class="easyui-panel" style="padding: 1px;" fit="true" border="false" id="operationDetailpanel"></div>--%>
<%--</div>--%>
</div>

<script type="text/javascript">
    <%--   update-start--Author:anchao  Date:20130415 for：按钮权限控制--%>
    $(function() {
        var li_east = 0;
    });
    function addNodes(title,url, name,width,height){
//        console.log(url);
        gridname=name;
        $.ajax({
            async : false,
            cache : false,
            type : 'get',
            data : null,
            url : url,// 请求的action路径
            error : function() {// 请求失败处理函数
            },
            success : function(data) {
                var d = $.parseJSON(data);
                tip(d.msg);
                reloadTable123();
            }
        });
    }
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
    <%--   update-end--Author:jueyue  Date:20130622 for：菜单录入代入父菜单--%>
</script>

