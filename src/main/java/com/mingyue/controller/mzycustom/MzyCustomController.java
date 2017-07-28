package com.mingyue.controller.mzycustom;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.mingyue.entity.mzy_kfyh.MzyKfyhTls;
import com.mingyue.entity.mzy_kfyh.Mzy_kfyhEntity;
import com.mingyue.entity.mzy_scty.MzySctyEntity;
import com.mingyue.entity.mzy_scty.MzySctyTls;
import com.mingyue.entity.mzy_tl.Mzy_tlEntity;
import com.mingyue.entity.mzy_xsprint.Mzy_xsprintEntity;
import com.mingyue.entity.mzycustom.MzyCustomKfs;
import org.apache.log4j.Logger;
import org.hibernate.criterion.Property;
import org.jeecgframework.core.util.*;
import org.jeecgframework.poi.excel.entity.ExportParams;
import org.jeecgframework.poi.excel.entity.vo.NormalExcelConstants;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.web.system.controller.core.IconImageUtil;
import org.jeecgframework.web.system.manager.ClientManager;
import org.jeecgframework.web.system.pojo.base.*;
import org.jeecgframework.web.system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
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
import org.jeecgframework.web.system.service.SystemService;

import com.mingyue.entity.mzycustom.MzyCustomEntity;
import com.mingyue.service.mzycustom.MzyCustomServiceI;

/**
 * @author Tony
 * @version V1.0
 * @Title: Controller
 * @Description: 顾客表
 * @date 2015-08-11 04:55:53
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzyCustomController")
public class MzyCustomController extends BaseController {
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(MzyCustomController.class);

    @Autowired
    private MzyCustomServiceI mzyCustomService;
    @Autowired
    private UserService userService;
    /**
     * 顾客表列表 页面跳转
     *
     * @return
     */
    @RequestMapping(params = "mzyDepartTop")
    public ModelAndView mzyDepartTop(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/mzy/departMentTop");
    }

    @RequestMapping(params = "mzyCustom")
    public ModelAndView mzyCustom(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/mzycustom/mzyCustomList");
    }

    @RequestMapping(params = "sctyList")
    public ModelAndView sctyList(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_scty/mzySctyList");
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        mv.addObject("customId", customId);
        return mv;
    }

    @RequestMapping(params = "kfyhList")
    public ModelAndView kfyhList(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_kfyh/mzyKfyhList");
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        mv.addObject("customId", customId);
        return mv;
    }

    @RequestMapping(params = "tlList")
    public ModelAndView tlList(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_tl/mzyTlList");
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        mv.addObject("customId", customId);
        return mv;
    }

    @RequestMapping(params = "kfs")
    public ModelAndView kfs(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_custom/kfs");
        String ids = oConvertUtils.getString(request.getParameter("ids"));
        mv.addObject("ids", ids);
        return mv;
    }

    @RequestMapping(params = "sctyDatagrid")
    public void sctyDatagrid(MzySctyEntity mzySctyEntity, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(MzySctyEntity.class, dataGrid);
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        //查询条件组装器
        cq.eq("mzyCustomEntity.id", customId);
        cq.notEq("isDelete", "Y");
        cq.add();
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzySctyEntity);
        this.systemService.getDataGridReturn(cq, true);
        TagUtil.datagrid(response, dataGrid);
    }

    @RequestMapping(params = "kfyhDatagrid")
    public void kfyhDatagrid(Mzy_kfyhEntity mzyKfyhEntity, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(Mzy_kfyhEntity.class, dataGrid);
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        //查询条件组装器
        cq.eq("mzyCustomEntity.id", customId);
        cq.addOrder("createDate", SortDirection.desc);
        cq.notEq("isDelete", "Y");
        cq.add();

        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyKfyhEntity);
        this.systemService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if (o instanceof Mzy_kfyhEntity) {
                Mzy_kfyhEntity mzy_kfyhEntity = (Mzy_kfyhEntity) o;
                List<TSType> tsTypeList = TSTypegroup.allTypes.get("miShu".toLowerCase());
                String sbR = "";
                String sbL = "";
                if (tsTypeList != null && !tsTypeList.isEmpty()) {
                    for (TSType tsType : tsTypeList) {
                        if (tsType.getTypecode().endsWith(mzy_kfyhEntity.getSbR())) {
                            sbR = tsType.getTypename();
                        }
                        if (tsType.getTypecode().endsWith(mzy_kfyhEntity.getSbL())) {
                            sbL = tsType.getTypename();
                        }
                    }
                }
                List<TSType> tsTypeListLR = TSTypegroup.allTypes.get("shiliTable".toLowerCase());
                String sr = "";
                String sl = "";
                if (tsTypeListLR != null && !tsTypeListLR.isEmpty()) {
                    for (TSType tsType : tsTypeListLR) {
                        if (tsType.getTypecode().endsWith(mzy_kfyhEntity.getHsR())) {
                            sr = tsType.getTypename();
                            break;
                        }
                    }
                }
                if (tsTypeListLR != null && !tsTypeListLR.isEmpty()) {
                    for (TSType tsType : tsTypeListLR) {
                        if (tsType.getTypecode().endsWith(mzy_kfyhEntity.getHsL())) {
                            sl = tsType.getTypename();
                            break;
                        }
                    }
                }
                List<TSType> tsTypeListXG = TSTypegroup.allTypes.get("slxg".toLowerCase());
                String xgr = "";
                String xgl = "";
                if (tsTypeListXG != null && !tsTypeListXG.isEmpty()) {
                    for (TSType tsType : tsTypeListXG) {
                        if (tsType.getTypecode().endsWith(mzy_kfyhEntity.getHsslxgR())) {
                            xgr = tsType.getTypename();
                            break;
                        }
                    }
                }
                if (tsTypeListXG != null && !tsTypeListXG.isEmpty()) {
                    for (TSType tsType : tsTypeListXG) {
                        if (tsType.getTypecode().endsWith(mzy_kfyhEntity.getHsslxgL())) {
                            xgl = tsType.getTypename();
                            break;
                        }
                    }
                }


                mzy_kfyhEntity.setShowR(sbR + "," + sr + "," + xgr);
                mzy_kfyhEntity.setShowL(sbL + "," + sl + "," + xgl);
                MzyKfyhTls mzyKfyhTls = systemService.findUniqueByProperty(MzyKfyhTls.class, "mzyKfyhEntity.id", mzy_kfyhEntity.getId());
                if (mzyKfyhTls != null) {
                    mzy_kfyhEntity.setTls(mzyKfyhTls.getTsUser().getRealName());
                } else {
                    mzy_kfyhEntity.setTls("");
                }
                systemService.saveOrUpdate(mzy_kfyhEntity);
            }
        }
        TagUtil.datagrid(response, dataGrid);
    }

    @RequestMapping(params = "tlDatagrid")
    public void tlDatagrid(Mzy_tlEntity mzyTlEntity, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(Mzy_tlEntity.class, dataGrid);
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        //查询条件组装器
        cq.eq("mzyCustomEntity.id", customId);
        cq.addOrder("time", SortDirection.desc);
        cq.notEq("isDelete", "Y");
        cq.add();

        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyTlEntity);
        this.systemService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if (o instanceof Mzy_tlEntity) {
                Mzy_tlEntity mzy_tlEntity = (Mzy_tlEntity) o;
                List<TSType> tsTypeList = TSTypegroup.allTypes.get("miShu".toLowerCase());
                String qxsbR = "";
                String qxsbL = "";
                String jxsbR = "";
                String jxsbL = "";
                if (tsTypeList != null && !tsTypeList.isEmpty()) {
                    for (TSType tsType : tsTypeList) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getQxsbR())) {
                            qxsbR = tsType.getTypename();
                        }
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getQxsbL())) {
                            qxsbL = tsType.getTypename();
                        }
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getJxsbR())) {
                            jxsbR = tsType.getTypename();
                        }
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getJxsbL())) {
                            jxsbL = tsType.getTypename();
                        }
                    }
                }
                List<TSType> tsTypeListLR = TSTypegroup.allTypes.get("shiliTable".toLowerCase());
                String qxsr = "";
                String qxsl = "";
                String jxsr = "";
                String jxsl = "";

                if (tsTypeListLR != null && !tsTypeListLR.isEmpty()) {
                    for (TSType tsType : tsTypeListLR) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getQxslR())) {
                            qxsr = tsType.getTypename();
                            break;
                        }
                    }
                }
                if (tsTypeListLR != null && !tsTypeListLR.isEmpty()) {
                    for (TSType tsType : tsTypeListLR) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getQxslL())) {
                            qxsl = tsType.getTypename();
                            break;
                        }
                    }
                }
                if (tsTypeListLR != null && !tsTypeListLR.isEmpty()) {
                    for (TSType tsType : tsTypeListLR) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getJxslR())) {
                            jxsr = tsType.getTypename();
                            break;
                        }
                    }
                }
                if (tsTypeListLR != null && !tsTypeListLR.isEmpty()) {
                    for (TSType tsType : tsTypeListLR) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getJxslL())) {
                            jxsl = tsType.getTypename();
                            break;
                        }
                    }
                }

                List<TSType> tsTypeListXG = TSTypegroup.allTypes.get("slxg".toLowerCase());
                String qxslxgr = "";
                String qxslxgl = "";
                String jxslxgr = "";
                String jxslxgl = "";

                if (tsTypeListXG != null && !tsTypeListXG.isEmpty()) {
                    for (TSType tsType : tsTypeListXG) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getQxslxgR())) {
                            qxslxgr = tsType.getTypename();
                            break;
                        }
                    }
                }
                if (tsTypeListXG != null && !tsTypeListXG.isEmpty()) {
                    for (TSType tsType : tsTypeListXG) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getQxslxgL())) {
                            qxslxgl = tsType.getTypename();
                            break;
                        }
                    }
                }
                if (tsTypeListXG != null && !tsTypeListXG.isEmpty()) {
                    for (TSType tsType : tsTypeListXG) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getJxslxgR())) {
                            jxslxgr = tsType.getTypename();
                            break;
                        }
                    }
                }
                if (tsTypeListXG != null && !tsTypeListXG.isEmpty()) {
                    for (TSType tsType : tsTypeListXG) {
                        if (tsType.getTypecode().endsWith(mzy_tlEntity.getJxslxgL())) {
                            jxslxgl = tsType.getTypename();
                            break;
                        }
                    }
                }

                mzy_tlEntity.setQxslLeft(qxsbL + "," + qxsl + "," + qxslxgl);
                mzy_tlEntity.setQxslRight(qxsbR + "," + qxsr + "," + qxslxgr);
                mzy_tlEntity.setJxslLeft(jxsbL + "," + jxsl + "," + jxslxgl);
                mzy_tlEntity.setJxslRight(jxsbR + "," + jxsr + "," + jxslxgr);
                systemService.saveOrUpdate(mzy_tlEntity);
            }
        }
        TagUtil.datagrid(response, dataGrid);
    }

    @RequestMapping(params = "datagridKfs")
    public void datagridKfs(TSUser tsUser, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(TSUser.class, dataGrid);
        //查询条件组装器
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, tsUser);

        this.systemService.getDataGridReturn(cq, true);
        IconImageUtil.convertUserDataGrid(dataGrid, request, systemService);
        TagUtil.datagrid(response, dataGrid);
    }

    @RequestMapping(params = "mzy_custom")
    public ModelAndView mzy_custom(HttpServletRequest request) {
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        List<TSDepart> departList = systemService.getList(TSDepart.class);
        request.setAttribute("departsReplace", RoletoJson.listToReplaceStr(departList, "departname", "id"));
//        if(isPeopleManager(ClientManager.getInstance().getClient().getUser())){
//            request.setAttribute("isPeopleManager", 1);
//        }else{
//            request.setAttribute("isPeopleManager", 0);
//        }
        StringBuilder sb = new StringBuilder();
        if (tsDepartList.size() > 1) {
            for (TSDepart tsDepart : tsDepartList) {
                sb.append(tsDepart.getId());
                sb.append(",");
            }
            String ssb = sb.toString();
            orgId += "," + ssb.substring(0, ssb.length() - 1);
        }
        request.setAttribute("orgIds", orgId);
        TSRole tsRole = systemService.findUniqueByProperty(TSRole.class, "roleCode", "p_coustom");
        request.setAttribute("roleid", tsRole.getId());
        request.setAttribute("departIsNotOne", getDepart());
        request.setAttribute("isAdmin", userService.isAdmin());
        return new ModelAndView("com/mingyue/mzy_custom/mzy_customList");
    }

    /**
     * easyui AJAX请求数据
     *
     * @param request
     * @param response
     * @param dataGrid
     * @param
     */

    @RequestMapping(params = "datagrid")
    public void datagrid(MzyCustomEntity mzyCustom, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(MzyCustomEntity.class, dataGrid);
        //查询条件组装器
        Short[] userstate = new Short[]{Globals.User_Normal, Globals.User_ADMIN};
//        cq.in("status", userstate);
        cq.notEq("isDelete", "Y");
        cq.add();
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
//        List<TSRoleUser> tsRoleUserList = systemService.findByProperty(TSRoleUser.class, "TSUser.id", ClientManager.getInstance().getClient().getUser().getId());
//        boolean isdz = false;
//        //店长有权查看所有客户
//        for (TSRoleUser tsRoleUser : tsRoleUserList) {
//            if (tsRoleUser != null && tsRoleUser.getTSRole().getRoleName().endsWith("店长")) {
//                TSDepart tsDepart = systemService.findUniqueByProperty(TSDepart.class, "departname", "眸之悦");
//                orgId = tsDepart.getId();
//                isdz = true;
//                break;
//            }
//        }

        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        List<String> orgIdList = new ArrayList<String>();
        String roleName=(String)request.getSession().getAttribute("roleName");
//        if (tsDepartList.size() > 1) {
//            String orgIds = request.getParameter("orgIds");
//            orgIdList = extractIdListByComma(orgIds);
////            if (!CollectionUtils.isEmpty(orgIdList)&&!isdz) {
////
////            } else
//            if (CollectionUtils.isEmpty(orgIdList) || isdz) {
//                StringBuilder sb = new StringBuilder();
//                for (TSDepart tsDepart : tsDepartList) {
//                    sb.append(tsDepart.getId());
//                    sb.append(",");
//                }
//                String ssb = sb.toString();
//                orgId += "," + ssb.substring(0, ssb.length() - 1);
//                orgIdList = extractIdListByComma(orgId);
//            }
//
//        } else
       if(tsDepartList.size()==0){
//            String orgIds = request.getParameter("orgIds");

            orgIdList = extractIdListByComma(orgId);
        }

//        获取 当前组织机构的用户信息
        if (!CollectionUtils.isEmpty(orgIdList)&&orgIdList.size()==1&&!roleName.equals("店长")) {
            CriteriaQuery subCq = new CriteriaQuery(TSUserOrg.class);
            subCq.setProjection(Property.forName("tsUser.id"));
            subCq.in("tsDepart.id", orgIdList.toArray());
            subCq.add();

            cq.add(Property.forName("id").in(subCq.getDetachedCriteria()));
//            cq.eq("currentDepart.id",orgIdList.get(0));
        }


        cq.addOrder("createDate", SortDirection.desc);
        cq.add();
        String orgName = request.getParameter("departname");
        if(orgName!=null&&orgName.length()>1){
            mzyCustom.setOrgName(orgName);
        }
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyCustom, request.getParameterMap());
        this.mzyCustomService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if (o instanceof MzyCustomEntity) {
                MzyCustomEntity mzyCustomEntity = (MzyCustomEntity) o;
                mzyCustomEntity.setName(mzyCustomEntity.getRealName());
                mzyCustomEntity.setOrgName(mzyCustomEntity.getUserOrgList().get(0).getTsDepart().getDepartname());
                MzyCustomKfs mzyCustomKfs = systemService.findUniqueByProperty(MzyCustomKfs.class, "mzyCustomEntity.id", mzyCustomEntity.getId());
                if (mzyCustomKfs != null)
                    mzyCustomEntity.setKfmen(mzyCustomKfs.getTsUser().getRealName());
                String showTlYh="";
                if(mzyCustomEntity.getIsTl()!=null&&mzyCustomEntity.getIsTl().equals("on")){
                    showTlYh="调理类";
                }
                if(mzyCustomEntity.getIsYh()!=null&&mzyCustomEntity.getIsYh().equals("on")){
                    if(showTlYh.length()>1){
                        showTlYh+=",养护类";
                    }else {
                        showTlYh = "养护类";
                    }
                }
                mzyCustomEntity.setShowTlYh(showTlYh);
            }
        }
//        IconImageUtil.convertUserDataGrid(dataGrid, request, systemService);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径

        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * 删除顾客表
     *
     * @return
     */
    @RequestMapping(params = "del")
    @ResponseBody
    public AjaxJson del(MzyCustomEntity mzyCustom, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzyCustom = systemService.getEntity(MzyCustomEntity.class, mzyCustom.getId());
        List<MzyCustomKfs> mzyCustomKfsList = systemService.findByProperty(MzyCustomKfs.class, "mzyCustomEntity.id", mzyCustom.getId());
        for (MzyCustomKfs mzyCustomKfs : mzyCustomKfsList) {
            mzyCustomKfs.setIsDelete("Y");
            systemService.saveOrUpdate(mzyCustomKfs);
        }
//        systemService.deleteAllEntitie(mzyCustomKfsList);
        List<Mzy_xsprintEntity> mzy_xsprintEntityList = systemService.findByProperty(Mzy_xsprintEntity.class, "mzyCustomEntity.id", mzyCustom.getId());
        for (Mzy_xsprintEntity mzy_xsprintEntity : mzy_xsprintEntityList) {
            mzy_xsprintEntity.setIsDelete("Y");
            systemService.saveOrUpdate(mzy_xsprintEntity);
        }
//        systemService.deleteAllEntitie(mzy_xsprintEntityList);
        List<TSRoleUser> roleUser = systemService.findByProperty(TSRoleUser.class, "TSUser.id", mzyCustom.getId());
        if (roleUser.size() > 0) {
            // 删除用户时先删除用户和角色关系表
            delRoleUser(mzyCustom);
//            systemService.executeSql("delete from t_s_user_org where user_id=?", mzyCustom.getId()); // 删除 用户-机构 数据
            mzyCustom.setIsDelete("Y");
            systemService.saveOrUpdate(mzyCustom);
//            mzyCustomService.delete(mzyCustom);
            message = "顾客：" + mzyCustom.getRealName() + "删除成功";
            systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
        } else {
            mzyCustom.setIsDelete("Y");
            systemService.saveOrUpdate(mzyCustom);
//            mzyCustomService.delete(mzyCustom);
            message = "顾客：" + mzyCustom.getRealName() + "删除成功";
        }
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "delCustom")
    @ResponseBody
    public AjaxJson delCustom(MzyCustomEntity mzyCustom, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzyCustom = systemService.getEntity(MzyCustomEntity.class, mzyCustom.getId());
        List<MzyCustomKfs> mzyCustomKfsList = systemService.findByProperty(MzyCustomKfs.class, "mzyCustomEntity.id", mzyCustom.getId());
        for (MzyCustomKfs mzyCustomKfs : mzyCustomKfsList) {
            mzyCustomKfs.setIsDelete("Y");
            systemService.saveOrUpdate(mzyCustomKfs);
        }
//        systemService.deleteAllEntitie(mzyCustomKfsList);

        List<TSRoleUser> roleUser = systemService.findByProperty(TSRoleUser.class, "TSUser.id", mzyCustom.getId());
        if (roleUser.size() > 0) {
            // 删除用户时先删除用户和角色关系表
            delRoleUser(mzyCustom);
//            systemService.executeSql("delete from t_s_user_org where user_id=?", mzyCustom.getId()); // 删除 用户-机构 数据
            mzyCustom.setIsDelete("Y");
            systemService.saveOrUpdate(mzyCustom);
//            mzyCustomService.delete(mzyCustom);
            message = "顾客：" + mzyCustom.getRealName() + "删除成功";
            systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
        } else {
            mzyCustom.setIsDelete("Y");
            systemService.saveOrUpdate(mzyCustom);
//            mzyCustomService.delete(mzyCustom);
            message = "顾客：" + mzyCustom.getRealName() + "删除成功";
        }
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "delScty")
    @ResponseBody
    public AjaxJson delScty(MzySctyEntity mzySctyEntity, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzySctyEntity = systemService.getEntity(MzySctyEntity.class, mzySctyEntity.getId());
        message = "顾客：" + mzySctyEntity.getMzyCustomEntity().getRealName() + "首次体验记录删除成功";
        mzySctyEntity.setIsDelete("Y");
        systemService.saveOrUpdate(mzySctyEntity);
//        systemService.delete(mzySctyEntity);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "delTl")
    @ResponseBody
    public AjaxJson delTl(Mzy_tlEntity mzyTlEntity, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzyTlEntity = systemService.getEntity(Mzy_tlEntity.class, mzyTlEntity.getId());
        message = "顾客：" + mzyTlEntity.getMzyCustomEntity().getRealName() + "调理记录删除成功";
        mzyTlEntity.setIsDelete("Y");
        systemService.saveOrUpdate(mzyTlEntity);
//        systemService.delete(mzyTlEntity);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "delkfyh")
    @ResponseBody
    public AjaxJson delkfyh(Mzy_kfyhEntity mzyKfyhEntity, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzyKfyhEntity = systemService.getEntity(Mzy_kfyhEntity.class, mzyKfyhEntity.getId());
        MzyKfyhTls mzyKfyhTls = systemService.get(MzyKfyhTls.class, mzyKfyhEntity.getId());
        if (mzyKfyhTls != null) {
            mzyKfyhTls.setIsDelete("Y");
            systemService.saveOrUpdate(mzyKfyhTls);
//            systemService.delete(mzyKfyhTls);
        }
        message = "顾客：" + mzyKfyhEntity.getMzyCustomEntity().getRealName() + "调理记录删除成功";
        mzyKfyhEntity.setIsDelete("Y");
        systemService.saveOrUpdate(mzyKfyhEntity);
//        systemService.delete(mzyKfyhEntity);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
        j.setMsg(message);
        return j;
    }

    //    private void delCustomKfs(MzyCustomEntity user) {
//        // 同步删除用户角色关联表
//        List<TSRoleUser> roleUserList = systemService.findByProperty(TSRoleUser.class, "TSUser.id", user.getId());
//        if (roleUserList.size() >= 1) {
//            for (TSRoleUser tRoleUser : roleUserList) {
//                systemService.delete(tRoleUser);
//            }
//        }
//    }
    public void delRoleUser(TSUser user) {
        // 同步删除用户角色关联表
        List<TSRoleUser> roleUserList = systemService.findByProperty(TSRoleUser.class, "TSUser.id", user.getId());
        if (roleUserList.size() >= 1) {
            for (TSRoleUser tRoleUser : roleUserList) {
                tRoleUser.setIsDelete("Y");
                systemService.saveOrUpdate(tRoleUser);
//                systemService.delete(tRoleUser);
            }
        }
    }

    private String saveImage(MzyCustomEntity mzyCustom, HttpServletRequest request) {
        String r = "客户信息添加成功";
        String pa = ResourceUtil.getConfigByName("uploadpath");
        try {
            if (mzyCustom.getPicPath().indexOf(pa) != -1) {
                request.setCharacterEncoding("UTF-8");
                String realPath = request.getSession().getServletContext().getRealPath("/") + "/" + mzyCustom.getPicPath();// 文件的硬盘真实路径

                FileInputStream fins = StreamUtils.getFileInputStream(realPath);
                StreamUtils streamUtils = new StreamUtils();
                byte[] pcontent = streamUtils.getBytes(fins);
                int first = mzyCustom.getPicPath().lastIndexOf("/");
                String name = mzyCustom.getPicPath().substring(first + 1, mzyCustom.getPicPath().length());
                first = name.lastIndexOf(".");
                mzyCustom.setUserClas(name.substring(0, first));
                mzyCustom.setExtend(name.substring(first + 1, name.length()));
                mzyCustom.setUserContent(pcontent);
            }
        } catch (IOException e) {
            e.printStackTrace();
            r = "客户信息更新失败";
        }
        return r;
    }

    private void saveKfs(MzyCustomEntity mzyCustom, HttpServletRequest request) {
        String kfmenids = oConvertUtils.getString(request.getParameter("kfmenids"));
        List<String> kfsIdList = extractIdListByComma(kfmenids);
        if (kfsIdList.size() > 0) {
            TSUser tsUser = systemService.findUniqueByProperty(TSUser.class, "id", kfsIdList.get(0));
            if (tsUser != null) {
                List<MzyCustomKfs> mzyCustomKfsList = systemService.findByProperty(MzyCustomKfs.class, "mzyCustomEntity.id", mzyCustom.getId());
                systemService.deleteAllEntitie(mzyCustomKfsList);
                MzyCustomKfs mzyCustomKfs = new MzyCustomKfs();
                mzyCustomKfs.setTsUser(tsUser);
                mzyCustomKfs.setMzyCustomEntity(mzyCustom);
                systemService.save(mzyCustomKfs);
            }
        }
    }

    private void saveTls(Mzy_kfyhEntity mzyKfyhEntity, HttpServletRequest request) {
        String tlsids = oConvertUtils.getString(request.getParameter("tlsids"));
        List<String> kfsIdList = extractIdListByComma(tlsids);
        if (kfsIdList.size() > 0) {
            TSUser tsUser = systemService.findUniqueByProperty(TSUser.class, "id", kfsIdList.get(0));
            if (tsUser != null) {
                List<MzyKfyhTls> mzyKfyhTlsList = systemService.findByProperty(MzyKfyhTls.class, "mzyKfyhEntity.id", mzyKfyhEntity.getId());
                systemService.deleteAllEntitie(mzyKfyhTlsList);
                MzyKfyhTls mzyKfyhTls = new MzyKfyhTls();
                mzyKfyhTls.setTsUser(tsUser);
                mzyKfyhTls.setMzyKfyhEntity(mzyKfyhEntity);
                systemService.save(mzyKfyhTls);
            }
        }
    }

    private void saveSctyTls(MzySctyEntity mzySctyEntity, HttpServletRequest request) {
        String tlsids = oConvertUtils.getString(request.getParameter("tlsids"));
        List<String> kfsIdList = extractIdListByComma(tlsids);
        if (kfsIdList.size() > 0) {
            TSUser tsUser = systemService.findUniqueByProperty(TSUser.class, "id", kfsIdList.get(0));
            if (tsUser != null) {
                List<MzySctyTls> mzySctyTlsList = systemService.findByProperty(MzySctyTls.class, "mzySctyEntity.id", mzySctyEntity.getId());
                systemService.deleteAllEntitie(mzySctyTlsList);
                MzySctyTls mzySctyTls = new MzySctyTls();
                mzySctyTls.setTsUser(tsUser);
                mzySctyTls.setMzySctyEntity(mzySctyEntity);
                systemService.save(mzySctyTls);
            }
        }
    }

    /**
     * 添加顾客表
     *
     * @param
     * @return
     */
    @RequestMapping(params = "save")
    @ResponseBody
    public AjaxJson save(MzyCustomEntity mzyCustom, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        message = saveImage(mzyCustom, request);
//        mzyCustom.setUserName(UUID.randomUUID().toString());
        mzyCustom.setRealName(mzyCustom.getName());
        if(mzyCustom.getIsTl()==null){
            mzyCustom.setIsTl("");
        }
        if(mzyCustom.getIsYh()==null){
            mzyCustom.setIsYh("");
        }
        if (mzyCustom.getUserName() == null) {
            mzyCustom.setUserName(mzyCustom.getMobilePhone());
        }
        if (StringUtil.isNotEmpty(mzyCustom.getId())) {
            MzyCustomEntity t = mzyCustomService.get(MzyCustomEntity.class, mzyCustom.getId());
            try {
                systemService.executeSql("delete from t_s_user_org where user_id=?", mzyCustom.getId());
                saveUserOrgList(request, mzyCustom);
                MyBeanUtils.copyBeanNotNull2Bean(mzyCustom, t);
                mzyCustomService.saveOrUpdate(t);
                saveKfs(t, request);
                List<TSRoleUser> ru = systemService.findByProperty(TSRoleUser.class, "TSUser.id", mzyCustom.getId());
                systemService.deleteAllEntitie(ru);
                message = "顾客: " + mzyCustom.getRealName() + "更新成功";

                saveRoleUser(request, mzyCustom);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "顾客表更新失败";
            }
        } else {
            if (mzyCustom.getMobilePhone() == null || mzyCustom.getMobilePhone().length() < 10) {
                message = "请输入正确的电话号码";
                j.setMsg(message);
                j.setSuccess(false);
                return j;
            }
            MzyCustomEntity users = systemService.findUniqueByProperty(MzyCustomEntity.class, "mobilePhone", mzyCustom.getMobilePhone());
            if (users != null) {
                message = "用户: " + users.getRealName() + "电话号码:" + users.getMobilePhone() + " 已经存在";
            } else {
                mzyCustom.setPhonePw(PasswordUtil.encrypt(mzyCustom.getMobilePhone(), "123456", PasswordUtil.getStaticSalt()));
                mzyCustom.setStatus(Globals.User_Normal);
            }
            message = "顾客: " + mzyCustom.getRealName() + " 添加成功";
            mzyCustomService.save(mzyCustom);
            saveKfs(mzyCustom, request);
            saveUserOrgList(request, mzyCustom);
            saveRoleUser(request, mzyCustom);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "sctysave")
    @ResponseBody
    public AjaxJson sctysave(MzySctyEntity mzySctyEntity, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        String note = mzySctyEntity.getNote().replace("\r\n", "").trim();
        mzySctyEntity.setNote(note);
        String isfix = oConvertUtils.getString(request.getParameter("isfix"));
//        if (isfix.length() > 2)
        {
            if (StringUtil.isNotEmpty(mzySctyEntity.getId())) {

                MzySctyEntity t = mzyCustomService.get(MzySctyEntity.class, mzySctyEntity.getId());
                try {
                    MyBeanUtils.copyBeanNotNull2Bean(mzySctyEntity, t);
                    systemService.saveOrUpdate(t);
                    saveSctyTls(t, request);
                    message = "顾客：" + t.getMzyCustomEntity().getRealName() + " 首次体验记录更新成功";

                    systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
                } catch (Exception e) {
                    e.printStackTrace();
                    message = "首次体验记录表更新失败";
                }


            } else {
                MzyCustomEntity mzyCustomEntity = systemService.getEntity(MzyCustomEntity.class, customId);
                mzySctyEntity.setMzyCustomEntity(mzyCustomEntity);
                message = "顾客: " + mzySctyEntity.getMzyCustomEntity().getRealName() + " 首次体验记录添加成功";
                systemService.save(mzySctyEntity);
                systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
            }
        }
//        else {
//            message = "首次体验记录表查未添加或修改成功！";
//        }
        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "kfyhsave")
    @ResponseBody
    public AjaxJson kfyhsave(Mzy_kfyhEntity mzyKfyhEntity, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        String note = mzyKfyhEntity.getNote().replace("\r\n", "").trim();
        mzyKfyhEntity.setNote(note);
        if (StringUtil.isNotEmpty(mzyKfyhEntity.getId())) {
            Mzy_kfyhEntity t = mzyCustomService.get(Mzy_kfyhEntity.class, mzyKfyhEntity.getId());
            try {
                MyBeanUtils.copyBeanNotNull2Bean(mzyKfyhEntity, t);
                systemService.saveOrUpdate(t);
                saveTls(t, request);
                message = "顾客：" + t.getMzyCustomEntity().getRealName() + " 疗程记录更新成功";

                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "疗程记录表更新失败";
            }
        } else {
            MzyCustomEntity mzyCustomEntity = systemService.getEntity(MzyCustomEntity.class, customId);
            mzyKfyhEntity.setMzyCustomEntity(mzyCustomEntity);
            message = "顾客: " + mzyKfyhEntity.getMzyCustomEntity().getRealName() + " 康复养护记录添加成功";
            systemService.save(mzyKfyhEntity);
            saveTls(mzyKfyhEntity, request);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "tlsave")
    @ResponseBody
    public AjaxJson tlsave(Mzy_tlEntity mzyTlEntity, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String customId = oConvertUtils.getString(request.getParameter("customId"));
//        if (mzyTlEntity.getQxsbR() == null) {
//            mzyTlEntity.setQxsbR("1");
//        }
//        if (mzyTlEntity.getQxsbL() == null) {
//            mzyTlEntity.setQxsbL("1");
//        }
//        if (mzyTlEntity.getJxsbR() == null) {
//            mzyTlEntity.setJxsbR("1");
//        }
//        if (mzyTlEntity.getJxsbL() == null) {
//            mzyTlEntity.setJxsbL("1");
//        }
//        if (mzyTlEntity.getQxslR() == null) {
//            mzyTlEntity.setQxslR("1");
//        }
//        if (mzyTlEntity.getQxslL() == null) {
//            mzyTlEntity.setQxslL("1");
//        }
//        if (mzyTlEntity.getJxslR() == null) {
//            mzyTlEntity.setJxslR("1");
//        }
//        if (mzyTlEntity.getJxslL() == null) {
//            mzyTlEntity.setJxslL("1");
//        }
        if (StringUtil.isNotEmpty(mzyTlEntity.getId())) {
            Mzy_tlEntity t = mzyCustomService.get(Mzy_tlEntity.class, mzyTlEntity.getId());
            try {
                MyBeanUtils.copyBeanNotNull2Bean(mzyTlEntity, t);
                mzyCustomService.saveOrUpdate(t);
                message = "顾客：" + t.getMzyCustomEntity().getRealName() + " 调理记录更新成功";

                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "首次体验记录表更新失败";
            }
        } else {
            MzyCustomEntity mzyCustomEntity = systemService.getEntity(MzyCustomEntity.class, customId);
            mzyTlEntity.setMzyCustomEntity(mzyCustomEntity);
            message = "顾客: " + mzyTlEntity.getMzyCustomEntity().getRealName() + " 调理记录添加成功";
            mzyCustomService.save(mzyTlEntity);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    private void saveRoleUser(HttpServletRequest request, MzyCustomEntity user) {
        TSRole tsRole = null;
        TSRoleUser rUser = new TSRoleUser();
        if (user.getCustomType() != null) {
            if ("1".endsWith(user.getCustomType())) {
                tsRole = systemService.findUniqueByProperty(TSRole.class, "roleCode", "j_coustom");
            } else {
                tsRole = systemService.findUniqueByProperty(TSRole.class, "roleCode", "p_coustom");
            }
        } else {
            String roleid = oConvertUtils.getString(request.getParameter("roleid"));
            tsRole = systemService.findUniqueByProperty(TSRole.class, "id", roleid);
        }
        if (tsRole != null) {
            rUser.setTSRole(tsRole);
            rUser.setTSUser(user);
            systemService.save(rUser);
        }
//        String[] roleids = roleidstr.split(",");
//        for (int i = 0; i < roleids.length; i++) {
//            TSRoleUser rUser = new TSRoleUser();
//            TSRole role = systemService.getEntity(TSRole.class, roleids[i]);
//            rUser.setTSRole(role);
//            rUser.setTSUser(user);
//            systemService.save(rUser);
//
//        }
    }

    private void saveUserOrgList(HttpServletRequest request, TSUser user) {
        String orgIds = oConvertUtils.getString(request.getParameter("orgIds"));

        List<TSUserOrg> userOrgList = new ArrayList<TSUserOrg>();
        List<String> orgIdList = extractIdListByComma(orgIds);
        for (String orgId : orgIdList) {
            TSDepart depart = new TSDepart();
            depart.setId(orgId);

            TSUserOrg userOrg = new TSUserOrg();
            userOrg.setTsUser(user);
            userOrg.setTsDepart(depart);

            userOrgList.add(userOrg);
        }
        if (!userOrgList.isEmpty()) {
            systemService.batchSave(userOrgList);
        }

//        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
//        TSDepart tsDepart = systemService.findUniqueByProperty(TSDepart.class, "id", orgId);
//        tsDepart.setId(orgId);
//
//        TSUserOrg userOrg = new TSUserOrg();
//        userOrg.setTsUser(user);
//        userOrg.setTsDepart(tsDepart);
//        systemService.save(userOrg);
    }

    private String getCustomIdnum() {
        TSDepart tsDepart = systemService.getEntity(TSDepart.class, ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId());
        String r = tsDepart.getDepartCode() + tsDepart.getCustomCode();
        int id = Integer.parseInt(tsDepart.getCustomCode()) + 1;
        tsDepart.setCustomCode(String.valueOf(id));
        systemService.saveOrUpdate(tsDepart);
        return r;
    }

    /**
     * 顾客表列表页面跳转
     *
     * @return
     */
    @RequestMapping(params = "addorupdate")
    public ModelAndView addorupdate(MzyCustomEntity mzyCustom, HttpServletRequest req) {
        List<TSDepart> departList = new ArrayList<TSDepart>();
        String departid = oConvertUtils.getString(req.getParameter("departid"));
        if (!StringUtil.isEmpty(departid)) {
            departList.add((TSDepart) systemService.getEntity(TSDepart.class, departid));
        } else {
//            departList.addAll((List) systemService.getList(TSDepart.class));
            String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
            TSDepart tsDepart = systemService.findUniqueByProperty(TSDepart.class, "id", orgId);
            departList.add(tsDepart);
        }
        req.setAttribute("departList", departList);
        List<String> orgIdList = new ArrayList<String>();
        if (StringUtil.isNotEmpty(mzyCustom.getId())) {
            mzyCustom = mzyCustomService.getEntity(MzyCustomEntity.class, mzyCustom.getId());
            MzyCustomKfs mzyCustomKfs = systemService.findUniqueByProperty(MzyCustomKfs.class, "mzyCustomEntity.id", mzyCustom.getId());
            if (mzyCustomKfs != null && mzyCustomKfs.getTsUser() != null) {
                mzyCustom.setKfmen(mzyCustomKfs.getTsUser().getRealName());
            } else {
                mzyCustom.setKfmen("");
            }
//            mzyCustom.setNote(mzyCustom.getNote().trim());
            req.setAttribute("CustomIdnum", mzyCustom.getIdNums());

            req.setAttribute("mzyCustomPage", mzyCustom);
            orgIdList = systemService.findHql("select d.id from TSDepart d,TSUserOrg uo where d.id=uo.tsDepart.id and uo.tsUser.id=?", new String[]{mzyCustom.getId()});
            req.setAttribute("orgIds", orgIdList.get(0));
        } else {
//            mzyCustom.setIdNums(getCustomIdnum());
//            systemService.save(mzyCustom);
            req.setAttribute("CustomIdnum", getCustomIdnum());

            req.setAttribute("mzyCustomPage", mzyCustom);
            req.setAttribute("orgIds", ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId());
        }
        //总店人员有调整客户所属部门的权限
        req.setAttribute("departIsNotOne", getDepart());
        req.setAttribute("isAdmin", userService.isAdmin());
        req.setAttribute("orgIdList", JSON.toJSON(orgIdList));

        return new ModelAndView("com/mingyue/mzy_custom/mzy_custom");
    }

    private int getDepart() {
        int a = 1;
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        if (tsDepartList.size() > 1) {
            a = tsDepartList.size();
        } else {
            List<TSRoleUser> tsRoleUserList = systemService.findByProperty(TSRoleUser.class, "TSUser.id", ClientManager.getInstance().getClient().getUser().getId());
            for (TSRoleUser tsRoleUser : tsRoleUserList) {
                if (tsRoleUser.getTSRole().getRoleName().endsWith("店长")) {
                    a = 2;
                    break;
                }
            }
        }

        return a;
    }



    @RequestMapping(params = "sctyaddorupdate")
    public ModelAndView sctyaddorupdate(MzyCustomEntity mzyCustom, HttpServletRequest req) {
//        String customId=oConvertUtils.getString(req.getParameter("customId"));
//        req.setAttribute("customId", customId);
        MzyCustomEntity mzyCustomEntity = systemService.getEntity(MzyCustomEntity.class, mzyCustom.getId());
        req.setAttribute("customName", mzyCustomEntity.getRealName());
        req.setAttribute("customId", mzyCustomEntity.getId());
        MzySctyEntity mzySctyEntity = systemService.findUniqueByProperty(MzySctyEntity.class, "mzyCustomEntity.id", mzyCustomEntity.getId());
        if (mzySctyEntity == null) {
            mzySctyEntity = new MzySctyEntity();
            mzySctyEntity.setMzyCustomEntity(mzyCustomEntity);
            systemService.save(mzySctyEntity);
        }
//            mzySctyEntity = systemService.getEntity(MzySctyEntity.class, mzySctyEntity.getId());
        MzySctyTls mzySctyTls = null;
        try {
            mzySctyTls = systemService.findUniqueByProperty(MzySctyTls.class, "mzySctyEntity.id", mzySctyEntity.getId());
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (mzySctyTls != null) {
            mzySctyEntity.setTls(mzySctyTls.getTsUser().getRealName());
        } else {
            mzySctyEntity.setTls("");
        }
        req.setAttribute("mzySctyPage", mzySctyEntity);
        return new ModelAndView("com/mingyue/mzy_scty/mzyScty");
    }

    @RequestMapping(params = "kfyhaddorupdate")
    public ModelAndView kfyhaddorupdate(Mzy_kfyhEntity mzyKfyhEntity, HttpServletRequest req) {
        String customId = oConvertUtils.getString(req.getParameter("customId"));
        req.setAttribute("customId", customId);
        MzyCustomEntity mzyCustomEntity = systemService.getEntity(MzyCustomEntity.class, customId);
        req.setAttribute("customName", mzyCustomEntity.getRealName());

        if (StringUtil.isNotEmpty(mzyKfyhEntity.getId())) {
            mzyKfyhEntity = systemService.getEntity(Mzy_kfyhEntity.class, mzyKfyhEntity.getId());
            req.setAttribute("mzyKfyhPage", mzyKfyhEntity);
        }
        return new ModelAndView("com/mingyue/mzy_kfyh/mzyKfyh");
    }

    @RequestMapping(params = "tladdorupdate")
    public ModelAndView tladdorupdate(Mzy_tlEntity mzyTlEntity, HttpServletRequest req) {
        String customId = oConvertUtils.getString(req.getParameter("customId"));
        req.setAttribute("customId", customId);
        MzyCustomEntity mzyCustomEntity = systemService.getEntity(MzyCustomEntity.class, customId);
        req.setAttribute("customName", mzyCustomEntity.getRealName());
        if (StringUtil.isNotEmpty(mzyTlEntity.getId())) {
            mzyTlEntity = systemService.getEntity(Mzy_tlEntity.class, mzyTlEntity.getId());
            req.setAttribute("mzyTlPage", mzyTlEntity);
        }
        return new ModelAndView("com/mingyue/mzy_tl/mzyTl");
    }

    /**
     * 导出excel
     *
     * @param request
     * @param response
     */
    @RequestMapping(params = "exportkfyhXls")
    public String exportkfyhXls(Mzy_kfyhEntity mzyKfyhEntity, HttpServletRequest request, HttpServletResponse response
            , DataGrid dataGrid, ModelMap map) {

        CriteriaQuery cq = new CriteriaQuery(Mzy_kfyhEntity.class, dataGrid);
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        //查询条件组装器
        cq.eq("mzyCustomEntity.id", customId);
        cq.addOrder("createDate", SortDirection.desc);
        cq.add();

        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyKfyhEntity, request.getParameterMap());

        List<Mzy_kfyhEntity> courses = this.systemService.getListByCriteriaQuery(cq, false);

        MzyCustomEntity mzyCustomEntity = systemService.getEntity(MzyCustomEntity.class, customId);

        map.put(NormalExcelConstants.FILE_NAME, mzyCustomEntity.getRealName() + " 疗程记录表");
        map.put(NormalExcelConstants.CLASS, Mzy_kfyhEntity.class);
        map.put(NormalExcelConstants.PARAMS, new ExportParams("疗程记录表", "导出日期:" + DateUtils.date2Str(new Date(), DateUtils.time_sdf),
                "导出信息"));
        map.put(NormalExcelConstants.DATA_LIST, courses);

        return NormalExcelConstants.JEECG_EXCEL_VIEW;

    }

    @RequestMapping(params = "exportTlXls")
    public String exportTlXls(Mzy_tlEntity mzyTlEntity, HttpServletRequest request, HttpServletResponse response
            , DataGrid dataGrid, ModelMap map) {

        CriteriaQuery cq = new CriteriaQuery(Mzy_tlEntity.class, dataGrid);
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        //查询条件组装器
        cq.eq("mzyCustomEntity.id", customId);
        cq.addOrder("time", SortDirection.desc);
        cq.add();

        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyTlEntity, request.getParameterMap());

        List<Mzy_tlEntity> courses = this.systemService.getListByCriteriaQuery(cq, false);

        MzyCustomEntity mzyCustomEntity = systemService.getEntity(MzyCustomEntity.class, customId);

        map.put(NormalExcelConstants.FILE_NAME, mzyCustomEntity.getRealName() + " 调理记录表");
        map.put(NormalExcelConstants.CLASS, Mzy_tlEntity.class);
        map.put(NormalExcelConstants.PARAMS, new ExportParams("调理记录表", "导出日期:" + DateUtils.date2Str(new Date(), DateUtils.time_sdf),
                "导出信息"));
        map.put(NormalExcelConstants.DATA_LIST, courses);

        return NormalExcelConstants.JEECG_EXCEL_VIEW;

    }
}
