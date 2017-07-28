var defaultOption = {series: [{type: "bar", data: []}]};
var reqParams = Util.fromQueryString(location.search.substr(1));
var ip = reqParams.ip || "localhost";
var deviceId = reqParams.deviceId;
if (!reqParams.dir) {
    $("#tobackButton").hide()
}
if (reqParams.hideToolbar) {
    $("#toolbar").hide()
}
function toBack() {
    var b = [];
    if (reqParams.dir) {
        b.push("dir=" + reqParams.dir)
    }
    if (ip) {
        b.push("ip=" + ip)
    }
    if (deviceId) {
        b.push("deviceId=" + deviceId)
    }
    b.push("_tc=" + new Date().getTime());
    window.location.replace("../asset/assetHome.html?" + b.join("&"))
}
var myChart;
var domMain = document.getElementById("main");
var curTheme = {};
var postData = {template: reqParams.template || "energyUsage", asset: reqParams.asset || "548a641f4dad40ea03237f44"};
function merge(d, f) {
    d = d || {};
    if (f) {
        for (var e in f) {
            d[e] = f[e]
        }
    }
    return d
}
function getRequest(f, g, h) {
    var j = deviceId;
    var i = {url: getUrl(f, j), type: j ? "POST" : (h || "GET")};
    if (j) {
        i.data = merge(g, {deviceId: deviceId, port: 2018, path: f, method: h || "GET"});
        return i
    } else {
        i.data = g || {};
        return i
    }
}
function getUrl(c, d) {
    if (ip) {
        if (d) {
            return "http://" + (ip) + ":2018/Service/Agent/nodeServiceAccess"
        } else {
            return "http://" + (ip) + ":2018" + c
        }
    }
    return c
}
function refresh(isBtnRefresh, model) {
    if (isBtnRefresh) {
        alert($("#start").val());
        $("#start").datesetValue("");
        $("#end").setValue("");
        delete postData.gte;
        delete postData.lte
    }
    if (myChart && myChart.dispose) {
        myChart.dispose()
    }
    if (model) {
        postData.model = model
    }
    //var start = $("#start").prop("readOnly", true).datetimepicker({mask: "9999/19/39"});
    //if (start && start.val() != "____/__/__") {
    //    postData.gte = new Date(start.val()).getTime()
    //} else {
    //    delete postData.gte
    //}
    //var end = $("#end").prop("readOnly", true).datetimepicker({mask: "9999/19/39"});
    //if (end && end.val() != "____/__/__") {
    //    postData.lte = new Date(end.val()).getTime()
    //} else {
    //    delete postData.lte
    //}
    myChart = echarts.init(domMain, curTheme);
    window.onresize = myChart.resize;
    //var req = getRequest("/Service/getMixedDataViewTemplate", postData);
    //var req = $.ajax(merge(req, {
    //    success: function (resp) {
    //        var mcres = eval("(" + (resp) + ")");
    //        myChart.setOption(mcres.res, true)
    //    }, error: function (resp) {
    //        myChart.setOption(defaultOption, true)
    //    }, dataType: "text"
    //}))
}
var echarts;
function requireCallback(c, d) {
    curTheme = d;
    echarts = c;
    ($("#main").height(document.documentElement.clientHeight - 110));
    refresh();
    window.onresize = myChart.resize
}
require.config({paths: {echarts: "./build/dist"}});
require(["echarts",'echarts/chart/bar'], requireCallback);