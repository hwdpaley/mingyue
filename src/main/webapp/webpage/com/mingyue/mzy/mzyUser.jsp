<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>用户信息</title>
    <t:base type="jquery,easyui,tools,Ck,DatePicker"></t:base>
    <%--update-start--Author:zhangguoming  Date:20140825 for：添加组织机构combobox多选的处理方法--%>
    <script>
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
    </script>
    <%--update-end--Author:zhangguoming  Date:20140825 for：添加组织机构combobox多选的处理方法--%>
</head>
<body style="overflow-y: hidden" scroll="no">
<%--update-start--Author:zhangguoming  Date:20140825 for：格式化页面代码 并 添加组织机构combobox多选框--%>
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="userController.do?saveUser"
             beforeSubmit="setOrgIds">
    <input id="id" name="id" type="hidden" value="${user.id }">
    <table style="width: 700px;" cellpadding="0" cellspacing="1" class="formtable">
        <tr style="height:60px">

            <td align="center">
                <input class="ui-button" type="button" value="上传图片"
                       onclick="browseImages('picPath','photo_href')"/>
            </td>

            <td class="value">
                <input type="hidden" class="inputxt" id="picPath" name="picPath" ignore="ignore"
                       value="${user.picPath}">
                <c:if test="${user.picPath==''}">
                    暂无相片
                </c:if>
                <c:if test="${user.picPath!=''}">
                    <img alt="" id="photo_href" src="${user.picPath}" width="100" height="100">
                </c:if>

                <span class="Validform_checktip"></span>
            </td>

        </tr>
        <tr>
            <td align="right" width="15%" nowrap>
                <label class="Validform_label"> <t:mutiLang langKey="common.username"/>: </label>
            </td>
            <td class="value" width="85%">
                <c:if test="${user.id!=null }"> ${user.userName } </c:if>
                <c:if test="${user.id==null }">
                    <input id="userName" class="inputxt" name="userName" validType="t_s_base_user,userName,id"
                           value="${user.userName }" datatype="s2-10"/>
                    <span class="Validform_checktip"> <t:mutiLang langKey="username.rang2to10"/></span>
                </c:if>
            </td>
        </tr>
        <tr>
            <td align="right" width="10%" nowrap><label class="Validform_label"> <t:mutiLang
                    langKey="common.real.name"/>: </label></td>
            <td class="value" width="10%">
                <input id="realName" class="inputxt" name="realName" value="${user.realName }" datatype="s2-10">
                <span class="Validform_checktip"><t:mutiLang langKey="fill.realname"/></span>
            </td>
        </tr>
        <c:if test="${user.id==null }">
            <tr>
                <td align="right"><label class="Validform_label"> <t:mutiLang langKey="common.password"/>: </label></td>
                <td class="value">
                    <input type="password" class="inputxt" value="" name="password" plugin="passwordStrength"
                           datatype="*6-18" errormsg=""/>
                    <span class="passwordStrength" style="display: none;">
                        <span><t:mutiLang langKey="common.weak"/></span>
                        <span><t:mutiLang langKey="common.middle"/></span>
                        <span class="last"><t:mutiLang langKey="common.strong"/></span>
                    </span>
                    <span class="Validform_checktip"> <t:mutiLang langKey="password.rang6to18"/></span>
                </td>
            </tr>
            <tr>
                <td align="right"><label class="Validform_label"> <t:mutiLang
                        langKey="common.repeat.password"/>: </label></td>
                <td class="value">
                    <input id="repassword" class="inputxt" type="password" value="${user.password}" recheck="password"
                           datatype="*6-18" errormsg="两次输入的密码不一致！">
                    <span class="Validform_checktip"><t:mutiLang langKey="common.repeat.password"/></span>
                </td>
            </tr>
        </c:if>
        <tr>
            <td align="right"><label class="Validform_label"> <t:mutiLang langKey="common.department"/>: </label></td>
            <td class="value">
                    <%--update-start--Author:zhangguoming  Date:20140826 for：将combobox修改为combotree--%>
                    <%--<select class="easyui-combobox" data-options="multiple:true, editable: false" id="orgSelect" datatype="*">--%>
                <select class="easyui-combotree"
                        data-options="url:'departController.do?getOrgTree', multiple:true, cascadeCheck:false"
                        id="orgSelect" name="orgSelect" datatype="select1" style="width: 205px">
                        <%--update-end--Author:zhangguoming  Date:20140826 for：将combobox修改为combotree--%>
                    <c:forEach items="${departList}" var="depart">
                        <option value="${depart.id }">${depart.departname}</option>
                    </c:forEach>
                </select>
                <input id="orgIds" name="orgIds" type="hidden">
                <span class="Validform_checktip"><t:mutiLang langKey="please.select.department"/></span>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> <t:mutiLang langKey="common.role"/>: </label></td>
            <td class="value" nowrap>
                <input name="roleid"  type="hidden" value="${id}" id="roleid">
                <input name="roleName" class="inputxt" value="${roleName }" id="roleName" readonly="readonly"
                       datatype="*"/>
                <t:choose hiddenName="roleid" hiddenid="id" url="userController.do?roles" name="roleList"
                          icon="icon-search" title="common.role.list" textname="roleName" isclear="true"
                          isInit="true"></t:choose>
                <span class="Validform_checktip"><t:mutiLang langKey="role.muti.select"/></span>
            </td>
        </tr>
        <tr>
            <td align="right" nowrap><label class="Validform_label"> <t:mutiLang langKey="common.phone"/>: </label></td>
            <td class="value">
                <input class="inputxt" name="mobilePhone" value="${user.mobilePhone}"
                       validType="t_s_user,mobilePhone,id" datatype="n" errormsg="手机号码不正确" ignore="ignore">
                    <%--<c:if test="${user.mobilePhone!=null }"> ${user.mobilePhone } </c:if>--%>
                    <%--<c:if test="${user.mobilePhone==null }"></c:if>--%>
                <span class="Validform_checktip"></span>
            </td>

        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> <t:mutiLang langKey="common.tel"/>: </label></td>
            <td class="value">
                <input class="inputxt" name="officePhone" value="${user.officePhone}" datatype="n" errormsg="办公室电话不正确"
                       ignore="ignore">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> <t:mutiLang langKey="common.common.mail"/>: </label></td>
            <td class="value">
                <input class="inputxt" name="email" value="${user.email}" datatype="e" errormsg="邮箱格式不正确!"
                       ignore="ignore">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> 入职时间: </label></td>
            <td class="value">
                <input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd'})" style="width: 200px" id="indate"
                       name="indate" ignore="ignore"
                       value="<fmt:formatDate value='${user.indate}' type="date" pattern="yyyy-MM-dd"/>">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> 职务: </label></td>
            <td class="value">
                <input class="inputxt" name="zhiwu" value="${user.zhiwu}" datatype="s2-10"
                       ignore="ignore">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> QQ: </label></td>
            <td class="value">
                <input class="inputxt" name="qq" value="${user.qq}" datatype="s2-10"
                       ignore="ignore">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> 年龄: </label></td>
            <td class="value">
                <input class="inputxt" name="age" value="${user.age}" datatype="s2-10"
                       ignore="ignore">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> 性别: </label></td>
            <td class="value">
                <t:dictSelect field="sex" type="list"
                              typeGroupCode="sex" defaultVal="${user.sex}" hasLabel="false" title="性别">
                </t:dictSelect>
                <span class="Validform_checktip"></span>
                <label class="Validform_label" style="display: none;">性别</label>
            </td>
        </tr>
        <tr>
            <td align="right"><label class="Validform_label"> 通讯地址: </label></td>
            <td class="value">
                <input class="inputxt" name="address" value="${user.address}" datatype="s2-10"
                       ignore="ignore">
                <span class="Validform_checktip"></span>
            </td>
        </tr>
    </table>
</t:formvalid>
<%--update-end--Author:zhangguoming  Date:20140825 for：格式化页面代码 并 添加组织机构combobox多选框--%>

</body>
<script src="webpage/com/mingyue/mcui/mcui.js"></script>