<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>产品管理</title>
    <t:base type="jquery,easyui,tools,DatePicker,Ck"></t:base>
    <script type="text/javascript">

        $(function () {
            $('#cc').combotree({
                url: 'mzyProductController.do?setPFunction&selfId=${mzyProductPage.id}',
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
        function browseImages(inputId, Img) {// 图片管理器，可多个上传共用
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl, data) {//设置文件被选中时的函数
                decode_src(fileUrl, Img, inputId);
            };
            finder.resourceType = 'Images';// 指定ckfinder只为图片进行管理
            finder.selectActionData = inputId; //接收地址的input ID
            finder.removePlugins = 'help';// 移除帮助(只有英文)
            finder.defaultLanguage = 'zh-cn';
            finder.popup();
        }
        function decode_src(value, Img, inputId) {//value传入值,id接受值
            var last = value.lastIndexOf("/");
            var filename = value.substring(last + 1, value.length);
            var first = value.substring(0, last + 1);
            var dc = first + decodeURIComponent(filename)
            $("#" + Img).attr("src", dc);
            $("#" + inputId).attr("value", dc);
        }
    </script>
</head>
<body style="overflow-y: hidden" scroll="no">
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzyProductController.do?save">
    <input id="id" name="id" type="hidden" value="${mzyProductPage.id }">
    <table style="width: 100%;" cellpadding="0" cellspacing="1" class="formtable">
        <tr>
            <td align="right">
                <label class="Validform_label">
                    名称:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="name" name="name" ignore="ignore"
                       value="${mzyProductPage.name}">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    规格:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="guige" name="guige" ignore="ignore"
                       value="${mzyProductPage.guige}">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right">
                <label class="Validform_label">
                    描述:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="description" name="description" ignore="ignore"
                       value="${mzyProductPage.description}">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    单位:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="dw" name="dw" ignore="ignore"
                       value="${mzyProductPage.dw}">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>

            <td align="right">
                <label class="Validform_label">
                    价格:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="price" name="price" ignore="ignore"
                       value="${mzyProductPage.price}">
                <span class="Validform_checktip"></span>
            </td>
            <td align="right">
                <label class="Validform_label">
                    折扣:
                </label>
            </td>
            <td class="value" style="height:60px">
                <input class="inputxt" id="discount" name="discount" ignore="ignore"
                       value="${mzyProductPage.discount}">
                <span class="Validform_checktip">输入1-100的数字</span>
            </td>
        </tr>
        <tr style="height:60px">
            <div class="form">
                <td align="center">
                    <label class="Validform_label"> 产品等级: </label>
                </td>
                <td>
                    <select name="level" id="level" datatype="*">
                        <option value="0" <c:if test="${mzyProductPage.level eq 0}">selected="selected"</c:if>>
                            顶级产品
                        </option>
                        <option value="1" <c:if test="${mzyProductPage.level>0}"> selected="selected"</c:if>>
                            下级产品
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
                    <c:if test="${mzyProductPage.mzyProductEntity.level eq 0}">
                           value="${mzyProductPage.mzyProductEntity.id}"</c:if>
                    <c:if test="${mzyProductPage.mzyProductEntity.level > 0}">
                           value="${mzyProductPage.mzyProductEntity.name}"</c:if>>
                    <input id="mcuiId" name="mzyProductEntity.id" style="display: none;"
                           value="${mzyProductPage.mzyProductEntity.id}">

                </td>
            </div>
        </tr>
        <tr style="height:60px">
            <td align="center">

            </td>
            <td align="center">
                <input class="ui-button" type="button" value="上传图片"
                       onclick="browseImages('src','photo_href')"/>
            </td>
            <td align="center">
                <label class="Validform_label">
                    图片名称:
                </label>
            </td>
            <td class="value">
                <input type="hidden" class="inputxt" id="src" name="src" ignore="ignore"
                       value="${mzyProductPage.src}">
                <c:if test="${mzyProductPage.src==''}">
                    暂无相片
                </c:if>
                <c:if test="${mzyProductPage.src!=''}">
                    <img alt="" id="photo_href" src="${mzyProductPage.src}" width="100" height="100">
                </c:if>

                <span class="Validform_checktip"></span>
            </td>

        </tr>
    </table>
</t:formvalid>
</body>