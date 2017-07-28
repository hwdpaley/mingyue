<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="org.jeecgframework.core.util.SysThemesUtil,org.jeecgframework.core.enums.SysThemesEnum" %>
<%@include file="/context/mytags.jsp" %>
<!DOCTYPE html>
<%
    String lang = org.jeecgframework.core.util.BrowserUtils.getBrowserLanguage(request);
    String langurl = "plug-in/mutiLang/" + lang + ".js";
    SysThemesEnum sysTheme = SysThemesUtil.getSysTheme(request);
    String lhgdialogTheme = SysThemesUtil.getLhgdialogTheme(sysTheme);
%>

<html>
<head>
    <title></title>
    <link rel="shortcut icon" href="plug-in/login/images/favicon.ico">
    <%--<link rel="shortcut icon" href="resources/fc/images/icon/favicon.ico">--%>
    <script src=<%=langurl%> type="text/javascript"></script>
    <!--[if lt IE 9]>
    <script src="plug-in/login/js/html5.js"></script>
    <![endif]-->
    <!--[if lt IE 7]>
    <script src="plug-in/login/js/iepng.js" type="text/javascript"></script>
    <script type="text/javascript">
        EvPNG.fix('div, ul, img, li, input'); //EvPNG.fix('包含透明PNG图片的标签'); 多个标签之间用英文逗号隔开。
    </script>
    <![endif]-->
    <link href="plug-in/login/css/zice.style.css" rel="stylesheet" type="text/css"/>
    <link href="plug-in/login/css/buttons.css" rel="stylesheet" type="text/css"/>
    <link href="plug-in/login/css/icon.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="plug-in/login/css/tipsy.css" media="all"/>
    <style type="text/css">
        html {
            background-image: none;
        }

        label.iPhoneCheckLabelOn span {
            padding-left: 0px
        }

        #versionBar {
            background-color: #212121;
            position: fixed;
            width: 100%;
            height: 35px;
            bottom: 0;
            left: 0;
            text-align: center;
            line-height: 35px;
            z-index: 11;
            -webkit-box-shadow: black 0px 10px 10px -10px inset;
            -moz-box-shadow: black 0px 10px 10px -10px inset;
            box-shadow: black 0px 10px 10px -10px inset;
        }

        .copyright {
            text-align: center;
            font-size: 10px;
            color: #CCC;
        }

        .copyright a {
            color: #A31F1A;
            text-decoration: none
        }

        .on_off_checkbox {
            width: 0px;
        }

        #login .logo {
            width: 500px;
            height: 51px;
        }
        .show {
            display: block;
        }
        .hide {
            display: none;
        }
        #notice1,
        #notice2 {
            color: red;
        }
        label {
            vertical-align: top;
            display: inline-block;
            width: 80px;
            text-align: right;
        }
        #wait1, #wait2 {
            text-align: left;
            color: #666;
            margin: 0;
        }
    </style>
</head>
<body>
<div id="Layer1" style="position:absolute; width:100%; height:100%; z-index:-1">
    <img id="backImage" height="100%" width="100%"/>
</div>
<div id="alertMessage"></div>
<div id="successLogin"></div>
<div class="text_success"><img src="plug-in/login/images/loader_green.gif" alt="Please wait"/> <span><t:mutiLang
        langKey="common.login.success.wait"/></span></div>
<div id="login">
    <div class="ribbon" style="background-image: url(/plug-in/login/images/typelogin.png);"></div>
    <div class="inner">
        <div class="logo"><img src="/plug-in/mingyue/images/logo1.png" height="80px" width="400px"/></div>
        <div class="formLogin">
            <form name="formLogin" id="formLogin" action="loginController.do?login" check="loginController.do?checkuser"
                  method="post">
                <%--<input name="userKey" type="hidden" id="userKey" value="D1B5CC2FE46C4CC983C073BCA897935608D926CD32992B5900" />--%>
                <div class="tip">
                    <input class="userName" name="userName" type="text" id="userName" title="" iscookie="true" value=""
                           nullmsg=""/>
                </div>
                <div class="tip">
                    <input class="password" name="password" type="password" id="password" title="" value="" nullmsg=""/>
                </div>
                <%--<div >--%>
                    <%--<div style="float: right; margin-left:-150px; margin-right: 20px;">--%>
                        <%--<img id="randCodeImage" src="randCodeImage"/>--%>
                    <%--</div>--%>
                    <%--<input class="randCode" name="randCode" type="text" id="randCode" title="" value="" nullmsg=""/>--%>
                <%--</div>--%>
                    <div style="margin-left:150px; ">
                        <%--<label>完成验证：</label>--%>

                            <div id="captcha1">
                                <p id="wait1" class="show">正在加载验证码......</p>
                            </div>

                    </div>
                    <br>
                    <p id="notice1" class="hide">请先完成验证</p>
                <%--update-end--Author:zhangguoming  Date:20140226 for：添加验证码--%>

                <div class="loginButton">
                    <div style="float: left; margin-left: -9px;">
                        <input type="checkbox" id="on_off" name="remember" checked="ture" class="on_off_checkbox"
                               value="0"/>
                        <span class="f_help"><t:mutiLang langKey="common.remember.user"/></span>
                    </div>
                    <div style="float: right; padding: 3px 0; margin-right: -12px;">
                        <div>
                            <ul class="uibutton-group">
                                <li><a class="uibutton normal" href="#" id="but_login"><t:mutiLang
                                        langKey="common.login"/></a></li>
                                <li><a class="uibutton normal" href="#" id="forgetpass"><t:mutiLang
                                        langKey="common.reset"/></a></li>
                            </ul>
                        </div>
                        <%--
                        <div style="float: left; margin-left: 30px;"><a href="init.jsp"><span class="f_help"><t:mutiLang langKey="common.init.data"/></span></a></div>
                        --%>
                        <%--<br>                            --%>
                        <%--<t:dictSelect id="langCode" field="langCode" typeGroupCode="lang" hasLabel="false" defaultVal="zh-cn"></t:dictSelect>--%>
                        <%--<input type="hidden" id="langCode" field="langCode" typeGroupCode="lang" hasLabel="false" value="zh-cn" />--%>
                    </div>
                    <div class="clear"></div>
                </div>
            </form>
        </div>
    </div>
    <div class="shadow"></div>
</div>
<!--Login div-->
<div class="clear"></div>
<div id="versionBar">
    <div class="copyright">&copy; <t:mutiLang langKey="common.copyright"/> <span class="tip">广州新比博信息科技有限公司 粤ICP备16023149号 2017-2018 </span></div>
</div>
<!-- Link JScript-->
<script type="text/javascript" src="plug-in/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="plug-in/jquery/jquery.cookie.js"></script>
<script type="text/javascript" src="plug-in/login/js/jquery-jrumble.js"></script>
<script type="text/javascript" src="plug-in/login/js/jquery.tipsy.js"></script>
<script type="text/javascript" src="plug-in/login/js/iphone.check.js"></script>
<script type="text/javascript" src="plug-in/login/js/login.js"></script>
<script type="text/javascript" src="plug-in/gt/gt.js"></script>
<script>
    var handler1 = function (captchaObj) {
        $("#but_login").click(function (e) {
            var result = captchaObj.getValidate();
            if (!result) {
                $("#notice1").show();
                setTimeout(function () {
                    $("#notice1").hide();
                }, 2000);

            }else{
                btnLogin();
                e.preventDefault();
            }
        });
        // 将验证码加到id为captcha的元素里，同时会有三个input的值用于表单提交
        captchaObj.appendTo("#captcha1");
        captchaObj.onReady(function () {
            $("#wait1").hide();
        });
        // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
    };
    $.ajax({
        url: "gt/register1?t=" + (new Date()).getTime(), // 加随机数防止缓存
        type: "get",
        dataType: "json",
        success: function (data) {
            // 调用 initGeetest 初始化参数
            // 参数1：配置参数
            // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
            initGeetest({
                gt: data.gt,
                challenge: data.challenge,
                new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
                offline: !data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
                product: "float", // 产品形式，包括：float，popup
                width: "100%"
                // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
            }, handler1);
        }
    });
</script>
<!--    <script type="text/javascript" src="plug-in/lhgDialog/lhgdialog.min.js"></script> -->
<%=lhgdialogTheme %>
</body>
</html>