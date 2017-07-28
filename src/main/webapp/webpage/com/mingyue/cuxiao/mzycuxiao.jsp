<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>产品促销</title>
    <t:base type="jquery,easyui,tools,DatePicker"></t:base>
    <script type="text/javascript" src="webpage/com/mingyue/cuxiao/cuxiao.js"></script>
</head>
<body style="overflow-y: hidden" scroll="no">
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzycuxiaoController.do?save">
    <input id="id" name="id" type="hidden" value="${mzycuxiaoPage.id }">
    <table width="100%" border="0" cellpadding="2" cellspacing="0" class="formtable">

        <tr>
            <td align="right">
                <label class="Validform_label">
                    产品名称:
                </label>
            </td>
            <td class="value">
                <input id="productids" name="productids" type="hidden" value="${id}">
                <input id="name" name="name" class="inputxt" value="${mzycuxiaoPage.mzyProductEntity.name }"
                       readonly="readonly" ignore="ignore"
                       datatype="*"/>
            </td>

                <%--</tr>--%>
                <%--<tr>--%>

            <td align="right">
                <a href="#" class="easyui-linkbutton l-btn l-btn-plain" plain="true"
                   onclick="choose_40288a8a50831d470150831d47bd0000()"><span class="l-btn-left">
                    <span class="l-btn-text icon-search l-btn-icon-left">选择产品</span></span></a>
                <a href="#" class="easyui-linkbutton l-btn l-btn-plain" plain="true"
                   onclick="clearAll_40288a8a50831d470150831d47bd0000();">
                    <span class="l-btn-left"><span class="l-btn-text icon-redo l-btn-icon-left">清空产品</span></span></a>
                    <%--<t:choose hiddenName="productids" hiddenid="id" url="mzycuxiaoController.do?mzyProduct_cx"--%>
                    <%--name="mzyProduct_cx" width="600px"--%>
                    <%--icon="icon-search" title="产品列表" textname="name" isclear="true"--%>
                    <%--isInit="true">--%>

                    <%--</t:choose>--%>
            </td>
            <td>

            </td>
        </tr>
    </table>
    <table width="100%" border="0" cellpadding="2" cellspacing="0">
        <tr>
            <td align="right">
                <label class="Validform_label">
                    原价格:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="price" name="price" ignore="ignore"
                       value="${mzycuxiaoPage.price}">
                <span class="Validform_checktip"></span>
            </td>
                <%--</tr>--%>
                <%--<tr>--%>
            <td align="right">
                    <%--<label class="Validform_label">--%>
                    <%--折扣:--%>
                    <%--</label>--%>
            </td>
            <td class="value" style="height:60px">
            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    折扣价格:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="disPrice" name="disPrice" ignore="ignore"
                       value="${mzycuxiaoPage.disPrice}">
                <span class="Validform_checktip"></span>
            </td>
                <%--</tr>--%>
                <%--<tr>--%>
            <td align="right">
                <label class="Validform_label">
                    如果填写该项，则以此项为主
                </label>
            </td>
            <td class="value" style="height:60px">

            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    折扣 %:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="discount" name="discount" ignore="ignore"
                       value="${mzycuxiaoPage.discount}">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    1%-100%
                </label>
            </td>
            <td class="value" style="height:60px">

            </td>

        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    开始时间:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" style="width: 150px"
                       id="sdate" name="sdate" ignore="ignore"
                       value="<fmt:formatDate value='${mzycuxiaoPage.sdate}' type="date" pattern="yyyy-MM-dd hh:mm:ss"/>">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">

                </label>
            </td>
            <td class="value" style="height:60px">

            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    结束时间:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" style="width: 150px"
                       id="edate" name="edate" ignore="ignore"
                       value="<fmt:formatDate value='${mzycuxiaoPage.edate}' type="date" pattern="yyyy-MM-dd hh:mm:ss"/>">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">

                </label>
            </td>
            <td class="value" style="height:60px">

            </td>
        </tr>
    </table>
</t:formvalid>
</body>