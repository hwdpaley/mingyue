<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>交换机信息</title>
    <t:base type="jquery,easyui,tools,DatePicker"></t:base>
    <script type="text/javascript">

        $(function () {
            $('#cc').combotree({
                url: 'switch01Controller.do?setPFunction&selfId=${switch01Page.id}',
                panelHeight: 200,
                width: 257,
                onClick: function (node) {
                    $("#assetId").val(node.id);
                }
            });

            if ($('#assetlevel').val() == '1') {
                $('#pfun').show();
            } else {
                $('#pfun').hide();
            }


            $('#assetlevel').change(function () {
                if ($(this).val() == '1') {
                    $('#pfun').show();
                    var t = $('#cc').combotree('tree');
                    var nodes = t.tree('getRoots');
                    if (nodes.length > 0) {
                        $('#cc').combotree('setValue', nodes[0].id);
                        $("#assetId").val(nodes[0].id);
                    }
                } else {
                    var t = $('#cc').combotree('tree');
                    var node = t.tree('getSelected');
                    if (node) {
                        $('#cc').combotree('setValue', null);
                    }
                    $("#assetId").val(null);
                    $('#pfun').hide();
                }
            });
        });
    </script>
</head>
<body style="overflow-y: hidden" scroll="no">
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="switch01Controller.do?save">
    <input id="id" name="id" type="hidden" value="${switch01Page.id }">
    <table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">

        <tr>
            <td align="right">
                <label class="Validform_label">
                    名称:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="fullname" name="fullname" ignore="ignore"
                       value="${switch01Page.fullname}">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
            <%--<tr>--%>
            <%--<td align="right">--%>
            <%--<label class="Validform_label">--%>
            <%--设备MAC:--%>
            <%--</label>--%>
            <%--</td>--%>
            <%--<td class="value">--%>
            <%--<input class="inputxt" id="mac" name="mac" ignore="ignore"--%>
            <%--value="${switch01Page.mac}">--%>
            <%--<span class="Validform_checktip"></span>--%>
            <%--</td>--%>
            <%--</tr>--%>
        <tr>
            <td align="right">
                <label >
                    设备状态:
                </label>
            </td>
            <td class="value">
                <input type="hidden" class="inputxt" id="state" name="state" ignore="ignore"
                       value="${switch01Page.state}" datatype="n">
                <c:if test="${switch01Page.state ne '0'}">
                    在线
                </c:if>
                <c:if test="${switch01Page.state eq '0'}">
                    离线
                </c:if>
            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    设备IP地址:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="ip" name="ip" ignore="ignore"
                       value="${switch01Page.ip}">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label"> <t:mutiLang langKey="common.icon"/>: </label>
            </td>
            <td class="value">
                <select name="TSIcon.id">
                    <c:forEach items="${iconlist}" var="icon">
                        <option value="${icon.id}"
                                <c:if test="${icon.id==switch01Page.TSIcon.id || (switch01Page.id eq null && icon.iconClas eq 'default') }">selected="selected"</c:if>>
                            <t:mutiLang langKey="${icon.iconName}"/>
                        </option>
                    </c:forEach>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label"> 交换机等级: </label>
            </td>
            <td class="value">
                <select name="assetlevel" id="assetlevel" datatype="*">
                    <option value="0" <c:if test="${switch01Page.assetlevel eq 0}">selected="selected"</c:if>>
                        <t:mutiLang langKey="main.function"/>
                    </option>
                    <option value="1" <c:if test="${switch01Page.assetlevel>0}"> selected="selected"</c:if>>
                        <t:mutiLang langKey="sub.function"/>
                    </option>
                </select>
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr id="pfun">
            <td align="right">
                <label class="Validform_label"> <t:mutiLang langKey="parent.function"/>: </label>
            </td>
            <td class="value">
                <input id="cc"
                <c:if test="${switch01Page.switch01Entity.assetlevel eq 0}">
                       value="${switch01Page.switch01Entity.id}"</c:if>
                <c:if test="${switch01Page.switch01Entity.assetlevel > 0}">
                       value="${switch01Page.switch01Entity.fullname}"</c:if>>
                <input id="assetId" name="switch01Entity.id" style="display: none;"
                       value="${switch01Page.switch01Entity.id}">
            </td>
        </tr>

            <%--<tr>--%>
            <%--<td align="right">--%>
            <%--<label class="Validform_label">--%>
            <%--设备PATH:--%>
            <%--</label>--%>
            <%--</td>--%>
            <%--<td class="value">--%>
            <%--<input class="inputxt" id="path" name="path" ignore="ignore"--%>
            <%--value="${switch01Page.path}">--%>
            <%--<span class="Validform_checktip"></span>--%>
            <%--</td>--%>
            <%--</tr>--%>
    </table>
</t:formvalid>
</body>