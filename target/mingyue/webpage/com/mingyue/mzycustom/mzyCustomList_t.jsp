<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<t:base type="jquery,easyui,tools,DatePicker"></t:base>
<script type="text/javascript">
    $(function () {
        //给时间控件加上样式
        var li_east = 0;
        $("#mcMeetingListtb").find("input[name='sdate_begin']").attr("class", "Wdate").attr("style", "height:20px;width:120px;").click(function () {
            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'});
        });
        $("#mcMeetingListtb").find("input[name='sdate_end']").attr("class", "Wdate").attr("style", "height:20px;width:120px;").click(function () {
            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'});
        });

        $("#mcMeetingListtb").find("input[name='edate_begin']").attr("class", "Wdate").attr("style", "height:20px;width:120px;").click(function () {
            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'});
        });
        $("#mcMeetingListtb").find("input[name='edate_end']").attr("class", "Wdate").attr("style", "height:20px;width:120px;").click(function () {
            WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm'});
        });
    });
    function userListbymeet(id, roomName) {
        if (li_east == 0) {
            $('#system_function_meetingList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.user"/>',--%>
                    href: "mcMeetingController.do?userList&meetId=" + id
                }
        );
        $('#function-panel').panel("refresh");

    }
    function roomListbymeet(id, roomName) {
        if (li_east == 0) {
            $('#system_function_meetingList').layout('expand', 'east');
        }
        $("#function-panel").panel(
                {
                    <%--title: roomName + ':' + '<t:mutiLang langKey="common.room"/>',--%>
                    href: "mcMeetingController.do?roomList&meetId=" + id
                }
        );
        $('#function-panel').panel("refresh");
    }
    <%--function deviceListbyRoom(id, roomName) {--%>
    <%--if (li_east == 0) {--%>
    <%--$('#system_function_meetingList').layout('expand', 'east');--%>
    <%--}--%>
    <%--$("#function-panel").panel(--%>
    <%--{--%>
    <%--&lt;%&ndash;title: roomName + ':' + '<t:mutiLang langKey="common.user"/>',&ndash;%&gt;--%>
    <%--href: "mcMeetingController.do?deviceList&roomId=" + id--%>
    <%--}--%>
    <%--);--%>
    <%--$('#function-panel').panel("refresh");--%>
    <%--}--%>
    //删除角色
    function delCustom(id) {
        var tabName = 'mcMeetingList';
        var url = 'mcMeetingController.do?delMeet&id=' + id;
        $.dialog.confirm('<t:mutiLang langKey="confirm.delete.this.record"/>', function () {
            doSubmit(url, tabName);
            rowid = '';
            $("#function-panel").html("");//删除角色后，清空对应的权限
        }, function () {
        });
    }
</script>
<div class="easyui-layout" fit="true">
  <div region="center" style="padding:1px;">
  <t:datagrid name="mzyCustomList" title="顾客表" actionUrl="mzyCustomController.do?datagrid" idField="id" fit="true">
   <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
   <t:dgCol title="就读学校" field="school"   width="120" align="center"></t:dgCol>
   <t:dgCol title="近视年龄" field="jsage"   width="120" align="center"></t:dgCol>
   <t:dgCol title="带镜年龄" field="djage"   width="120" align="center"></t:dgCol>
   <t:dgCol title="矫正视力左" field="jzslL"   width="120" align="center"></t:dgCol>
   <t:dgCol title="矫正视力右" field="jzslR"   width="120" align="center"></t:dgCol>
   <t:dgCol title="屈光球镜S左" field="qgqjL"   width="120" align="center"></t:dgCol>
   <t:dgCol title="散光住镜D左" field="sgzjL"   width="120" align="center"></t:dgCol>
   <t:dgCol title="屈光球镜S右" field="qgqjR"   width="120" align="center"></t:dgCol>
   <t:dgCol title="散光住镜D右" field="sgzjR"   width="120" align="center"></t:dgCol>
   <t:dgCol title="调理前视力右" field="beforeR"   width="120" align="center"></t:dgCol>
   <t:dgCol title="斜视" field="isxs"   width="120" align="center"></t:dgCol>
   <t:dgCol title="调理前视力左" field="beforeL"   width="120" align="center"></t:dgCol>
   <t:dgCol title="治疗" field="iszl"   width="120" align="center"></t:dgCol>
   <t:dgCol title="遗传近视" field="isycjs"   width="120" align="center"></t:dgCol>
   <t:dgCol title="弱视" field="isrs"   width="120" align="center"></t:dgCol>
   <t:dgCol title="体验后视力左" field="aftertyL"   width="120" align="center"></t:dgCol>
   <t:dgCol title="体验后视力右" field="aftertyR"   width="120" align="center"></t:dgCol>
   <t:dgCol title="体验前视力左" field="beforetyR"   width="120" align="center"></t:dgCol>
   <t:dgCol title="体验前视力右" field="beforetyL"   width="120" align="center"></t:dgCol>
   <t:dgCol title="调理前视力右米" field="beforeRm"   width="120" align="center"></t:dgCol>
   <t:dgCol title="调理前视力左米" field="beforeLm"   width="120" align="center"></t:dgCol>
   <t:dgCol title="康复师" field="kfmenid"   width="120" align="center"></t:dgCol>
   <t:dgCol title="带镜视力右" field="djslR"   width="120" align="center"></t:dgCol>
   <t:dgCol title="裸眼视力右" field="lyslR"   width="120" align="center"></t:dgCol>
   <t:dgCol title="带镜视力左" field="djslL"   width="120" align="center"></t:dgCol>
   <t:dgCol title="裸眼视力左" field="lyslL"   width="120" align="center"></t:dgCol>
   <t:dgCol title="散光" field="issg"   width="120" align="center"></t:dgCol>
   <t:dgCol title="调理次数" field="tlTimes"   width="120" align="center"></t:dgCol>
   <t:dgCol title="操作" field="opt" width="100"></t:dgCol>
   <t:dgDelOpt title="删除" url="mzyCustomController.do?del&id={id}" />
      <t:dgFunOpt funname="delMeet(id)" title="common.delete"></t:dgFunOpt>
      <t:dgFunOpt funname="userListbymeet(id,title)" title="common.user"></t:dgFunOpt>
      <t:dgFunOpt funname="roomListbymeet(id,title)" title="会议室"></t:dgFunOpt>

      <t:dgToolBar title="顾客录入" icon="icon-add" url="mzyCustomController.do?addorupdate" funname="add"></t:dgToolBar>
   <t:dgToolBar title="顾客编辑" icon="icon-edit" url="mzyCustomController.do?addorupdate" funname="update"></t:dgToolBar>
   <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyCustomController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
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
     style="width: 400px; overflow: hidden;">
    <div class="easyui-panel" style="padding: 1px;" fit="true" border="false" id="function-panel">

    </div>
</div>
