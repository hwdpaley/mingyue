package com.mingyue.controller.mcui;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.asset.AssetEntity;
import com.mingyue.entity.mcui.McuiTempEntity;
import com.mingyue.service.mcui.McuiTempServiceI;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.log4j.Logger;
import org.jeecgframework.core.common.model.common.UploadFile;
import org.jeecgframework.core.common.model.json.*;
import org.jeecgframework.core.util.*;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.tag.vo.easyui.ComboTreeModel;
import org.jeecgframework.tag.vo.easyui.McuiTreeGridModel;
import org.jeecgframework.tag.vo.easyui.TreeGridModel;
import org.jeecgframework.web.system.controller.core.IconImageUtil;
import org.jeecgframework.web.system.pojo.base.TSIcon;
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import org.jeecgframework.core.common.controller.BaseController;
import org.jeecgframework.core.common.hibernate.qbc.CriteriaQuery;
import org.jeecgframework.core.constant.Globals;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.service.SystemService;

import com.mingyue.entity.mcui.McuiEntity;
import com.mingyue.service.mcui.McuiServiceI;

/**   
 * @Title: Controller
 * @Description: UI界面
 * @author Tony
 * @date 2015-07-07 17:57:30
 * @version V1.0   
 *
 */
@Scope("prototype")
@Controller
@RequestMapping("/mcuiController")
public class McuiController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(McuiController.class);

	@Autowired
	private McuiServiceI mcuiService;
    @Autowired
    private McuiTempServiceI mcuiTempServiceI;

	/**
	 * UI界面列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "mcui")
	public ModelAndView mcui(HttpServletRequest request) {
		return new ModelAndView("com/mingyue/mcui/mcuiList");
	}

	/**
	 * easyui AJAX请求数据
	 * 
	 * @param request
	 * @param response
	 * @param dataGrid

	 */

	@RequestMapping(params = "datagrid")
	public void datagrid(McuiEntity mcui,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(McuiEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mcui, request.getParameterMap());
		this.mcuiService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}
    @RequestMapping(params = "mcuiGrid")
    @ResponseBody
    public List<McuiTreeGrid> mcuiGrid(HttpServletRequest request,
                                    McuiTreeGrid treegrid) {
        CriteriaQuery cq = new CriteriaQuery(McuiEntity.class);
        String selfId = request.getParameter("selfId");
        if (selfId != null) {
            cq.notEq("id", selfId);
        }
        if (treegrid.getId() != null) {
            cq.eq("mcuiEntity.id", treegrid.getId());
        }
        if (treegrid.getId() == null) {
            cq.isNull("mcuiEntity");
        }
        String name = request.getParameter("name");
        if(name!=null&&name.length()>0){
            cq.eq("name",name);
        }
        cq.addOrder("uiorder", SortDirection.asc);
        cq.add();
//        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, treegrid, request.getParameterMap());

        List<McuiEntity> mcuiEntityList = systemService.getListByCriteriaQuery(cq, false);
        IconImageUtil.convertMcuiList(mcuiEntityList, request,treegrid.getId() == null?true:false);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径

//        Collections.sort(assetList, new NumberComparator());
        List<McuiTreeGrid> mcuiTreeGrids = new ArrayList<McuiTreeGrid>();
        McuiTreeGridModel mcuiTreeGridModel = new McuiTreeGridModel();
        mcuiTreeGridModel.setIconName("picname");
        mcuiTreeGridModel.setIconName_h("picnameh");
        mcuiTreeGridModel.setType("type");

        mcuiTreeGridModel.setxField("x");
        mcuiTreeGridModel.setyField("y");
        mcuiTreeGridModel.setWidthField("width");
        mcuiTreeGridModel.setHeightField("height");
        mcuiTreeGridModel.setFunctionnameField("functionname");
        mcuiTreeGridModel.setLevelField("level");

        mcuiTreeGridModel.setTextField("name");
        mcuiTreeGridModel.setParentText("mcuiEntity_name");
        mcuiTreeGridModel.setParentId("mcuiEntity_id");
//        treeGridModel.setSrc("src");
        mcuiTreeGridModel.setIdField("id");
//        mcuiTreeGridModel.setIp("ip");
        mcuiTreeGridModel.setChildList("McuiEntitys");
        // 添加排序字段
        mcuiTreeGridModel.setOrder("uiorder");

//        treeGridModel.setFunctionType("functionType");

        mcuiTreeGrids = systemService.mcuiTreegrid(mcuiEntityList, mcuiTreeGridModel);

        MutiLangUtil.setMutiTree(mcuiTreeGrids);

        return mcuiTreeGrids;
    }
	/**
	 * 删除UI界面
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(McuiEntity mcui, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		mcui = systemService.getEntity(McuiEntity.class, mcui.getId());
		message = "UI界面删除成功";
		mcuiService.delete(mcui);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加UI界面
	 * 
	 * @param mcui
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(McuiEntity mcui, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
        if(mcui.getMcuiEntity().getId()==""){
            mcui.setMcuiEntity(null);
        }
		if (StringUtil.isNotEmpty(mcui.getId())) {
			message = "UI界面更新成功";
			McuiEntity t = mcuiService.get(McuiEntity.class, mcui.getId());
			try {

                String pa=ResourceUtil.getConfigByName("uploadpath");
                if(mcui.getPicname().indexOf(pa) != -1){
                    request.setCharacterEncoding("UTF-8");
                    String realPath = request.getSession().getServletContext().getRealPath("/") + "/" + mcui.getPicname();// 文件的硬盘真实路径

                    FileInputStream fins=StreamUtils.getFileInputStream(realPath);
                    StreamUtils streamUtils=new StreamUtils();
                    byte[] pcontent=streamUtils.getBytes(fins);
                    int first=mcui.getPicname().lastIndexOf("/");
                    String name=mcui.getPicname().substring(first+1,mcui.getPicname().length());
                    first=name.lastIndexOf(".");
                    mcui.setPicClas(name.substring(0,first));
                    mcui.setExtend(name.substring(first+1,name.length()));
                    mcui.setPicContent(pcontent);
                }
                if(mcui.getPicnameh().indexOf(pa) != -1){
                    request.setCharacterEncoding("UTF-8");
                    String realPath = request.getSession().getServletContext().getRealPath("/") + "/" + mcui.getPicnameh();// 文件的硬盘真实路径

                    FileInputStream fins=StreamUtils.getFileInputStream(realPath);
                    StreamUtils streamUtils=new StreamUtils();
                    byte[] pcontent=streamUtils.getBytes(fins);
                    int first=mcui.getPicnameh().lastIndexOf("/");
                    String name=mcui.getPicnameh().substring(first+1,mcui.getPicnameh().length());
                    first=name.lastIndexOf(".");
                    mcui.setPicClash(name.substring(0,first));
                    mcui.setExtendh(name.substring(first+1,name.length()));
                    mcui.setPicContenth(pcontent);
                }
                MyBeanUtils.copyBeanNotNull2Bean(mcui, t);
				mcuiService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "UI界面更新失败";
			}
		} else {
			message = "UI界面添加成功";
			mcuiService.save(mcui);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * UI界面列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(McuiEntity mcui, HttpServletRequest req) {
        String sid = oConvertUtils.getString(req.getParameter("sid"));

        if (StringUtil.isNotEmpty(mcui.getId())) {
			mcui = mcuiService.getEntity(McuiEntity.class, mcui.getId());
			req.setAttribute("mcuiPage", mcui);
		}else if (StringUtil.isNotEmpty(sid)) {
            mcui = mcuiService.getEntity(McuiEntity.class, sid);
            req.setAttribute("mcuiPage", mcui);
        }
		return new ModelAndView("com/mingyue/mcui/mcui");
	}
    /**
     * 父级权限下拉菜单
     */
    @RequestMapping(params = "setPFunction")
    @ResponseBody
    public List<ComboTree> setPFunction(HttpServletRequest request,
                                        ComboTree comboTree) {
        CriteriaQuery cq = new CriteriaQuery(McuiEntity.class);
        if (null != request.getParameter("selfId")) {
            cq.notEq("id", request.getParameter("selfId"));
        }
        if (comboTree.getId() != null) {
            cq.eq("mcuiEntity.id", comboTree.getId());
        }
        if (comboTree.getId() == null) {
            cq.isNull("mcuiEntity");
        }
        cq.add();
        List<McuiEntity> assetList = systemService.getListByCriteriaQuery(cq, false);
        List<ComboTree> comboTrees = new ArrayList<ComboTree>();
        ComboTreeModel comboTreeModel = new ComboTreeModel("id","name", "McuiEntitys");
        comboTrees = systemService.ComboTree(assetList, comboTreeModel,null, false);
        MutiLangUtil.setMutiTree(comboTrees);
        return comboTrees;
    }
    @RequestMapping(params = "getUI")
    @ResponseBody
    public JSONObject getUI(HttpServletRequest request, HttpServletResponse response) {
        AjaxJson j = new AjaxJson();
        JSONObject obj = new JSONObject();
        List<HashMap<String, Object>> listmap = new ArrayList<HashMap<String, Object>>();
        String uiname = oConvertUtils.getString(request.getParameter("name"));
//        j = checkuser(request);
//        if (!j.isSuccess())
//            return null;
        // MealMealsEntity mealMeals = new MealMealsEntity();
//        MealTypeEntity type = this.systemService.findUniqueByProperty(MealTypeEntity.class, "id", mealtypeid);
        CriteriaQuery cq = new CriteriaQuery(McuiEntity.class);
        if (uiname != null&&uiname.length()>0)
            cq.eq("name", uiname);
        else
            cq.eq("name", null);
        // 查询条件组装器

        // org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mealMeals, null);

        cq.addOrder("uiorder", SortDirection.asc);
        cq.add();
        List<McuiEntity> mcuiEntities = this.systemService.getListByCriteriaQuery(cq, Boolean.valueOf(false));
        List<McuiTempEntity> mcuiTempEntities=new ArrayList<McuiTempEntity>();
        if(mcuiEntities.size()>0){
            systemService.callableStatementByName("call mcuiTreeNodes('"+mcuiEntities.get(0).getId()+"')");
            cq = new CriteriaQuery(McuiTempEntity.class);
            cq.addOrder("uiorder", SortDirection.asc);
            cq.add();
            mcuiTempEntities = this.systemService.getListByCriteriaQuery(cq, Boolean.valueOf(false));
        }

        IconImageUtil.convertMcuiTempList(mcuiTempEntities, request);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径



        for (McuiTempEntity mcui : mcuiTempEntities) {
            HashMap<String, Object> mp = new HashMap<String, Object>();
            mp.put("id", mcui.getId());
            if(mcui.getName()!=null){
                mp.put("name", mcui.getName());
            }else{
                mp.put("name", "");
            }
            if(mcui.getX()!=null){
                mp.put("x", mcui.getX());
            }else{
                mp.put("x", "0");
            }
            if(mcui.getY()!=null){
                mp.put("y", mcui.getY());
            }else{
                mp.put("y", "0");
            }
            if(mcui.getWidth()!=null){
                mp.put("width",mcui.getWidth());
            }else{
                mp.put("width","0");
            }
            if(mcui.getHeight()!=null){
                mp.put("height",mcui.getHeight());
            }else{
                mp.put("height","0");
            }
            if(mcui.getText()!=null){
                mp.put("text",mcui.getText());
            }else{
                mp.put("text","");
            }
            if(mcui.getFunctionname()!=null){
                mp.put("functionName",mcui.getFunctionname());
            }else{
                mp.put("functionName","");
            }
            if(mcui.getUiorder()!=null){
                mp.put("order",mcui.getUiorder());
            }else{
                mp.put("order","100");
            }
            if(mcui.getLevel()!=null){
                mp.put("level", mcui.getLevel());
            }else{
                mp.put("level", "0");
            }

            if(mcui.getType()==null){
                mcui.setType("");
            }
            mp.put("type", mcui.getType());
            if(mcui.getPicname()!=null){
                mp.put("picName", mcui.getPicname());
            }else{
                mp.put("picName", "");
            }

            if( mcui.getPicnameh()!=null){
                mp.put("picName_h", mcui.getPicnameh());
            }else{
                mp.put("picName_h", "");
            }

            listmap.add(mp);
        }


        obj.accumulate("mcui", JSONArray.fromObject(listmap).toString());
        response.setContentType("text/html;charset=UTF-8");
        response.setHeader("Cache-Control", "no-store");
        return obj;
    }
    /**
     * 上传图标
     *
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(params = "saveOrUpdateImage", method = RequestMethod.POST)
    @ResponseBody
    public AjaxJson saveOrUpdateIcon(McuiEntity mcuiEntity,HttpServletRequest request) throws Exception {
        AjaxJson j = new AjaxJson();
//        McuiEntity mcuiEntity = new McuiEntity();
//        Short iconType = oConvertUtils.getShort(request.getParameter("iconType"));
//        String picname = oConvertUtils.getString(request.getParameter("picname"));
//        String id = request.getParameter("id");
//        mcuiEntity.setId(id);
//        mcuiEntity.setPicname(picname);
//        icon.setIconType(iconType);
        // uploadFile.setBasePath("images/accordion");
        UploadFile uploadFile = new UploadFile(request, mcuiEntity);
        uploadFile.setCusPath("plug-in/accordion/images");
        uploadFile.setExtend("extend");
        uploadFile.setTitleField("picclas");
        uploadFile.setRealPath("picname");
        uploadFile.setObject(mcuiEntity);
        uploadFile.setByteField("piccontent");
        uploadFile.setRename(false);
        systemService.uploadFile(uploadFile);
        // 图标的css样式
        String css = "." + mcuiEntity.getPicClas() + "{background:url('../images/" + mcuiEntity.getPicClas() + "." + mcuiEntity.getExtend() + "') no-repeat}";
        write(request, css);
        message = MutiLangUtil.paramAddSuccess("common.icon");
        j.setMsg(message);
        return j;
    }
    /**
     * 添加图标样式
     *
     * @param request
     * @param css
     */
    protected void write(HttpServletRequest request, String css) {
        try {
            String path = request.getSession().getServletContext().getRealPath("/plug-in/accordion/css/icons.css");
            File file = new File(path);
            if (!file.exists()) {
                file.createNewFile();
            }
            FileWriter out = new FileWriter(file, true);
            out.write("\r\n");
            out.write(css);
            out.close();
        } catch (Exception e) {
        }
    }
//    private AjaxJson checkuser(HttpServletRequest req) {
//        AjaxJson j = new AjaxJson();
//        j.setSuccess(false);
//        String u = req.getParameter("u");
//        String p = req.getParameter("p");
//        if (u == null || u.equals("") || p == null || p.equals(""))
//            return j;
//        TSUser user = new TSUser(u, p);
//        DataSourceType_1 dss[] = DataSourceType_1.values();
//        for (int i = 0; i < dss.length; i++) {
//            j = checkuserWithDataSource(user, req, dss[i].toString());
//
//            if (j.isSuccess()) {
//                // DataSourceType_1.valueOfdatasource
//                break;
//            }
//        }
//        return j;
//    }
}
