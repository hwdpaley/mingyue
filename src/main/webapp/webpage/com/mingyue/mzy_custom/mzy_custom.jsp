<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>顾客表</title>
    <t:base type="jquery,easyui,tools,DatePicker,Ck"></t:base>

    <script>
        <c:if test="${departIsNotOne>2 }">
        function setOrgIds() {
//            var orgIds = $("#orgSelect").combobox("getValues");
            var orgIds = $("#orgSelect").combotree("getValues");
            $("#orgIds").val(orgIds);
            checkTlYh();
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
        <c:if test="${departIsNotOne<=2 }">
        function setOrgIds() {
//            var orgIds = $("#orgSelect").combobox("getValues");
//                var orgIds = $("#org").val();
//                $("#orgIds").val(orgIds);
            checkTlYh();
        }

        </c:if>
        function checkTlYh() {
            $.messager.alert('提示信息', '请选择至少一项，调理类或是养护类');
            return false;
        }
    </script>

    <script src="webpage/com/mingyue/mcui/mcui.js"></script>
</head>
<body>
<%--style="overflow-y: hidden" scroll="yes"--%>
<t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzyCustomController.do?save"
             beforeSubmit="setOrgIds" >
<input id="id" name="id" type="hidden" value="${mzyCustomPage.id }">

<input id="roleid" name="roleid" type="hidden" value="${roleid}">
<%--<input id="CustomIdnum" name="CustomIdnum" type="hidden" value="${CustomIdnum}">--%>
<table style="width: 100%;" cellpadding="0" cellspacing="1" class="formtable">
<tr>
    <td align="right">
        顾客基本资料
    </td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr >
    <td align="right" width="15%" nowrap><label class="Validform_label"> </label></td>
    <td align="right" width="15%" nowrap>
        <input class="ui-button" type="button" value="上传图片"
               onclick="browseImages('picPath','photo_href')"/>
    </td>
    <td class="value" width="10%">
    </td>


    <td class="value" align="left">
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
    <td align="right"><label class="Validform_label"> 调理类: </label></td>
    <td class="value">
        <c:if test="${mzyCustomPage.isTl == 'on'}">
            <input style="width: 20px;" type="checkbox" name="isTl" id="isTl" checked="checked" />
        </c:if>
        <c:if test="${mzyCustomPage.isTl != 'on'}">
            <input style="width: 20px;" type="checkbox" name="isTl"  id="isTl" />
        </c:if>
         <span class="Validform_checktip">调理类</span>
    </td>
    <td align="right">
        <label class="Validform_label">
            养护类:
        </label>
    </td>
    <td class="value">
        <c:if test="${mzyCustomPage.isYh == 'on'}">
            <input style="width: 20px;" type="checkbox" name="isYh" id="isYh" checked="checked" />
        </c:if>
        <c:if test="${mzyCustomPage.isYh != 'on'}">
            <input style="width: 20px;" type="checkbox" name="isYh"  id="isYh" />
        </c:if>
        <span class="Validform_checktip">养护类</span>
    </td>

</tr>
<tr>
    <td align="right"><label class="Validform_label"> 姓名: </label></td>
    <td class="value">
        <input id="name" class="inputxt" name="name" value="${mzyCustomPage.realName }" datatype="s2-10">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label">
            会员卡号:
        </label>
    </td>
    <td class="value">
        <input class="inputxt" id="idNums" name="idNums" ignore="ignore"
               value="${CustomIdnum}" readonly="readonly">
        <span class="Validform_checktip"></span>
    </td>

</tr>
<c:if test="${departIsNotOne >2 }">
    <tr>
        <td align="right"><label class="Validform_label"> <t:mutiLang langKey="common.department"/>: </label></td>
        <td class="value">
                <%--update-start--Author:zhangguoming  Date:20140826 for：将combobox修改为combotree--%>
                <%--<select class="easyui-combobox" data-options="multiple:true, editable: false" id="orgSelect" datatype="*">--%>
            <select class="easyui-combotree"
                    data-options="url:'departController.do?getOrgTree', multiple:false, cascadeCheck:false"
                    id="orgSelect" name="orgSelect" datatype="select1" style="width: 205px">
                    <%--update-end--Author:zhangguoming  Date:20140826 for：将combobox修改为combotree--%>
                <c:forEach items="${departList}" var="depart">
                    <option value="${depart.id }">${depart.departname}</option>
                </c:forEach>
            </select>
            <input id="orgIds" name="orgIds" type="hidden">

        </td>
        <td align="right">
            <label class="Validform_label">
                消费积分:
            </label>
        </td>
        <td class="value">
            <input class="inputxt" id="jf" name="jf" ignore="ignore"
                   value="${mzyCustomPage.jf}">
            <span class="Validform_checktip"></span>
        </td>
    </tr>
</c:if>
<c:if test="${departIsNotOne<=2 }">
    <input id="orgIds" name="orgIds" type="hidden" value="${orgIds}">

    <tr>
        <td align="right"><label class="Validform_label"> <t:mutiLang langKey="common.department"/>: </label></td>
        <td id="org" name="org" class="value">
            <c:forEach items="${departList}" var="depart">
                ${depart.departname}
            </c:forEach>

        </td>
        <td align="right">
            <label class="Validform_label">
                消费积分:
            </label>
        </td>
        <td class="value">
                ${mzyCustomPage.jf}
        </td>
    </tr>
</c:if>
<tr>
    <td align="right" nowrap><label class="Validform_label"> <t:mutiLang langKey="common.phone"/>: </label></td>
    <td class="value">
        <input class="inputxt" name="mobilePhone" value="${mzyCustomPage.mobilePhone}"
               validType="t_s_user,mobilePhone,id" datatype="n" errormsg="手机号码不正确" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label">
            客户类型:
        </label>
    </td>
    <td class="value">
        <t:dictSelect field="customType" type="list"
                      typeGroupCode="custom" defaultVal="${mzyCustomPage.customType}" hasLabel="false" title="客户类型">
        </t:dictSelect>
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right"><label class="Validform_label"> 年龄: </label></td>
    <td class="value">
        <input class="inputxt" name="age" value="${mzyCustomPage.age}"
               ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right"><label class="Validform_label"> 性别: </label>
    </td>
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
        <input class="inputxt" name="address" value="${mzyCustomPage.address}"
               ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label">
            就读学校:
        </label>
    </td>
    <td class="value">
        <input class="inputxt" id="school" name="school" ignore="ignore"
               value="${mzyCustomPage.school}">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right"><label class="Validform_label"> 喜欢的物品: </label></td>
    <td class="value">
        <input class="inputxt" name="likeWp" value="${mzyCustomPage.likeWp}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label"> 喜欢的运动:</label></td>
    <td class="value">
        <input class="inputxt" name="likeYd" value="${mzyCustomPage.likeYd}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right"><label class="Validform_label"> 喜欢的菜肴: </label></td>
    <td class="value">
        <input class="inputxt" name="likeCy" value="${mzyCustomPage.likeCy}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label"> 兴趣爱好:</label></td>
    <td class="value">
        <input class="inputxt" name="xqah" value="${mzyCustomPage.xqah}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right"><label class="Validform_label"> 家庭情况: </label></td>
    <td class="value">
        <input class="inputxt" name="jtqk" value="${mzyCustomPage.jtqk}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label"> 交通工具:</label></td>
    <td class="value">
        <input class="inputxt" name="jtgj" value="${mzyCustomPage.jtgj}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right"><label class="Validform_label"> 生日: </label></td>
    <td class="value">
        <input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd'})" style="width: 200px" id="shengri"
               name="shengri" ignore="ignore"
               value="<fmt:formatDate value='${mzyCustomPage.shengri}' type="date" pattern="yyyy-MM-dd"/>">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label"> 体质:</label></td>
    <td class="value">
        <input class="inputxt" name="tz" value="${mzyCustomPage.tz}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right"><label class="Validform_label"> 方便理疗开始时间: </label></td>
    <td class="value">
        <input class="inputxt" name="fbsj_s" value="${mzyCustomPage.fbsj_s}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right"><label class="Validform_label"> 方便理疗结束时间: </label></td>
    <td class="value">
        <input class="inputxt" name="fbsj_e" value="${mzyCustomPage.fbsj_e}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right"><label class="Validform_label"> 联系地址: </label></td>
    <td class="value">
        <input class="inputxt" name="lxAddress" value="${mzyCustomPage.lxAddress}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label"> 身高(CM):</label></td>
    <td class="value">
        <input class="inputxt" name="shenggao" value="${mzyCustomPage.shenggao}" ignore="ignore">
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">血型:</label>
    </td>
    <td class="value">
        <t:dictSelect field="xuexing" type="list"
                      typeGroupCode="xuexing" defaultVal="${mzyCustomPage.xuexing}" hasLabel="false" title="是否斜视">
        </t:dictSelect>
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label">身份:</label>
    </td>
    <td class="value">
        <t:dictSelect field="shengfen" type="list"
                      typeGroupCode="shengfen" defaultVal="${mzyCustomPage.shengfen}" hasLabel="false" title="是否治疗">
        </t:dictSelect>
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            近视年龄:
        </label>
    </td>
    <td class="value">
        <input class="inputxt" id="jsage" name="jsage" ignore="ignore"
               value="${mzyCustomPage.jsage}">
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label">
            戴镜年龄:
        </label>
    </td>
    <td class="value">
        <input class="inputxt" id="djage" name="djage" ignore="ignore"
               value="${mzyCustomPage.djage}">
        <span class="Validform_checktip"></span>
    </td>
</tr>


<tr>
    <td align="right">
        <label class="Validform_label">
            是否斜视:
        </label>
    </td>
    <td class="value">
        <t:dictSelect field="isxs" type="list"
                      typeGroupCode="sf_yn" defaultVal="${mzyCustomPage.isxs}" hasLabel="false" title="是否斜视">
        </t:dictSelect>
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label">
            是否治疗:
        </label>
    </td>
    <td class="value">
        <t:dictSelect field="iszl" type="list"
                      typeGroupCode="sf_yn" defaultVal="${mzyCustomPage.iszl}" hasLabel="false" title="是否治疗">
        </t:dictSelect>
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            是否遗传性近视:
        </label>
    </td>
    <td class="value">
        <t:dictSelect field="isycjs" type="list"
                      typeGroupCode="sf_yn" defaultVal="${mzyCustomPage.isycjs}" hasLabel="false" title="是否遗传近视">
        </t:dictSelect>
        <span class="Validform_checktip"></span>
    </td>
    <td align="right">
        <label class="Validform_label">
            是否弱视:
        </label>
    </td>
    <td class="value">
        <t:dictSelect field="isrs" type="list"
                      typeGroupCode="sf_yn" defaultVal="${mzyCustomPage.isrs}" hasLabel="false" title="是否弱视">
        </t:dictSelect>
        <span class="Validform_checktip"></span>
    </td>
</tr>
<tr>
    <td align="right">
        <label class="Validform_label">
            康复师:
        </label>
    </td>
    <td class="value">
        <input id="kfmenids" name="kfmenids" type="hidden" value="${id}">
        <input id="realName" name="realName" class="inputxt" value="${mzyCustomPage.kfmen }" readonly="readonly"
                />
        <t:choose hiddenName="kfmenids" hiddenid="id" url="mzyCustomController.do?kfs" name="kfsList"
                  icon="icon-search" title="康复师列表" textname="realName" isclear="true"
                  isInit="true"></t:choose>
    </td>
    <td align="right">
        <label class="Validform_label">
            备注:
        </label>
    </td>
    <td class="value">
        <textarea id="note" name="note" rows="3" cols="25">
                ${mzyCustomPage.note}
        </textarea>
    </td>

</tr>
</table>
</t:formvalid>
</body>