package com.mingyue.controller.mzy_kc;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSONObject;
import com.mingyue.entity.cuxiao.MzycuxiaoEntity;
import com.mingyue.entity.mzy_product.MzyProductEntity;
import com.mingyue.entity.mzy_xiaoshou.Mzy_xiaoshouEntity;
import com.mingyue.entity.mzy_xsprint.Mzy_xsprintEntity;
import org.apache.log4j.Logger;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import org.jeecgframework.core.common.model.json.McuiTreeGrid;
import org.jeecgframework.core.util.*;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.tag.vo.easyui.McuiTreeGridModel;
import org.jeecgframework.web.system.controller.core.IconImageUtil;
import org.jeecgframework.web.system.manager.ClientManager;
import org.jeecgframework.web.system.pojo.base.TSRoleUser;
import org.jeecgframework.web.system.pojo.base.TSUserOrg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import org.jeecgframework.core.common.controller.BaseController;
import org.jeecgframework.core.common.hibernate.qbc.CriteriaQuery;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.core.common.model.json.DataGrid;
import org.jeecgframework.core.constant.Globals;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.service.SystemService;

import com.mingyue.entity.mzy_kc.MzyKuCunEntity;
import com.mingyue.service.mzy_kc.MzyKuCunServiceI;

/**   
 * @Title: Controller
 * @Description: 库存管理
 * @author Tony
 * @date 2015-07-30 13:28:43
 * @version V1.0   
 *
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzyKuCunController")
public class MzyKuCunController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(MzyKuCunController.class);

    private static JSONObject pro=new JSONObject();
	@Autowired
	private MzyKuCunServiceI mzyKuCunService;
    private int isAdmin() {
        int a = 0;
        List<TSRoleUser> tsRoleUserList = systemService.findByProperty(TSRoleUser.class, "TSUser.id", ClientManager.getInstance().getClient().getUser().getId());
        for (TSRoleUser tsRoleUser : tsRoleUserList) {
            if (tsRoleUser.getTSRole().getRoleCode().equals("admin")) {
                a = 1;
                break;
            }
        }
        return a;
    }
    private int getDepart() {
        int a = 1;
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        if (tsDepartList.size() > 1) {
            a = tsDepartList.size();
        }
//        else{
//            List<TSRoleUser> tsRoleUserList=systemService.findByProperty(TSRoleUser.class,"TSUser.id",ClientManager.getInstance().getClient().getUser().getId());
//            for(TSRoleUser tsRoleUser:tsRoleUserList){
//                if(tsRoleUser.getTSRole().getRoleName().endsWith("店长")){
//                    a=2;
//                    break;
//                }
//            }
//        }

        return a;
    }

    @RequestMapping(params = "mzyProduct")
    public ModelAndView mzyProduct(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/mzy_kc/mzyProductList");
    }

	/**
	 * 库存管理列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "mzyKuCun")
	public ModelAndView mzyKuCun(HttpServletRequest request) {
        request.setAttribute("departIsNotOne", getDepart());
        request.setAttribute("isAdmin", isAdmin());
        return new ModelAndView("com/mingyue/mzy_kc/mzyKuCunList");
	}
    @RequestMapping(params = "mzyKuCunAlarm")
    public ModelAndView mzyKuCunAlarm(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/mzy_kc/mzyKuCunListAlarm");
    }
    @RequestMapping(params = "mzyKuCunSelect")
    public ModelAndView mzyKuCunSelect(HttpServletRequest request) {
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        request.setAttribute("xsprintId",xsprintId);
        return new ModelAndView("com/mingyue/mzy_kc/mzyKuCunSelect");
    }
	/**
	 * easyui AJAX请求数据
	 * 选择库存产品
	 * @param request
	 * @param response
	 * @param dataGrid
	 * @param
	 */
    @RequestMapping(params = "selectDatagrid")
    public void selectDatagrid(MzyKuCunEntity mzyKuCun,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        String key=orgId;
        boolean need=true;
//        if(!pro.containsKey(key)) {
//            need=true;
//        }else{
//            JSONObject a=pro.getJSONObject(key);
//            Date b=a.getDate("time");
//            if((new Date().getTime()-b.getTime())> DateUtils.HOUR_IN_MILLIS*12){
//                need=true;
//            }
//        }
        if(need)
        {
            CriteriaQuery cq = new CriteriaQuery(MzyKuCunEntity.class, dataGrid);
            //查询条件组装器
//            String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
            List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
            List<String> orgIdList = new ArrayList<String>();
            if (tsDepartList.size() > 1) {
                String orgIds = request.getParameter("orgIds");
                orgIdList = extractIdListByComma(orgIds);
                if (!CollectionUtils.isEmpty(orgIdList)) {

                } else {
                    StringBuilder sb = new StringBuilder();
                    for (TSDepart tsDepart : tsDepartList) {
                        sb.append(tsDepart.getId());
                        sb.append(",");
                    }
                    String ssb = sb.toString();
                    orgId += "," + ssb.substring(0, ssb.length() - 1);
                    orgIdList = extractIdListByComma(orgId);
//                cq.in("TSPDepart.id", orgIdList.toArray());
                }
                cq.in("TSPDepart.id", orgIdList.toArray());
            } else {
//            String orgIds = request.getParameter("orgIds");
                orgIdList = extractIdListByComma(orgId);
                cq.eq("TSPDepart.id", orgId);
            }

            Mzy_xsprintEntity mzy_xsprint = systemService.getEntity(Mzy_xsprintEntity.class, xsprintId);
            List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", mzy_xsprint.getId());
            List<String> productIds = new ArrayList<String>();
            for (Mzy_xiaoshouEntity mzy_xiaoshouEntity : mzy_xiaoshouEntityList) {
                productIds.add(mzy_xiaoshouEntity.getMzyProductEntity().getId());
            }
//        productIds.add(mzy_xsprint.getId());
            // 获取 当前组织机构的用户信息
            if (!CollectionUtils.isEmpty(productIds)) {
                CriteriaQuery subCq = new CriteriaQuery(MzyKuCunEntity.class);
                subCq.setProjection(Property.forName("id"));
                subCq.in("mzyProductEntity.id", productIds.toArray());
                subCq.add();

                cq.add(Property.forName("id").notIn(subCq.getDetachedCriteria()));
            }
            // 获取 当前组织机构的用户信息
//        CriteriaQuery subCq = new CriteriaQuery(Mzy_xiaoshouEntity.class);
//        subCq.setProjection(Property.forName("mzyProductEntity.id"));
//        subCq.eq("mzy_xsprintEntity.id", mzy_xsprint.getId());
//        subCq.add();
            cq.notEq("isDelete", "Y");
            cq.add();

            org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyKuCun, request.getParameterMap());
            this.systemService.getDataGridReturn(cq, true);
            for (Object o : dataGrid.getResults()) {
                if (o instanceof MzyKuCunEntity) {
                    MzyKuCunEntity mzyKuCunEntity = (MzyKuCunEntity) o;
                    Date dd = new Date();
                    try {
                        List<MzycuxiaoEntity> mzycuxiaoEntityList = systemService.findHql("from MzycuxiaoEntity cx " +
                                "where cx.mzyProductEntity.id= ? and sdate< ? and edate > ? ", mzyKuCunEntity.getMzyProductEntity().getId(), dd, dd);
                        if (mzycuxiaoEntityList.size() > 0) {
                            mzyKuCunEntity.setIsCx("促销产品");
                        } else {
                            mzyKuCunEntity.setIsCx("");
                        }
                        if (mzyKuCunEntity.getMzyProductEntity() != null) {
                            try {
                                mzyKuCunEntity.setName(mzyKuCunEntity.getMzyProductEntity().getName());
                            } catch (Exception e) {
                                mzyKuCunEntity.setName("");
                            }
                        } else {
                            mzyKuCunEntity.setName("");
                        }
                    } catch (Exception e) {
//                        e.printStackTrace();
                    }

                    systemService.saveOrUpdate(mzyKuCunEntity);
                }
            }
//        IconImageUtil.convertKcDataGrid(dataGrid, request, systemService);
            this.mzyKuCunService.getDataGridReturn(cq, true);
            JSONObject a=new JSONObject();
            a.put("time",new Date());
            a.put(key,dataGrid);
            pro.put(key,a);
        }
        else{
            JSONObject a=pro.getJSONObject(key);
            dataGrid=a.getObject(key,DataGrid.class);
        }
        TagUtil.datagrid(response, dataGrid);
    }
	@RequestMapping(params = "datagridAlarm")
	public void datagridAlarm(MzyKuCunEntity mzyKuCun,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(MzyKuCunEntity.class, dataGrid);
		//查询条件组装器
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        List<String> orgIdList=new ArrayList<String>();
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
//                cq.in("TSPDepart.id", orgIdList.toArray());
            }
            cq.in("TSPDepart.id", orgIdList.toArray());
        }else{
//            String orgIds = request.getParameter("orgIds");
            orgIdList = extractIdListByComma(orgId);
            cq.eq("TSPDepart.id", orgId);
        }
        cq.eq("isAlarm","Y");
        cq.notEq("isDelete","Y");
        cq.add();

		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyKuCun, request.getParameterMap());
        this.systemService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if (o instanceof MzyKuCunEntity) {
                MzyKuCunEntity mzyKuCunEntity = (MzyKuCunEntity) o;
                if(mzyKuCunEntity.getMzyProductEntity()!=null){
                    mzyKuCunEntity.setName(mzyKuCunEntity.getMzyProductEntity().getName());
                }else{
                    mzyKuCunEntity.setName("");
                }

                systemService.saveOrUpdate(mzyKuCunEntity);
            }
        }
        IconImageUtil.convertKcDataGrid(dataGrid, request, systemService);
		this.mzyKuCunService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}
    private List<MzyKuCunEntity> getKunList(HttpServletRequest request){
        List<MzyKuCunEntity> mzyKuCunEntityList=new ArrayList<MzyKuCunEntity>();
        CriteriaQuery cq = new CriteriaQuery(MzyKuCunEntity.class);
        //查询条件组装器
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        List<String> orgIdList=new ArrayList<String>();
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
//                cq.in("TSPDepart.id", orgIdList.toArray());
            }
            cq.in("TSPDepart.id", orgIdList.toArray());
        }else{
//            String orgIds = request.getParameter("orgIds");
            orgIdList = extractIdListByComma(orgId);
            cq.eq("TSPDepart.id", orgId);
        }
        cq.notEq("isDelete","Y");
        cq.add();
        mzyKuCunEntityList=systemService.getListByCriteriaQuery(cq,false);
        return mzyKuCunEntityList;
    }
    @RequestMapping(params = "productgrid")
    @ResponseBody
    public List<McuiTreeGrid> productgrid(HttpServletRequest request,
                                          McuiTreeGrid treegrid) {
        CriteriaQuery cq = new CriteriaQuery(MzyProductEntity.class);
        String selfId = request.getParameter("selfId");
        if (selfId != null) {
            cq.notEq("id", selfId);
        }
        if (treegrid.getId() != null) {
            cq.eq("mzyProductEntity.id", treegrid.getId());
        }
        if (treegrid.getId() == null) {
            cq.isNull("mzyProductEntity");
        }
        String name = request.getParameter("name");
        if(name!=null&&name.length()>0){
            cq.eq("name",name);
        }
//        cq.addOrder("uiorder", SortDirection.asc);
        cq.notEq("isDelete","Y");
        cq.add();
//        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, treegrid, request.getParameterMap());

        List<MzyProductEntity> mcuiEntityList = systemService.getListByCriteriaQuery(cq, false);
        JSONObject a=getKucun();
        for(int i=0;i<mcuiEntityList.size();i++){
            MzyProductEntity mzyProductEntity=mcuiEntityList.get(i);
            if(a.containsKey(mzyProductEntity.getId())){
                int num=0;
                try {
                    num=a.getInteger(mzyProductEntity.getId());

                } catch (Exception e) {
//                    e.printStackTrace();
                }
                mzyProductEntity.setNums(num+"");
            }
        }
        IconImageUtil.convertMzyProductList(mcuiEntityList, request, treegrid.getId() == null ? true : false);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径

//        Collections.sort(assetList, new NumberComparator());
        List<McuiTreeGrid> mcuiTreeGrids = new ArrayList<McuiTreeGrid>();
        McuiTreeGridModel mcuiTreeGridModel = new McuiTreeGridModel();
        mcuiTreeGridModel.setDescription("description");
        mcuiTreeGridModel.setPrice("price");
        mcuiTreeGridModel.setDiscount("discount");

        mcuiTreeGridModel.setTextField("name");
        mcuiTreeGridModel.setNum("nums");
        mcuiTreeGridModel.setParentText("mzyProductEntity_name");
        mcuiTreeGridModel.setParentId("mzyProductEntity_id");
        mcuiTreeGridModel.setSrc("src");
        mcuiTreeGridModel.setIdField("id");
        mcuiTreeGridModel.setLevelField("level");
        mcuiTreeGridModel.setChildList("mzyProductEntities");
        // 添加排序字段

        mcuiTreeGrids = systemService.mcuiTreegrid(mcuiEntityList, mcuiTreeGridModel);

        MutiLangUtil.setMutiTree(mcuiTreeGrids);

        return mcuiTreeGrids;
    }
    private JSONObject getKucun(){
        DataGrid dataGrid=new DataGrid();
        CriteriaQuery cq = new CriteriaQuery(MzyKuCunEntity.class, dataGrid);
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        cq.eq("TSPDepart.id", orgId);
//        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
//        List<String> orgIdList=new ArrayList<String>();
//        if (tsDepartList.size() > 1) {
//            String orgIds = request.getParameter("orgIds");
//            orgIdList = extractIdListByComma(orgIds);
//            if (!CollectionUtils.isEmpty(orgIdList)) {
//
//            }else{
//                StringBuilder sb = new StringBuilder();
//                for (TSDepart tsDepart : tsDepartList) {
//                    sb.append(tsDepart.getId());
//                    sb.append(",");
//                }
//                String ssb=sb.toString();
//                orgId+=","+ssb.substring(0,ssb.length()-1);
//                orgIdList = extractIdListByComma(orgId);
////                cq.in("TSPDepart.id", orgIdList.toArray());
//            }
//            cq.in("TSPDepart.id", orgIdList.toArray());
//        }else{
////            String orgIds = request.getParameter("orgIds");
//            orgIdList = extractIdListByComma(orgId);
//            cq.eq("TSPDepart.id", orgId);
//        }
        cq.notEq("isDelete","Y");
        cq.add();
        this.systemService.getDataGridReturn(cq, true);
        JSONObject a=new JSONObject();
        for(int i=0;i<dataGrid.getResults().size();i++){
            MzyKuCunEntity mzyKuCun=(MzyKuCunEntity)dataGrid.getResults().get(i);

            a.put(mzyKuCun.getMzyProductEntity().getId(),mzyKuCun.getNums()==null?"0":mzyKuCun.getNums());
        }
        return a;
    }
    @RequestMapping(params = "datagrid")
    public void datagrid(MzyKuCunEntity mzyKuCun,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(MzyKuCunEntity.class, dataGrid);
        //查询条件组装器
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        List<String> orgIdList=new ArrayList<String>();
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
//                cq.in("TSPDepart.id", orgIdList.toArray());
            }
            cq.in("TSPDepart.id", orgIdList.toArray());
        }else{
//            String orgIds = request.getParameter("orgIds");
            orgIdList = extractIdListByComma(orgId);
            cq.eq("TSPDepart.id", orgId);
        }

        // 获取 当前组织机构的用户信息
//        if (!CollectionUtils.isEmpty(orgIdList)) {
//            CriteriaQuery subCq = new CriteriaQuery(TSDepart.class);
////            subCq.setProjection(Property.forName("tsUser.id"));
//            subCq.in("id", orgIdList.toArray());
//            subCq.add();
//            DetachedCriteria detachedCriteria=subCq.getDetachedCriteria();
//            cq.add(Property.forName("TSPDepart.id").in(detachedCriteria));
//        }
//        cq.eq("mzyProductEntity.name","诺丽酵素");
//        cq.addOrder("nums", SortDirection.asc);
        cq.notEq("isDelete","Y");
        cq.add();

        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyKuCun, request.getParameterMap());
        this.systemService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if (o instanceof MzyKuCunEntity) {
                MzyKuCunEntity mzyKuCunEntity = (MzyKuCunEntity) o;
                mzyKuCunEntity=systemService.getEntity(MzyKuCunEntity.class,mzyKuCunEntity.getId());
                if(mzyKuCunEntity.getMzyProductEntity()!=null){
                    mzyKuCunEntity.setName(mzyKuCunEntity.getMzyProductEntity().getName());
                    systemService.saveOrUpdate(mzyKuCunEntity);
                }
                else{
                    System.out.println(mzyKuCunEntity.getId());
                }
            }
        }
        IconImageUtil.convertKcDataGrid(dataGrid, request, systemService);
//        this.mzyKuCunService.getDataGridReturn(cq, true);
        TagUtil.datagrid(response, dataGrid);
    }
	/**
	 * 删除库存管理
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(MzyKuCunEntity mzyKuCun, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		mzyKuCun = systemService.getEntity(MzyKuCunEntity.class, mzyKuCun.getId());
		message = "库存管理删除成功";
        mzyKuCun.setIsDelete("Y");
        systemService.saveOrUpdate(mzyKuCun);
//		mzyKuCunService.delete(mzyKuCun);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加库存管理
	 * 
	 * @param
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(MzyKuCunEntity mzyKuCun, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
        TSDepart tsDepart= ClientManager.getInstance().getClient().getUser().getCurrentDepart();
        mzyKuCun.setTSPDepart(tsDepart);
        MzyKuCunEntity t = mzyKuCunService.get(MzyKuCunEntity.class, mzyKuCun.getId());
        if(t.getMzyProductEntity().getMzyProductEntity()==null){
            message = "这是产品分类，请选择下级产品";
            j.setMsg(message);
            return j;
        }
		if (StringUtil.isNotEmpty(mzyKuCun.getId())) {
			message = "库存管理更新成功";
			t = mzyKuCunService.get(MzyKuCunEntity.class, mzyKuCun.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(mzyKuCun, t);
				mzyKuCunService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "库存管理更新失败";
			}
		} else {
			message = "库存管理添加成功";
            MzyProductEntity mzyProductEntity=mzyKuCun.getMzyProductEntity();
            boolean issave=true;
            if(mzyProductEntity!=null){
                List<MzyKuCunEntity> mzyKuCunEntityList=getKunList(request);
                for(MzyKuCunEntity mzyKuCunEntity:mzyKuCunEntityList){
                    if(mzyKuCunEntity.getMzyProductEntity()!=null){
                        if(mzyKuCunEntity.getMzyProductEntity().getId().endsWith(mzyProductEntity.getId())){
                            int nums=Integer.valueOf(mzyKuCunEntity.getNums())+Integer.valueOf(mzyKuCun.getNums());
                            mzyKuCunEntity.setNums(String.valueOf(nums));
                            if(mzyKuCun.getAlarmNums().length()>0){
                                mzyKuCunEntity.setAlarmNums(mzyKuCun.getAlarmNums());
                            }
                            mzyKuCunService.save(mzyKuCunEntity);
                            systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
                            issave=false;
                            message = "库存管理更新成功";
                            break;
                        }
                    }else{

                    }

                }
            }
            if(issave){
                mzyKuCunService.save(mzyKuCun);
                systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
            }
		}
		j.setMsg(message);
		return j;
	}
    @RequestMapping(params = "addorupdate_product")
    public ModelAndView addorupdate_pdu(MzyProductEntity mzyProductEntity, HttpServletRequest req) {
        if (StringUtil.isNotEmpty(mzyProductEntity.getId())) {
            mzyProductEntity=systemService.getEntity(MzyProductEntity.class,mzyProductEntity.getId());
            String orgId=ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
            List<MzyKuCunEntity> mzyKuCunEntityList=systemService.findHql("from MzyKuCunEntity k where k.mzyProductEntity.id=? and k.TSPDepart.id=?", mzyProductEntity.getId()
                    , orgId);
            MzyKuCunEntity mzyKuCun =null;
            if(mzyKuCunEntityList.size()==0){
                mzyKuCun=new MzyKuCunEntity();
                mzyKuCun.setMzyProductEntity(mzyProductEntity);
                mzyKuCun.setTSPDepart(ClientManager.getInstance().getClient().getUser().getCurrentDepart());
                mzyKuCun.setNums("0");
                mzyKuCun.setIsDelete("N");
                systemService.save(mzyKuCun);
            }else {
                mzyKuCun = mzyKuCunEntityList.get(0);
            }
            req.setAttribute("productName", mzyProductEntity.getName());
            req.setAttribute("mzyKuCunPage", mzyKuCun);
        }
        return new ModelAndView("com/mingyue/mzy_kc/mzyKuCun");
    }
	/**
	 * 库存管理列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
     public ModelAndView addorupdate(MzyKuCunEntity mzyKuCun, HttpServletRequest req) {
        if (StringUtil.isNotEmpty(mzyKuCun.getId())) {
            mzyKuCun = mzyKuCunService.getEntity(MzyKuCunEntity.class, mzyKuCun.getId());
            req.setAttribute("mzyKuCunPage", mzyKuCun);
        }
        return new ModelAndView("com/mingyue/mzy_kc/mzyKuCun");
    }
    @RequestMapping(params = "checkKc")
    @ResponseBody
    public AjaxJson checkKc(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        int nums=0;
//        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
//        List<MzyKuCunEntity> mzyKuCunEntityList = systemService.findByProperty(MzyKuCunEntity.class, "TSPDepart.id",orgId);
//        int nums=0;
//        for(MzyKuCunEntity mzyKuCunEntity:mzyKuCunEntityList){
//            if(mzyKuCunEntity.getNums().length()>0) {
//                int n = Integer.parseInt(mzyKuCunEntity.getNums());
//                if (mzyKuCunEntity.getAlarmNums().length() > 0) {
//                    int alarm = Integer.parseInt(mzyKuCunEntity.getAlarmNums());
//                    if (n <= alarm) {
//                        nums++;
//                        mzyKuCunEntity.setIsAlarm("Y");
//
//                    } else {
//                        mzyKuCunEntity.setIsAlarm("N");
//                    }
//                }
//                systemService.updateEntitie(mzyKuCunEntity);
//            }
//        }
        message ="您有 "+String.valueOf(nums)+ " 条库存不足";
        if(nums==0){
            j.setSuccess(false);
        }
        j.setMsg(message);
        return j;
    }
}
