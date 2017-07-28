<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>顾客销售清单</title>
    <t:base type="jquery,easyui,tools,DatePicker"></t:base>
    <link rel="stylesheet" type="text/css" href="/plug-in/mingyue/css/layout.css">
    <script type="text/javascript" src="/plug-in/jquery/jquery.jqprint.js"></script>
    <script language="javascript">
        function printall() {
//            printXs();
            $(".printdiv").jqprint();
        }
        <%--function printXs() {--%>
            <%--var tabName = null;--%>
            <%--var url = 'mzy_xsprintController.do?printXs&xsprintId=' + ${mzy_xsprintPage.id};--%>
            <%--doSubmit(url);--%>
<%--//            $.dialog.confirm('确定兑换积分', function () {--%>
<%--//                doSubmit(url, tabName);--%>
<%--//                rowid = '';--%>
<%--////            $("#function-panel").html("");//删除角色后，清空对应的权限--%>
<%--//            }, function () {--%>
<%--//            });--%>
        <%--}--%>
//        function printview() {
//            document.all.WebBrowser1.ExecWB(7, 1);
//        }
    </script>
</head>
<body style="overflow-y: hidden" scroll="no">
<div class="printdiv">
    <div class="wrapper">
        <table width="100%" border="0" cellpadding="2" cellspacing="0">
            <tr>
                <td align="right" style="width: 50%">
                    <img src="/plug-in/mingyue/images/logo1.png" height="60px"/>
                </td>
                <td align="left" style="width:50%;font-size: 28px">
                    [${tsDepart.departname}]
                </td>
            </tr>
            <%--<tr>--%>
                <%--<td style="width: 30%">--%>

                <%--</td>--%>
                <%--<td align="left" style="width: 70%;font-size: 28px ">--%>
                    <%--消费开单--%>
                <%--</td>--%>
            <%--</tr>--%>
        </table>
        <table width="100%" border="0" cellpadding="2" cellspacing="0">
            <tr>
                <td width="100%">
                    <table border="0" cellpadding="3" cellspacing="1" width="100%" align="center"
                           >
                        <tr style="COLOR: #000000; ">
                            <td align="center" style="font-size: 16px">店址:${tsDepart.address}</td>
                            <td style="font-size: 16px"></td>
                            <td align="center" style="font-size: 16px">店电话:${tsDepart.tel}</td>
                        </tr>
                        <tr style="COLOR: #000000; ">
                            <td align="center" style="width:33%;font-size: 16px">
                                单号:${mzy_xsprintPage.idDanNum}
                            </td>
                            <td align="center" style="width:33%;font-size: 16px">
                                开单时间:<fmt:formatDate value='${mzy_xsprintPage.createDate}' type="date"
                                                     pattern="yyyy-MM-dd"/>
                            </td>
                            <td align="center" style="width:33%;font-size: 16px">
                                开单人:${mzy_xsprintPage.tsUser.realName}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <table width="100%" border="0" cellpadding="2" cellspacing="0">
            <tr>
                <td width="100%">
                    <table border="1" cellpadding="3" cellspacing="1" width="100%" align="center"
                           >
                        <tr style="COLOR: #000000; ">
                            <td align="center" style="width:15%;font-size: 16px">客户名称</td>
                            <td align="center"
                                style="width:35%;font-size: 16px">${mzy_xsprintPage.mzyCustomEntity.realName}</td>
                            <td align="center" style="width:15%;font-size: 16px">联系电话</td>
                            <td align="center"
                                style="width:35%;font-size: 16px">${mzy_xsprintPage.mzyCustomEntity.mobilePhone}</td>
                        </tr>
                        <tr style="COLOR: #000000; ">
                            <td align="center" style="width:15%;font-size: 16px">客户地址</td>
                            <td align="center"
                                style="width:35%;font-size: 16px">${mzy_xsprintPage.mzyCustomEntity.address}</td>
                            <td align="center" style="width:15%;font-size: 16px">会员号</td>
                            <td align="center"
                                style="width:35%;font-size: 16px">${mzy_xsprintPage.mzyCustomEntity.idNums}</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <table width="100%" border="0" cellpadding="2" cellspacing="0">
            <tr>
                <td width="100%">
                    <table border="1" cellpadding="3" cellspacing="1" width="100%" align="center"
                           >
                        <tr style="COLOR: #000000; ">
                            <td align="center" style="width:15%;font-size: 16px">产品名称</td>
                            <td align="center" style="width:15%;font-size: 16px">规格</td>
                            <td align="center" style="width:15%;font-size: 16px">单价</td>
                            <td align="center" style="width:15%;font-size: 16px">数量</td>
                            <td align="center" style="width:15%;font-size: 16px">合计</td>
                            <td align="center" style="width:25%;font-size: 16px">备注</td>
                        </tr>
                        <c:forEach items="${xsList}" var="xiaoshou">
                            <tr style="COLOR: #000000; ">
                                <td align="center"wd
                                    style="width:15%;font-size: 16px">${xiaoshou.mzyProductEntity.name}</td>
                                <td align="center"
                                    style="width:15%;font-size: 16px">${xiaoshou.mzyProductEntity.guige}</td>
                                <td align="center" style="width:15%;font-size: 16px">${xiaoshou.price}</td>
                                <td align="center" style="width:15%;font-size: 16px">${xiaoshou.nums}${xiaoshou.mzyProductEntity.dw}</td>
                                <td align="center" style="width:15%;font-size: 16px">${xiaoshou.total}</td>
                                <td align="center" style="width:25%;font-size: 16px">${xiaoshou.note}</td>
                            </tr>
                        </c:forEach>

                    </table>
                </td>
            </tr>
        </table>
        <table width="100%" border="0" cellpadding="2" cellspacing="0">
            <tr>
                <td width="100%">
                    <table border="0" cellpadding="3" cellspacing="1" width="100%" align="center"
                           >
                        <tr style="COLOR: #000000; ">
                            <td align="center" style="width:33%;font-size: 16px">应收金额:${total}</td>
                            <td align="center" style="width:33%;font-size: 16px">实收金额:${realTotal}</td>
                            <td align="center" style="width:33%;font-size: 16px">支付方式:${iscard}
                            </td>
                        </tr>
                        <tr style="COLOR: #000000; ">
                            <%--BACKGROUND-COLOR: #F4FAFF;--%>
                            <td align="center" style="width:33%;font-size: 16px">
                                理疗师:
                            </td>
                            <td align="center" style="width:33%;font-size: 16px">
                                顾客签名:
                            </td>
                            <td align="center" style="width:33%;font-size: 16px">
                                备注:${note}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <table width="100%" border="0" cellpadding="2" cellspacing="0">
            <tr>
                <td width="100%">
                    <table border="0" cellpadding="3" cellspacing="1" width="100%" align="center"
                           >

                        <tr style="COLOR: #000000; ">

                            <td align="center" style="width:60%;font-size: 16px">
                                打单时间:${printDate}
                            </td>
                            <td align="center" style="width:35%;"><a class="easyui-linkbutton" href="javascript:printall()">打印</a></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div class="push"></div>
    </div>
    <%--<div class="footer">--%>
        <%--<table border="0" cellpadding="3" cellspacing="1" width="100%" align="center"--%>
               <%-->--%>
            <%--<tr style="COLOR: #000000; ">--%>
                <%--<td align="center" style="width:35%;font-size: 16px">网址：www.mzyhsl.com</td>--%>
                <%--<td align="center" style="width:35%;font-size: 16px">电话：4000-922-908</td>--%>
                <%--<td align="center" style="width:35%;"><a class="easyui-linkbutton" href="javascript:printall()">打印</a></td>--%>
            <%--</tr>--%>
        <%--</table>--%>
    <%--</div>--%>
</div>
<%--<table border="0" cellpadding="3" cellspacing="1" width="100%" align="center"--%>
       <%--style="background-color: #b9d8f3;">--%>
    <%--<tr >--%>
        <%--<td align="center"><a class="easyui-linkbutton" href="javascript:printall()">打印</a></td>--%>
    <%--</tr>--%>
<%--</table>--%>

<%--<a class="easyui-linkbutton" href="javascript:printview()">打印2</a>--%>
</body>