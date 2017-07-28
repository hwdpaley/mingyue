package org.jeecgframework.web.system.controller.core;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.TypeReference;
import org.apache.log4j.Logger;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;
import org.jeecgframework.core.common.controller.BaseController;
import org.jeecgframework.core.common.hibernate.qbc.CriteriaQuery;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.core.common.model.json.ComboTree;
import org.jeecgframework.core.common.model.json.DataGrid;
import org.jeecgframework.core.common.model.json.TreeGrid;
import org.jeecgframework.core.constant.Globals;
import org.jeecgframework.core.util.MutiLangUtil;
import org.jeecgframework.core.util.StringUtil;
import org.jeecgframework.core.util.oConvertUtils;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.tag.vo.easyui.ComboTreeModel;
import org.jeecgframework.tag.vo.easyui.TreeGridModel;
import org.jeecgframework.web.system.manager.ClientManager;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.pojo.base.TSDepart_tmp;
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.jeecgframework.web.system.pojo.base.TSUserOrg;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.web.system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 部门信息处理类
 * 
 * @author 张代浩
 * 
 */
@Scope("prototype")
@Controller
@RequestMapping("/departController")
public class DepartController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(DepartController.class);

	private UserService userService;
	public UserService getUserService() {
		return userService;
	}

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	/**
	 * 部门列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "depart")
	public ModelAndView depart(HttpServletRequest request) {
        request.setAttribute("isAdmin", userService.isAdmin());
		return new ModelAndView("system/depart/departList");
	}

	/**
	 * easyuiAJAX请求数据
	 * 
	 * @param request
	 * @param response
	 * @param dataGrid
	 */

	@RequestMapping(params = "datagrid")
	public void datagrid(HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(TSDepart.class, dataGrid);
		this.systemService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}
	/**
	 * 删除部门：
	 * <ul>
     *     组织机构下存在子机构时
     *     <li>不允许删除 组织机构</li>
	 * </ul>
	 * <ul>
     *     组织机构下存在用户时
     *     <li>不允许删除 组织机构</li>
	 * </ul>
	 * <ul>
     *     组织机构下 不存在子机构 且 不存在用户时
     *     <li>删除 组织机构-角色 信息</li>
     *     <li>删除 组织机构 信息</li>
	 * </ul>
	 * @return 删除的结果信息
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(TSDepart depart, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		depart = systemService.getEntity(TSDepart.class, depart.getId());
        message = MutiLangUtil.paramDelSuccess("common.department");
        if (depart.getTSDeparts().size() == 0) {
            Long userCount = systemService.getCountForJdbc("select count(1) from t_s_user_org where org_id='" + depart.getId() + "'");
            if(userCount == 0) { // 组织机构下没有用户时，该组织机构才允许删除。
                systemService.executeSql("delete from t_s_role_org where org_id=?", depart.getId());
                systemService.delete(depart);

                systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
            }
        } else {
            message = MutiLangUtil.paramDelFail("common.department");
        }

        j.setMsg(message);
		return j;
	}

	public void upEntity(TSDepart depart) {
		List<TSUser> users = systemService.findByProperty(TSUser.class, "TSDepart.id", depart.getId());
		if (users.size() > 0) {
			for (TSUser tsUser : users) {
				//tsUser.setTSDepart(null);
				//systemService.saveOrUpdate(tsUser);
				systemService.delete(tsUser);
			}
		}
	}

	/**
	 * 添加部门
	 * 
	 * @param depart
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(TSDepart depart, HttpServletRequest request) {
		// 设置上级部门
		String pid = request.getParameter("TSPDepart.id");
		if (pid.equals("")) {
			depart.setTSPDepart(null);
		}
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(depart.getId())) {
            message = MutiLangUtil.paramUpdSuccess("common.department");
			userService.saveOrUpdate(depart);
			systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
		} else {
            message = MutiLangUtil.paramAddSuccess("common.department");
			userService.save(depart);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}

        j.setMsg(message);
		return j;
	}
	@RequestMapping(params = "add")
	public ModelAndView add(TSDepart depart, HttpServletRequest req) {
		List<TSDepart> departList = systemService.getList(TSDepart.class);
		req.setAttribute("departList", departList);
//        这个if代码段没有用吧，注释之
//		if (StringUtil.isNotEmpty(depart.getId())) {
//			TSDepart tspDepart = new TSDepart();
//			TSDepart tsDepart = new TSDepart();
//			depart = systemService.getEntity(TSDepart.class, depart.getId());
//			tspDepart.setId(depart.getId());
//			tspDepart.setDepartname(depart.getDepartname());
//			tsDepart.setTSPDepart(tspDepart);
//			req.setAttribute("depart", tsDepart);
//		}
        req.setAttribute("pid", depart.getId());
		return new ModelAndView("system/depart/depart");
	}
	/**
	 * 部门列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "update")
	public ModelAndView update(TSDepart depart, HttpServletRequest req) {
		List<TSDepart> departList = systemService.getList(TSDepart.class);
		req.setAttribute("departList", departList);
		if (StringUtil.isNotEmpty(depart.getId())) {
			depart = systemService.getEntity(TSDepart.class, depart.getId());
			req.setAttribute("depart", depart);
		}
		return new ModelAndView("system/depart/depart");
	}
	
	/**
	 * 父级权限列表
	 * 
	 * @param request
	 * @param comboTree
	 * @return
	 */
	@RequestMapping(params = "setPFunction")
	@ResponseBody
	public List<ComboTree> setPFunction(HttpServletRequest request, ComboTree comboTree) {
		CriteriaQuery cq = new CriteriaQuery(TSDepart.class);
		if(null != request.getParameter("selfId")){
			cq.notEq("id", request.getParameter("selfId"));
		}
		if (comboTree.getId() != null) {
			cq.eq("TSPDepart.id", comboTree.getId());
		}
		if (comboTree.getId() == null) {
			cq.isNull("TSPDepart");
		}
		cq.add();
		List<TSDepart> departsList = systemService.getListByCriteriaQuery(cq, false);
		List<ComboTree> comboTrees = new ArrayList<ComboTree>();
		ComboTreeModel comboTreeModel = new ComboTreeModel("id", "departname", "TSDeparts");
		comboTrees = systemService.ComboTree(departsList, comboTreeModel, null, true);
		return comboTrees;

	}
	/**
	 * 部门列表，树形展示
	 * @param request
	 * @param response
	 * @param treegrid
	 * @return
	 */
	@RequestMapping(params = "departgrid")
	@ResponseBody
	public Object departgrid(TSDepart tSDepart,HttpServletRequest request, HttpServletResponse response, TreeGrid treegrid) {
		CriteriaQuery cq = new CriteriaQuery(TSDepart.class);
		if("yes".equals(request.getParameter("isSearch"))){
			treegrid.setId(null);
			tSDepart.setId(null);
		}
        List<String> orgIdList=new ArrayList<String>();
		if(null != tSDepart.getDepartname()){
			org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, tSDepart);
		}
		if (treegrid.getId() != null) {
			cq.eq("TSPDepart.id", treegrid.getId());
		}
        else
		{
//			cq.isNull("TSPDepart");
//            String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
//            cq.eq("TSPDepart.id", orgId);

            String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
            List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);

            if (tsDepartList.size() > 1) {
                String orgIds = request.getParameter("orgIds");
                orgIdList = extractIdListByComma(orgIds);
                if (!CollectionUtils.isEmpty(orgIdList)) {

                }else{
                    StringBuilder sb = new StringBuilder();
                    for (TSDepart tsDepart : tsDepartList) {
                        sb.append(tsDepart.getId());
                        sb.append(",");
                    }
                    String ssb=sb.toString();
                    orgId+=","+ssb.substring(0,ssb.length()-1);
                    orgIdList = extractIdListByComma(orgId);
                }

            }else{
//            String orgIds = request.getParameter("orgIds");
                orgIdList = extractIdListByComma(orgId);
//                cq.in("id", orgIdList.toArray());
            }
		}

        cq.in("id", orgIdList.toArray());
		cq.add();
		List<TreeGrid> departList =null;
		departList=systemService.getListByCriteriaQuery(cq, false);
		if(departList.size()==0&&tSDepart.getDepartname()!=null){ 
			cq = new CriteriaQuery(TSDepart.class);
			TSDepart parDepart = new TSDepart();
			tSDepart.setTSPDepart(parDepart);
			org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, tSDepart);
		    departList =systemService.getListByCriteriaQuery(cq, false);
		}
		List<TreeGrid> treeGrids = new ArrayList<TreeGrid>();
		TreeGridModel treeGridModel = new TreeGridModel();
		treeGridModel.setTextField("departname");

        treeGridModel.setTel("tel");
        treeGridModel.setAddress("address");
        treeGridModel.setMainName("mainName");
        treeGridModel.setOpenDate("openDate");
        treeGridModel.setDepartCode("departCode");
        treeGridModel.setCustomCode("customCode");

		treeGridModel.setParentText("TSPDepart_departname");
		treeGridModel.setParentId("TSPDepart_id");
		treeGridModel.setSrc("description");
		treeGridModel.setIdField("id");
		treeGridModel.setChildList("TSDeparts");
        Map<String,Object> fieldMap = new HashMap<String, Object>();
        fieldMap.put("orgCode", "orgCode");
        fieldMap.put("orgType", "orgType");
        treeGridModel.setFieldMap(fieldMap);
        treeGrids = systemService.treegrid(departList, treeGridModel);

        JSONArray jsonArray = new JSONArray();
        for (TreeGrid treeGrid : treeGrids) {
            jsonArray.add(JSON.parse(treeGrid.toJson()));
        }
        return jsonArray;
	}
	//----
	/**
	 * 方法描述:  查看成员列表
	 * 作    者： yiming.zhang
	 * 日    期： Dec 4, 2013-8:53:39 PM
	 * @param request
	 * @param departid
	 * @return 
	 * 返回类型： ModelAndView
	 */
	@RequestMapping(params = "userList")
	public ModelAndView userList(HttpServletRequest request, String departid) {
		request.setAttribute("departid", departid);
		return new ModelAndView("system/depart/departUserList");
	}
	
	/**
	 * 方法描述:  成员列表dataGrid
	 * 作    者： yiming.zhang
	 * 日    期： Dec 4, 2013-10:40:17 PM
	 * @param user
	 * @param request
	 * @param response
	 * @param dataGrid 
	 * 返回类型： void
	 */
	@RequestMapping(params = "userDatagrid")
	public void userDatagrid(TSUser user,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(TSUser.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, user);
		String departid = oConvertUtils.getString(request.getParameter("departid"));
		if (!StringUtil.isEmpty(departid)) {
			DetachedCriteria dc = cq.getDetachedCriteria();
			DetachedCriteria dcDepart = dc.createCriteria("userOrgList");
			dcDepart.add(Restrictions.eq("tsDepart.id", departid));
            // 这种方式也是可以的
//            DetachedCriteria dcDepart = dc.createAlias("userOrgList", "userOrg");
//            dcDepart.add(Restrictions.eq("userOrg.tsDepart.id", departid));
		}
		Short[] userstate = new Short[] { Globals.User_Normal, Globals.User_ADMIN };
		cq.in("status", userstate);
		cq.add();
		this.systemService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}
	//----
    /**
     * 获取机构树-combotree
     * @param request
     * @return
     */
    @RequestMapping(params = "getOrgTree")
    @ResponseBody
    public List<ComboTree> getOrgTree(HttpServletRequest request) {
//        findHql不能处理is null条件
//        List<TSDepart> departsList = systemService.findHql("from TSPDepart where TSPDepart.id is null");
        List<TSDepart> departsList = systemService.findByQueryString("from TSDepart where TSPDepart.id is null");
        List<ComboTree> comboTrees = new ArrayList<ComboTree>();
        ComboTreeModel comboTreeModel = new ComboTreeModel("id", "departname", "TSDeparts");
        comboTrees = systemService.ComboTree(departsList, comboTreeModel, null, true);
        return comboTrees;
    }
    /**
     * 添加 用户到组织机构 的页面  跳转
     * @param req request
     * @return 处理结果信息
     */
    @RequestMapping(params = "goAddUserToOrg")
    public ModelAndView goAddUserToOrg(HttpServletRequest req) {
        req.setAttribute("orgId", req.getParameter("orgId"));
        return new ModelAndView("system/depart/noCurDepartUserList");
    }
    /**
     * 获取 除当前 组织之外的用户信息列表
     * @param request request
     * @return 处理结果信息
     */
    @RequestMapping(params = "addUserToOrgList")
    public void addUserToOrgList(TSUser user, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        String orgId = request.getParameter("orgId");

        CriteriaQuery cq = new CriteriaQuery(TSUser.class, dataGrid);
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, user);

        // 获取 当前组织机构的用户信息
        CriteriaQuery subCq = new CriteriaQuery(TSUserOrg.class);
        subCq.setProjection(Property.forName("tsUser.id"));
        subCq.eq("tsDepart.id", orgId);
        subCq.add();

        cq.add(Property.forName("id").notIn(subCq.getDetachedCriteria()));
        cq.add();

        this.systemService.getDataGridReturn(cq, true);
        TagUtil.datagrid(response, dataGrid);
    }
    /**
     * 添加 用户到组织机构
     * @param req request
     * @return 处理结果信息
     */
    @RequestMapping(params = "doAddUserToOrg")
    @ResponseBody
    public AjaxJson doAddUserToOrg(HttpServletRequest req) {
        AjaxJson j = new AjaxJson();
        TSDepart depart = systemService.getEntity(TSDepart.class, req.getParameter("orgId"));
        saveOrgUserList(req, depart);
        message =  MutiLangUtil.paramAddSuccess("common.user");
//      systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
        j.setMsg(message);

        return j;
    }
    /**
     * 保存 组织机构-用户 关系信息
     * @param request request
     * @param depart depart
     */
    private void saveOrgUserList(HttpServletRequest request, TSDepart depart) {
        String orgIds = oConvertUtils.getString(request.getParameter("userIds"));

        List<TSUserOrg> userOrgList = new ArrayList<TSUserOrg>();
        List<String> userIdList = extractIdListByComma(orgIds);
        for (String userId : userIdList) {
            TSUser user = new TSUser();
            user.setId(userId);

            TSUserOrg userOrg = new TSUserOrg();
            userOrg.setTsUser(user);
            userOrg.setTsDepart(depart);

            userOrgList.add(userOrg);
        }
        if (!userOrgList.isEmpty()) {
            systemService.batchSave(userOrgList);
        }
    }
    /**
     * 用户选择机构列表跳转页面
     *
     * @return
     */
    @RequestMapping(params = "departSelect")
    public String departSelect() {
        return "system/depart/departSelect";
    }
    @RequestMapping(params = "mzyDepartSelect")
    public String mzyDepartSelect() {
        return "system/depart/mzyDepartSelect";
    }
    /**
     * 角色显示列表
     *
     * @param response response
     * @param dataGrid dataGrid
     */
    @RequestMapping(params = "departSelectDataGrid")
    public void datagridRole(HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(TSDepart.class, dataGrid);
        this.systemService.getDataGridReturn(cq, true);
        TagUtil.datagrid(response, dataGrid);
    }
    @RequestMapping(params = "mzyDepartSelectDataGrid")
    public void mzyDepartSelectDataGrid(HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(TSDepart.class, dataGrid);
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        String[] ids=new String[tsDepartList.size()];
        int i=0;
        for(TSDepart tsDepart:tsDepartList){
            ids[i]=tsDepart.getId();
            i++;
        }
        cq.in("id",ids);
        cq.add();
        this.systemService.getDataGridReturn(cq, true);
//        dataGrid.setResults(tsDepartList);
        TagUtil.datagrid(response, dataGrid);
    }
    @RequestMapping(params = "peoplesTree")
    @ResponseBody
    public AjaxJson peoplesTree(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String departname=oConvertUtils.getString(request.getParameter("departname"));
        CriteriaQuery cq = new CriteriaQuery(TSDepart.class);
        cq.eq("departname", departname);
        cq.add();
        List<TSDepart> tsDepartList = systemService.getListByCriteriaQuery(cq, false);
        List<TSDepart_tmp> tsDepart_tmpList = null;
        if (tsDepartList.size() > 0) {
            systemService.callableStatementByName("call departMentNodes('" + tsDepartList.get(0).getId() + "')");
            cq = new CriteriaQuery(TSDepart_tmp.class);
            cq.add();
            tsDepart_tmpList = this.systemService.getListByCriteriaQuery(cq, Boolean.valueOf(false));
//            IconImageUtil.convertDepartMentTempList(tsDepart_tmpList, request);
            List<Object> nodes =new ArrayList<Object>();
            List<Object> relations = new ArrayList<Object>();
            Map<String, Object> all = new HashMap<String, Object>();
            for (TSDepart_tmp tsDepart_tmp:tsDepart_tmpList) {
                Map<String, Object> relation = new HashMap<String, Object>();
                Map<String, Object> node = new HashMap<String, Object>();
                if (tsDepart_tmp.getTSPDepart() == null) {
                    node.put("parent", "top");
                    relation.put("from", null);
                } else {
                    relation.put("from", tsDepart_tmp.getTSPDepart().getId());
                    node.put("parent", tsDepart_tmp.getTSPDepart().getId());
                }
                relation.put("to", tsDepart_tmp.getId());
//                relation.put("ip", switch01Entity_tempList.get(i).getIp());
                node.put("id", tsDepart_tmp.getId());
                node.put("name", tsDepart_tmp.getDepartname() );
//                if(tsDepart_tmp.getTSIcon()!=null){
//                    node.put("path", tsDepart_tmp.getTSIcon().getIconPath());
//                }else{
//                    node.put("path", "");
//                }
                node.put("path", "");
//                node.put("ip", switch01Entity_tempList.get(i).getIp());
                if (tsDepart_tmp.getX() != null)
                    node.put("x", Float.parseFloat(tsDepart_tmp.getX())/100.0);
                else
                    node.put("x", 0);
                if (tsDepart_tmp.getY() != null)
                    node.put("y", Float.parseFloat(tsDepart_tmp.getY())/100.0);
                else
                    node.put("y", 0);
                relations.add(relation);
                nodes.add(node);
            }
            all.put("relations", relations);
            all.put("nodes", nodes);
            j.setObj(all);
        }

        return j;
    }
    @RequestMapping(params = "departMentTree")
    @ResponseBody
    public AjaxJson departMentTree(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String departname=oConvertUtils.getString(request.getParameter("departname"));
        CriteriaQuery cq = new CriteriaQuery(TSDepart.class);
        cq.eq("departname", departname);
        cq.add();
        List<TSDepart> tsDepartList = systemService.getListByCriteriaQuery(cq, false);
        List<TSDepart_tmp> tsDepart_tmpList = null;
        if (tsDepartList.size() > 0) {
            systemService.callableStatementByName("call departMentNodes('" + tsDepartList.get(0).getId() + "')");
            cq = new CriteriaQuery(TSDepart_tmp.class);
            cq.add();
            tsDepart_tmpList = this.systemService.getListByCriteriaQuery(cq, Boolean.valueOf(false));
//            IconImageUtil.convertDepartMentTempList(tsDepart_tmpList, request);
            List<Object> nodes = new ArrayList<Object>();
            List<Object> relations = new ArrayList<Object>();
            Map<String, Object> all = new HashMap<String, Object>();
            for (TSDepart_tmp tsDepart_tmp:tsDepart_tmpList) {
                Map<String, Object> relation = new HashMap<String, Object>();
                Map<String, Object> node = new HashMap<String, Object>();
                if (tsDepart_tmp.getTSPDepart() == null) {
                    node.put("parent", "top");
                    relation.put("from", null);
                } else {
                    relation.put("from", tsDepart_tmp.getTSPDepart().getId());
                    node.put("parent", tsDepart_tmp.getTSPDepart().getId());
                }
                relation.put("to", tsDepart_tmp.getId());
//                relation.put("ip", switch01Entity_tempList.get(i).getIp());
                node.put("id", tsDepart_tmp.getId());
                node.put("name", tsDepart_tmp.getDepartname() );
//                if(tsDepart_tmp.getTSIcon()!=null){
//                    node.put("path", tsDepart_tmp.getTSIcon().getIconPath());
//                }else{
//                    node.put("path", "");
//                }
                node.put("path", "");
//                node.put("ip", switch01Entity_tempList.get(i).getIp());
                if (tsDepart_tmp.getX() != null)
                    node.put("x", Float.parseFloat(tsDepart_tmp.getX())/100.0);
                else
                    node.put("x", 0);
                if (tsDepart_tmp.getY() != null)
                    node.put("y", Float.parseFloat(tsDepart_tmp.getY())/100.0);
                else
                    node.put("y", 0);
                relations.add(relation);
                nodes.add(node);
            }
            all.put("relations", relations);
            all.put("nodes", nodes);
            j.setObj(all);
        }

        return j;
    }
    @RequestMapping(params = "departMentXY")
    @ResponseBody
    public AjaxJson departMentXY(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String xy = oConvertUtils.getString(request.getParameter("xy"));

        try {
            List<Object> list = JSON.parseObject(xy, new TypeReference<ArrayList<Object>>() {});
            for(Object o: list){
                Map<String,Object> mp=(Map<String,Object>)o;
                if(mp.get("id").toString().length()>30){
                    TSDepart tsDepart=systemService.findUniqueByProperty(TSDepart.class,"id",mp.get("id").toString());
                    if(tsDepart!=null){
                        float a=Float.parseFloat(mp.get("x").toString());
                        int x=(int)(a*100.0);
                        tsDepart.setX(String.valueOf(x));
                        a=Float.parseFloat(mp.get("y").toString());
                        int y=(int)(a*100.0);
                        tsDepart.setY(String.valueOf(y));
                        systemService.updateEntitie(tsDepart);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
//        Object axy=JSON.parseObject(xy);
        j.setMsg("保存坐标数据成功");
        return j;
    }
}
