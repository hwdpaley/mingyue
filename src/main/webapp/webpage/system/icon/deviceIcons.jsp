<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>图标信息</title>
    <t:base type="jquery,easyui,tools,Ck"></t:base>
    <%--<script type="text/javascript" src="plug-in/ckeditor/ckeditor.js"></script>--%>
    <%--<script type="text/javascript" src="plug-in/ckfinder/ckfinder.js"></script>--%>

</head>
<body style="overflow-y: hidden" scroll="no">
<%--beforeSubmit="upload"--%>
<t:formvalid formid="formobj" layout="div" dialog="true"  action="iconController.do?save">
    <input name="id" id="id" type="hidden" value="${icon.id}">
    <fieldset class="step">
        <div class="form">
            <label class="Validform_label"> <t:mutiLang langKey="common.icon.name"/>: </label>
            <input name="iconName" datatype="s2-20" id="iconName" value="${icon.iconName}" class="inputxt">
            <span class="Validform_checktip"><t:mutiLang langKey="iconname.rang2to10"/></span>
        </div>
        <div class="form">
            <label class="Validform_label"> <t:mutiLang langKey="device.icon"/></label>
                <%--<select name="iconType" id="iconType">--%>
                <%--<option value="1" <c:if test="${icon.iconType=='1'}">selected="selected"</c:if>><t:mutiLang langKey="system.icon"/></option>--%>
                <%--<option value="2" <c:if test="${icon.iconType=='2'}">selected="selected"</c:if>><t:mutiLang langKey="menu.icon"/></option>--%>
                <%--<option value="3" <c:if test="${icon.iconType=='3'}">selected="selected"</c:if>><t:mutiLang langKey="desktop.icon"/></option>--%>
                <%--<option value="4" <c:if test="${icon.iconType=='4'}">selected="selected"</c:if>><t:mutiLang langKey="device.icon"/></option>--%>
                <%--</select>--%>
        </div>
        <%--<div class="form" id="filediv"></div>--%>
        <%--<div class="form"><t:upload name="file_upload" uploader="iconController.do?saveOrUpdateIcon" extend="*.png;"--%>
                                    <%--id="file_upload" formId="formobj"></t:upload></div>--%>
        <div class="form">
            <tr style="height:60px">
                <td align="center">

                </td>
                <td align="center">
                    <input class="ui-button" type="button" value="上传图片"
                           onclick="browseImages('iconPath','photo_href')"/>
                </td>
                <td align="center">
                    <label class="Validform_label">
                        图片名称:
                    </label>
                </td>
                <td class="value">
                    <input type="hidden" class="inputxt" id="iconPath" name="iconPath" ignore="ignore"
                           value="${icon.iconPath}">
                    <c:if test="${icon.iconPath==''}">
                        暂无相片
                    </c:if>
                    <c:if test="${icon.iconPath!=''}">
                        <img alt="" id="photo_href" src="${icon.iconPath}" width="100" height="100">
                    </c:if>

                    <span class="Validform_checktip"></span>
                </td>

            </tr>
        </div>
    </fieldset>
</t:formvalid>
</body>
<script src="webpage/com/mingyue/mcui/mcui.js"></script>
</html>
