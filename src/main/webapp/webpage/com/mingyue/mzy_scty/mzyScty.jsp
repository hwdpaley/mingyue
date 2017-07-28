<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>首次体验</title>
    <t:base type="jquery,easyui,tools,DatePicker"></t:base>
    <%--<link rel="stylesheet" type="text/css" href="plug-in/Validform/css/tablefrom_new.css">--%>
</head>
<script type="text/javascript">
    //    var isfix=false;
    $(function () {

    });
    function setok() {
//        isfix=true;
        $("#isfix").val("isfix");
        tip("修改已经确认");
    }
</script>
<body style="overflow-y: hidden" scroll="yse">
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table"
             action="mzyCustomController.do?sctysave&customId=${customId}">
<input id="id" name="id" type="hidden" value="${mzySctyPage.id }">
<input id="isfix" name="isfix" type="hidden" value="">
<table width="100%" border="0" cellpadding="2" cellspacing="0">
    <tr>
        <td align="right">
            <img src="/plug-in/mingyue/images/logo3.png" width="100" height="125">
        </td>
        <td></td>
        <td>
            <h2>眸之悦客户首次体验</h2>
        </td>

    </tr>
</table>
<table width="100%" border="0" cellpadding="2" cellspacing="0">
    <tr>
        <td></td>
        <td align="right" width="25%">

            <h2>顾客姓名:</h2>

        </td>


        <td align="left" width="25%">
            <h2>${customName}</h2>

        </td>
        <td></td>
    </tr>
</table>
<table width="100%" border="0" cellpadding="2" cellspacing="0">

    <tr>
            <%--<td></td>--%>
        <td align="center">
            <label class="Validform_label">
                <h2> 右眼:</h2>
            </label>
        </td>
        <td align="center">
            <label class="Validform_label">
                <h2>左眼:</h2>
            </label>
        </td>

    </tr>
</table>
<table width="100%" border="0" cellpadding="2" cellspacing="0">

    <tr>
        <td align="right">
            <label class="Validform_label">
                裸眼视力:
            </label>
        </td>
        <td class="value">
            <t:dictSelect field="blsr_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.blsr_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="blsr" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.blsr}" hasLabel="false" title="裸视">
            </t:dictSelect>
            <t:dictSelect field="blsslxgR" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.blsslxgR}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>
        <td align="right">
            <label class="Validform_label">
                裸眼视力:
            </label>
        </td>

        <td class="value">
            <t:dictSelect field="blsl_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.blsl_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="blsl" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.blsl}" hasLabel="false" title="裸视">
            </t:dictSelect>
            <t:dictSelect field="blsslxgL" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.blsslxgL}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>
            <%--<td></td>--%>
    </tr>
</table>
<table width="100%" border="0" cellpadding="2" cellspacing="0">

    <tr>
        <td align="right">
            <label class="Validform_label">
                <h2>矫正视力:</h2>
            </label>
        </td>
        <td align="left">

            球镜S:
                <%--</td>--%>
                <%--<td class="value">--%>
            <input class="inputxt" id="bqjr" name="bqjr" ignore="ignore" style="width:100px"
                   value="${mzySctyPage.bqjr}">
            <span class="Validform_checktip"></span>
                <%--<t:dictSelect field="bqjr" type="list"--%>
                <%--typeGroupCode="shiliTable" defaultVal="${mzySctyPage.bqjr}" hasLabel="false" title="性别">--%>
                <%--</t:dictSelect>--%>
        </td>
            <%--<td></td>--%>
            <%--<td></td>--%>

        <td align="left">

            球镜S:
                <%--</td>--%>
                <%--<td class="value">--%>
            <input class="inputxt" id="bqjl" name="bqjl" ignore="ignore" style="width:100px"
                   value="${mzySctyPage.bqjl}">
            <span class="Validform_checktip"></span>
        </td>
            <%--<td></td>--%>
            <%--<td></td>--%>

    </tr>
    <tr>
        <td align="right">
            <label class="Validform_label">
                <h2>矫正视力:</h2>
            </label>
        </td>
        <td align="left">
                <%--<label class="Validform_label">--%>
            柱镜C:
                <%--</label>--%>
                <%--</td>--%>
                <%--<td class="value">--%>
            <input class="inputxt" id="bzjr" name="bzjr" ignore="ignore" style="width:100px"
                   value="${mzySctyPage.bzjr}">
            <span class="Validform_checktip"></span>
                <%--<t:dictSelect field="bzjr" type="list"--%>
                <%--typeGroupCode="shiliTable" defaultVal="${mzySctyPage.bzjr}" hasLabel="false" title="裸视">--%>
                <%--</t:dictSelect>--%>
        </td>
            <%--<td></td>--%>
            <%--<td></td>--%>

        <td align="left">
                <%--<label class="Validform_label">--%>
            柱镜C:
                <%--</label>--%>
                <%--</td>--%>
                <%--<td class="value">--%>
            <input class="inputxt" id="bzjl" name="bzjl" ignore="ignore" style="width:100px"
                   value="${mzySctyPage.bzjl}">
            <span class="Validform_checktip"></span>
                <%--<t:dictSelect field="azjr" type="list"--%>
                <%--typeGroupCode="shiliTable" defaultVal="${mzySctyPage.azjr}" hasLabel="false" title="性别">--%>
                <%--</t:dictSelect>--%>
        </td>
            <%--<td></td>--%>
            <%--<td></td>--%>

    </tr>
</table>
<table width="100%" border="0" cellpadding="2" cellspacing="0">

    <tr>
            <%--<td></td>--%>
        <td align="center">
            <label class="Validform_label">
                <h2> 体验前:</h2>
            </label>
        </td>
        <td align="center">
            <label class="Validform_label">
                <h2>体验后:</h2>
            </label>
        </td>

    </tr>
</table>
<table width="100%" border="0" cellpadding="2" cellspacing="0">
    <tr>
        <td></td>
        <td align="center">
            右眼
        </td>


        <td align="center">
            左眼
        </td>

        <td align="center">
            右眼
        </td>


        <td align="center">
            左眼
        </td>

    </tr>
</table>
<table width="100%" border="0" cellpadding="2" cellspacing="0">
    <tr>
        <td align="right">
            <label class="Validform_label">
                清晰视力:
            </label>
        </td>
        <td class="value">
            <t:dictSelect field="bqxslr_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.bqxslr_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="bqxslr" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.bqxslr}" hasLabel="false" title="性别">
            </t:dictSelect>
            <t:dictSelect field="bqxslxgR" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.bqxslxgR}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>
        <td class="value">
            <t:dictSelect field="aQxslR_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.aQxslR_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="aQxslR" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.aQxslR}" hasLabel="false" title="性别">
            </t:dictSelect>
            <t:dictSelect field="aqxslxgR" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.aqxslxgR}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>

        <td class="value">
            <t:dictSelect field="bqxsll_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.bqxsll_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="bqxsll" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.bqxsll}" hasLabel="false" title="性别">
            </t:dictSelect>
            <t:dictSelect field="bqxslxgL" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.bqxslxgL}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>
        <td class="value">
            <t:dictSelect field="aQxslL_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.aQxslL_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="aQxslL" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.aQxslL}" hasLabel="false" title="性别">
            </t:dictSelect>
            <t:dictSelect field="aqxslxgL" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.aqxslxgL}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>
    </tr>
    <tr>
        <td align="right">
            <label class="Validform_label">
                极限视力:
            </label>
        </td>
        <td class="value">
            <t:dictSelect field="bJxslR_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.bJxslR_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="bJxslR" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.bJxslR}" hasLabel="false" title="性别">
            </t:dictSelect>
            <t:dictSelect field="bjxslxgR" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.bjxslxgR}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>
        <td class="value">
            <t:dictSelect field="aJxslR_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.aJxslR_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="aJxslR" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.aJxslR}" hasLabel="false" title="性别">
            </t:dictSelect>
            <t:dictSelect field="ajxslxgR" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.ajxslxgR}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>

        <td class="value">
            <t:dictSelect field="bJxslL_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.bJxslL_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="bJxslL" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.bJxslL}" hasLabel="false" title="性别">
            </t:dictSelect>
            <t:dictSelect field="bjxslxgL" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.bjxslxgL}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>
        <td class="value">
            <t:dictSelect field="aJxslL_sb" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="miShu" defaultVal="${mzySctyPage.aJxslL_sb}" hasLabel="false" title="裸视">
            </t:dictSelect>

            <t:dictSelect field="aJxslL" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="shiliTable" defaultVal="${mzySctyPage.aJxslL}" hasLabel="false" title="性别">
            </t:dictSelect>
            <t:dictSelect field="ajxslxgL" type="list" extendJson="{'style':'width:80px'}"
                          typeGroupCode="slxg" defaultVal="${mzySctyPage.ajxslxgL}" hasLabel="false" title="裸视">
            </t:dictSelect>
        </td>
    </tr>
    </table>
    <table width="100%" border="0" cellpadding="2" cellspacing="0">
    <tr>
        <td align="right" style="width: 25%">
            <label class="Validform_label">
                理疗师:
            </label>
        </td>
        <td class="value">
            <input id="tlsids" name="tlsids" type="hidden" value="${id}">
            <input id="realName" name="realName" class="inputxt" value="${mzySctyPage.tls }" readonly="readonly"
                    />
            <t:choose hiddenName="tlsids" hiddenid="id" url="mzyCustomController.do?kfs" name="kfsList"
                      icon="icon-search" title="理疗师列表" textname="realName" isclear="true"
                      isInit="true"></t:choose>
            <span class="Validform_checktip"></span>
        </td>
        <td align="right" style="width: 25%">
            <label class="Validform_label">
                备注:
            </label>
        </td>
        <td class="value">
            <textarea id="note" name="note" rows="3" cols="25">
                    ${mzySctyPage.note}
            </textarea>
        </td>
    </tr>
</table>
<div style="height: 25px;" class="datagrid-toolbar">
        <%--<a id="addColumnBtn" class="easyui-linkbutton" data-options="iconCls:'icon-add'"--%>
        <%--onclick="choose_product();" href="#"><t:mutiLang langKey="common.add.to"/>--%>
        <%--</a>--%>
        <%--<a id="delColumnBtn" class="easyui-linkbutton" data-options="iconCls:'icon-remove'"--%>
        <%--onclick="delColumnBtnClick();" href="#"><t:mutiLang langKey="common.delete"/>--%>
        <%--</a>--%>
    <a id="okBtn" class="easyui-linkbutton" data-options="iconCls:'icon-add'"
       onclick="setok();" href="#">确认修改
    </a>
</div>
</t:formvalid>
</body>