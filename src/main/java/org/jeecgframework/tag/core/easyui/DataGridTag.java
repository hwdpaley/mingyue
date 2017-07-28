package org.jeecgframework.tag.core.easyui;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintStream;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspTagException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.PageContext;
import javax.servlet.jsp.tagext.TagSupport;
import net.sf.json.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.jeecgframework.core.constant.Globals;
import org.jeecgframework.core.enums.SysThemesEnum;
import org.jeecgframework.core.util.ApplicationContextUtil;
import org.jeecgframework.core.util.LogUtil;
import org.jeecgframework.core.util.MutiLangUtil;
import org.jeecgframework.core.util.ResourceUtil;
import org.jeecgframework.core.util.StringUtil;
import org.jeecgframework.core.util.SysThemesUtil;
import org.jeecgframework.core.util.oConvertUtils;
import org.jeecgframework.tag.vo.easyui.ColumnValue;
import org.jeecgframework.tag.vo.easyui.DataGridColumn;
import org.jeecgframework.tag.vo.easyui.DataGridUrl;
import org.jeecgframework.tag.vo.easyui.OptTypeDirection;
import org.jeecgframework.web.system.pojo.base.TSOperation;
import org.jeecgframework.web.system.pojo.base.TSType;
import org.jeecgframework.web.system.pojo.base.TSTypegroup;
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.jeecgframework.web.system.service.MutiLangServiceI;
import org.jeecgframework.web.system.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

public class DataGridTag
        extends TagSupport
{
    protected String fields = "";
    protected String searchFields = "";
    protected String name;
    protected String title;
    protected String idField = "id";
    protected boolean treegrid = false;
    protected List<DataGridUrl> urlList = new ArrayList();
    protected List<DataGridUrl> toolBarList = new ArrayList();
    protected List<DataGridColumn> columnList = new ArrayList();
    protected List<ColumnValue> columnValueList = new ArrayList();
    protected List<ColumnValue> columnStyleList = new ArrayList();
    public Map<String, Object> map;
    private String actionUrl;
    public int allCount;
    public int curPageNo;
    public int pageSize = 10;
    public boolean pagination = true;
    private String width;
    private String height;
    private boolean checkbox = false;
    private boolean showPageList = true;
    private boolean openFirstNode = false;
    private boolean fit = true;
    private boolean fitColumns = true;
    private String sortName;
    private String sortOrder = "asc";
    private boolean showRefresh = true;
    private boolean showText = true;
    private String style = "easyui";
    private String onLoadSuccess;
    private String onClick;
    private String onDblClick;
    private String queryMode = "single";
    private String entityName;
    private String rowStyler;
    private String extendParams;
    private boolean autoLoadData = true;
    private String langArg;
    private boolean queryBuilder = false;

    public boolean isQueryBuilder()
    {
        return this.queryBuilder;
    }

    public void setQueryBuilder(boolean queryBulder)
    {
        this.queryBuilder = queryBulder;
    }

    protected static Map<String, String> syscode = new HashMap();
    @Autowired
    private static SystemService systemService;

    static
    {
        syscode.put("class", "clazz");
    }

    public void setOnLoadSuccess(String onLoadSuccess)
    {
        this.onLoadSuccess = onLoadSuccess;
    }

    public void setOnClick(String onClick)
    {
        this.onClick = onClick;
    }

    public void setOnDblClick(String onDblClick)
    {
        this.onDblClick = onDblClick;
    }

    public void setShowText(boolean showText)
    {
        this.showText = showText;
    }

    public void setPagination(boolean pagination)
    {
        this.pagination = pagination;
    }

    public void setCheckbox(boolean checkbox)
    {
        this.checkbox = checkbox;
    }

    public void setPageSize(int pageSize)
    {
        this.pageSize = pageSize;
    }

    public void setTreegrid(boolean treegrid)
    {
        this.treegrid = treegrid;
    }

    public void setWidth(String width)
    {
        this.width = width;
    }

    public void setHeight(String height)
    {
        this.height = height;
    }

    public void setIdField(String idField)
    {
        this.idField = idField;
    }

    public void setActionUrl(String actionUrl)
    {
        this.actionUrl = actionUrl;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public void setFit(boolean fit)
    {
        this.fit = fit;
    }

    public void setShowPageList(boolean showPageList)
    {
        this.showPageList = showPageList;
    }

    public void setShowRefresh(boolean showRefresh)
    {
        this.showRefresh = showRefresh;
    }

    public void setConfUrl(String url, String title, String message, String exp, String operationCode)
    {
        DataGridUrl dataGridUrl = new DataGridUrl();
        dataGridUrl.setTitle(title);
        dataGridUrl.setUrl(url);
        dataGridUrl.setType(OptTypeDirection.Confirm);
        dataGridUrl.setMessage(message);
        dataGridUrl.setExp(exp);
        installOperationCode(dataGridUrl, operationCode, this.urlList);
    }

    public void setDelUrl(String url, String title, String message, String exp, String funname, String operationCode)
    {
        DataGridUrl dataGridUrl = new DataGridUrl();
        dataGridUrl.setTitle(title);
        dataGridUrl.setUrl(url);
        dataGridUrl.setType(OptTypeDirection.Del);
        dataGridUrl.setMessage(message);
        dataGridUrl.setExp(exp);
        dataGridUrl.setFunname(funname);
        installOperationCode(dataGridUrl, operationCode, this.urlList);
    }

    public void setDefUrl(String url, String title, String exp, String operationCode)
    {
        DataGridUrl dataGridUrl = new DataGridUrl();
        dataGridUrl.setTitle(title);
        dataGridUrl.setUrl(url);
        dataGridUrl.setType(OptTypeDirection.Deff);
        dataGridUrl.setExp(exp);
        installOperationCode(dataGridUrl, operationCode, this.urlList);
    }

    public void setToolbar(String url, String title, String icon, String exp, String onclick, String funname, String operationCode, String width2, String height2)
    {
        DataGridUrl dataGridUrl = new DataGridUrl();
        dataGridUrl.setTitle(title);
        dataGridUrl.setUrl(url);
        dataGridUrl.setType(OptTypeDirection.ToolBar);
        dataGridUrl.setIcon(icon);
        dataGridUrl.setOnclick(onclick);
        dataGridUrl.setExp(exp);
        dataGridUrl.setFunname(funname);
        dataGridUrl.setWidth(String.valueOf(width2));
        dataGridUrl.setHeight(String.valueOf(height2));
        installOperationCode(dataGridUrl, operationCode, this.toolBarList);
    }

    public void setFunUrl(String title, String exp, String funname, String operationCode)
    {
        DataGridUrl dataGridUrl = new DataGridUrl();
        dataGridUrl.setTitle(title);
        dataGridUrl.setType(OptTypeDirection.Fun);
        dataGridUrl.setExp(exp);
        dataGridUrl.setFunname(funname);
        installOperationCode(dataGridUrl, operationCode, this.urlList);
    }

    public void setOpenUrl(String url, String title, String width, String height, String exp, String operationCode, String openModel)
    {
        DataGridUrl dataGridUrl = new DataGridUrl();
        dataGridUrl.setTitle(title);
        dataGridUrl.setUrl(url);
        dataGridUrl.setWidth(width);
        dataGridUrl.setHeight(height);
        dataGridUrl.setType(OptTypeDirection.valueOf(openModel));
        dataGridUrl.setExp(exp);
        installOperationCode(dataGridUrl, operationCode, this.urlList);
    }

    public void setColumn(String title, String field, Integer width, String rowspan, String colspan, String align, boolean sortable, boolean checkbox, String formatter, boolean hidden, String replace, String treefield, boolean image, String imageSize, boolean query, String url, String funname, String arg, String queryMode, String dictionary, boolean popup, boolean frozenColumn, String extend, String style, String downloadName, boolean isAuto, String extendParams)
    {
        DataGridColumn dataGridColumn = new DataGridColumn();
        dataGridColumn.setAlign(align);
        dataGridColumn.setCheckbox(checkbox);
        dataGridColumn.setColspan(colspan);
        dataGridColumn.setField(field);
        dataGridColumn.setFormatter(formatter);
        dataGridColumn.setHidden(hidden);
        dataGridColumn.setRowspan(rowspan);
        dataGridColumn.setSortable(sortable);
        dataGridColumn.setTitle(title);
        dataGridColumn.setWidth(width);
        dataGridColumn.setTreefield(treefield);
        dataGridColumn.setImage(image);
        dataGridColumn.setImageSize(imageSize);
        dataGridColumn.setReplace(replace);
        dataGridColumn.setQuery(query);
        dataGridColumn.setUrl(url);
        dataGridColumn.setFunname(funname);
        dataGridColumn.setArg(arg);
        dataGridColumn.setQueryMode(queryMode);
        dataGridColumn.setDictionary(dictionary);
        dataGridColumn.setPopup(popup);
        dataGridColumn.setFrozenColumn(frozenColumn);
        dataGridColumn.setExtend(extend);
        dataGridColumn.setStyle(style);
        dataGridColumn.setDownloadName(downloadName);
        dataGridColumn.setAutocomplete(isAuto);
        dataGridColumn.setExtendParams(extendParams);
        this.columnList.add(dataGridColumn);
        Set<String> operationCodes = (Set)this.pageContext.getRequest().getAttribute(Globals.OPERATIONCODES);
        if (null != operationCodes) {
            for (String MyoperationCode : operationCodes)
            {
                if (oConvertUtils.isEmpty(MyoperationCode)) {
                    break;
                }
                systemService = (SystemService)ApplicationContextUtil.getContext().getBean(SystemService.class);

                TSOperation operation = (TSOperation)systemService.getEntity(TSOperation.class, MyoperationCode);
                if (operation.getOperationcode().equals(field)) {
                    this.columnList.remove(dataGridColumn);
                }
            }
        }
        if (field != "opt")
        {
            this.fields = (this.fields + field + ",");
            if ("group".equals(queryMode)) {
                this.searchFields = (this.searchFields + field + "," + field + "_begin," + field + "_end,");
            } else {
                this.searchFields = (this.searchFields + field + ",");
            }
        }
        if (replace != null)
        {
            String[] test = replace.split(",");
            String lang_key = "";
            String text = "";
            String value = "";
            for (String string : test)
            {
                lang_key = string.substring(0, string.indexOf("_"));
                text = text + MutiLangUtil.getMutiLangInstance().getLang(lang_key) + ",";

                value = value + string.substring(string.indexOf("_") + 1) + ",";
            }
            setColumn(field, text, value);
        }
        if ((!StringUtils.isBlank(dictionary)) && (!popup)) {
            if (dictionary.contains(","))
            {
                String[] dic = dictionary.split(",");
                String text = "";
                String value = "";
                String sql = "select " + dic[1] + " as field," + dic[2] + " as text from " + dic[0];

                systemService = (SystemService)ApplicationContextUtil.getContext().getBean(SystemService.class);

                List<Map<String, Object>> list = systemService.findForJdbc(sql, new Object[0]);
                for (Map<String, Object> map : list)
                {
                    text = text + map.get("text") + ",";
                    value = value + map.get("field") + ",";
                }
                if (list.size() > 0) {
                    setColumn(field, text, value);
                }
            }
            else
            {
                String text = "";
                String value = "";
                List<TSType> typeList = (List)TSTypegroup.allTypes.get(dictionary.toLowerCase());
                if ((typeList != null) && (!typeList.isEmpty()))
                {
                    for (TSType type : typeList)
                    {
                        text = text + MutiLangUtil.doMutiLang(type.getTypename(), "") + ",";
                        value = value + type.getTypecode() + ",";
                    }
                    setColumn(field, text, value);
                }
            }
        }
        if (StringUtil.isNotEmpty(style))
        {
            String[] temp = style.split(",");
            String text = "";
            String value = "";
            if ((temp.length == 1) && (temp[0].indexOf("_") == -1)) {
                text = temp[0];
            } else {
                for (String string : temp)
                {
                    text = text + string.substring(0, string.indexOf("_")) + ",";
                    value = value + string.substring(string.indexOf("_") + 1) + ",";
                }
            }
            setStyleColumn(field, text, value);
        }
    }

    private void setStyleColumn(String field, String text, String value)
    {
        ColumnValue columnValue = new ColumnValue();
        columnValue.setName(field);
        columnValue.setText(text);
        columnValue.setValue(value);
        this.columnStyleList.add(columnValue);
    }

    public void setColumn(String name, String text, String value)
    {
        ColumnValue columnValue = new ColumnValue();
        columnValue.setName(name);
        columnValue.setText(text);
        columnValue.setValue(value);
        this.columnValueList.add(columnValue);
    }

    public int doStartTag()
            throws JspTagException
    {
        this.urlList.clear();
        this.toolBarList.clear();
        this.columnValueList.clear();
        this.columnStyleList.clear();
        this.columnList.clear();
        this.fields = "";
        this.searchFields = "";
        return 6;
    }

    public int doEndTag()
            throws JspException
    {
        try
        {
            this.title = MutiLangUtil.doMutiLang(this.title, this.langArg);

            JspWriter out = this.pageContext.getOut();

            SysThemesEnum sysThemesEnum = SysThemesUtil.getSysTheme((HttpServletRequest)this.pageContext.getRequest());
            if (this.style.equals("easyui"))
            {
                if ("ace".equals(sysThemesEnum.getStyle())) {
                    out.print(aceStyleTable().toString());
                } else {
                    out.print(end().toString());
                }
            }
            else
            {
                out.print(datatables().toString());
                out.flush();
            }
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        return 6;
    }

    public StringBuffer datatables()
    {
        StringBuffer sb = new StringBuffer();
        sb.append("<script type=\"text/javascript\">");
        sb.append("$(document).ready(function() {");
        sb.append("var oTable = $('#userList').dataTable({");

        sb.append("\"bProcessing\" : true,");
        sb.append("\"bPaginate\" : true,");
        sb.append("\"sPaginationType\" : \"full_numbers\",");
        sb.append("\"bFilter\" : true,");
        sb.append("\"bSort\" : true, ");
        sb.append("\"bAutoWidth\" : true,");
        sb.append("\"bLengthChange\" : true,");
        sb.append("\"bInfo\" : true,");
        sb.append("\"sAjaxSource\" : \"userController.do?test\",");
        sb.append("\"bServerSide\" : true,");
        sb.append("\"oLanguage\" : {\"sLengthMenu\" : \" _MENU_ ���������\",\"sZeroRecords\" : \"���������������������\",\"sInfo\" : \"��� _START_ ��� _END_ ��������� ��� _TOTAL_ ���\",\"sInfoEmtpy\" : \"������������\",\"sProcessing\" : \"������������������...\",\"sSearch\" : \"������\",\"oPaginate\" : {\"sFirst\" : \"������\",\"sPrevious\" : \"������\", \"sNext\" : \"������\",\"sLast\" : \"������\"}},");

        sb.append("\"fnServerData\" : function(sSource, aoData, fnCallback, oSettings) {");

        sb.append("oSettings.jqXHR = $.ajax({\"dataType\" : 'json',\"type\" : \"POST\",\"url\" : sSource,\"data\" : aoData,\"success\" : fnCallback});},");
        sb.append("\"aoColumns\" : [ ");
        int i = 0;
        for (DataGridColumn column : this.columnList)
        {
            i++;
            sb.append("{");
            sb.append("\"sTitle\":\"" + column.getTitle() + "\"");
            if (column.getField().equals("opt"))
            {
                sb.append(",\"mData\":\"" + this.idField + "\"");
                sb.append(",\"sWidth\":\"20%\"");
                sb.append(",\"bSortable\":false");
                sb.append(",\"bSearchable\":false");
                sb.append(",\"mRender\" : function(data, type, rec) {");
                getOptUrl(sb);
                sb.append("}");
            }
            else
            {
                int colwidth = column.getWidth() == null ? column.getTitle().length() * 15 : column.getWidth().intValue();
                sb.append(",\"sName\":\"" + column.getField() + "\"");
                sb.append(",\"mDataProp\":\"" + column.getField() + "\"");
                sb.append(",\"mData\":\"" + column.getField() + "\"");
                sb.append(",\"sWidth\":\"" + colwidth + "\"");
                sb.append(",\"bSortable\":" + column.isSortable() + "");
                sb.append(",\"bVisible\":" + (!column.isHidden()) + "");
                sb.append(",\"bSearchable\":" + column.isQuery() + "");
            }
            sb.append("}");
            if (i < this.columnList.size()) {
                sb.append(",");
            }
        }
        sb.append("]});});</script>");
        sb.append("<table width=\"100%\"  class=\"" + this.style + "\" id=\"" + this.name + "\" toolbar=\"#" + this.name + "tb\"></table>");
        return sb;
    }

    public void setStyle(String style)
    {
        this.style = style;
    }

    public StringBuffer end()
    {
        String grid = "";
        StringBuffer sb = new StringBuffer();
        this.width = (this.width == null ? "auto" : this.width);
        this.height = (this.height == null ? "auto" : this.height);
        sb.append("<script type=\"text/javascript\">");
        sb.append("$(function(){  storage=$.localStorage;if(!storage)storage=$.cookieStorage;");
        sb.append(getNoAuthOperButton());
        if (this.treegrid)
        {
            grid = "treegrid";
            sb.append("$('#" + this.name + "').treegrid({");
            sb.append("idField:'id',");
            sb.append("treeField:'text',");
        }
        else
        {
            grid = "datagrid";
            sb.append("$('#" + this.name + "').datagrid({");
            sb.append("idField: '" + this.idField + "',");
        }
        if (this.title != null) {
            sb.append("title: '" + this.title + "',");
        }
        if (this.autoLoadData) {
            sb.append("url:'" + this.actionUrl + "&field=" + this.fields + "',");
        } else {
            sb.append("url:'',");
        }
        if (StringUtils.isNotEmpty(this.rowStyler)) {
            sb.append("rowStyler: function(index,row){ return " + this.rowStyler + "(index,row);},");
        }
        if (StringUtils.isNotEmpty(this.extendParams)) {
            sb.append(this.extendParams);
        }
        if (this.fit) {
            sb.append("fit:true,");
        } else {
            sb.append("fit:false,");
        }
        sb.append(StringUtil.replaceAll("loadMsg: '{0}',", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.data.loading")));
        sb.append("pageSize: " + this.pageSize + ",");
        sb.append("pagination:" + this.pagination + ",");
        sb.append("pageList:[" + this.pageSize * 1 + "," + this.pageSize * 2 + "," + this.pageSize * 3 + "],");
        if (StringUtils.isNotBlank(this.sortName)) {
            sb.append("sortName:'" + this.sortName + "',");
        }
        sb.append("sortOrder:'" + this.sortOrder + "',");
        sb.append("rownumbers:true,");
        sb.append("singleSelect:" + (!this.checkbox) + ",");
        if (this.fitColumns) {
            sb.append("fitColumns:true,");
        } else {
            sb.append("fitColumns:false,");
        }
        sb.append("striped:true,showFooter:true,");
        sb.append("frozenColumns:[[");
        getField(sb, 0);
        sb.append("]],");

        sb.append("columns:[[");
        getField(sb);
        sb.append("]],");
        sb.append("onLoadSuccess:function(data){$(\"#" + this.name + "\")." + grid + "(\"clearSelections\");");
        if ((this.openFirstNode) && (this.treegrid))
        {
            sb.append(" if(data==null){");
            sb.append(" var firstNode = $('#" + this.name + "').treegrid('getRoots')[0];");
            sb.append(" $('#" + this.name + "').treegrid('expand',firstNode.id)}");
        }
        if (StringUtil.isNotEmpty(this.onLoadSuccess)) {
            sb.append(this.onLoadSuccess + "(data);");
        }
        sb.append("},");
        if (StringUtil.isNotEmpty(this.onDblClick)) {
            sb.append("onDblClickRow:function(rowIndex,rowData){" + this.onDblClick + "(rowIndex,rowData);},");
        }
        if (this.treegrid) {
            sb.append("onClickRow:function(rowData){");
        } else {
            sb.append("onClickRow:function(rowIndex,rowData){");
        }
        sb.append("rowid=rowData.id;");
        sb.append("gridname='" + this.name + "';");
        if (StringUtil.isNotEmpty(this.onClick)) {
            if (this.treegrid) {
                sb.append("" + this.onClick + "(rowData);");
            } else {
                sb.append("" + this.onClick + "(rowIndex,rowData);");
            }
        }
        sb.append("}");
        sb.append("});");
        setPager(sb, grid);
        sb.append("try{restoreheader();}catch(ex){}");
        sb.append("});");
        sb.append("function reloadTable(){");
        sb.append("try{");
        sb.append("\t$('#'+gridname).datagrid('reload');");
        sb.append("\t$('#'+gridname).treegrid('reload');");
        sb.append("}catch(ex){}");
        sb.append("}");
        sb.append("function reload" + this.name + "(){" + "$('#" + this.name + "')." + grid + "('reload');" + "}");
        sb.append("function get" + this.name + "Selected(field){return getSelected(field);}");
        sb.append("function getSelected(field){var row = $('#'+gridname)." + grid + "('getSelected');" + "if(row!=null)" + "{" + "value= row[field];" + "}" + "else" + "{" + "value='';" + "}" + "return value;" + "}");
        sb.append("function get" + this.name + "Selections(field){" + "var ids = [];" + "var rows = $('#" + this.name + "')." + grid + "('getSelections');" + "for(var i=0;i<rows.length;i++){" + "ids.push(rows[i][field]);" + "}" + "ids.join(',');" + "return ids" + "};");
        sb.append("function getSelectRows(){");
        sb.append("\treturn $('#" + this.name + "').datagrid('getChecked');");
        sb.append("}");
        sb.append(" function saveHeader(){");
        sb.append(" var columnsFields =null;var easyextends=false;try{columnsFields = $('#" + this.name + "').datagrid('getColumns');easyextends=true;");
        sb.append("}catch(e){columnsFields =$('#" + this.name + "').datagrid('getColumnFields');}");
        sb.append("\tvar cols = storage.get( '" + this.name + "hiddenColumns');var init=true;\tif(cols){init =false;} " + "var hiddencolumns = [];for(var i=0;i< columnsFields.length;i++) {if(easyextends){");

        sb.append("hiddencolumns.push({field:columnsFields[i].field,hidden:columnsFields[i].hidden});}else{");
        sb.append(" var columsDetail = $('#" + this.name + "').datagrid(\"getColumnOption\", columnsFields[i]); ");
        sb.append("if(init){hiddencolumns.push({field:columsDetail.field,hidden:columsDetail.hidden,visible:(columsDetail.hidden==true?false:true)});}else{");
        sb.append("for(var j=0;j<cols.length;j++){");
        sb.append("\t\tif(cols[j].field==columsDetail.field){");
        sb.append("\t\t\t\t\thiddencolumns.push({field:columsDetail.field,hidden:columsDetail.hidden,visible:cols[j].visible});");
        sb.append("\t\t}");
        sb.append("}");
        sb.append("}} }");
        sb.append("storage.set( '" + this.name + "hiddenColumns',JSON.stringify(hiddencolumns));");
        sb.append("}");
        sb.append("function restoreheader(){");
        sb.append("var cols = storage.get( '" + this.name + "hiddenColumns');if(!cols)return;");
        sb.append("for(var i=0;i<cols.length;i++){");
        sb.append("\ttry{");
        sb.append("if(cols.visible!=false)$('#" + this.name + "').datagrid((cols[i].hidden==true?'hideColumn':'showColumn'),cols[i].field);");
        sb.append("}catch(e){");
        sb.append("}");
        sb.append("}");
        sb.append("}");
        sb.append("function resetheader(){");
        sb.append("var cols = storage.get( '" + this.name + "hiddenColumns');if(!cols)return;");
        sb.append("for(var i=0;i<cols.length;i++){");
        sb.append("\ttry{");
        sb.append("  $('#" + this.name + "').datagrid((cols.visible==false?'hideColumn':'showColumn'),cols[i].field);");
        sb.append("}catch(e){");
        sb.append("}");
        sb.append("}");
        sb.append("}");
        if (this.columnList.size() > 0)
        {
            sb.append("function " + this.name + "search(){");
            sb.append("var queryParams=$('#" + this.name + "').datagrid('options').queryParams;");
            sb.append("$('#" + this.name + "tb').find('*').each(function(){queryParams[$(this).attr('name')]=$(this).val();});");
            sb.append("$('#" + this.name + "')." + grid + "({url:'" + this.actionUrl + "&field=" + this.searchFields + "',pageNumber:1});" + "}");

            sb.append("function dosearch(params){");
            sb.append("var jsonparams=$.parseJSON(params);");
            sb.append("$('#" + this.name + "')." + grid + "({url:'" + this.actionUrl + "&field=" + this.searchFields + "',queryParams:jsonparams});" + "}");

            searchboxFun(sb, grid);

            sb.append("function EnterPress(e){");
            sb.append("var e = e || window.event;");
            sb.append("if(e.keyCode == 13){ ");
            sb.append(this.name + "search();");
            sb.append("}}");

            sb.append("function searchReset(name){");
            sb.append(" $(\"#\"+name+\"tb\").find(\":input\").val(\"\");");
            String func = this.name.trim() + "search();";
            sb.append(func);
            sb.append("}");
        }
        sb.append("</script>");
        sb.append("<table width=\"100%\"   id=\"" + this.name + "\" toolbar=\"#" + this.name + "tb\"></table>");
        sb.append("<div id=\"" + this.name + "tb\" style=\"padding:3px; height: auto\">");
        if (hasQueryColum(this.columnList))
        {
            sb.append("<div name=\"searchColums\">");

            sb.append("<input  id=\"_sqlbuilder\" name=\"sqlbuilder\"   type=\"hidden\" />");
            if ("group".equals(getQueryMode())) {
                for (DataGridColumn col : this.columnList) {
                    if (col.isQuery())
                    {
                        sb.append("<span style=\"display:-moz-inline-box;display:inline-block;\">");
                        sb.append("<span style=\"vertical-align:middle;display:-moz-inline-box;display:inline-block;width: 80px;text-align:right;text-overflow:ellipsis;-o-text-overflow:ellipsis; overflow: hidden;white-space:nowrap; \" title=\"" + col.getTitle() + "\">" + col.getTitle() + "���</span>");
                        if ("single".equals(col.getQueryMode()))
                        {
                            if (!StringUtil.isEmpty(col.getReplace()))
                            {
                                sb.append("<select name=\"" + col.getField().replaceAll("_", "\\.") + "\" WIDTH=\"100\" style=\"width: 104px\"> ");
                                sb.append(StringUtil.replaceAll("<option value =\"\" >{0}</option>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.select")));
                                String[] test = col.getReplace().split(",");
                                String text = "";
                                String value = "";
                                for (String string : test)
                                {
                                    String lang_key = string.split("_")[0];
                                    text = MutiLangUtil.getMutiLangInstance().getLang(lang_key);
                                    value = string.split("_")[1];
                                    sb.append("<option value =\"" + value + "\">" + text + "</option>");
                                }
                                sb.append("</select>");
                            }
                            else if (!StringUtil.isEmpty(col.getDictionary()))
                            {
                                if ((col.getDictionary().contains(",")) && (col.isPopup()))
                                {
                                    String[] dic = col.getDictionary().split(",");
                                    String sql = "select " + dic[1] + " as field," + dic[2] + " as text from " + dic[0];

                                    System.out.println(dic[0] + "--" + dic[1] + "--" + dic[2]);

                                    sb.append("<input type=\"text\" name=\"" + col.getField().replaceAll("_", "\\.") + "\" style=\"width: 100px\" class=\"searchbox-inputtext\" value=\"\" onClick=\"inputClick(this,'" + dic[1] + "','" + dic[0] + "');\" /> ");
                                }
                                else if ((col.getDictionary().contains(",")) && (!col.isPopup()))
                                {
                                    String[] dic = col.getDictionary().split(",");
                                    String sql = "select " + dic[1] + " as field," + dic[2] + " as text from " + dic[0];

                                    systemService = (SystemService)ApplicationContextUtil.getContext().getBean(SystemService.class);

                                    List<Map<String, Object>> list = systemService.findForJdbc(sql, new Object[0]);
                                    sb.append("<select name=\"" + col.getField().replaceAll("_", "\\.") + "\" WIDTH=\"100\" style=\"width: 104px\"> ");
                                    sb.append(StringUtil.replaceAll("<option value =\"\" >{0}</option>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.select")));
                                    for (Map<String, Object> map : list)
                                    {
                                        sb.append(" <option value=\"" + map.get("field") + "\">");
                                        sb.append(map.get("text"));
                                        sb.append(" </option>");
                                    }
                                    sb.append("</select>");
                                }
                                else
                                {
                                    Map<String, List<TSType>> typedatas = TSTypegroup.allTypes;
                                    List<TSType> types = (List)typedatas.get(col.getDictionary().toLowerCase());
                                    sb.append("<select name=\"" + col.getField().replaceAll("_", "\\.") + "\" WIDTH=\"100\" style=\"width: 104px\"> ");
                                    sb.append(StringUtil.replaceAll("<option value =\"\" >{0}</option>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.select")));
                                    if (types != null) {
                                        for (TSType type : types)
                                        {
                                            sb.append(" <option value=\"" + type.getTypecode() + "\">");

                                            sb.append(MutiLangUtil.getMutiLangInstance().getLang(type.getTypename()));
                                            sb.append(" </option>");
                                        }
                                    }
                                    sb.append("</select>");
                                }
                            }
                            else if (col.isAutocomplete())
                            {
                                sb.append(getAutoSpan(col.getField().replaceAll("_", "\\."), extendAttribute(col.getExtend())));
                            }
                            else
                            {
                                sb.append("<input class=\"inuptxt\" onkeypress=\"EnterPress(event)\" onkeydown=\"EnterPress()\"  type=\"text\" name=\"" + col.getField().replaceAll("_", "\\.") + "\"  " + extendAttribute(col.getExtend()) + " style=\"width: 100px\" />");
                            }
                        }
                        else if ("group".equals(col.getQueryMode()))
                        {
                            sb.append("<input class=\"inuptxt\" type=\"text\" name=\"" + col.getField() + "_begin\"  style=\"width: 94px\" " + extendAttribute(col.getExtend()) + "/>");
                            sb.append("<span style=\"display:-moz-inline-box;display:inline-block;width: 8px;text-align:right;\">~</span>");
                            sb.append("<input class=\"inuptxt\" type=\"text\" name=\"" + col.getField() + "_end\"  style=\"width: 94px\" " + extendAttribute(col.getExtend()) + "/>");
                        }
                        sb.append("</span>");
                    }
                }
            }
            sb.append("</div>");
        }
        if ((this.toolBarList.size() == 0) && (!hasQueryColum(this.columnList))) {
            sb.append("<div style=\"height:0px;\" >");
        } else {
            sb.append("<div style=\"height:30px;\" class=\"datagrid-toolbar\">");
        }
        sb.append("<span style=\"float:left;\" >");
        if (this.toolBarList.size() > 0) {
            for (DataGridUrl toolBar : this.toolBarList)
            {
                sb.append("<a href=\"#\" class=\"easyui-linkbutton\" plain=\"true\" icon=\"" + toolBar.getIcon() + "\" ");
                if (StringUtil.isNotEmpty(toolBar.getOnclick()))
                {
                    sb.append("onclick=" + toolBar.getOnclick() + "");
                }
                else
                {
                    sb.append("onclick=\"" + toolBar.getFunname() + "(");
                    if (!toolBar.getFunname().equals("doSubmit")) {
                        sb.append("'" + toolBar.getTitle() + "',");
                    }
                    String width = toolBar.getWidth().contains("%") ? "'" + toolBar.getWidth() + "'" : toolBar.getWidth();
                    String height = toolBar.getHeight().contains("%") ? "'" + toolBar.getHeight() + "'" : toolBar.getHeight();
                    sb.append("'" + toolBar.getUrl() + "','" + this.name + "'," + width + "," + height + ")\"");
                }
                sb.append(">" + toolBar.getTitle() + "</a>");
            }
        }
        sb.append("</span>");
        if (("group".equals(getQueryMode())) && (hasQueryColum(this.columnList)))
        {
            sb.append("<span style=\"float:right\">");
            sb.append("<a href=\"#\" class=\"easyui-linkbutton\" iconCls=\"icon-search\" onclick=\"" + this.name + StringUtil.replaceAll("search()\">{0}</a>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.query")));
            sb.append("<a href=\"#\" class=\"easyui-linkbutton\" iconCls=\"icon-reload\" onclick=\"searchReset('" + this.name + StringUtil.replaceAll("')\">{0}</a>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.reset")));
            if (this.queryBuilder) {
                sb.append("<a href=\"#\" class=\"easyui-linkbutton\" iconCls=\"icon-search\" onclick=\"queryBuilder('" + StringUtil.replaceAll("')\">{0}</a>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.querybuilder")));
            }
            sb.append("</span>");
        }
        else if (("single".equals(getQueryMode())) && (hasQueryColum(this.columnList)))
        {
            sb.append("<span style=\"float:right\">");
            sb.append("<input id=\"" + this.name + "searchbox\" class=\"easyui-searchbox\"  data-options=\"searcher:" + this.name + StringUtil.replaceAll("searchbox,prompt:'{0}',menu:'#", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.input.keyword")) + this.name + "mm'\"></input>");
            sb.append("<div id=\"" + this.name + "mm\" style=\"width:120px\">");
            for (DataGridColumn col : this.columnList) {
                if (col.isQuery()) {
                    sb.append("<div data-options=\"name:'" + col.getField().replaceAll("_", "\\.") + "',iconCls:'icon-ok' " + extendAttribute(col.getExtend()) + " \">" + col.getTitle() + "</div>  ");
                }
            }
            sb.append("</div>");
            sb.append("</span>");
        }
        sb.append("</div>");
        if (this.queryBuilder) {
            addQueryBuilder(sb, "easyui-linkbutton");
        }
        return sb;
    }

    private String extendAttribute(String field)
    {
        if (StringUtil.isEmpty(field)) {
            return "";
        }
        field = dealSyscode(field, 1);
        StringBuilder re = new StringBuilder();
        try
        {
            JSONObject obj = JSONObject.fromObject(field);
            Iterator it = obj.keys();
            while (it.hasNext())
            {
                String key = String.valueOf(it.next());
                JSONObject nextObj = (JSONObject)obj.get(key);
                Iterator itvalue = nextObj.keys();
                re.append(key + "=" + "\"");
                if (nextObj.size() <= 1)
                {
                    String onlykey = String.valueOf(itvalue.next());
                    if ("value".equals(onlykey)) {
                        re.append(nextObj.get(onlykey) + "");
                    } else {
                        re.append(onlykey + ":" + nextObj.get(onlykey) + "");
                    }
                }
                else
                {
                    while (itvalue.hasNext())
                    {
                        String multkey = String.valueOf(itvalue.next());
                        String multvalue = nextObj.getString(multkey);
                        re.append(multkey + ":" + multvalue + ",");
                    }
                    re.deleteCharAt(re.length() - 1);
                }
                re.append("\" ");
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return "";
        }
        return dealSyscode(re.toString(), 2);
    }

    private String extendAttributeOld(String field)
    {
        StringBuffer sb = new StringBuffer();
        Gson gson;
        if (!StringUtils.isBlank(field))
        {
            gson = new Gson();
            Map<String, String> mp = (Map)gson.fromJson(field, Map.class);
            for (Map.Entry<String, String> entry : mp.entrySet()) {
                sb.append((String)entry.getKey() + "=" + gson.toJson(entry.getValue()) + "\"");
            }
        }
        return sb.toString();
    }

    private String dealSyscode(String field, int flag)
    {
        String change = field;
        Iterator it = syscode.keySet().iterator();
        while (it.hasNext())
        {
            String key = String.valueOf(it.next());
            String value = String.valueOf(syscode.get(key));
            if (flag == 1) {
                change = field.replaceAll(key, value);
            } else if (flag == 2) {
                change = field.replaceAll(value, key);
            }
        }
        return change;
    }

    protected boolean hasQueryColum(List<DataGridColumn> columnList)
    {
        boolean hasQuery = false;
        for (DataGridColumn col : columnList) {
            if (col.isQuery()) {
                hasQuery = true;
            }
        }
        return hasQuery;
    }

    protected void getOptUrl(StringBuffer sb)
    {
        sb.append("if(!rec.id){return '';}");
        List<DataGridUrl> list = this.urlList;
        sb.append("var href='';");
        for (DataGridUrl dataGridUrl : list)
        {
            String url = dataGridUrl.getUrl();
            MessageFormat formatter = new MessageFormat("");
            if (dataGridUrl.getValue() != null)
            {
                String[] testvalue = dataGridUrl.getValue().split(",");
                List value = new ArrayList();
                for (String string : testvalue) {
                    value.add("\"+rec." + string + " +\"");
                }
                url = MessageFormat.format(url, value.toArray());
            }
            if ((url != null) && (dataGridUrl.getValue() == null)) {
                url = formatUrl(url);
            }
            String exp = dataGridUrl.getExp();
            if (StringUtil.isNotEmpty(exp))
            {
                String[] ShowbyFields = exp.split("&&");
                for (String ShowbyField : ShowbyFields)
                {
                    int beginIndex = ShowbyField.indexOf("#");
                    int endIndex = ShowbyField.lastIndexOf("#");
                    String exptype = ShowbyField.substring(beginIndex + 1, endIndex);
                    String field = ShowbyField.substring(0, beginIndex);
                    String[] values = ShowbyField.substring(endIndex + 1, ShowbyField.length()).split(",");
                    String value = "";
                    for (int i = 0; i < values.length; i++)
                    {
                        value = value + "'" + values[i] + "" + "'";
                        if (i < values.length - 1) {
                            value = value + ",";
                        }
                    }
                    if ("eq".equals(exptype)) {
                        sb.append("if($.inArray(rec." + field + ",[" + value + "])>=0){");
                    }
                    if ("ne".equals(exptype)) {
                        sb.append("if($.inArray(rec." + field + ",[" + value + "])<0){");
                    }
                    if (("empty".equals(exptype)) && (value.equals("'true'"))) {
                        sb.append("if(rec." + field + "==''){");
                    }
                    if (("empty".equals(exptype)) && (value.equals("'false'"))) {
                        sb.append("if(rec." + field + "!=''){");
                    }
                }
            }
            if (OptTypeDirection.Confirm.equals(dataGridUrl.getType())) {
                sb.append("href+=\"[<a href='#' onclick=confirm('" + url + "','" + dataGridUrl.getMessage() + "','" + this.name + "')> \";");
            }
            if (OptTypeDirection.Del.equals(dataGridUrl.getType())) {
                sb.append("href+=\"[<a href='#' onclick=delObj('" + url + "','" + this.name + "')>\";");
            }
            if (OptTypeDirection.Fun.equals(dataGridUrl.getType()))
            {
                String name = TagUtil.getFunction(dataGridUrl.getFunname());
                String parmars = TagUtil.getFunParams(dataGridUrl.getFunname());
                sb.append("href+=\"[<a href='#' onclick=" + name + "(" + parmars + ")>\";");
            }
            if (OptTypeDirection.OpenWin.equals(dataGridUrl.getType())) {
                sb.append("href+=\"[<a href='#' onclick=openwindow('" + dataGridUrl.getTitle() + "','" + url + "','" + this.name + "'," + dataGridUrl.getWidth() + "," + dataGridUrl.getHeight() + ")>\";");
            }
            if (OptTypeDirection.Deff.equals(dataGridUrl.getType())) {
                sb.append("href+=\"[<a href='" + url + "' title='" + dataGridUrl.getTitle() + "'>\";");
            }
            if (OptTypeDirection.OpenTab.equals(dataGridUrl.getType())) {
                sb.append("href+=\"[<a href='#' onclick=addOneTab('" + dataGridUrl.getTitle() + "','" + url + "')>\";");
            }
            sb.append("href+=\"" + dataGridUrl.getTitle() + "</a>]\";");
            if (StringUtil.isNotEmpty(exp)) {
                for (int i = 0; i < exp.split("&&").length; i++) {
                    sb.append("}");
                }
            }
        }
        sb.append("return href;");
    }

    protected void getFun(StringBuffer sb, DataGridColumn column)
    {
        String url = column.getUrl();
        url = formatUrl(url);
        sb.append("var href=\"<a style='color:red' href='#' onclick=" + column.getFunname() + "('" + column.getTitle() + "','" + url + "')>\";");
        sb.append("return href+value+'</a>';");
    }

    protected String formatUrl(String url)
    {
        MessageFormat formatter = new MessageFormat("");
        String parurlvalue = "";
        if (url.indexOf("&") >= 0)
        {
            String beforeurl = url.substring(0, url.indexOf("&"));
            String parurl = url.substring(url.indexOf("&") + 1, url.length());
            String[] pras = parurl.split("&");
            List value = new ArrayList();
            int j = 0;
            for (int i = 0; i < pras.length; i++) {
                if ((pras[i].indexOf("{") >= 0) || (pras[i].indexOf("#") >= 0))
                {
                    String field = pras[i].substring(pras[i].indexOf("{") + 1, pras[i].lastIndexOf("}"));
                    parurlvalue = parurlvalue + "&" + pras[i].replace(new StringBuilder().append("{").append(field).append("}").toString(), new StringBuilder().append("{").append(j).append("}").toString());
                    value.add("\"+rec." + field + " +\"");
                    j++;
                }
                else
                {
                    parurlvalue = parurlvalue + "&" + pras[i];
                }
            }
            url = MessageFormat.format(beforeurl + parurlvalue, value.toArray());
        }
        return url;
    }

    protected void getField(StringBuffer sb)
    {
        getField(sb, 1);
    }

    protected void getField(StringBuffer sb, int frozen)
    {
        if ((this.checkbox) && (frozen == 0)) {
            sb.append("{field:'ck',checkbox:'true'},");
        }
        int i = 0;
        for (DataGridColumn column : this.columnList)
        {
            i++;
            if (((column.isFrozenColumn()) && (frozen == 0)) || ((!column.isFrozenColumn()) && (frozen == 1)))
            {
                String field;
                if (this.treegrid) {
                    field = column.getTreefield();
                } else {
                    field = column.getField();
                }
                sb.append("{field:'" + field + "',title:'" + column.getTitle() + "'");
                if (column.getWidth() != null) {
                    sb.append(",width:" + column.getWidth());
                }
                if (column.getAlign() != null) {
                    sb.append(",align:'" + column.getAlign() + "'");
                }
                if (StringUtils.isNotEmpty(column.getExtendParams())) {
                    sb.append("," + column.getExtendParams().substring(0, column.getExtendParams().length() - 1));
                }
                if (column.isHidden()) {
                    sb.append(",hidden:true");
                }
                if (!this.treegrid) {
                    if ((column.isSortable()) && (field.indexOf("_") <= 0) && (field != "opt")) {
                        sb.append(",sortable:" + column.isSortable() + "");
                    }
                }
                if (column.isImage())
                {
                    sb.append(",formatter:function(value,rec,index){");
                    sb.append(" return '<img border=\"0\" src=\"'+value+'\"/>';}");
                }
                if (column.getImageSize() != null)
                {
                    String[] tld = column.getImageSize().split(",");
                    sb.append(",formatter:function(value,rec,index){");
                    sb.append(" return '<img style=\"border-radius:100%\" width=\"" + tld[0] + "\" height=\"" + tld[1] + "\"  src=\"'+value+'\"/>';}");

                    tld = null;
                }
                if (column.getDownloadName() != null)
                {
                    sb.append(",formatter:function(value,rec,index){");
                    sb.append(" return '<a target=\"_blank\" href=\"'+value+'\">" + column.getDownloadName() + "</a>';}");
                }
                if (column.getUrl() != null)
                {
                    sb.append(",formatter:function(value,rec,index){");
                    getFun(sb, column);
                    sb.append("}");
                }
                if (column.getFormatter() != null)
                {
                    sb.append(",formatter:function(value,rec,index){");
                    sb.append(" return new Date().format('" + column.getFormatter() + "',value);}");
                }
                if (column.getField().equals("opt"))
                {
                    sb.append(",formatter:function(value,rec,index){");

                    getOptUrl(sb);
                    sb.append("}");
                }
                String testString;
                if ((this.columnValueList.size() > 0) && (!column.getField().equals("opt")))
                {
                    testString = "";
                    for (ColumnValue columnValue : this.columnValueList) {
                        if (columnValue.getName().equals(column.getField()))
                        {
                            String[] value = columnValue.getValue().split(",");
                            String[] text = columnValue.getText().split(",");
                            sb.append(",formatter:function(value,rec,index){");
                            sb.append("var valArray = value.split(\",\");");
                            sb.append("if(valArray.length > 1){");
                            sb.append("var checkboxValue = \"\";");
                            sb.append("for(var k=0; k<valArray.length; k++){");
                            for (int j = 0; j < value.length; j++) {
                                sb.append("if(valArray[k] == '" + value[j] + "'){ checkboxValue = checkboxValue + '" + text[j] + "' + ','}");
                            }
                            sb.append("}");
                            sb.append("return checkboxValue.substring(0,checkboxValue.length-1);");
                            sb.append("}");
                            sb.append("else{");
                            for (int j = 0; j < value.length; j++) {
                                testString = testString + "if(value=='" + value[j] + "'){return '" + text[j] + "'}";
                            }
                            sb.append(testString);
                            sb.append("else{return value}");
                            sb.append("}");
                            sb.append("}");
                        }
                    }
                }
                if ((this.columnStyleList.size() > 0) && (!column.getField().equals("opt")))
                {
                    testString = "";
                    for (ColumnValue columnValue : this.columnStyleList) {
                        if (columnValue.getName().equals(column.getField()))
                        {
                            String[] value = columnValue.getValue().split(",");
                            String[] text = columnValue.getText().split(",");
                            sb.append(",styler:function(value,rec,index){");
                            if (((value.length == 0) || (StringUtils.isEmpty(value[0]))) && (text.length == 1))
                            {
                                if (text[0].indexOf("(") > -1) {
                                    testString = " return '" + text[0].replace("(", "(value,rec,index") + "'";
                                } else {
                                    testString = " return '" + text[0] + "'";
                                }
                            }
                            else {
                                for (int j = 0; j < value.length; j++) {
                                    testString = testString + "if(value=='" + value[j] + "'){return '" + text[j] + "'}";
                                }
                            }
                            sb.append(testString);
                            sb.append("}");
                        }
                    }
                }
                sb.append("}");
                if (i < this.columnList.size()) {
                    sb.append(",");
                }
            }
        }
    }

    protected void setPager(StringBuffer sb, String grid)
    {
        sb.append("$('#" + this.name + "')." + grid + "('getPager').pagination({");
        sb.append("beforePageText:'',afterPageText:'/{pages}',");
        if (this.showText) {
            sb.append("displayMsg:'{from}-{to}" + MutiLangUtil.getMutiLangInstance().getLang("common.total") + " {total}" + MutiLangUtil.getMutiLangInstance().getLang("common.item") + "',");
        } else {
            sb.append("displayMsg:'',");
        }
        if (this.showPageList == true) {
            sb.append("showPageList:true,");
        } else {
            sb.append("showPageList:false,");
        }
        sb.append("showRefresh:" + this.showRefresh + "");
        sb.append("});");
        sb.append("$('#" + this.name + "')." + grid + "('getPager').pagination({");
        sb.append("onBeforeRefresh:function(pageNumber, pageSize){ $(this).pagination('loading');$(this).pagination('loaded'); }");
        sb.append("});");
    }

    protected void searchboxFun(StringBuffer sb, String grid)
    {
        sb.append("function " + this.name + "searchbox(value,name){");
        sb.append("var queryParams=$('#" + this.name + "').datagrid('options').queryParams;");
        sb.append("queryParams[name]=value;queryParams.searchfield=name;$('#" + this.name + "')." + grid + "('reload');}");
        sb.append("$('#" + this.name + "searchbox').searchbox({");
        sb.append("searcher:function(value,name){");
        sb.append("" + this.name + "searchbox(value,name);");
        sb.append("},");
        sb.append("menu:'#" + this.name + "mm',");
        sb.append(StringUtil.replaceAll("prompt:'{0}'", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.input.query.keyword")));
        sb.append("});");
    }

    public String getNoAuthOperButton()
    {
        StringBuffer sb = new StringBuffer();
        if ((!ResourceUtil.getSessionUserName().getUserName().equals("admin")) && (Globals.BUTTON_AUTHORITY_CHECK))
        {
            Set<String> operationCodes = (Set)this.pageContext.getRequest().getAttribute(Globals.OPERATIONCODES);
            if (null != operationCodes) {
                for (String MyoperationCode : operationCodes)
                {
                    if (oConvertUtils.isEmpty(MyoperationCode)) {
                        break;
                    }
                    systemService = (SystemService)ApplicationContextUtil.getContext().getBean(SystemService.class);

                    TSOperation operation = (TSOperation)systemService.getEntity(TSOperation.class, MyoperationCode);
                    if ((operation.getOperationcode().startsWith(".")) || (operation.getOperationcode().startsWith("#"))) {
                        if (operation.getOperationType().intValue() == Globals.OPERATION_TYPE_HIDE.shortValue())
                        {
                            sb.append("$(\"" + operation.getOperationcode().replaceAll(" ", "") + "\").hide();");
                        }
                        else
                        {
                            sb.append("$(\"" + operation.getOperationcode().replaceAll(" ", "") + "\").attr(\"disabled\",\"disabled\");");
                            sb.append("$(\"" + operation.getOperationcode().replaceAll(" ", "") + "\").find(\":input\").attr(\"disabled\",\"disabled\");");
                        }
                    }
                }
            }
        }
        LogUtil.info("----getNoAuthOperButton-------" + sb.toString());
        return sb.toString();
    }

    private void installOperationCode(DataGridUrl dataGridUrl, String operationCode, List optList)
    {
        if ((ResourceUtil.getSessionUserName().getUserName().equals("admin")) || (!Globals.BUTTON_AUTHORITY_CHECK))
        {
            optList.add(dataGridUrl);
        }
        else if (!oConvertUtils.isEmpty(operationCode))
        {
            Set<String> operationCodes = (Set)this.pageContext.getRequest().getAttribute(Globals.OPERATIONCODES);
            if (null != operationCodes)
            {
                List<String> operationCodesStr = new ArrayList();
                for (String MyoperationCode : operationCodes)
                {
                    if (oConvertUtils.isEmpty(MyoperationCode)) {
                        break;
                    }
                    systemService = (SystemService)ApplicationContextUtil.getContext().getBean(SystemService.class);

                    TSOperation operation = (TSOperation)systemService.getEntity(TSOperation.class, MyoperationCode);
                    operationCodesStr.add(operation.getOperationcode());
                }
                if (!operationCodesStr.contains(operationCode)) {
                    optList.add(dataGridUrl);
                }
            }
        }
        else
        {
            optList.add(dataGridUrl);
        }
    }

    private String getAutoSpan(String filed, String extend)
    {
        String id = filed.replaceAll("\\.", "_");
        StringBuffer nsb = new StringBuffer();
        nsb.append("<script type=\"text/javascript\">");
        nsb.append("$(document).ready(function() {").append("$(\"#" + getEntityName() + "_" + id + "\").autocomplete(\"commonController.do?getAutoList\",{").append("max: 5,minChars: 2,width: 200,scrollHeight: 100,matchContains: true,autoFill: false,extraParams:{").append("featureClass : \"P\",style : \"full\",\tmaxRows : 10,labelField : \"" + filed + "\",valueField : \"" + filed + "\",").append("searchField : \"" + filed + "\",entityName : \"" + getEntityName() + "\",trem: function(){return $(\"#" + getEntityName() + "_" + id + "\").val();}}");

        nsb.append(",parse:function(data){return jeecgAutoParse.call(this,data);}");
        nsb.append(",formatItem:function(row, i, max){return row['" + filed + "'];} ");
        nsb.append("}).result(function (event, row, formatted) {");
        nsb.append("$(\"#" + getEntityName() + "_" + id + "\").val(row['" + filed + "']);}); });").append("</script>").append("<input class=\"inuptxt\" type=\"text\" id=\"" + getEntityName() + "_" + id + "\" name=\"" + filed + "\" datatype=\"*\" " + extend + StringUtil.replace(" nullmsg=\"\" errormsg=\"{0}\"/>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("input.error")));

        return nsb.toString();
    }

    private String getEntityName()
    {
        if (StringUtils.isEmpty(this.entityName))
        {
            this.entityName = this.actionUrl.substring(0, this.actionUrl.indexOf("Controller"));
            this.entityName = (new StringBuilder().append(this.entityName.charAt(0)).append("").toString().toUpperCase() + this.entityName.substring(1) + "Entity");
        }
        return this.entityName;
    }

    public boolean isFitColumns()
    {
        return this.fitColumns;
    }

    public void setFitColumns(boolean fitColumns)
    {
        this.fitColumns = fitColumns;
    }

    public String getSortName()
    {
        return this.sortName;
    }

    public void setSortName(String sortName)
    {
        this.sortName = sortName;
    }

    public String getSortOrder()
    {
        return this.sortOrder;
    }

    public void setSortOrder(String sortOrder)
    {
        this.sortOrder = sortOrder;
    }

    public String getQueryMode()
    {
        return this.queryMode;
    }

    public void setQueryMode(String queryMode)
    {
        this.queryMode = queryMode;
    }

    public boolean isAutoLoadData()
    {
        return this.autoLoadData;
    }

    public void setAutoLoadData(boolean autoLoadData)
    {
        this.autoLoadData = autoLoadData;
    }

    public void setOpenFirstNode(boolean openFirstNode)
    {
        this.openFirstNode = openFirstNode;
    }

    public void setEntityName(String entityName)
    {
        this.entityName = entityName;
    }

    public void setRowStyler(String rowStyler)
    {
        this.rowStyler = rowStyler;
    }

    public void setExtendParams(String extendParams)
    {
        this.extendParams = extendParams;
    }

    public void setLangArg(String langArg)
    {
        this.langArg = langArg;
    }

    public StringBuffer aceStyleTable()
    {
        String grid = "";
        StringBuffer sb = new StringBuffer();
        this.width = (this.width == null ? "auto" : this.width);
        this.height = (this.height == null ? "auto" : this.height);
        sb.append("<link rel=\"stylesheet\" href=\"plug-in/easyui/themes/metro/main.css\" /><script type=\"text/javascript\">");
        sb.append("$(function(){  storage=$.localStorage;if(!storage)storage=$.cookieStorage;");
        sb.append(getNoAuthOperButton());
        if (this.treegrid)
        {
            grid = "treegrid";
            sb.append("$('#" + this.name + "').treegrid({");
            sb.append("idField:'id',");
            sb.append("treeField:'text',");
        }
        else
        {
            grid = "datagrid";
            sb.append("$('#" + this.name + "').datagrid({");
            sb.append("idField: '" + this.idField + "',");
        }
        if (this.title != null) {
            sb.append("title: '" + this.title + "',");
        }
        if (this.autoLoadData) {
            sb.append("url:'" + this.actionUrl + "&field=" + this.fields + "',");
        } else {
            sb.append("url:'',");
        }
        if (StringUtils.isNotEmpty(this.rowStyler)) {
            sb.append("rowStyler: function(index,row){ return " + this.rowStyler + "(index,row);},");
        }
        if (StringUtils.isNotEmpty(this.extendParams)) {
            sb.append(this.extendParams);
        }
        if (this.fit) {
            sb.append("fit:true,");
        } else {
            sb.append("fit:false,");
        }
        sb.append(StringUtil.replaceAll("loadMsg: '{0}',", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.data.loading")));
        sb.append("striped:true,pageSize: " + this.pageSize + ",");
        sb.append("pagination:" + this.pagination + ",");
        sb.append("pageList:[" + this.pageSize * 1 + "," + this.pageSize * 2 + "," + this.pageSize * 3 + "],");
        if (StringUtils.isNotBlank(this.sortName)) {
            sb.append("sortName:'" + this.sortName + "',");
        }
        sb.append("sortOrder:'" + this.sortOrder + "',");
        sb.append("rownumbers:true,");
        sb.append("singleSelect:" + (!this.checkbox) + ",");
        if (this.fitColumns) {
            sb.append("fitColumns:true,");
        } else {
            sb.append("fitColumns:false,");
        }
        sb.append("showFooter:true,");
        sb.append("frozenColumns:[[");
        getField(sb, 0);
        sb.append("]],");

        sb.append("columns:[[");
        getField(sb);
        sb.append("]],");
        sb.append("onLoadSuccess:function(data){$(\"#" + this.name + "\")." + grid + "(\"clearSelections\");");
        if ((this.openFirstNode) && (this.treegrid))
        {
            sb.append(" if(data==null){");
            sb.append(" var firstNode = $('#" + this.name + "').treegrid('getRoots')[0];");
            sb.append(" $('#" + this.name + "').treegrid('expand',firstNode.id)}");
        }
        if (StringUtil.isNotEmpty(this.onLoadSuccess)) {
            sb.append(this.onLoadSuccess + "(data);");
        }
        sb.append("},");
        if (StringUtil.isNotEmpty(this.onDblClick)) {
            sb.append("onDblClickRow:function(rowIndex,rowData){" + this.onDblClick + "(rowIndex,rowData);},");
        }
        if (this.treegrid) {
            sb.append("onClickRow:function(rowData){");
        } else {
            sb.append("onClickRow:function(rowIndex,rowData){");
        }
        sb.append("rowid=rowData.id;");
        sb.append("gridname='" + this.name + "';");
        if (StringUtil.isNotEmpty(this.onClick)) {
            if (this.treegrid) {
                sb.append("" + this.onClick + "(rowData);");
            } else {
                sb.append("" + this.onClick + "(rowIndex,rowData);");
            }
        }
        sb.append("}");
        sb.append("});");
        setPager(sb, grid);
        sb.append("try{restoreheader();}catch(ex){}");
        sb.append("});");
        sb.append("function reloadTable(){");
        sb.append("try{");
        sb.append("\t$('#'+gridname).datagrid('reload');");
        sb.append("\t$('#'+gridname).treegrid('reload');");
        sb.append("}catch(ex){}");
        sb.append("}");
        sb.append("function reload" + this.name + "(){" + "$('#" + this.name + "')." + grid + "('reload');" + "}");
        sb.append("function get" + this.name + "Selected(field){return getSelected(field);}");
        sb.append("function getSelected(field){var row = $('#'+gridname)." + grid + "('getSelected');" + "if(row!=null)" + "{" + "value= row[field];" + "}" + "else" + "{" + "value='';" + "}" + "return value;" + "}");
        sb.append("function get" + this.name + "Selections(field){" + "var ids = [];" + "var rows = $('#" + this.name + "')." + grid + "('getSelections');" + "for(var i=0;i<rows.length;i++){" + "ids.push(rows[i][field]);" + "}" + "ids.join(',');" + "return ids" + "};");
        sb.append("function getSelectRows(){");
        sb.append("\treturn $('#" + this.name + "').datagrid('getChecked');}");
        sb.append(" function saveHeader(){");
        sb.append(" var columnsFields =null;var easyextends=false;try{columnsFields = $('#" + this.name + "').datagrid('getColumns');easyextends=true;");
        sb.append("}catch(e){columnsFields =$('#" + this.name + "').datagrid('getColumnFields');}");
        sb.append("\tvar cols = storage.get( '" + this.name + "hiddenColumns');var init=true;\tif(cols){init =false;} " + "var hiddencolumns = [];for(var i=0;i< columnsFields.length;i++) {if(easyextends){");

        sb.append("hiddencolumns.push({field:columnsFields[i].field,hidden:columnsFields[i].hidden});}else{");
        sb.append(" var columsDetail = $('#" + this.name + "').datagrid(\"getColumnOption\", columnsFields[i]); ");
        sb.append("if(init){hiddencolumns.push({field:columsDetail.field,hidden:columsDetail.hidden,visible:(columsDetail.hidden==true?false:true)});}else{");
        sb.append("for(var j=0;j<cols.length;j++){");
        sb.append("\t\tif(cols[j].field==columsDetail.field){");
        sb.append("\t\t\t\t\thiddencolumns.push({field:columsDetail.field,hidden:columsDetail.hidden,visible:cols[j].visible});");
        sb.append("\t\t}");
        sb.append("}");
        sb.append("}} }");
        sb.append("storage.set( '" + this.name + "hiddenColumns',JSON.stringify(hiddencolumns));");
        sb.append("}");
        sb.append("function restoreheader(){");
        sb.append("var cols = storage.get( '" + this.name + "hiddenColumns');if(!cols)return;");
        sb.append("for(var i=0;i<cols.length;i++){");
        sb.append("\ttry{");
        sb.append("if(cols.visible!=false)$('#" + this.name + "').datagrid((cols[i].hidden==true?'hideColumn':'showColumn'),cols[i].field);");
        sb.append("}catch(e){");
        sb.append("}");
        sb.append("}");
        sb.append("}");
        sb.append("function resetheader(){");
        sb.append("var cols = storage.get( '" + this.name + "hiddenColumns');if(!cols)return;");
        sb.append("for(var i=0;i<cols.length;i++){");
        sb.append("\ttry{");
        sb.append("  $('#" + this.name + "').datagrid((cols.visible==false?'hideColumn':'showColumn'),cols[i].field);");
        sb.append("}catch(e){");
        sb.append("}");
        sb.append("}");
        sb.append("}");
        if (this.columnList.size() > 0)
        {
            sb.append("function " + this.name + "search(){");
            sb.append("var queryParams=$('#" + this.name + "').datagrid('options').queryParams;");
            sb.append("$('#" + this.name + "tb').find('*').each(function(){queryParams[$(this).attr('name')]=$(this).val();});");
            sb.append("$('#" + this.name + "')." + grid + "({url:'" + this.actionUrl + "&field=" + this.searchFields + "',pageNumber:1});" + "}");

            sb.append("function dosearch(params){");
            sb.append("var jsonparams=$.parseJSON(params);");
            sb.append("$('#" + this.name + "')." + grid + "({url:'" + this.actionUrl + "&field=" + this.searchFields + "',queryParams:jsonparams});" + "}");

            searchboxFun(sb, grid);

            sb.append("function EnterPress(e){");
            sb.append("var e = e || window.event;");
            sb.append("if(e.keyCode == 13){ ");
            sb.append(this.name + "search();");
            sb.append("}}");

            sb.append("function searchReset(name){");
            sb.append(" $(\"#" + this.name + "tb\").find(\":input\").val(\"\");");
            String func = this.name.trim() + "search();";
            sb.append(func);
            sb.append("}");
        }
        sb.append("</script>");
        sb.append("<table width=\"100%\"   id=\"" + this.name + "\" toolbar=\"#" + this.name + "tb\"></table>");
        sb.append("<div id=\"" + this.name + "tb\" style=\"padding:3px; height: auto\">");
        if (hasQueryColum(this.columnList))
        {
            sb.append("<div name=\"searchColums\">");
            sb.append("<input  id=\"_sqlbuilder\" name=\"sqlbuilder\"   type=\"hidden\" />");
            if ("group".equals(getQueryMode())) {
                for (DataGridColumn col : this.columnList) {
                    if (col.isQuery())
                    {
                        sb.append("<span style=\"display:-moz-inline-box;display:inline-block;\">");
                        sb.append("<span style=\"vertical-align:middle;display:-moz-inline-box;display:inline-block;width: 80px;text-align:right;text-overflow:ellipsis;-o-text-overflow:ellipsis; overflow: hidden;white-space:nowrap; \" title=\"" + col.getTitle() + "\">" + col.getTitle() + "���</span>");
                        if ("single".equals(col.getQueryMode()))
                        {
                            if (!StringUtil.isEmpty(col.getReplace()))
                            {
                                sb.append("<select name=\"" + col.getField().replaceAll("_", "\\.") + "\" WIDTH=\"100\" style=\"width: 104px\"> ");
                                sb.append(StringUtil.replaceAll("<option value =\"\" >{0}</option>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.select")));
                                String[] test = col.getReplace().split(",");
                                String text = "";
                                String value = "";
                                for (String string : test)
                                {
                                    String lang_key = string.split("_")[0];
                                    text = MutiLangUtil.getMutiLangInstance().getLang(lang_key);
                                    value = string.split("_")[1];
                                    sb.append("<option value =\"" + value + "\">" + text + "</option>");
                                }
                                sb.append("</select>");
                            }
                            else if (!StringUtil.isEmpty(col.getDictionary()))
                            {
                                if (col.getDictionary().contains(","))
                                {
                                    String[] dic = col.getDictionary().split(",");
                                    String sql = "select " + dic[1] + " as field," + dic[2] + " as text from " + dic[0];

                                    systemService = (SystemService)ApplicationContextUtil.getContext().getBean(SystemService.class);

                                    List<Map<String, Object>> list = systemService.findForJdbc(sql, new Object[0]);
                                    sb.append("<select name=\"" + col.getField().replaceAll("_", "\\.") + "\" WIDTH=\"100\" style=\"width: 104px\"> ");
                                    sb.append(StringUtil.replaceAll("<option value =\"\" >{0}</option>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.select")));
                                    for (Map<String, Object> map : list)
                                    {
                                        sb.append(" <option value=\"" + map.get("field") + "\">");
                                        sb.append(map.get("text"));
                                        sb.append(" </option>");
                                    }
                                    sb.append("</select>");
                                }
                                else
                                {
                                    Map<String, List<TSType>> typedatas = TSTypegroup.allTypes;
                                    List<TSType> types = (List)typedatas.get(col.getDictionary().toLowerCase());
                                    sb.append("<select name=\"" + col.getField().replaceAll("_", "\\.") + "\" WIDTH=\"100\" style=\"width: 104px\"> ");
                                    sb.append(StringUtil.replaceAll("<option value =\"\" >{0}</option>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.select")));
                                    for (TSType type : types)
                                    {
                                        sb.append(" <option value=\"" + type.getTypecode() + "\">");
                                        sb.append(MutiLangUtil.getMutiLangInstance().getLang(type.getTypename()));
                                        sb.append(" </option>");
                                    }
                                    sb.append("</select>");
                                }
                            }
                            else if (col.isAutocomplete())
                            {
                                sb.append(getAutoSpan(col.getField().replaceAll("_", "\\."), extendAttribute(col.getExtend())));
                            }
                            else
                            {
                                sb.append("<input class=\"inuptxt\" onkeypress=\"EnterPress(event)\" onkeydown=\"EnterPress()\"  type=\"text\" name=\"" + col.getField().replaceAll("_", "\\.") + "\"  " + extendAttribute(col.getExtend()) + "  />");
                            }
                        }
                        else if ("group".equals(col.getQueryMode()))
                        {
                            sb.append("<input class=\"inuptxt\" type=\"text\" name=\"" + col.getField() + "_begin\"   " + extendAttribute(col.getExtend()) + "/>");
                            sb.append("<span style=\"display:-moz-inline-box;display:inline-block;width: 8px;text-align:right;\">~</span>");
                            sb.append("<input class=\"inuptxt\" type=\"text\" name=\"" + col.getField() + "_end\"   " + extendAttribute(col.getExtend()) + "/>");
                        }
                        sb.append("</span>");
                    }
                }
            }
            sb.append("</div>");
        }
        if ((this.toolBarList.size() == 0) && (!hasQueryColum(this.columnList))) {
            sb.append("<div style=\"height:0px;\" >");
        } else {
            sb.append("<div style=\"height:30px;\" class=\"datagrid-toolbar\">");
        }
        sb.append("<span style=\"float:left;\" >");
        if (this.toolBarList.size() > 0) {
            for (DataGridUrl toolBar : this.toolBarList)
            {
                sb.append("<a href=\"#\" class=\"button\" plain=\"true\" icon=\"" + toolBar.getIcon() + "\" ");
                if (StringUtil.isNotEmpty(toolBar.getOnclick()))
                {
                    sb.append("onclick=" + toolBar.getOnclick() + "");
                }
                else
                {
                    sb.append("onclick=\"" + toolBar.getFunname() + "(");
                    if (!toolBar.getFunname().equals("doSubmit")) {
                        sb.append("'" + toolBar.getTitle() + "',");
                    }
                    String width = toolBar.getWidth().contains("%") ? "'" + toolBar.getWidth() + "'" : toolBar.getWidth();
                    String height = toolBar.getHeight().contains("%") ? "'" + toolBar.getHeight() + "'" : toolBar.getHeight();
                    sb.append("'" + toolBar.getUrl() + "','" + this.name + "'," + width + "," + height + ")\"");
                }
                sb.append(">" + toolBar.getTitle() + "</a>");
            }
        }
        sb.append("</span>");
        if (("group".equals(getQueryMode())) && (hasQueryColum(this.columnList)))
        {
            sb.append("<span style=\"float:right\">");
            sb.append("<a href=\"#\" class=\"button\" iconCls=\"icon-search\" onclick=\"" + this.name + StringUtil.replaceAll("search()\">{0}</a>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.query")));
            sb.append("<a href=\"#\" class=\"button\" iconCls=\"icon-reload\" onclick=\"searchReset('" + this.name + StringUtil.replaceAll("')\">{0}</a>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.reset")));
            if (this.queryBuilder) {
                sb.append("<a href=\"#\" class=\"button\" iconCls=\"icon-search\" onclick=\"queryBuilder('" + StringUtil.replaceAll("')\">{0}</a>", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.querybuilder")));
            }
            sb.append("</span>");
        }
        else if (("single".equals(getQueryMode())) && (hasQueryColum(this.columnList)))
        {
            sb.append("<span style=\"float:right\">");
            sb.append("<input id=\"" + this.name + "searchbox\" class=\"easyui-searchbox\"  data-options=\"searcher:" + this.name + StringUtil.replaceAll("searchbox,prompt:'{0}',menu:'#", "{0}", MutiLangUtil.getMutiLangInstance().getLang("common.please.input.keyword")) + this.name + "mm'\"></input>");
            sb.append("<div id=\"" + this.name + "mm\" style=\"width:120px\">");
            for (DataGridColumn col : this.columnList) {
                if (col.isQuery()) {
                    sb.append("<div data-options=\"name:'" + col.getField().replaceAll("_", "\\.") + "',iconCls:'icon-ok' " + extendAttribute(col.getExtend()) + " \">" + col.getTitle() + "</div>  ");
                }
            }
            sb.append("</div>");
            sb.append("</span>");
        }
        sb.append("</div>");
        if (this.queryBuilder) {
            addQueryBuilder(sb, "button");
        }
        return sb;
    }

    private void appendLine(StringBuffer sb, String str)
    {
        String format = "\r\n";
        sb.append(str).append(format);
    }

    private void addQueryBuilder(StringBuffer sb, String buttonSytle)
    {
        appendLine(sb, "<div style=\"position:relative;overflow:auto;\">");
        appendLine(sb, "<div id=\"" + this.name + "_qbwin\" class=\"easyui-window\" data-options=\"closed:true,title:'���������������������'\" style=\"width:600px;height:370px;padding:0px\">");
        appendLine(sb, "\t<div class=\"easyui-layout\" data-options=\"fit:true\">");
        appendLine(sb, "\t\t<div data-options=\"region:'east',split:true\" style=\"width:130px\"><div class=\"easyui-accordion\" style=\"width:120px;height:300px;\">");
        appendLine(sb, "<div title=\"������������\" data-options=\"iconCls:'icon-search'\" style=\"padding:0px;\">");
        appendLine(sb, "\t<ul id=\"" + this.name + "tt\" class=\"easyui-tree\" data-options=\"onClick:function(node){");

        appendLine(sb, "historyQuery( node.id);  ");
        appendLine(sb, "},ondbClick: function(node){");
        appendLine(sb, "$(this).tree('beginEdit',node.target);");
        appendLine(sb, "},onContextMenu: function(e,node){");
        appendLine(sb, "\t\te.preventDefault();");
        appendLine(sb, "\t\t$(this).tree('select',node.target);");
        appendLine(sb, "\t\t$('#" + this.name + "mmTree').menu('show',{");
        appendLine(sb, "\t\t\tleft: e.pageX,");
        appendLine(sb, "\t\t\ttop: e.pageY");
        appendLine(sb, "\t\t});");
        appendLine(sb, "\t},  ");
        appendLine(sb, " onAfterEdit:function(node){  ");
        appendLine(sb, "    if(node.text!=''){ " + this.name + "his[node.id].name=node.text; saveHistory();}\t}");

        appendLine(sb, "\">");
        appendLine(sb, "\t</ul>");
        appendLine(sb, "</div>");
        appendLine(sb, "</div></div>");
        appendLine(sb, "\t\t<div data-options=\"region:'center'\" style=\"padding:0px;\">");
        appendLine(sb, "\t\t\t<table id=\"" + this.name + "tg\" class=\"easyui-treegrid\" title=\"������������������\" style=\"width:450px;height:300px;\"");
        appendLine(sb, "\t\tdata-options=\"");
        appendLine(sb, "\t\t\ticonCls: 'icon-ok',");
        appendLine(sb, "\t\t\trownumbers: true,");
        appendLine(sb, "\t\t\tanimate: true,");
        appendLine(sb, "\t\t\tfitColumns: true,");
        appendLine(sb, "\t\t\t//url: 'sqlbuilder.json',//���������������������\r\n");
        appendLine(sb, "\t\t\tmethod: 'get',");
        appendLine(sb, "\t\t\tidField: 'id',");
        appendLine(sb, "autoEditing: true,  ");
        appendLine(sb, "extEditing: false, ");
        appendLine(sb, "singleEditing: false ,");
        appendLine(sb, "\t\t\ttreeField: 'field',toolbar:toolbar,onContextMenu: onContextMenu");
        appendLine(sb, "\t\t\">");
        appendLine(sb, "<thead>");
        appendLine(sb, "\t<tr>");
        sb.append("\t<th data-options=\"field:'relation',width:18,formatter:function(value,row){");

        appendLine(sb, "\t\t\t\treturn value=='and'?'������':'������';");
        appendLine(sb, "\t\t\t},editor:{");
        appendLine(sb, "\t\t\t\ttype:'combobox',");
        appendLine(sb, "\t\t\t\toptions:{");
        appendLine(sb, "\t\t\t\tvalueField:'relationId',");
        appendLine(sb, "\t\t\t\t\t\ttextField:'relationName',");
        appendLine(sb, "\t\t\t\t\t\tdata:  ");
        appendLine(sb, "\t\t\t\t\t\t[  ");
        appendLine(sb, "\t\t\t\t\t\t{'relationId':'and','relationName':'������'},  ");
        appendLine(sb, "\t\t\t\t\t\t{'relationId':'or','relationName':'������'}  ");
        appendLine(sb, "\t\t\t\t\t\t],  ");
        appendLine(sb, "\t\t\t\t\t\trequired:true");
        appendLine(sb, "\t\t\t\t\t}}\">������</th>");
        sb.append("\t\t<th data-options=\"field:'field',width:30,formatter:function(value,row){");

        appendLine(sb, "\t\t\tvar data= ");
        StringBuffer fieldArray = new StringBuffer();
        fieldArray.append("\t[  ");
        for (int i = 0; i < this.columnList.size(); i++)
        {
            DataGridColumn col = (DataGridColumn)this.columnList.get(i);
            if (!"opt".equals(col.getField()))
            {
                fieldArray.append("\t{'fieldId':'" + getDBFieldName(col.getField()) + "','fieldName':'" + col.getTitle() + "'}");
                if (i < this.columnList.size() - 1) {
                    fieldArray.append(",");
                }
            }
        }
        fieldArray.append("]");
        sb.append(fieldArray).append(";");
        appendLine(sb, "for(var i=0;i<data.length;i++){");
        appendLine(sb, "if(value == data[i]['fieldId']){");
        appendLine(sb, "return data[i]['fieldName'];");
        appendLine(sb, "}");
        appendLine(sb, "}");
        appendLine(sb, "return value;");
        appendLine(sb, "},editor:{");
        appendLine(sb, "type:'combobox',");
        appendLine(sb, "\toptions:{");
        appendLine(sb, "valueField:'fieldId',");
        appendLine(sb, "textField:'fieldName',");
        appendLine(sb, "data:  ");
        sb.append(fieldArray);
        appendLine(sb, " , ");
        appendLine(sb, "\t\t\t\t\t\t\trequired:true");
        appendLine(sb, "\t\t\t\t}}\">������</th>");
        sb.append("<th data-options=\"field:'condition',width:20,align:'right',formatter:function(value,row){");

        appendLine(sb, "\t\t\t\t\t\t\tvar data=  ");
        appendLine(sb, "\t\t\t\t\t[  ");
        Map<String, List<TSType>> typedatas = TSTypegroup.allTypes;
        List<TSType> types = (List)typedatas.get("rulecon");
        if (types != null) {
            for (int i = 0; i < types.size(); i++)
            {
                TSType type = (TSType)types.get(i);
                appendLine(sb, " {'conditionId':'" + type.getTypecode() + "','conditionName':'" + MutiLangUtil.getMutiLangInstance().getLang(type.getTypename()) + "'}");
                if (i < types.size() - 1) {
                    appendLine(sb, ",");
                }
            }
        }
        appendLine(sb, "];");
        appendLine(sb, "\tfor(var i=0;i<data.length;i++){");
        appendLine(sb, "\t\t\tif(value == data[i]['conditionId']){");
        appendLine(sb, "\t\t\treturn data[i]['conditionName'];");
        appendLine(sb, "\t\t\t}");
        appendLine(sb, "\t\t}");
        appendLine(sb, "\t\treturn value;");
        appendLine(sb, "\t\t},editor:{");
        appendLine(sb, "\t\ttype:'combobox',");
        appendLine(sb, "\t\toptions:{");
        appendLine(sb, "\t\t\tvalueField:'conditionId',");
        appendLine(sb, "\t\t\t\ttextField:'conditionName',\t");
        appendLine(sb, "\t\t\tdata:  ");
        appendLine(sb, "[");
        if (types != null) {
            for (int i = 0; i < types.size(); i++)
            {
                TSType type = (TSType)types.get(i);
                appendLine(sb, " {'conditionId':'" + type.getTypecode() + "','conditionName':'" + MutiLangUtil.getMutiLangInstance().getLang(type.getTypename()) + "'}");
                if (i < types.size() - 1) {
                    appendLine(sb, ",");
                }
            }
        }
        appendLine(sb, "\t\t\t\t],  ");
        appendLine(sb, "\t\t\t\trequired:true");
        appendLine(sb, "\t\t\t}}\">������</th>");
        sb.append("\t<th data-options=\"field:'value',width:30,editor:'text'\">���</th>");

        appendLine(sb, "<th data-options=\"field:'opt',width:30,formatter:function(value,row){");
        appendLine(sb, "\treturn '<a  onclick=\\'removeIt('+row.id+')\\' >������</a>';}\">������</th>");
        appendLine(sb, "\t\t</tr>");
        appendLine(sb, "\t</thead>");
        appendLine(sb, "\t</table>");
        appendLine(sb, "</div>");
        appendLine(sb, "<div data-options=\"region:'south',border:false\" style=\"text-align:right;padding:5px 0 0;\">");
        appendLine(sb, "<a class=\"" + buttonSytle + "\" data-options=\"iconCls:'icon-ok'\" href=\"javascript:void(0)\" onclick=\"javascript:queryBuilderSearch()\">������</a>");
        appendLine(sb, "<a class=\"" + buttonSytle + "\" data-options=\"iconCls:'icon-cancel'\" href=\"javascript:void(0)\" onclick=\"javascript:$('#" + this.name + "_qbwin').window('close')\">������</a>");
        appendLine(sb, "\t\t</div>");
        appendLine(sb, "\t</div>\t");
        appendLine(sb, "</div>\t\t");
        appendLine(sb, "</div>");
        appendLine(sb, "<div id=\"mm\" class=\"easyui-menu\" style=\"width:120px;\">");
        appendLine(sb, "\t<div onclick=\"append()\" data-options=\"iconCls:'icon-add'\">������</div>");
        appendLine(sb, "\t<div onclick=\"edit()\" data-options=\"iconCls:'icon-edit'\">������</div>");
        appendLine(sb, "\t<div onclick=\"save()\" data-options=\"iconCls:'icon-save'\">������</div>");
        appendLine(sb, "\t<div onclick=\"removeIt()\" data-options=\"iconCls:'icon-remove'\">������</div>");
        appendLine(sb, "\t<div class=\"menu-sep\"></div>");
        appendLine(sb, "\t<div onclick=\"cancel()\">������</div>");
        appendLine(sb, "<div onclick=\"expand()\">Expand</div>");
        appendLine(sb, "</div><div id=\"" + this.name + "mmTree\" class=\"easyui-menu\" style=\"width:100px;\">");
        appendLine(sb, "<div onclick=\"editTree()\" data-options=\"iconCls:'icon-edit'\">������</div>");
        appendLine(sb, "<div onclick=\"deleteTree()\" data-options=\"iconCls:'icon-remove'\">������</div></div>");

        appendLine(sb, "<script type=\"text/javascript\">");
        appendLine(sb, "var toolbar = [{");
        appendLine(sb, "\ttext:'',");
        appendLine(sb, "\ticonCls:'icon-add',");
        appendLine(sb, "\thandler:function(){append();}");
        appendLine(sb, "},{");
        appendLine(sb, "\ttext:'',");
        appendLine(sb, "\ticonCls:'icon-edit',");
        appendLine(sb, "\thandler:function(){edit();}");
        appendLine(sb, "},{");
        appendLine(sb, "\ttext:'',");
        appendLine(sb, "\ticonCls:'icon-remove',");
        appendLine(sb, "\thandler:function(){removeIt();}");
        appendLine(sb, "},'-',{");
        appendLine(sb, "\ttext:'',");
        appendLine(sb, "\ticonCls:'icon-save',");
        appendLine(sb, "\thandler:function(){save();}");
        appendLine(sb, "\t}];");
        appendLine(sb, "function onContextMenu(e,row){");
        appendLine(sb, "\te.preventDefault();");
        appendLine(sb, "\t$(this).treegrid('select', row.id);");
        appendLine(sb, "\t$('#mm').menu('show',{");
        appendLine(sb, "\t\tleft: e.pageX,");
        appendLine(sb, "\t\ttop: e.pageY");
        appendLine(sb, "\t});");
        appendLine(sb, "}");
        appendLine(sb, "\tvar idIndex = 100;");
        appendLine(sb, "function append(){");
        appendLine(sb, "\tidIndex++;");
        appendLine(sb, "\tvar node = $('#" + this.name + "tg').treegrid('getSelected');");
        appendLine(sb, "\t$('#" + this.name + "tg').treegrid('append',{");
        appendLine(sb, "\t\tdata: [{");
        appendLine(sb, "\t\t\tid: idIndex,");
        appendLine(sb, "\t\t\tfield: '',");
        appendLine(sb, "\t\tcondition:'like',");
        appendLine(sb, "\t\tvalue: '%a%',");
        appendLine(sb, "\t\trelation: 'and'");
        appendLine(sb, "\t\t\t\t}]");
        appendLine(sb, "});$('#" + this.name + "tg').datagrid('beginEdit',idIndex);");
        appendLine(sb, "}");
        appendLine(sb, "\t\tfunction removeIt(id){");
        appendLine(sb, "var node = $('#" + this.name + "tg').treegrid('getSelected');");
        appendLine(sb, "if(id){");
        appendLine(sb, "$('#" + this.name + "tg').treegrid('remove', id);");
        appendLine(sb, "}else if(node){\t$('#" + this.name + "tg').treegrid('remove', node.id);");
        appendLine(sb, "}");
        appendLine(sb, "}");
        appendLine(sb, "function collapse(){");
        appendLine(sb, "\tvar node = $('#" + this.name + "tg').treegrid('getSelected');");
        appendLine(sb, "if(node){");
        appendLine(sb, "\t$('#" + this.name + "tg').treegrid('collapse', node.id);");
        appendLine(sb, "}");
        appendLine(sb, "}");
        appendLine(sb, "function expand(){");
        appendLine(sb, "var node = $('#" + this.name + "tg').treegrid('getSelected');");
        appendLine(sb, "if(node){");
        appendLine(sb, "\t$('#" + this.name + "tg').treegrid('expand', node.id);");
        appendLine(sb, "}");
        appendLine(sb, "}");
        appendLine(sb, "var editingId;");
        appendLine(sb, "function edit(id){");
        appendLine(sb, "var row = $('#" + this.name + "tg').treegrid('getSelected');");
        appendLine(sb, "if(id){\t$('#" + this.name + "tg').treegrid('beginEdit', id);}else if(row){");
        appendLine(sb, "\t$('#" + this.name + "tg').treegrid('beginEdit', row.id);");
        appendLine(sb, "}");
        appendLine(sb, "}");
        appendLine(sb, "function save(){");
        appendLine(sb, "\tvar t = $('#" + this.name + "tg');");
        appendLine(sb, "\tvar nodes = t.treegrid('getRoots');");
        appendLine(sb, "\tfor (var i = 0; i < nodes.length; i++) {");
        appendLine(sb, "\tt.treegrid('endEdit',nodes[i].id);}");
        appendLine(sb, "\t}");
        appendLine(sb, "function cancel(){");
        appendLine(sb, "\tvar t = $('#" + this.name + "tg');");
        appendLine(sb, "var nodes = t.treegrid('getRoots');for (var i = 0; i < nodes.length; i++) {t.treegrid('cancelEdit',nodes[i].id);}");
        appendLine(sb, "}");
        appendLine(sb, "var " + this.name + "his=new Array();");
        appendLine(sb, " function historyQuery(index) {");
        appendLine(sb, "\t  var data  = { rows:JSON.parse(" + this.name + "his[index].json)};  ");
        appendLine(sb, "\t    var t = $('#" + this.name + "tg');");
        appendLine(sb, "\t\tvar data = t.treegrid('loadData',data);");
        appendLine(sb, "\t\t$('#_sqlbuilder').val( " + this.name + "his[index].json);   ");
        appendLine(sb, "\t\t" + this.name + "search();");
        appendLine(sb, "\t}");
        appendLine(sb, "function view(){");
        appendLine(sb, "save();");
        appendLine(sb, "var t = $('#" + this.name + "tg');");
        appendLine(sb, "var data = t.treegrid('getData');");
        appendLine(sb, "return   JSON.stringify(data) ;");
        appendLine(sb, "}");
        appendLine(sb, "\t function queryBuilder() {");
        appendLine(sb, "\t$('#" + this.name + "_qbwin').window('open');");
        appendLine(sb, "}");

        appendLine(sb, "function queryBuilderSearch() {");
        appendLine(sb, "         var json =  view();");
        appendLine(sb, "\t$('#_sqlbuilder').val(json);  ");
        appendLine(sb, "\tvar isnew=true;");
        appendLine(sb, "for(var i=0;i< " + this.name + "his.length;i++){");
        appendLine(sb, "\tif(" + this.name + "his[i]&&" + this.name + "his[i].json==json){");
        appendLine(sb, "\t\tisnew=false;");
        appendLine(sb, "\t}");
        appendLine(sb, "}");
        appendLine(sb, "if(isnew){");
        appendLine(sb, " " + this.name + "his.push({name:'Query'+" + this.name + "his.length,json:json});saveHistory();");
        appendLine(sb, "var name= 'Query'+( " + this.name + "his.length-1);");
        appendLine(sb, "\tvar name= 'Query'+(" + this.name + "his.length-1);");
        appendLine(sb, "appendTree(" + this.name + "his.length-1,name);");
        appendLine(sb, "}");
        appendLine(sb, "\t" + this.name + "search();");
        appendLine(sb, " }");
        appendLine(sb, " $(document).ready(function(){ ");
        appendLine(sb, " storage=$.localStorage;if(!storage)storage=$.cookieStorage;");
        appendLine(sb, "\tvar _qhistory = storage.get('" + this.name + "_query_history');");
        appendLine(sb, " if(_qhistory){");
        appendLine(sb, " " + this.name + "his=_qhistory;");

        appendLine(sb, " \tfor(var i=0;i< " + this.name + "his.length;i++){");
        appendLine(sb, " \t\tif(" + this.name + "his[i])appendTree(i," + this.name + "his[i].name);");
        appendLine(sb, " \t}restoreheader();");
        appendLine(sb, " }});");
        appendLine(sb, "function saveHistory(){");
        appendLine(sb, "\tvar history=new Array();");
        appendLine(sb, "\tfor(var i=0;i<" + this.name + "his.length;i++){");
        appendLine(sb, "\t\tif(" + this.name + "his[i]){");
        appendLine(sb, "\t\t\thistory.push(" + this.name + "his[i]);");
        appendLine(sb, "\t\t}");
        appendLine(sb, "\t}");
        appendLine(sb, "\tstorage.set( '" + this.name + "_query_history',JSON.stringify(history));");
        appendLine(sb, "}");
        appendLine(sb, "function deleteTree(){");
        appendLine(sb, "\tvar tree = $('#" + this.name + "tt');var node= tree.tree('getSelected');");

        appendLine(sb, "\t" + this.name + "his[node.id]=null;saveHistory();");
        appendLine(sb, "\ttree.tree('remove', node.target);");
        appendLine(sb, "}");
        appendLine(sb, "function editTree(){");
        appendLine(sb, "\tvar node = $('#" + this.name + "tt').tree('getSelected');");
        appendLine(sb, "\t$('#" + this.name + "tt').tree('beginEdit',node.target);");
        appendLine(sb, "\tsaveHistory();");
        appendLine(sb, "}");
        appendLine(sb, "function appendTree(id,name){");
        appendLine(sb, "\t$('#" + this.name + "tt').tree('append',{");
        appendLine(sb, "\tdata:[{");
        appendLine(sb, "id : id,");
        appendLine(sb, "text :name");
        appendLine(sb, "\t}]");
        appendLine(sb, "});");
        appendLine(sb, "}");

        appendLine(sb, "</script>");
    }

    String getDBFieldName(String fieldName)
    {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < fieldName.length(); i++)
        {
            char c = fieldName.charAt(i);
            if ((c <= 'Z') && (c >= 'A')) {
                sb.append("_").append((char)(c + ' '));
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }
}
