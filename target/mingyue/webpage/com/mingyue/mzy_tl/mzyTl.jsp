<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>调理</title>
    <t:base type="jquery,easyui,tools,DatePicker"></t:base>

</head>
<body style="overflow-y: hidden" scroll="yes">
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table"
             action="mzyCustomController.do?tlsave&customId=${customId}">
<input id="id" name="id" type="hidden" value="${mzyTlPage.id }">
<table style="width: 700px;" cellpadding="0" cellspacing="1" class="formtable">
<tr>
    <td align="right">
        <label class="Validform_label">
            顾客姓名:
        </label>
    </td>
    <td class="value" style="height:60px">
            ${customName}

    </td>
    <td align="right">
        <label class="Validform_label">
            顾客详细情况:
        </label>
    </td>
    <td class="value" style="height:60px">
        <textarea id="note" name="note" rows="8" cols="25">
                ${mzyTlPage.gkdetail}
        </textarea>
            <%--<input class="inputxt" id="gkdetail" name="gkdetail" ignore="ignore"--%>
            <%--value="${mzyTlPage.gkdetail}">--%>
            <%--<span class="Validform_checktip"></span>--%>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            训练时间:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" style="width: 200px" id="time"
               name="time" ignore="ignore"
               value="<fmt:formatDate value='${mzyTlPage.time}' type="date" pattern="yyyy-MM-dd hh:mm:ss"/>">
        <span class="Validform_checktip"></span>
    </td>

        <%--</tr>--%>
        <%--<tr>--%>
    <td align="right">
        <label class="Validform_label">
            天气情况:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="tqqk" name="tqqk" ignore="ignore"
               value="${mzyTlPage.tqqk}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            当初项目:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="dcxm" name="dcxm" ignore="ignore"
               value="${mzyTlPage.dcxm}">
        <span class="Validform_checktip"></span>
    </td>
        <%--</tr>--%>
        <%--<tr>--%>
    <td align="right">
        <label class="Validform_label">
            锻炼地点距离:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="ddjl" name="ddjl" ignore="ignore"
               value="${mzyTlPage.ddjl}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            锻炼情况:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="dlqk" name="dlqk" ignore="ignore"
               value="${mzyTlPage.dlqk}">
        <span class="Validform_checktip"></span>
    </td>
        <%--</tr>--%>
        <%--<tr>--%>
    <td align="right">
        <label class="Validform_label">
            经络排毒:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="jlpd" name="jlpd" ignore="ignore"
               value="${mzyTlPage.jlpd}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            刮痧:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="guasha" name="guasha" ignore="ignore"
               value="${mzyTlPage.guasha}">
        <span class="Validform_checktip"></span>
    </td>
        <%--</tr>--%>
        <%--<tr>--%>
    <td align="right">
        <label class="Validform_label">
            加强针:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="jqz" name="jqz" ignore="ignore"
               value="${mzyTlPage.jqz}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr style="height:60px">
    <td align="right" style="width: 25%">
        <label class="Validform_label">
            清晰视力右眼:
        </label>
    </td>
    <td>
        <t:dictSelect field="qxsbR" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="miShu" defaultVal="${mzyTlPage.qxsbR}" hasLabel="false" title="裸视">
        </t:dictSelect>

        <t:dictSelect field="qxslR" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="shiliTable" defaultVal="${mzyTlPage.qxslR}" hasLabel="false" title="性别">
        </t:dictSelect>
        <t:dictSelect field="qxslxgR" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="slxg" defaultVal="${mzyTlPage.qxslxgR}" hasLabel="false" title="性别">
        </t:dictSelect>
    </td>
    <td align="right" style="width: 25%">
        <label class="Validform_label">
            清晰视力左眼:
        </label>
    </td>
    <td>
        <t:dictSelect field="qxsbL" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="miShu" defaultVal="${mzyTlPage.qxsbL}" hasLabel="false" title="裸视">
        </t:dictSelect>
        <t:dictSelect field="qxslL" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="shiliTable" defaultVal="${mzyTlPage.qxslL}" hasLabel="false" title="性别">
        </t:dictSelect>
        <t:dictSelect field="qxslxgL" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="slxg" defaultVal="${mzyTlPage.qxslxgL}" hasLabel="false" title="性别">
        </t:dictSelect>
    </td>
</tr>

<tr style="height:60px">
    <td align="right" style="width: 25%">
        <label class="Validform_label">
            极限视力右眼:
        </label>
    </td>
    <td>
        <t:dictSelect field="jxsbR" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="miShu" defaultVal="${mzyTlPage.jxsbR}" hasLabel="false" title="裸视">
        </t:dictSelect>
            <%--</td>--%>
            <%--<td class="value">--%>
        <t:dictSelect field="jxslR" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="shiliTable" defaultVal="${mzyTlPage.jxslR}" hasLabel="false" title="性别">
        </t:dictSelect>
        <t:dictSelect field="jxslxgR" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="slxg" defaultVal="${mzyTlPage.jxslxgR}" hasLabel="false" title="性别">
        </t:dictSelect>
    </td>

    <td align="right" style="width: 25%">
        <label class="Validform_label">
            极限视力左眼:
        </label>
    </td>
    <td>
        <t:dictSelect field="jxsbL" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="miShu" defaultVal="${mzyTlPage.jxsbL}" hasLabel="false" title="裸视">
        </t:dictSelect>
        <t:dictSelect field="jxslL" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="shiliTable" defaultVal="${mzyTlPage.jxslL}" hasLabel="false" title="性别">
        </t:dictSelect>
        <t:dictSelect field="jxslxgL" type="list" extendJson="{'style':'width:80px'}"
                      typeGroupCode="slxg" defaultVal="${mzyTlPage.jxslxgL}" hasLabel="false" title="性别">
        </t:dictSelect>
    </td>
</tr>
</table>
</t:formvalid>
</body>