<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="org.jeecgframework.web.cgform.common.CgAutoListConstant" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<%
    String lang = (String) request.getSession().getAttribute("lang");
    String langurl = basePath + "/plug-in/mutiLang/" + lang + ".js";
%>
<html>
<head>
    <title><t:mutiLang langKey="smark.form.form.maintain"/></title>
    <script src=<%=langurl%> type="text/javascript"></script>
    <t:base type="jquery,easyui,jqueryui-sortable,tools"></t:base>
    <script type="text/javascript" src="plug-in/cgform/js/xfList.js"></script>


    <style type="text/css">
        .table-list {
            margin: 0;
            width: auto;
            margin-left: 0px;
            margin-right: 0px;
            overflow: hidden;
        }

        .table-list td, .table-list th {
            text-align: center;
        }

        .t_table {
            overflow: auto; /*让内容表格外面的div自动有滚动条*/
            margin-left: 0px;
            margin-right: 0px;
            width: auto;
            height: 300px;
        }

        #tab_div_database tr {
            border-bottom: 1px solid #e6e6e6;
            cursor: n-resize;
        }

        /*update-end--Author:liuht  Date:20131207 for[333]：OL模块，增加一个特效 调整字段顺序（上下挪动）*/
    </style>
</head>
<script type="text/javascript">
    $(function () {
//        $("#printBtn").attr("disabled", true);

    });
</script>
<body style="overflow-y: hidden; overflow-x: hidden;" scroll="no">
<!-- 增加beforeSubmit页面逻辑删除-->
<t:formvalid formid="formobj" dialog="true" usePlugin="password" beforeSubmit="deleteUnUsedFiled();" layout="table"
             tiptype="1" action="mzy_xsprintController.do?saveXfListByCustom&customId=${customId}">
    <!-- tiptype="1" -->
    <input id="id" name="id" type="hidden" value="${mzy_xsprintEntity.id}">
    <input id="langurl" name="langurl" type="hidden" value="<%=langurl%>">
    <table cellpadding="0" cellspacing="1" class="formtable">
        <tr>
            <td align="right"><label class="Validform_label"> 顾客: </label></td>
            <td class="value" colspan="3">
                <label class="Validform_label">${mzy_xsprintEntity.mzyCustomEntity.realName}</label>
                    <%--<input class="inputxt" id="tableName" name="tableName" value="${mzy_xsprintEntity.mzyCustomEntity.realName}"--%>
                    <%--prefixName="" readonly="readonly">--%>
                    <%--<span class="Validform_checktip"></span>--%>
            </td>
            <td align="right"><label class="Validform_label"> 消费单号: </label>
            </td>
            <td class="value" id="xfdh" name="xfdh">${mzy_xsprintEntity.idDanNum}
                    <%--<input class="inputxt" id="content" name="content" value="${mzy_xsprintEntity.idDanNum}"--%>
                    <%--readonly="readonly"> <span class="Validform_checktip"></span>--%>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> 开单人: </label></td>
            <td class="value" colspan="3">
                <label class="Validform_label">${mzy_xsprintEntity.tsUser.realName}</label>
                    <%--<input class="inputxt" id="tableName" name="tableName" value="${mzy_xsprintEntity.tsUser.realName}"--%>
                    <%--prefixName="" readonly="readonly">--%>
                    <%--<span class="Validform_checktip"></span>--%>
            </td>
            <td align="right"><label class="Validform_label"> 支付方式: </label>
            </td>
            <td class="value" style="width: 80px;">
                <t:dictSelect field="iscard" type="list" id="iscard"
                              typeGroupCode="xjCard" defaultVal="${mzy_xsprintEntity.iscard}" hasLabel="false">
                </t:dictSelect>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> 备注: </label></td>
            <td class="value" colspan="3">
                <input class="inputxt" id="note" name="note" value="${mzy_xsprintEntity.note}"/>
                <span class="Validform_checktip"></span>
            </td>
            <td align="right"><label class="Validform_label"> 实收金额: </label>
            </td>
            <td class="value" colspan="3">
                <input class="inputxt" id="realTotal" name="realTotal" value="${mzy_xsprintEntity.realTotal}"/>
                <span class="Validform_checktip"></span>
            </td>

        </tr>
    </table>
    <div id="tabs" class="easyui-tabs" tabPosition="top" fit="false"
         style="margin: 0px; padding: 0px; overflow: hidden; width: auto;">
        <div title='产品列表' width="auto"
             style="width: auto; margin: 0px; padding: 0px; overflow: hidden;">
            <div style="height: 25px;" class="datagrid-toolbar">
                <a id="addColumnBtn" class="easyui-linkbutton" data-options="iconCls:'icon-add'"
                   onclick="choose_product();" href="#"><t:mutiLang langKey="common.add.to"/>
                </a>
                <a id="delColumnBtn" class="easyui-linkbutton" data-options="iconCls:'icon-remove'"
                   onclick="delColumnBtnClick();" href="#"><t:mutiLang langKey="common.delete"/>
                </a>
                <a id="okBtn" class="easyui-linkbutton" data-options="iconCls:'icon-print'"
                   onclick="ok_product();" href="#">确认
                </a>
                    <%--<c:if test="${isok}">--%>
                <a id="printBtn" class="easyui-linkbutton" data-options="iconCls:'icon-print'"
                   onclick="print_product();" href="#">打印
                </a>
                    <%--</c:if>--%>
            </div>
            <table id="tab_div_database_title" class="table-list" style="height: 25px;">
            </table>
            <div id="t_table_database" class="t_table">
                <table id="tab_div_database" class="table-list" align="center">
                </table>
                <br><br><br>
            </div>
        </div>
            <%--<div title='<t:mutiLang langKey="page.property"/>' style="overflow: hidden;">--%>
            <%--<table id="tab_div_page_title" class="table-list" style="height: 25px;">--%>
            <%--</table>--%>
            <%--<div class="t_table" id="t_table_page">--%>
            <%--<table id="tab_div_page" class="table-list">--%>
            <%--</table>--%>
            <%--<br><br><br>--%>
            <%--</div>--%>
            <%--</div>--%>
            <%--<div title='<t:mutiLang langKey="validate.dict"/>' style="overflow: hidden;">--%>
            <%--<table id="tab_div_check_title" class="table-list" style="height: 25px;">--%>
            <%--</table>--%>
            <%--<div class="t_table" id="t_table_check">--%>
            <%--<table id="tab_div_check" class="table-list">--%>
            <%--</table>--%>
            <%--<br><br><br>--%>
            <%--</div>--%>
            <%--</div>--%>
            <%--<div title='<t:mutiLang langKey="common.fk"/>' style="overflow: hidden;">--%>
            <%--<table id="tab_div_key_title" class="table-list" style="height: 25px;">--%>
            <%--</table>--%>
            <%--<div class="t_table" id="t_table_key">--%>
            <%--<table id="tab_div_key" class="table-list">--%>
            <%--</table>--%>
            <%--<br><br><br>--%>
            <%--</div>--%>
            <%--</div>--%>
    </div>
</t:formvalid>
<%--<script type="text/javascript">--%>
<%--$(function () {--%>
<%--//显示/隐藏树形表单输入项--%>
<%--isTreeHandle();--%>
<%--$("#isTree").change(function () {--%>
<%--isTreeHandle();--%>
<%--});--%>
<%--});--%>
<%--//根据是否为树形菜单隐藏或显示tree输入框--%>
<%--function isTreeHandle() {--%>
<%--if ($("#isTree").val() == "Y") {--%>
<%--//树形表单设置默认值--%>
<%--if (!$("#treeFieldname").val()) {--%>
<%--$("#treeFieldname").val($(":text[name='columns[1].fieldName']").val());--%>
<%--}--%>
<%--$("tr.tree").find(":input").attr("disabled", false).attr("datatype", "s2-100").end().show();--%>
<%--} else {--%>
<%--$("tr.tree").find(":input").attr("disabled", true).removeAttr("datatype").end().hide();--%>
<%--}--%>
<%--}--%>
<%--</script>--%>
<%--<iframe id="iframe_check" name="iframe_check" src="plug-in/cgform/fields/cgformOfCheck.html"--%>
<%--style="display: none"></iframe>--%>
<iframe id="iframe_database" src="plug-in/cgform/fields/xfList.html" style="display: none"></iframe>
<%--<iframe id="iframe_key" src="plug-in/cgform/fields/cgformOfForeignKey.html" style="display: none"></iframe>--%>
<%--<iframe id="iframe_page" src="plug-in/cgform/fields/cgformOfPage.html" style="display: none"></iframe>--%>
</body>
