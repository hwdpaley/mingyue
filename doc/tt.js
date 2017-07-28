/**
 * Created by Tony on 20/10/15.
 */
<a href="#" class="easyui-linkbutton l-btn l-btn-plain" plain="true" icon="icon-search" onclick="choose_40288a8a50831d470150831d47bd0000()"><span class="l-btn-left"><span class="l-btn-text icon-search l-btn-icon-left">选择</span></span></a>
var windowapi = frameElement.api, W = windowapi.opener;
function choose_40288a8a50831d470150831d47bd0000() {
    var url = 'mzycuxiaoController.do?mzyProduct_cx';
    var initValue = $('#productids').val();
    url += '&ids=' + initValue;
    if (typeof(windowapi) == 'undefined') {
        $.dialog({content: 'url:' + url, zIndex: 2100, title: '产品列表', lock: true, width: '600px', height: 350, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '确定', callback: clickcallback_40288a8a50831d470150831d47bd0000, focus: true},
            {name: '取消', callback: function () {
            }}
        ]});
    } else {
        $.dialog({content: 'url:' + url, zIndex: 2100, title: '产品列表', lock: true, parent: windowapi, width: '600px', height: 350, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '确定', callback: clickcallback_40288a8a50831d470150831d47bd0000, focus: true},
            {name: '取消', callback: function () {
            }}
        ]});
    }
}
function clearAll_40288a8a50831d470150831d47bd0000() {
    if ($('#name').length >= 1) {
        $('#name').val('');
        $('#name').blur();
    }
    if ($("input[name='name']").length >= 1) {
        $("input[name='name']").val('');
        $("input[name='name']").blur();
    }
    $('#productids').val("");
}
function clickcallback_40288a8a50831d470150831d47bd0000() {
    iframe = this.iframe.contentWindow;
    var name = iframe.getmzyProduct_cxSelections('name');
    if ($('#name').length >= 1) {
        $('#name').val(name);
        $('#name').blur();
    }
    if ($("input[name='name']").length >= 1) {
        $("input[name='name']").val(name);
        $("input[name='name']").blur();
    }
    var id = iframe.getmzyProduct_cxSelections('id');
    if (id !== undefined && id != "") {
        $('#productids').val(id);
    }
}