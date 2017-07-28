<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>疗程记录</title>
    <t:base type="jquery,easyui,tools,DatePicker"></t:base>
</head>
<body style="overflow-y: hidden" scroll="no">
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table"
             action="mzyCustomController.do?kfyhsave&customId=${customId}">
    <input id="id" name="id" type="hidden" value="${mzyKfyhPage.id }">
    <table style="width: 600px;" border="0" cellpadding="0" cellspacing="1" class="formtable">
        <tr style="height:60px">
            <td align="right" style="width: 25%">
                <label class="Validform_label">
                    顾客姓名:
                </label>
            </td>
            <td class="value" style="width: 25%">
                    ${customName}

            </td>
            <td align="right" style="width: 25%">
                <label class="Validform_label">
                    日期:
                </label>
            </td>
            <td class="value" style="width: 25%">
                <input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" style="width: 150px"
                       id="time" name="time" ignore="ignore"
                       value="<fmt:formatDate value='${mzyKfyhPage.time}' type="date" pattern="yyyy-MM-dd hh:mm:ss"/>">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr style="height:60px">
            <td align="right" style="width: 15%">
                <label class="Validform_label">
                    右眼:
                </label>
            </td>
            <td class="value" style="width: 35%">
                <t:dictSelect field="sbR" type="list" extendJson="{'style':'width:80px'}"
                              typeGroupCode="miShu" defaultVal="${mzyKfyhPage.sbR}" hasLabel="false" title="性别">
                </t:dictSelect>
                <t:dictSelect field="hsR" type="list" extendJson="{'style':'width:80px'}"
                              typeGroupCode="shiliTable" defaultVal="${mzyKfyhPage.hsR}" hasLabel="false" title="性别">
                </t:dictSelect>
                <t:dictSelect field="hsslxgR" type="list" extendJson="{'style':'width:80px'}"
                              typeGroupCode="slxg" defaultVal="${mzyKfyhPage.hsslxgR}" hasLabel="false" title="裸视">
                </t:dictSelect>
            </td>

            <td align="right" style="width: 15%">
                <label class="Validform_label">
                    左眼:
                </label>
            </td>
            <td class="value" style="width: 35%">
                <t:dictSelect field="sbL" type="list" extendJson="{'style':'width:80px'}"
                              typeGroupCode="miShu" defaultVal="${mzyKfyhPage.sbL}" hasLabel="false" title="性别">
                </t:dictSelect>
                <t:dictSelect field="hsL" type="list" extendJson="{'style':'width:80px'}"
                              typeGroupCode="shiliTable" defaultVal="${mzyKfyhPage.hsL}" hasLabel="false" title="性别">
                </t:dictSelect>
                <t:dictSelect field="hsslxgL" type="list" extendJson="{'style':'width:80px'}"
                              typeGroupCode="slxg" defaultVal="${mzyKfyhPage.hsslxgL}" hasLabel="false" title="裸视">
                </t:dictSelect>
            </td>
        </tr>

        <tr>
            <td align="right" style="width: 25%">
                <label class="Validform_label">
                    理疗师:
                </label>
            </td>
            <td class="value">
                <input id="tlsids" name="tlsids" type="hidden" value="${id}">
                <input id="realName" name="realName" class="inputxt" value="${mzyKfyhPage.tls }" readonly="readonly"
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
                        ${mzyKfyhPage.note}
                </textarea>
            </td>
        </tr>
    </table>
</t:formvalid>
</body>