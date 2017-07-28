<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui"></t:base>
<script type="text/javascript">
    var socket;
    if (!window.WebSocket) {
        window.WebSocket = window.MozWebSocket;
    }
    if (window.WebSocket) {
        console.log(location.host);
        socket = new WebSocket("ws://" + location.host + "/wsServlet");
        socket.onmessage = function (event) {
            var ta = document.getElementById('responseText');
            ta.value = ta.value + '\n' + event.data
            var oo=JSON.parse(event.data);
            console.log(oo);
        };
        socket.onopen = function (event) {
            console.log("Web Socket opened!");
            var ta = document.getElementById('responseText');
            ta.value = "Web Socket opened!";
        };
        socket.onclose = function (event) {
            var ta = document.getElementById('responseText');
            ta.value = ta.value + "Web Socket closed";
        };
    } else {
        alert("Your browser does not support Web Socket.");
    }

    function send(message) {
        if (!window.WebSocket) {
            return;
        }
        if (socket.readyState == WebSocket.OPEN) {
            socket.send(message);
        } else {
            alert("The socket is not open.");
        }
    }
    function clearOutput() {
        document.getElementById('responseText').value = '';
    }
</script>
<h3>参数</h3>

<form onsubmit="return false;">
    <textarea name="message" style="width: 100%; height:200px;">
        {
        "path":"/TiotWeb/service/Ajax/invokeProcedure.do",
        "body":{
        "system": "飞地方经济",
        "deviceConfigId": 156,
        "allow_overlay": true,
        "parameter":"192.168.11.5",
        "module":"ping"
        }
        }
    </textarea>

    <input type="button" value="提交请求" onclick="send(this.form.message.value)"/>
    &nbsp;<input type="button" value="清除输出" onclick="clearOutput()"/>

    <h3>输出</h3>
    <textarea id="responseText" style="width: 100%; height:200px;"></textarea>
</form>
