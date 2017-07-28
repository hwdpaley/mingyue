<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>UI界面</title>
    <t:base type="jquery,easyui,tools,DatePicker,Ck"></t:base>
    <%--<script type="text/javascript" src="plug-in/ckeditor/ckeditor.js"></script>--%>
    <%--<script type="text/javascript" src="plug-in/ckfinder/ckfinder.js"></script>--%>
    <script type="text/javascript">

        $(function () {
            $('#cc').combotree({
                url: 'mcuiController.do?setPFunction&selfId=${mcuiPage.id}',
                panelHeight: 200,
                width: 257,
                onClick: function (node) {
                    $("#mcuiId").val(node.id);
                }
            });

            if ($('#level').val() == '1') {
                $('#pfun').show();
            } else {
                $('#pfun').hide();
            }


            $('#level').change(function () {
                if ($(this).val() == '1') {
                    $('#pfun').show();
                    var t = $('#cc').combotree('tree');
                    var nodes = t.tree('getRoots');
                    if (nodes.length > 0) {
                        $('#cc').combotree('setValue', nodes[0].id);
                        $("#mcuiId").val(nodes[0].id);
                    }
                } else {
                    var t = $('#cc').combotree('tree');
                    var node = t.tree('getSelected');
                    if (node) {
                        $('#cc').combotree('setValue', null);
                    }
                    $("#mcuiId").val(null);
                    $('#pfun').hide();
                }
            });
        });
    </script>
</head>
<body style="overflow-y: hidden;" scroll="no">
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mcuiController.do?save" >

    <input id="id" name="id" type="hidden" value="${mcuiPage.id }">
    <table style="width: 700px;" cellpadding="0" cellspacing="1" class="formtable">
        <tr style="height:60px">
            <td align="right">
                <label class="Validform_label">
                    功能名称:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="name" name="name" ignore="ignore"
                       value="${mcuiPage.name}">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    排序:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="uiorder" name="uiorder" ignore="ignore"
                       value="${mcuiPage.uiorder}" datatype="n">
                <span class="Validform_checktip"></span>
            </td>

        </tr>
        <tr style="height:60px">
            <td align="right">
                <label class="Validform_label">
                    X坐标:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="x" name="x" ignore="ignore"
                       value="${mcuiPage.x}" datatype="n">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    Y坐标:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="y" name="y" ignore="ignore"
                       value="${mcuiPage.y}" datatype="n">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr style="height:60px">
            <td align="right">
                <label class="Validform_label">
                    宽度:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="width" name="width" ignore="ignore"
                       value="${mcuiPage.width}" datatype="n">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    高度:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="height" name="height" ignore="ignore"
                       value="${mcuiPage.height}" datatype="n">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr style="height:60px">
            <td align="right">
                <label class="Validform_label">
                    按钮功能:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="functionname" name="functionname" ignore="ignore"
                       value="${mcuiPage.functionname}">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    按钮文字:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="text" name="text" ignore="ignore"
                       value="${mcuiPage.text}">
                <span class="Validform_checktip"></span>
            </td>
        </tr>

        <tr style="height:60px">
            <td align="right">
                <label class="Validform_label">
                    按钮类型:
                </label>
            </td>
            <td class="value">
                <input class="inputxt" id="type" name="type" ignore="ignore"
                       value="${mcuiPage.type}">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    <%--按钮文字:--%>
                </label>
            </td>
            <td class="value">
                <%--<input class="inputxt" id="text" name="text" ignore="ignore"--%>
                       <%--value="${mcuiPage.text}">--%>
                <span class="Validform_checktip"></span>
            </td>
        </tr>


        <tr style="height:60px">
            <div class="form">
                <td align="center">
                    <label class="Validform_label"> 功能等级: </label>
                </td>
                <td>
                    <select name="level" id="level" datatype="*">
                        <option value="0" <c:if test="${mcuiPage.level eq 0}">selected="selected"</c:if>>
                            顶级功能
                        </option>
                        <option value="1" <c:if test="${mcuiPage.level>0}"> selected="selected"</c:if>>
                            下级功能
                        </option>
                    </select>
                    <span class="Validform_checktip"></span>
                </td>
            </div>
            <div class="form" id="pfun">
                <td align="center">

                    <label class="Validform_label"> 上级功能: </label>
                </td>
                <td>
                    <input id="cc"
                    <c:if test="${mcuiPage.mcuiEntity.level eq 0}"> value="${mcuiPage.mcuiEntity.id}"</c:if>
                    <c:if test="${mcuiPage.mcuiEntity.level > 0}"> value="${mcuiPage.mcuiEntity.name}"</c:if>>
                    <input id="mcuiId" name="mcuiEntity.id" style="display: none;" value="${mcuiPage.mcuiEntity.id}">

                </td>
            </div>
        </tr>
        <tr style="height:60px">
            <td align="center">

            </td>
            <td align="center">
                <input class="ui-button" type="button" value="上传图片"
                       onclick="browseImages('picname','photo_href')"/>
            </td>
            <td align="center">
                <label class="Validform_label">
                    图片名称:
                </label>
            </td>
            <td class="value">
                <input type="hidden" class="inputxt" id="picname" name="picname" ignore="ignore"
                       value="${mcuiPage.picname}">
                <c:if test="${mcuiPage.picname==''}">
                    暂无相片
                </c:if>
                <c:if test="${mcuiPage.picname!=''}">
                    <img alt="" id="photo_href" src="${mcuiPage.picname}" width="100" height="100">
                </c:if>

                <span class="Validform_checktip"></span>
            </td>

        </tr>
        <tr style="height:60px">
            <td align="center">

            </td>
            <td align="center">
                <input class="ui-button" type="button" value="上传图片"
                       onclick="browseImages('picnameh','photo_href_h')"/>
            </td>
            <td align="center">
                <label class="Validform_label">
                    高亮图片名称:
                </label>
            </td>
            <td class="value">
                <input type="hidden" class="inputxt" id="picnameh" name="picnameh" ignore="ignore"
                       value="${mcuiPage.picnameh}">
                <c:if test="${mcuiPage.picnameh==''}">
                    暂无相片
                </c:if>
                <c:if test="${mcuiPage.picnameh!=''}">
                    <img alt="" id="photo_href_h" src="${mcuiPage.picnameh}" width="100" height="100">
                </c:if>

                <span class="Validform_checktip"></span>
            </td>

        </tr>
    </table>
</t:formvalid>
</body>
<script src="webpage/com/mingyue/mcui/mcui.js"></script>