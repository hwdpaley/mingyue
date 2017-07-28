//var filedTypes = ['check', 'database', 'key', 'page'];
var filedTypes = ['database'];
var headerTr = "template_header_";
var bodytr = "add_column_table_template_";
var iframeId = "iframe_";
var fieldData = [];// 字段的数据
var iframeLoadNumber = 0; // 当前加载的Iframe的数量
var rownumber = 0;//标识当前序号
var toDelete = [];  //保存表单待删除属性字段id
$(document).ready(
    iframeLoaded());
//$("#iframe_check").load(iframeLoaded());
$("#iframe_database").load(iframeLoaded());
//$("#iframe_key").load(iframeLoaded());
//$("#iframe_page").load(iframeLoaded());

function iframeLoaded() {
    iframeLoadNumber++;
    if (iframeLoadNumber >= 2) {
        $(".datagrid-toolbar").parent().css("width", "auto");
        setTimeout(initData, 500);
    }
}
var fixHelper = function (e, ui) {
    ui.children().each(function () {
        $(this).width($(this).width());
    });
    return ui;
};
setTimeout(function () {
    $("#tab_div_database tbody").sortable({
        helper: fixHelper,
        items: '> tr',
        forcePlaceholderSize: true,
        stop: function (event, ui) {
            var textContent = ui.item.context.innerText ?
                ui.item.context.innerText.toString() :
                ui.item.context.textContent.toString();
            var endString = textContent.indexOf("S") != -1 ? textContent.indexOf("S") : textContent.length;
            var startRownum = textContent.substring(0, endString).replace(/(^\s*)|(\s*$)/g, '');
            var targetIndex = ui.item.context.rowIndex;
            for (var i = 0; i < filedTypes.length; i++) {
                if (filedTypes[i] == "database" && startRownum != (targetIndex + 1)) continue;
                if (startRownum == (targetIndex + 1)) {  //处理当前行和下一行交换位置
                    $("#tab_div_" + filedTypes[i]).find("tr").eq(startRownum).insertBefore($("#tab_div_" + filedTypes[i]).find("tr").eq(targetIndex));
                } else if (startRownum > targetIndex) {
                    $("#tab_div_" + filedTypes[i]).find("tr").eq(startRownum - 1).insertBefore($("#tab_div_" + filedTypes[i]).find("tr").eq(targetIndex));
                } else {
                    $("#tab_div_" + filedTypes[i]).find("tr").eq(startRownum - 1).insertAfter($("#tab_div_" + filedTypes[i]).find("tr").eq(targetIndex));
                }
            }
            for (var i = 0; i < filedTypes.length; i++) {
                resetTrNum("#tab_div_" + filedTypes[i]);
            }
        }
    });
    // .disableSelection()研究下这个的意义好像这里没啥作用,影响了火狐
}, 2000);
function initData() {
    addTableHead();
    $.get("mzy_xsprintController.do?getXiaoshouList&xsprintId=" + $("#id").val(),
        getDataHanlder);
    jformTypeChange();
    fixTab();
    $('.t_table').height($(window).height() - 200);
    $(window).resize(function () {
        $('.t_table').height($(window).height() - 200);
    });

}
function initData_new() {
//    addTableHead();
    delAllColumn();
    $.get("mzy_xsprintController.do?getXiaoshouList&xsprintId=" + $("#id").val(),
        getDataHanlder);
    jformTypeChange();
    fixTab();
    $('.t_table').height($(window).height() - 200);
    $(window).resize(function () {
        $('.t_table').height($(window).height() - 200);
    });

}
/**
 * 添加表头
 */
function addTableHead() {
    for (var i = 0; i < filedTypes.length; i++) {
        var tr = $(getIframeDocument(filedTypes[i])).find("#"
            + headerTr + filedTypes[i] + " tr").clone();
        $("#tab_div_" + filedTypes[i] + "_title").append(tr);
    }
}
// 兼容不同浏览器获取iframe 内容
//主要情况是ie11下的版本是火狐的标识倒是出差错
function getIframeDocument(id) {
    try {
        if (window.frames["iframe_" + id].contentDocument) {
            return window.frames["iframe_" + id].contentDocument;
        }
        return window.frames["iframe_" + id].document;
    } catch (e) {
    }
    return document.getElementById("iframe_" + id).contentDocument;
}

/**
 * 获取数据的回调
 *
 * @param {}
 *            data
 */
function getDataHanlder(data) {

    data = eval("(" + data + ")");
    // 兼容之前order最小为0的问题
//	var orderMin = data[0].orderNum == 0;
    $.each(data, function (idx, item) {
        rownumber = idx;//存储当前序号
        for (var i = 0; i < filedTypes.length; i++) {
            initTrData(item, filedTypes[i], false);
        }
    });
    jformTypeChange();
    fixTab();

}
/**
 * 添加行数据
 *
 * @param {}
 *            item 这个数据
 * @param {}
 *            filedType 这一行的类型
 */
function initTrData(item, filedType, orderMin) {
    var tr = $(getIframeDocument(filedType)).find("#" + bodytr
        + filedType + " tr").clone();
    var isId = item.fieldName == "id";
    $(':input, select,a', $(tr)).each(function () {
        var $this = $(this), name = $this.attr('name'), val = $this.val();
        if (isId) {
            setAttrForThis($this);
        }
        //自定义一个序号<a> 按名字进行获取对象，并进行序号指定
        if (name.indexOf("#rindex#") > 0) {
            $this.attr("name", name.replace('#rindex#', rownumber));
            $this.html(rownumber + 1);
        }
        if (name.indexOf("#index#") > 0) {
            var fieldName = name.replace("columns[#index#].", "");
            $this.attr("name", name.replace('#index#', rownumber));

            if (item[fieldName] != "Y" && item[fieldName] != "N") {
                $this.val(item[fieldName]);
            } else {
                item[fieldName] == "Y" ? $this.attr("checked", true) : $this
                    .attr("checked", false);
            }
        } else if (name != "ck") {
            $this.attr("name", name.replace('_index', rownumber));
            $this.val(name.indexOf("columnsfieldName") != -1
                ? item.fieldName
                : item.content);
        }
        else {
            $this.val(item.id);
        }
    });
    $("#tab_div_" + filedType).append(tr);
}

function setAttrForThis($this) {
    if ($this.is('select')) {
        $this.attr("onfocus", "this.defOpt=this.selectedIndex");
        $this.attr("onchange", "this.selectedIndex=this.defOpt;");
    } else if ($this.is('input') && $this.attr('type') == 'text') {
        $this.attr("readonly", "readonly");
    } else if ($this.is('input') && $this.attr('type') == 'checkbox') {
        $this.attr("onclick", "return false;");
    }
}

/**
 * 添加行
 */
function addColumnBtnClick() {
//	for (var i = 0; i < filedTypes.length; i++) {
//		addTrToTable(filedTypes[i]);
//	}
    addTrToTable(filedTypes[0]);
}
function addTrToTable(filedType) {
    var tr = $(getIframeDocument(filedType)).find("#" + bodytr
        + filedType + " tr").clone();
    $("#tab_div_" + filedType).append(tr);
    resetTrNum('#tab_div_' + filedType);
}
function deleteUnUsedFiled() {
//    if (toDelete && toDelete.length > 0) {
//        for (index in toDelete) {
//            if (toDelete[index] == "on") continue;
//            $.post("cgFormHeadController.do?delField&id=" + toDelete[index]);
//        }
//    }
    var all = [];
    $("#tab_div_database").find("tr").each(function (index, ele) {
        var $this = $(this);
        var pd = [];
        var selectIndex = ele.rowIndex;
        var aa = "columns[" + selectIndex + "].";
        $(':input, select,a', $($this)).each(function () {
            var $this = $(this), name = $this.attr('name'), val = $this.val();

            var fieldName = name.replace(aa, "");
            if (fieldName == "id") {
                pd.push(val);
            } else if (fieldName == "nums") {
                pd.push(val);
            } else if (fieldName == "price") {
                pd.push(val);
            }
        });
        if (pd.length > 0) {
            all.push(pd);
        }
    });

    ok_product();
//    $.ajax({
//        url: 'mzy_xsprintController.do?saveSelect&xsprintId=' + $("#id").val(),
//        type: 'post',
//        data: {
//            ids: all.join(',')
//        },
//        cache: false,
//        success: function (data) {
//            var d = $.parseJSON(data);
//            if (d.success) {
//
//            }
//        }
//    });
    return true;
}
/**
 * 删除行
 */
function delColumnBtnClick() {
    // 获取当前的check的行并进行遍历
    $("#tab_div_database").find("input[name='ck']:checked").parent().parent("tr").each(function (index, ele) {
        $.post("mzy_xsprintController.do?delField&xsprintId="+$("#id").val()+"&id="+ $("#tab_div_database").find("input[name='ck']:checked").val());
        toDelete.push($(this).find("input[name='ck']:checked").val());
        var selectIndex = ele.rowIndex;
        for (var i = 0; i < filedTypes.length; i++) {
            $("#tab_div_" + filedTypes[i]).find("tr").eq(selectIndex).remove();
        }
    })
    for (var i = 0; i < filedTypes.length; i++) {
        resetTrNum("#tab_div_" + filedTypes[i]);
    }
}
function delAllColumn() {
    // 获取当前的check的行并进行遍历
    toDelete=[];
    $("#tab_div_database").find("tr").each(function (index, ele) {
        var selectIndex = ele.rowIndex;
        for (var i = 0; i < filedTypes.length; i++) {
            $("#tab_div_" + filedTypes[i]).find("tr").eq(selectIndex).remove();
        }
    })
    for (var i = 0; i < filedTypes.length; i++) {
        resetTrNum("#tab_div_" + filedTypes[i]);
    }
}
/**
 * 重设table的order
 *
 * @param {}
 *            tableId
 */
function resetTrNum(tableId) {
    $(tableId + " tbody tr").each(function (i) {
        $(':input, select,a', this).each(function () {
            var $this = $(this), name = $this.attr('name'), val = $this
                .val();
            if (name != null && name.indexOf("#index#") >= 0) {
                $this.attr("name", name.replace('#index#', i));
                /*if (name.indexOf('orderNum') >= 0) {  Date20131212 liuht取消重置orderNumber
                 $this.val(getMaxNum());
                 }*/
            } else if (name != null && name.indexOf("_index") >= 0) {
                $this.attr("name", name.replace('_index', i));
            } else if (name != null && name != "ck") {
                $this.attr("name", name.replace(getNowIndex(name), i));
            }
            //代码移动位置，优化调整     Date20131212
            if (name != null && name.indexOf("rownumber") >= 0) {
                $this.html(i + 1);   // 移动tr|新加行|删除行 ---重置 rownumber值
            }
            if (name != null && name.indexOf("orderNum") >= 0) {
                $this.val(i + 1);   // 移动tr|新加行|删除行 ---重置 orderNumber值
            }

        });
    });
    jformTypeChange();
}
/**
 * 获取最大的 orderNum
 */
function getMaxNum() {
    var maxNum = 0;
    $("input[name*='orderNum']").each(function () {
        maxNum = parseInt($(this).val()) > maxNum
            ? $(this).val()
            : maxNum;
    });
    return parseInt(maxNum) + 1;
}

/**
 * 同步fieldName
 */
$(document).on('change', '.fieldNameInput', 'columnsfieldName', valueChange);

/**
 * 同步content
 */
$(document).on('change', '.contentInput', 'columnscontent', valueChange);


function valueChange(e) {
    var val = $(this).val();
    var index = getNowIndex($(this).attr('name'));
    for (var i = 0; i < filedTypes.length; i++) {
        $("#tab_div_" + filedTypes[i]).find("input[name='" + e.data + index + "']").val(val);
    }
}

/**
 * 获取当前的索引值
 *
 * @param {}
 *            name 这个元素的Name
 * @return {}
 */
function getNowIndex(name) {
    var s = name.indexOf("[");
    var e = name.indexOf("]");
    if (s >= 0 && e >= 0) {
        return name.substring(s + 1, e);
    } else if (name.indexOf("columnsfieldName") >= 0) {
        return name.substring(16);
    } else if (name.indexOf("columnscontent") >= 0) {
        return name.substring(14);   //修改字段备注无法同步问题
    }
}

/**
 * 主键策略的改变,控制序列的输入
 */
function jformPkTypeChange() {
    var pkType = $("#jformPkType").val();
    var $idInput = null;
    $("[name$='fieldName']").each(function () {
        var fieldv = $(this).val();
        if (fieldv && fieldv == "id") {
            $idInput = $(this);
        }
    });
    var $idInput_type = $idInput.parent().parent().find("select[name$='type']");
    var $idInput_length = $idInput.parent().parent().find("input[name$='length']");
    $("#jformPkSequence").val("");
    if (pkType && pkType == "SEQUENCE") {
        $("#jformPkTypeTd").attr("colspan", "1");
        $("#jformPkSequenceV").attr("style", "");
        $("#jformPkSequenceN").attr("style", "");
        $("#jformPkSequence").attr("datatype", "*");
        $idInput_type.val("int");
        $idInput_length.val("20");
    } else {
        $("#jformPkSequenceV").attr("style", "display: none;");
        $("#jformPkSequenceN").attr("style", "display: none;");
        $("#jformPkTypeTd").attr("colspan", "3");
        $("#jformPkSequence").removeAttr("datatype");
        if (pkType == "NATIVE") {
            $idInput_type.val("int");
            $idInput_length.val("20");
        } else if (pkType == "UUID") {
            $idInput_type.val("string");
            $idInput_length.val("36");
        }
    }
}
/**
 * 表类型的改变,附表才可以设置主表
 */
function jformTypeChange() {
    openOrCloseSetKeyOp($("#jformType").val() == 3);
    openOrCloseRelationTypeDisplay($("#jformType").val() == 3);
}
//控制：只有附表才可以选择附表关联类型
function openOrCloseRelationTypeDisplay(boo) {
    if (boo) {
        $("#relation_type_div").attr("style", "display: block;");
    } else {
        $("#relation_type_div").attr("style", "display: none;");
    }
}

function openOrCloseSetKeyOp(boo) {
    $("#tab_div_key tbody tr").each(function (i) {
        $(':input', this).each(function () {
            var $this = $(this), name = $this.attr('name');
            if (name != null && (name.indexOf("mainTable") >= 0
                || name.indexOf("mainField") >= 0) &&
                name != "columns[0].mainTable" && name != "columns[0].mainField") {
                boo ? $this.removeAttr("readonly") :
                    $this.attr("readonly", "readonly");
            }
        });
    });
}


/**
 * fix修复
 */
function fixTab() {
//    fix("database");
    $('#tabs').tabs({
        onSelect: function (title) {
            if (title == "产品列表") {
                fix("database");
            }
//            else if (title == "页面属性") {
//                fix("page");
//            }
//            else if (title == "校验字典") {
//                fix("check");
//            }
//            else if (title == "外键") {
//                fix("key");
//            }
            $('#tabs .panel-body').css('width', 'auto');
        }
    });
    $('#t_table_database').scroll(function () {
        $('#tab_div_database_title').css('margin-left', -($('#t_table_database').scrollLeft()));
    });
//    $('#t_table_page').scroll(function () {
//        $('#tab_div_page_title').css('margin-left', -($('#t_table_page').scrollLeft()));
//    });
//    $('#t_table_check').scroll(function () {
//        $('#tab_div_check_title').css('margin-left', -($('#t_table_check').scrollLeft()));
//    });
//    $('#t_table_key').scroll(function () {
//        $('#tab_div_key_title').css('margin-left', -($('#t_table_key').scrollLeft()));
//    });
}

//利用js让头部与内容对应列宽度一致。
function fix(type) {
    for (var i = 0; i <= $('#tab_div_' + type + ' tr:last').find('td:last').index(); i++) {
        $('#tab_div_' + type + '_title th').eq(i).css('width',
            $('#tab_div_' + type + ' tr:last').find('td').eq(i).width());
    }
    $('#tab_div_' + type + '_title').css('width',
        $('#tab_div_' + type + ' tr:last').width());
}
function choose_product() {
    if (typeof(windowapi) == 'undefined') {
        $.dialog({content: 'url:mzyKuCunController.do?mzyKuCunSelect&xsprintId=' + $("#id").val(), zIndex: 2100, title: '产品列表', lock: true, width: 700, height: 450, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '确定', callback: clickcallback_product, focus: true},
            {name: '取消', callback: cance_product,focus: true}
        ]});
    } else {
        $.dialog({content: 'url:mzyKuCunController.do?mzyKuCunSelect&xsprintId=' + $("#id").val(), zIndex: 2100, title: '产品列表', lock: true, parent: windowapi, width: 700, height: 450, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '确定', callback: clickcallback_product, focus: true},
            {name: '取消', callback: cance_product,focus: true}
        ]});
    }
}
function clickcallback_product() {
    iframe = this.iframe.contentWindow;
    var name = iframe.getmzyKuCunListSelections('name');
    var id = iframe.getmzyKuCunListSelections('id');
    $.ajax({
        url: 'mzy_xsprintController.do?mzyKuCunSelect&xsprintId=' + $("#id").val(),
        type: 'post',
        data: {
            ids: id.join(',')
        },
        cache: false,
        success: function (data) {
            var d = $.parseJSON(data);
            if (d.success) {
                initData_new();
//                var msg = d.msg;
//                tip(msg);
//                reloadTable();
//                $("#"+gname).datagrid('unselectAll');
//                ids='';
            }
        }
    });
//    for (var i = 0; i < name.length; i++) {
//        addColumnBtnClick();
//    }
////    if ($('#departname').length >= 1) {
////        $('#departname').val(name);
////        $('#departname').blur();
////    }
////    if ($("input[name='departname']").length >= 1) {
////        $("input[name='departname']").val(name);
////        $("input[name='departname']").blur();
////    }
//    if (id !== undefined && id != "") {
//        $('#productIds').val(id);
//        $("input[name='productIds']").val(id);
//    }
}

function cance_product() {
    $.ajax({
        url: 'mzy_xsprintController.do?check_xprin&xsprintId=' + $("#id").val(),
        type: 'post',
        data: {
//            ids: id.join(',')
        },
        cache: false,
        success: function (data) {
            var d = $.parseJSON(data);
            if (d.success) {
                initData_new();
//                var msg = d.msg;
//                tip(msg);
//                reloadTable();
//                $("#"+gname).datagrid('unselectAll');
//                ids='';
            }
        }
    });
}
var isok=false;
function ok_product() {
    var all = [];
    $("#tab_div_database").find("tr").each(function (index, ele) {
        var $this = $(this);
        var pd = [];
        var selectIndex = ele.rowIndex;
        var aa = "columns[" + selectIndex + "].";
        $(':input, select,a', $($this)).each(function () {
            var $this = $(this), name = $this.attr('name'), val = $this.val();
            var fieldName = name.replace(aa, "");
            if (fieldName == "id") {
                pd.push(val);
            } else if (fieldName == "nums") {
                pd.push(val);
            } else if (fieldName == "price") {
                pd.push(val);
            }
        });
        if (pd.length > 0) {
            all.push(pd);
        }
    });

    var total=document.getElementById("realTotal").value;
    var note=document.getElementById("note").value;
    var iscard=document.getElementById("iscard").value;
    if(all.length>0){
        $.ajax({
            url: 'mzy_xsprintController.do?saveSelect&xsprintId=' + $("#id").val()+'&realTotal='+total+'&note='+note+'&iscard='+iscard,
            type: 'post',
            data: {
                ids: all.join(',')
            },
            cache: false,
            success: function (data) {
                var d = $.parseJSON(data);
                if (d.success) {
//                    $("#printBtn").attr("disabled", false);
                    isok=true;
                    tip("开单输入完成！");
                }
            }
        });
    }else{
        tip("请先选择产品");
    }


}
function print_product(){
    if(isok){

    }
    else{
        ok_product();
//        tip("请先点击确认");
    }
    if (typeof(windowapi) == 'undefined') {
        $.dialog({content: 'url:mzy_xsprintController.do?xsprint_1'+'&id='+ $("#id").val(), zIndex: 2100, title: '销售打单', lock: true, width: 1000, height: 650, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '关闭', callback: function () {
            }}
        ]});
    } else {
        $.dialog({content: 'url:mzy_xsprintController.do?xsprint_1'+'&id='+ $("#id").val(), zIndex: 2100, title: '销售打单', lock: true, parent: windowapi, width: 1000, height: 650, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '关闭', callback: function () {
            }}
        ]});
    }
}
function choose_pro() {
    if (typeof(windowapi) == 'undefined') {
        $.dialog({content: 'url:mzycpkcsqController.do?mzyProductSelect&sqxdId=' + $("#id").val(), zIndex: 2100, title: '产品列表', lock: true, width: 700, height: 450, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '确定', callback: clickcallback_pro, focus: true},
            {name: '取消', callback: cance_pro,focus: true}
        ]});
    } else {
        $.dialog({content: 'url:mzycpkcsqController.do?mzyProductSelect&sqxdId=' + $("#id").val(), zIndex: 2100, title: '产品列表', lock: true, parent: windowapi, width: 700, height: 450, left: '85%', top: '65%', opacity: 0.4, button: [
            {name: '确定', callback: clickcallback_pro, focus: true},
            {name: '取消', callback: cance_pro,focus: true}
        ]});
    }
}
function clickcallback_pro() {
    iframe = this.iframe.contentWindow;
    var name = iframe.getmzyProListSelections('name');
    var id = iframe.getmzyProListSelections('id');
    $.ajax({
        url: 'mzycpkcsqController.do?mzyProductSelected&sqxdId=' + $("#id").val(),
        type: 'post',
        data: {
            ids: id.join(',')
        },
        cache: false,
        success: function (data) {
            var d = $.parseJSON(data);
            if (d.success) {
                initData_pro();
//                var msg = d.msg;
//                tip(msg);
//                reloadTable();
//                $("#"+gname).datagrid('unselectAll');
//                ids='';
            }
        }
    });
}
function initData_pro() {
//    addTableHead();
    delAllColumn();
    $.get("mzycpkcsqController.do?getSqxdList&sqxdId=" + $("#id").val(),
        getDataHanlder);
    jformTypeChange();
    fixTab();
    $('.t_table').height($(window).height() - 200);
    $(window).resize(function () {
        $('.t_table').height($(window).height() - 200);
    });

}
var isProok=false;
function ok_pro() {
    var all = [];
    $("#tab_div_database").find("tr").each(function (index, ele) {
        var $this = $(this);
        var pd = [];
        var selectIndex = ele.rowIndex;
        var aa = "columns[" + selectIndex + "].";
        $(':input, select,a', $($this)).each(function () {
            var $this = $(this), name = $this.attr('name'), val = $this.val();
            var fieldName = name.replace(aa, "");
            if (fieldName == "id") {
                pd.push(val);
            } else if (fieldName == "nums") {
                pd.push(val);
            }
            else if (fieldName == "price") {
                pd.push(val);
            }
        });
        if (pd.length > 0) {
            all.push(pd);
        }
    });

    var sqdate=document.getElementById("sqdate").value;
    var pfdate=document.getElementById("pfdate").value;
    var daodadate=document.getElementById("daodadate").value;
    var note=document.getElementById("note").value;
    var fhdate=document.getElementById("fhdate").value;
    if(all.length>0){
        $.ajax({
            url: 'mzycpkcsqController.do?saveSelect&sqxdId=' + $("#id").val()
                +'&sqdate='+sqdate+'&note='+note+'&pfdate='+pfdate+'&daodadate='+daodadate+'&fhdate='+fhdate,
            type: 'post',
            data: {
                ids: all.join(',')
            },
            cache: false,
            success: function (data) {
                var d = $.parseJSON(data);
                if (d.success) {
//                    $("#printBtn").attr("disabled", false);
                    isProok=true;
//                    tip("开单输入完成！可以点击打印！");
                }
            }
        });
    }else{
        tip("请先选择产品");
    }
}
function cance_pro() {
    $.ajax({
        url: 'mzycpkcsqController.do?check_sqxd&sqxdId=' + $("#id").val(),
        type: 'post',
        data: {
//            ids: id.join(',')
        },
        cache: false,
        success: function (data) {
            var d = $.parseJSON(data);
            if (d.success) {
                initData_pro();
//                var msg = d.msg;
//                tip(msg);
//                reloadTable();
//                $("#"+gname).datagrid('unselectAll');
//                ids='';
            }
        }
    });
}
function deleteUnUsedFiled_pro() {
//    if (toDelete && toDelete.length > 0) {
//        for (index in toDelete) {
//            if (toDelete[index] == "on") continue;
//            $.post("cgFormHeadController.do?delField&id=" + toDelete[index]);
//        }
//    }
    var all = [];
    $("#tab_div_database").find("tr").each(function (index, ele) {
        var $this = $(this);
        var pd = [];
        var selectIndex = ele.rowIndex;
        var aa = "columns[" + selectIndex + "].";
        $(':input, select,a', $($this)).each(function () {
            var $this = $(this), name = $this.attr('name'), val = $this.val();

            var fieldName = name.replace(aa, "");
            if (fieldName == "id") {
                pd.push(val);
            } else if (fieldName == "nums") {
                pd.push(val);
            } else if (fieldName == "price") {
                pd.push(val);
            }
        });
        if (pd.length > 0) {
            all.push(pd);
        }
    });
    ok_pro();//保存数据
    return true;
}
