<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>产品进货申请表</title>
    <t:base type="jquery,easyui,tools,DatePicker"></t:base>
    <script type="text/javascript">

        $(function () {
            $('#cc').combotree({
                url: 'mzyProductController.do?setPFunction&selfId=${mzyProductPage.id}',
                panelHeight: 200,
                width: 257,
                onClick: function (node) {
                    $("#productId").val(node.id);
                }
            });
            $('#level').change(function () {
                if ($(this).val() == '1') {
                    $('#pfun').show();
                    var t = $('#cc').combotree('tree');
                    var nodes = t.tree('getRoots');
                    if (nodes.length > 0) {
                        $('#cc').combotree('setValue', nodes[0].id);
                        $("#productId").val(nodes[0].id);
                    }
                } else {
                    var t = $('#cc').combotree('tree');
                    var node = t.tree('getSelected');
                    if (node) {
                        $('#cc').combotree('setValue', null);
                    }
                    $("#productId").val(null);
                    $('#pfun').hide();
                }
            });
        });
    </script>
</head>
<body style="overflow-y: hidden" scroll="no">
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table"
             action="mzycpkcsqController.do?sqxdsave&sqkcId=${sqkcId}">
    <input id="id" name="id" type="hidden" value="${mzysqxdPage.id }">
    <table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">

            <%--<tr>--%>
            <%--<td align="right">--%>
            <%--<label class="Validform_label">--%>
            <%--产品名称:--%>
            <%--</label>--%>
            <%--</td>--%>
            <%--<td class="value" style="height:60px">--%>
            <%--<input class="inputxt" id="sqbh" name="sqbh" ignore="ignore"--%>
            <%--value="${mzysqxdPage.mzyProductEntity.name}">--%>
            <%--<span class="Validform_checktip"></span>--%>
            <%--</td>--%>
            <%--</tr>--%>
            <%--<tr style="height:60px">--%>
            <%--<div class="form">--%>
            <%--<td align="center">--%>
            <%--<label class="Validform_label"> 产品等级: </label>--%>
            <%--</td>--%>
            <%--<td>--%>
            <%--<select name="level" id="level" datatype="*">--%>
            <%--<option value="0" <c:if test="${mzysqxdPage.mzyProductEntity.level eq 0}">selected="selected"</c:if>>--%>
            <%--顶级产品--%>
            <%--</option>--%>
            <%--<option value="1" <c:if test="${mzysqxdPage.mzyProductEntity.level>0}"> selected="selected"</c:if>>--%>
            <%--下级产品--%>
            <%--</option>--%>
            <%--</select>--%>
            <%--<span class="Validform_checktip"></span>--%>
            <%--</td>--%>
            <%--</div>--%>
            <%--<div class="form" id="pfun">--%>
            <%--<td align="center">--%>

            <%--<label class="Validform_label"> 上级产品: </label>--%>
            <%--</td>--%>
            <%--<td>--%>
            <%--<input id="cc"--%>
            <%--<c:if test="${mzysqxdPage.mzyProductEntity.level eq 0}">--%>
            <%--value="${mzysqxdPage.mzyProductEntity.id}"</c:if>--%>
            <%--<c:if test="${mzysqxdPage.mzyProductEntity.level > 0}">--%>
            <%--value="${mzysqxdPage.mzyProductEntity.name}"</c:if>>--%>
            <%--<input id="productId" name="mzyProductEntity.id" style="display: none;"--%>
            <%--value="${mzysqxdPage.mzyProductEntity.id}">--%>

            <%--</td>--%>
            <%--</div>--%>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    产品名称:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="nums" name="nums" ignore="ignore"
                       value="${mzysqxdPage.nums}">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    数量:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="nums" name="nums" ignore="ignore"
                       value="${mzysqxdPage.nums}">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    备注:
                </label>
            </td>
            <td class="value" style="height:60px">
                <textarea class="inputxt" id="note" name="note" rows="6" cols="35">
                        ${mzysqxdPage.note}
                </textarea>
                <span class="Validform_checktip"></span>
            </td>
            <td></td>
            <td></td>
        </tr>
    </table>
</t:formvalid>
</body>