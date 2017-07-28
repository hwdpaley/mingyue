<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<script type="text/javascript">
    $(function () {
        //给时间控件加上样式
        var li_east = 0;
        var datagrid = $("#mzy_customListtb");
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
    function sctyListbyCustom(id, title) {
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
        update("首次体验", "mzyCustomController.do?sctyaddorupdate", "mzy_customList", 1000, 700);
    }
    function kfyhListbyCustom(id, roomName) {
        if (li_east == 0) {
            $('#system_function_CustomList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzyCustomController.do?kfyhList&customId=" + id
                }
        );
        $('#function-panel').panel("refresh");
    }
    function tlListbyCustom(id, roomName) {
        if (li_east == 0) {
            $('#system_function_CustomList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzyCustomController.do?tlList&customId=" + id
                }
        );
        $('#function-panel').panel("refresh");
    }
    function zxdaListbyCustom(id, roomName) {
        if (li_east == 0) {
            $('#system_function_CustomList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzy_xsprintController.do?zxdabyCustom&customId=" + id
                }
        );
        $('#function-panel').panel("refresh");
    }
    function hlgzByCustom(id, roomName) {
        if (li_east == 0) {
            $('#system_function_CustomList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzyhlgzController.do?mzyhlgz&customId=" + id
                }
        );
        $('#function-panel').panel("refresh");
    }
    function xfListbyCustom(id, roomName) {

        var rowsData = $('#mzy_customList').datagrid('getSelections');
        if (!rowsData || rowsData.length==0) {
            tip('请选择编辑项目');
            return;
        }
        if (rowsData.length>1) {
            tip('请选择一条记录再编辑');
            return;
        }
        if (li_east == 0) {
            $('#system_function_CustomList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzy_xsprintController.do?xfListByCustom&customId=" + rowsData[0].id
                }
        );
        $('#function-panel').panel("refresh");
    }
    function xfPrintByCustom(id, rowData) {
        createwindow("消费开单", 'mzy_xsprintController.do?xfPrintByCustom&id=' + id, 800, 500);
    }
    function xfdaByCustom(id, roomName) {
        if (li_east == 0) {
            $('#system_function_CustomList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mzyxfdaController.do?mzyxfda&customId=" + id
                }
        );
        $('#function-panel').panel("refresh");
    }
    //删除角色
    function delCustom(id) {
        var tabName = 'mzy_customList';
        var url = 'mzyCustomController.do?delCustom&id=' + id;
        $.dialog.confirm('<t:mutiLang langKey="confirm.delete.this.record"/>', function () {
            doSubmit(url, tabName);
            rowid = '';
            $("#function-panel").html("");//删除角色后，清空对应的权限
        }, function () {
        });
    }
    function maindbClick(rowIndex, rowData) {
        createwindow("客户编辑", 'mzyCustomController.do?addorupdate&id=' + rowData.id, 1000, 600);
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
<div id="system_function_CustomList" class="easyui-layout" fit="true">
    <div region="center" style="width: 1000px;padding:1px;">
        <t:datagrid name="mzy_customList" title="客户管理"  actionUrl="mzyCustomController.do?datagrid&roleid=${roleid}&orgIds=${orgIds}" idField="id" checkbox="true"  queryMode="group" fitColumns="false" onDblClick="maindbClick" pageSize="20">
            <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>

            <t:dgCol title="店  面"  field="orgName"  width="100" align="center"></t:dgCol>
            <t:dgCol title="姓  名" field="realName" query="true" frozenColumn="true" width="150" align="center"></t:dgCol>
            <%--<t:dgCol title="姓名" field="realName"  width="150" frozenColumn="true" align="left"></t:dgCol>--%>
            <%--<t:dgCol title="common.user.pic" field="picPath" imageSize="50,50" align="center"></t:dgCol>--%>
            <t:dgCol title="客户类别" field="showTlYh" query="true" width="120" align="center"></t:dgCol>

            <t:dgCol title="会员卡号" field="idNums"  width="120"  align="center"></t:dgCol>

            <t:dgCol title="联系电话" field="mobilePhone" query="true" width="120" align="center"></t:dgCol>
            <t:dgCol title="年  龄" field="age" width="100"
                     align="center"></t:dgCol>
            <t:dgCol title="性  别" field="sex" dictionary="sex" width="80"
                     align="center"></t:dgCol>
            <%--update-start--Author:zhangguoming  Date:20140827 for：通过用户对象的关联属性值获取组织机构名称（多对多关联）--%>
            <%--<t:dgCol title="common.department" field="TSDepart_id" query="true" replace="${departsReplace}"></t:dgCol>--%>
            <%--<t:dgCol title="common.department" sortable="false" field="userOrgList.tsDepart.departname" query="false"--%>
            <%--width="100" align="center"></t:dgCol>--%>
            <%--update-end--Author:zhangguoming  Date:20140827 for：通过用户对象的关联属性值获取组织机构名称（多对多关联）--%>
            <%--<t:dgCol title="就读学校" field="school" width="120" align="center"></t:dgCol>--%>
            <t:dgCol title="建档时间" field="createDate" width="150"  formatter="yyyy-MM-dd hh:mm" align="center"></t:dgCol>
            <%--<t:dgCol title="common.role" field="userKey" width="100" align="center"></t:dgCol>--%>
            <t:dgCol title="客户类型" field="customType" dictionary="custom" width="80" align="center"></t:dgCol>
            <t:dgCol title="消费积分" field="jf" width="80" align="center"></t:dgCol>
            <t:dgCol title="操作" field="opt" width="600" align="center"></t:dgCol>
            <%--<t:dgDelOpt title="删除" url="mzyCustomController.do?del&id={id}"/>--%>
            <t:dgFunOpt funname="sctyListbyCustom(id,title)" title="首次体验"></t:dgFunOpt>
            <t:dgFunOpt funname="kfyhListbyCustom(id,title)" title="疗程记录"></t:dgFunOpt>
            <t:dgFunOpt funname="tlListbyCustom(id,title)" title="调理记录"></t:dgFunOpt>
            <t:dgFunOpt funname="hlgzByCustom(id,title)" title="护理跟踪"></t:dgFunOpt>
            <t:dgFunOpt funname="xfPrintByCustom(id,title)" title="消费开单"></t:dgFunOpt>
            <t:dgFunOpt funname="xfListbyCustom(id,title)" title="消费档案"></t:dgFunOpt>
            <t:dgFunOpt funname="zxdaListbyCustom(id,title)" title="回访登记"></t:dgFunOpt>
            <%--管理人员才有这个功能--%>
            <c:if test="${isAdmin >0 }">
                <t:dgFunOpt funname="delCustom(id)" title="common.delete"></t:dgFunOpt>
            </c:if>
            <t:dgToolBar title="客户录入" icon="icon-add" url="mzyCustomController.do?addorupdate"
                         funname="add" width="1000" height="600"></t:dgToolBar>
            <t:dgToolBar title="客户编辑" icon="icon-edit" url="mzyCustomController.do?addorupdate"
                         funname="update" width="1000" height="600"></t:dgToolBar>
            <t:dgToolBar title="消费开单" icon="icon-add" url="mzy_xsprintController.do?xfPrintByCustom&customId"
                         funname="update" width="800" height="500"></t:dgToolBar>
            <t:dgToolBar title="消费档案" icon="icon-add" url=""
                         funname="xfListbyCustom(id,title)" ></t:dgToolBar>
            <%--<t:dgToolBar title="首次体验" icon="icon-add" url="mzyCustomController.do?sctyaddorupdate"--%>
            <%--funname="update" height="500"></t:dgToolBar>--%>
            <%--<t:dgToolBar icon="icon-edit" funname="update" url="mzyCustomController.do?sctyList&customId=id" title="首次体验"></t:dgToolBar>--%>
            <%--<t:dgToolBar icon="icon-edit" funname="update" url="mzyCustomController.do?kfyhList&customId=id" title="康复养护"></t:dgToolBar>--%>
            <%--<t:dgToolBar icon="icon-edit" funname="update" url="mzyCustomController.do?tlList&customId=id" title="调理记录"></t:dgToolBar>--%>

            <%--<t:dgToolBar title="查看" icon="icon-search" url="mzy_customController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
        </t:datagrid>
    </div>
</div>
<div data-options="region:'east',
	title:'顾客',
	collapsed:true,
	split:true,
	border:false,
	onExpand : function(){
		li_east = 1;
	},
	onCollapse : function() {
	    li_east = 0;
	}"
     style="width: 990px; overflow: hidden;">
    <div class="easyui-panel" style="padding: 1px;" fit="true" border="false" id="function-panel">

    </div>
</div>