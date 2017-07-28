/**
 * Created by Tony on 31/7/15.
 */
$(function () {
    var datagrid = $("#userListtb");
    datagrid.find("div[name='searchColums']").append($("#tempSearchColums div[name='searchColums']").html());
});
function lockObj(title, url, id) {

    gridname = id;
    var rowsData = $('#' + id).datagrid('getSelections');
    if (!rowsData || rowsData.length == 0) {
        tip('<t:mutiLang langKey="common.please.select.edit.item"/>');
        return;
    }
    url += '&id=' + rowsData[0].id;

    $.dialog.confirm('<t:mutiLang langKey="common.lock.user.tips"/>', function () {
        lockuploadify(url, '&id');
    }, function () {
    });
}
function unlockObj(title, url, id) {

    gridname = id;
    var rowsData = $('#' + id).datagrid('getSelections');
    if (!rowsData || rowsData.length == 0) {
        tip('<t:mutiLang langKey="common.please.select.edit.item"/>');
        return;
    }
    url += '&id=' + rowsData[0].id;

    $.dialog.confirm('<t:mutiLang langKey="common.unlock.user.tips"/>', function () {
        lockuploadify(url, '&id');
    }, function () {
    });
}
function lockuploadify(url, id) {
    $.ajax({
        async: false,
        cache: false,
        type: 'POST',
        url: url,// 请求的action路径
        error: function () {// 请求失败处理函数

        },
        success: function (data) {
            var d = $.parseJSON(data);
            if (d.success) {
                var msg = d.msg;
                tip(msg);
                reloadTable();
            }

        }
    });
}
//    var windowapi = frameElement.api, W = windowapi.opener;
function choose_297e201048183a730148183ad85c0001() {
    if (typeof(windowapi) == 'undefined') {
        $.dialog({content: 'url:departController.do?departSelect', zIndex: 2100, title: '<t:mutiLang langKey="common.department.list"/>', lock: true, width: 400, height: 350, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '<t:mutiLang langKey="common.confirm"/>', callback: clickcallback_297e201048183a730148183ad85c0001, focus: true},
            {name: '<t:mutiLang langKey="common.cancel"/>', callback: function () {
            }}
        ]});
    } else {
        $.dialog({content: 'url:departController.do?departSelect', zIndex: 2100, title: '<t:mutiLang langKey="common.department.list"/>', lock: true, parent: windowapi, width: 400, height: 350, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '<t:mutiLang langKey="common.confirm"/>', callback: clickcallback_297e201048183a730148183ad85c0001, focus: true},
            {name: '<t:mutiLang langKey="common.cancel"/>', callback: function () {
            }}
        ]});
    }
}
function clearAll_297e201048183a730148183ad85c0001() {
    if ($('#departname').length >= 1) {
        $('#departname').val('');
        $('#departname').blur();
    }
    if ($("input[name='departname']").length >= 1) {
        $("input[name='departname']").val('');
        $("input[name='departname']").blur();
    }
    $('#orgIds').val("");
}
function clickcallback_297e201048183a730148183ad85c0001() {
    iframe = this.iframe.contentWindow;
    var departname = iframe.getdepartListSelections('departname');
    if ($('#departname').length >= 1) {
        $('#departname').val(departname);
        $('#departname').blur();
    }
    if ($("input[name='departname']").length >= 1) {
        $("input[name='departname']").val(departname);
        $("input[name='departname']").blur();
    }
    var id = iframe.getdepartListSelections('id');
    if (id !== undefined && id != "") {
        $('#orgIds').val(id);
        $("input[name='orgIds']").val(id);
    }
}