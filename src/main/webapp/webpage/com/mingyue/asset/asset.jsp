<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>

<head>
    <title>资产信息</title>
    <t:base type="jquery,easyui,tools"></t:base>
    <script type="text/javascript">

        $(function () {
            $('#cc').combotree({
                url: 'assetController.do?setPFunction&selfId=${asset.id}',
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
<t:formvalid formid="formobj" layout="div" dialog="true" refresh="true" action="assetController.do?saveAsset">
    <input name="id" type="hidden" value="${asset.id}">
    <fieldset class="step">
        <div class="form">
            <label class="Validform_label"> 资产名称: </label>
            <input name="fullname" class="inputxt" value="${asset.fullname}" datatype="s4-20">
            <span class="Validform_checktip"> <t:mutiLang langKey="menuname.rang4to15"/> </span>
        </div>
        <div class="form">
            <label class="Validform_label"> IP地址: </label>
            <input name="ip" class="inputxt" value="${asset.ip}" datatype="s4-20">
            <span class="Validform_checktip"> <t:mutiLang langKey="menuname.rang4to15"/> </span>
        </div>
            <%--<div class="form">--%>
            <%--<label class="Validform_label"> <t:mutiLang langKey="funcType"/>: </label>--%>
            <%--<select name="functionType" id="functionType" datatype="*">--%>
            <%--<option value="0" <c:if test="${asset.functionType eq 0}">selected="selected"</c:if>>--%>
            <%--<t:mutiLang langKey="funcType.page"/>--%>
            <%--</option>--%>
            <%--<option value="1" <c:if test="${function.functionType>0}"> selected="selected"</c:if>>--%>
            <%--<t:mutiLang langKey="funcType.from"/>--%>
            <%--</option>--%>
            <%--</select>--%>
            <%--<span class="Validform_checktip"></span>--%>
            <%--</div>--%>
        <div class="form">
            <label class="Validform_label"> 资产等级: </label>
            <select name="assetlevel" id="assetlevel" datatype="*">
                <option value="0" <c:if test="${asset.assetlevel eq 0}">selected="selected"</c:if>>
                    <t:mutiLang langKey="main.function"/>
                </option>
                <option value="1" <c:if test="${asset.assetlevel>0}"> selected="selected"</c:if>>
                    <t:mutiLang langKey="sub.function"/>
                </option>
            </select>
            <span class="Validform_checktip"></span>
        </div>
        <div class="form" id="pfun">
            <label class="Validform_label"> <t:mutiLang langKey="parent.function"/>: </label>
            <input id="cc"
            <c:if test="${asset.assetEntity.assetlevel eq 0}"> value="${asset.assetEntity.id}"</c:if>
            <c:if test="${asset.assetEntity.assetlevel > 0}"> value="${asset.assetEntity.fullname}"</c:if>>
            <input id="assetId" name="assetEntity.id" style="display: none;" value="${asset.assetEntity.id}">
        </div>
            <%--<div class="form" id="funurl">--%>
            <%--<label class="Validform_label">--%>
            <%--<t:mutiLang langKey="menu.url"/>:--%>
            <%--</label>--%>
            <%--<input name="functionUrl" class="inputxt" value="${function.functionUrl}">--%>
            <%--</div>--%>
        <div class="form">
            <label class="Validform_label"> <t:mutiLang langKey="common.icon"/>: </label>
            <select name="TSIcon.id">
                <c:forEach items="${iconlist}" var="icon">
                    <option value="${icon.id}"
                            <c:if test="${icon.id==asset.TSIcon.id || (asset.id eq null && icon.iconClas eq 'default') }">selected="selected"</c:if>>
                        <t:mutiLang langKey="${icon.iconName}"/>
                    </option>
                </c:forEach>
            </select>
        </div>
            <%--<div class="form">--%>
            <%--<label class="Validform_label"> <t:mutiLang langKey="desktop.icon"/>: </label>--%>
            <%--<select name="TSIconDesk.id">--%>
            <%--<c:forEach items="${iconDeskList}" var="icon">--%>
            <%--<option value="${icon.id}" <c:if test="${icon.id==function.TSIconDesk.id || (function.id eq null && icon.iconClas eq 'System Folder') }">selected="selected"</c:if>>--%>
            <%--<t:mutiLang langKey="${icon.iconName}"/>--%>
            <%--</option>--%>
            <%--</c:forEach>--%>
            <%--</select>--%>
            <%--</div>--%>
            <%--update-end--Author:zhangguoming  Date:20140509 for：云桌面图标管理--%>
        <div class="form" id="assetorder"><label class="Validform_label"> 资产排序: </label>
            <input name="assetorder" class="inputxt" value="${asset.assetorder}" datatype="n1-3"></div>
        <c:if test="${asset.assetid!=null}">
            <div class="form">
                <label class="Validform_label"> 资产ID: </label>
                <label>${asset.assetid}</label>
            </div>
        </c:if>
    </fieldset>
</t:formvalid>
</body>

