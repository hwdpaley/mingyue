<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>顾客表</title>
    <t:base type="jquery,easyui,tools,DatePicker,Ck"></t:base>

    <script>
        <c:if test="${departIsNotOne>1 }">
        function setOrgIds() {
//            var orgIds = $("#orgSelect").combobox("getValues");
            var orgIds = $("#orgSelect").combotree("getValues");
            $("#orgIds").val(orgIds);
        }
        $(function () {
            $("#orgSelect").combotree({
                onChange: function (n, o) {
                    if ($("#orgSelect").combotree("getValues") != "") {
                        $("#orgSelect option").eq(1).attr("selected", true);
                    } else {
                        $("#orgSelect option").eq(1).attr("selected", false);
                    }
                }
            });
            <%--$("#orgSelect").combobox("setValues", ${orgIdList});--%>
            $("#orgSelect").combotree("setValues", ${orgIdList});
        });
        </c:if>
        <c:if test="${departIsNotOne==1 }">
        function setOrgIds() {
//            var orgIds = $("#orgSelect").combobox("getValues");
//                var orgIds = $("#orgSelect").combotree("getValues");
//                $("#orgIds").val(orgIds);
        }
        </c:if>
    </script>

</head>
<body >
<%--style="overflow-y: hidden" scroll="yes"--%>
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzyCustomController.do?save">
<input id="id" name="id" type="hidden" value="${mzyCustomPage.id }">
<input id="orgIds" name="orgIds" type="hidden" value="orgIds">
<table style="width: 100%;" cellpadding="0" cellspacing="1" class="formtable">
<tr style="height:60px">
    <td align="right" width="10%" nowrap><label class="Validform_label"> 姓名: </label></td>
    <td class="value" width="10%">
        <input id="realName" class="inputxt" name="realName" value="${mzyCustomPage.realName }" datatype="s2-10">
        <span class="Validform_checktip"><t:mutiLang langKey="fill.realname"/></span>
    </td>
    <td align="center">
        <input class="ui-button" type="button" value="上传图片"
               onclick="browseImages('picPath','photo_href')"/>
    </td>

    <td class="value">
        <input type="hidden" class="inputxt" id="picPath" name="picPath" ignore="ignore"
               value="${mzyCustomPage.picPath}">
        <c:if test="${mzyCustomPage.picPath==''}">
            暂无相片
        </c:if>
        <c:if test="${mzyCustomPage.picPath!=''}">
            <img alt="" id="photo_href" src="${mzyCustomPage.picPath}" width="100" height="100">
        </c:if>

        <span class="Validform_checktip"></span>
    </td>

</tr>
<tr>
    <td align="right"><label class="Validform_label"> 年龄: </label></td>
    <td class="value">
        <input class="inputxt" name="age" value="${mzyCustomPage.age}" datatype="s2-10"
               ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right"><label class="Validform_label"> 性别: </label></td>
    <td class="value">
        <t:dictSelect field="sex" type="list"
                      typeGroupCode="sex" defaultVal="${mzyCustomPage.sex}" hasLabel="false" title="性别">
        </t:dictSelect>
        <span class="Validform_checktip"></span>
        <label class="Validform_label" style="display: none;">性别</label>
    </td>
</tr>
<tr>
    <td align="right"><label class="Validform_label"> 通讯地址: </label></td>
    <td class="value">
        <input class="inputxt" name="address" value="${mzyCustomPage.address}" datatype="s2-10"
               ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
<%--</tr>--%>
        <%--<tr>--%>
    <td align="right">
        <label class="Validform_label">
            就读学校:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="school" name="school" ignore="ignore"
               value="${mzyCustomPage.school}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            近视年龄:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="jsage" name="jsage" ignore="ignore"
               value="${mzyCustomPage.jsage}" datatype="n">
        <span class="Validform_checktip"></span>
    </td>
<%--</tr>--%>
<%--<tr>--%>
    <td align="right">
        <label class="Validform_label">
            带镜年龄:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="djage" name="djage" ignore="ignore"
               value="${mzyCustomPage.djage}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            矫正视力左:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="jzslL" name="jzslL" ignore="ignore"
               value="${mzyCustomPage.jzslL}">
        <span class="Validform_checktip"></span>
    </td>
<%--</tr>--%>
<%--<tr>--%>
    <td align="right">
        <label class="Validform_label">
            矫正视力右:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="jzslR" name="jzslR" ignore="ignore"
               value="${mzyCustomPage.jzslR}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            屈光球镜S左:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="qgqjL" name="qgqjL" ignore="ignore"
               value="${mzyCustomPage.qgqjL}">
        <span class="Validform_checktip"></span>
    </td>
<%--</tr>--%>
<%--<tr>--%>
    <td align="right">
        <label class="Validform_label">
            散光住镜D左:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="sgzjL" name="sgzjL" ignore="ignore"
               value="${mzyCustomPage.sgzjL}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            屈光球镜S右:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="qgqjR" name="qgqjR" ignore="ignore"
               value="${mzyCustomPage.qgqjR}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            散光住镜D右:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="sgzjR" name="sgzjR" ignore="ignore"
               value="${mzyCustomPage.sgzjR}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            调理前视力右:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="beforeR" name="beforeR" ignore="ignore"
               value="${mzyCustomPage.beforeR}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            斜视:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="isxs" name="isxs" ignore="ignore"
               value="${mzyCustomPage.isxs}" datatype="n">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            调理前视力左:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="beforeL" name="beforeL" ignore="ignore"
               value="${mzyCustomPage.beforeL}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            治疗:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="iszl" name="iszl" ignore="ignore"
               value="${mzyCustomPage.iszl}" datatype="n">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            遗传近视:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="isycjs" name="isycjs" ignore="ignore"
               value="${mzyCustomPage.isycjs}" datatype="n">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            弱视:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="isrs" name="isrs" ignore="ignore"
               value="${mzyCustomPage.isrs}" datatype="n">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            体验后视力左:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="aftertyL" name="aftertyL" ignore="ignore"
               value="${mzyCustomPage.aftertyL}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            体验后视力右:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="aftertyR" name="aftertyR" ignore="ignore"
               value="${mzyCustomPage.aftertyR}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            体验前视力左:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="beforetyR" name="beforetyR" ignore="ignore"
               value="${mzyCustomPage.beforetyR}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            体验前视力右:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="beforetyL" name="beforetyL" ignore="ignore"
               value="${mzyCustomPage.beforetyL}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            调理前视力右米:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="beforeRm" name="beforeRm" ignore="ignore"
               value="${mzyCustomPage.beforeRm}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            调理前视力左米:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="beforeLm" name="beforeLm" ignore="ignore"
               value="${mzyCustomPage.beforeLm}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            康复师:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="kfmenid" name="kfmenid" ignore="ignore"
               value="${mzyCustomPage.kfmenid}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            带镜视力右:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="djslR" name="djslR" ignore="ignore"
               value="${mzyCustomPage.djslR}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            裸眼视力右:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="lyslR" name="lyslR" ignore="ignore"
               value="${mzyCustomPage.lyslR}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            带镜视力左:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="djslL" name="djslL" ignore="ignore"
               value="${mzyCustomPage.djslL}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            裸眼视力左:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="lyslL" name="lyslL" ignore="ignore"
               value="${mzyCustomPage.lyslL}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            散光:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="issg" name="issg" ignore="ignore"
               value="${mzyCustomPage.issg}" datatype="n">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            调理次数:
        </label>
    </td>
    <td class="value" style="height:60px">
        <input class="inputxt" id="tlTimes" name="tlTimes" ignore="ignore"
               value="${mzyCustomPage.tlTimes}" datatype="n">
        <span class="Validform_checktip"></span>
    </td>
</tr>
</table>
</t:formvalid>
</body>