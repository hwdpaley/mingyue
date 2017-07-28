<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<script type="text/javascript" charset="utf-8">
    /*
     *	excel导出
     */
    function kfyhListExportXls() {
        JeecgExcelExport("mzyCustomController.do?exportkfyhXls&customId=${customId}","mzyKfyhList");
    }
    function courseListExportXlsByT() {
        JeecgExcelExport("courseController.do?exportXlsByT","mzyKfyhList");
    }
    function courseListWordXlsByT() {
        JeecgExcelExport("courseController.do?exportDocByT","mzyKfyhList");
    }
    function courseListExportXlsByTe() {
        JeecgExcelExport("courseController.do?exportXlsByTest","mzyKfyhList");
    }
    function courseListImportXls() {
        openuploadwin('Excel导入', 'courseController.do?upload', "mzyKfyhList");
    }

</script>
<t:datagrid name="mzyKfyhList" title="疗程记录" actionUrl="mzyCustomController.do?kfyhDatagrid&customId=${customId}"
            idField="id" fit="true">
    <t:dgCol title="编号" field="id" hidden="true"></t:dgCol>
    <t:dgCol title="日期" field="time" formatter="yyyy-MM-dd" width="120" align="center"></t:dgCol>
    <%--<t:dgCol title="视标" field="sb" dictionary="miShu" width="80" align="center"></t:dgCol>--%>
    <t:dgCol title="右眼" field="showR"  width="120" align="center"></t:dgCol>
    <t:dgCol title="左眼" field="showL"  width="120" align="center"></t:dgCol>
    <t:dgCol title="理疗师" field="tls" width="120" align="center"></t:dgCol>
    <t:dgCol title="备注" field="note" width="200" align="center"></t:dgCol>

    <t:dgCol title="操作" field="opt" width="100" align="center"></t:dgCol>
    <t:dgDelOpt title="删除" url="mzyCustomController.do?delkfyh&id={id}"/>
    <t:dgToolBar title="数据录入" icon="icon-add" url="mzyCustomController.do?kfyhaddorupdate&customId=${customId}"
                 funname="add"></t:dgToolBar>
    <t:dgToolBar title="数据编辑" icon="icon-edit" url="mzyCustomController.do?kfyhaddorupdate&customId=${customId}"
                 funname="update"></t:dgToolBar>
    <t:dgToolBar title="导出Excel" icon="icon-search" onclick="kfyhListExportXls();"></t:dgToolBar>

    <%--<t:dgToolBar title="查看" icon="icon-search" url="mzyCustomController.do?addorupdate" funname="detail"></t:dgToolBar>--%>
</t:datagrid>