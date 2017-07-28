package com.mingyue.controller.mzycpkcsq;

import java.math.BigDecimal;
import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.mzy_product.MzyProductEntity;
import com.mingyue.entity.mzycpkcsq.Mzysqxd;
import org.apache.log4j.Logger;
import org.hibernate.criterion.Property;
import org.jeecgframework.core.util.DateUtils;
import org.jeecgframework.core.util.oConvertUtils;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.web.system.controller.core.IconImageUtil;
import org.jeecgframework.web.system.manager.ClientManager;
import org.jeecgframework.web.system.pojo.base.TSRoleUser;
import org.jeecgframework.web.system.pojo.base.TSUserOrg;
import org.jeecgframework.web.system.service.MutiLangServiceI;
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
import org.jeecgframework.core.util.StringUtil;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.core.util.MyBeanUtils;

import com.mingyue.entity.mzycpkcsq.MzycpkcsqEntity;
import com.mingyue.service.mzycpkcsq.MzycpkcsqServiceI;

/**
 * @author Tony
 * @version V1.0
 * @Title: Controller
 * @Description: 产品库存申请表
 * @date 2015-09-24 03:09:24
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzycpkcsqController")
public class MzycpkcsqController extends BaseController {
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(MzycpkcsqController.class);

    @Autowired
    private MzycpkcsqServiceI mzycpkcsqService;
    @Autowired
    private MutiLangServiceI mutiLangService;

    /**
     * 产品库存申请表列表 页面跳转
     *
     * @return
     */
    @RequestMapping(params = "mzycpkcsq")
    public ModelAndView mzycpkcsq(HttpServletRequest request) {
        request.setAttribute("departIsNotOne", getDepart());
        return new ModelAndView("com/mingyue/mzycpkcsq/mzycpkcsqList");
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

    @RequestMapping(params = "sqxd")
    public ModelAndView sqxd(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("com/mingyue/mzycpkcsq/mzysqcpxd");
        String sqkcId = oConvertUtils.getString(request.getParameter("sqkcId"));
        mv.addObject("sqkcId", sqkcId);
        return mv;
    }

    @RequestMapping(params = "mzyProductSelect")
    public ModelAndView mzyProductSelect(HttpServletRequest request) {
        String sqxdId = oConvertUtils.getString(request.getParameter("sqxdId"));
        request.setAttribute("sqxdId", sqxdId);
        return new ModelAndView("com/mingyue/mzy_product/mzyProductListSelect");
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
    public void datagrid(MzycpkcsqEntity mzycpkcsq, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(MzycpkcsqEntity.class, dataGrid);
        //查询条件组装器
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzycpkcsq, request.getParameterMap());
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
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
            cq.in("tsDepart.id", orgIdList.toArray());
        } else {
//            String orgIds = request.getParameter("orgIds");
            orgIdList = extractIdListByComma(orgId);
            cq.eq("tsDepart.id", orgId);
        }
        cq.notEq("isDelete", "Y");
        cq.addOrder("createDate", SortDirection.desc);
        cq.add();
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzycpkcsq, request.getParameterMap());
        this.mzycpkcsqService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if (o instanceof MzycpkcsqEntity) {
                MzycpkcsqEntity mzycpkcsqEntity = (MzycpkcsqEntity) o;
                List<Mzysqxd> mzysqxdList = systemService.findByProperty(Mzysqxd.class, "mzycpkcsqEntity.id", mzycpkcsqEntity.getId());
                if (mzysqxdList.size() == 0) {
                    systemService.delete(mzycpkcsqEntity);
                    dataGrid.getResults().remove(o);
                }
            }
        }
        TagUtil.datagrid(response, dataGrid);
    }

    @RequestMapping(params = "sqcpxddatagrid")
    public void sqcpxddatagrid(Mzysqxd mzysqxd, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(Mzysqxd.class, dataGrid);
        //查询条件组装器
        String sqkcId = oConvertUtils.getString(request.getParameter("sqkcId"));
        cq.eq("mzycpkcsqEntity.id", sqkcId);
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzysqxd, request.getParameterMap());
        this.mzycpkcsqService.getDataGridReturn(cq, true);
        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * 删除产品库存申请表
     *
     * @return
     */
    @RequestMapping(params = "del")
    @ResponseBody
    public AjaxJson del(MzycpkcsqEntity mzycpkcsq, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzycpkcsq = systemService.getEntity(MzycpkcsqEntity.class, mzycpkcsq.getId());
        List<Mzysqxd> mzysqxdList = systemService.findByProperty(Mzysqxd.class, "mzycpkcsqEntity.id", mzycpkcsq.getId());
        systemService.deleteAllEntitie(mzysqxdList);
        message = "产品库存申请表删除成功";
        mzycpkcsq.setIsDelete("Y");
        systemService.saveOrUpdate(mzycpkcsq);
//        mzycpkcsqService.delete(mzycpkcsq);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(message);
        return j;
    }


    /**
     * 添加产品库存申请表
     *
     * @param
     * @return
     */
    @RequestMapping(params = "save")
    @ResponseBody
    public AjaxJson save(MzycpkcsqEntity mzycpkcsq, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<TSDepart> tsDepartList = systemService.findByProperty(TSDepart.class, "TSPDepart.id", orgId);
        if (tsDepartList.size() > 1) {
            mzycpkcsq.setTsUserSh(ClientManager.getInstance().getClient().getUser());
        } else {
            if (mzycpkcsq.getTsUser() == null) {
                mzycpkcsq.setTsUser(ClientManager.getInstance().getClient().getUser());
            }
        }
        if (StringUtil.isNotEmpty(mzycpkcsq.getId())) {
            message = "产品库存申请表更新成功";
            MzycpkcsqEntity t = mzycpkcsqService.get(MzycpkcsqEntity.class, mzycpkcsq.getId());
            try {
                MyBeanUtils.copyBeanNotNull2Bean(mzycpkcsq, t);
                mzycpkcsqService.saveOrUpdate(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "产品库存申请表更新失败";
            }
        } else {
            TSDepart tsDepart = ClientManager.getInstance().getClient().getUser().getCurrentDepart();
            mzycpkcsq.setTsDepart(tsDepart);
            mzycpkcsq.setTsUser(ClientManager.getInstance().getClient().getUser());
            message = "产品库存申请表添加成功";
            mzycpkcsqService.save(mzycpkcsq);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "sqxdsave")
    @ResponseBody
    public AjaxJson sqxdsave(Mzysqxd mzysqxd, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String sqkcId = oConvertUtils.getString(request.getParameter("sqkcId"));
        MzycpkcsqEntity mzycpkcsqEntity = systemService.get(MzycpkcsqEntity.class, sqkcId);
        mzysqxd.setMzycpkcsqEntity(mzycpkcsqEntity);
        mzysqxd.setNote(mzysqxd.getNote().trim());
        if (StringUtil.isNotEmpty(mzysqxd.getId())) {
            message = "产品库存详单表更新成功";
            Mzysqxd t = mzycpkcsqService.get(Mzysqxd.class, mzysqxd.getId());
            try {
                MyBeanUtils.copyBeanNotNull2Bean(mzysqxd, t);
                mzycpkcsqService.saveOrUpdate(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "产品库存申请表更新失败";
            }
        } else {
            message = "产品库存详单表添加成功";
            mzycpkcsqService.save(mzysqxd);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    private String getSqIdnum() {
        TSDepart tsDepart = systemService.getEntity(TSDepart.class, ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId());
        String r = tsDepart.getDepartCode() + mutiLangService.getsqbhIdNum();
        return r;
    }

    /**
     * 产品库存申请表列表页面跳转
     *
     * @return
     */
    @RequestMapping(params = "addorupdate")
    public ModelAndView addorupdate(MzycpkcsqEntity mzycpkcsq, HttpServletRequest req) {
        if (StringUtil.isNotEmpty(mzycpkcsq.getId())) {
            mzycpkcsq = mzycpkcsqService.getEntity(MzycpkcsqEntity.class, mzycpkcsq.getId());
//            mzycpkcsq.setSqbh(getSqIdnum());
        } else {
            mzycpkcsq.setSqbh(getSqIdnum());
            mzycpkcsq.setTsUser(ClientManager.getInstance().getClient().getUser());
            mzycpkcsq.setTsDepart(ClientManager.getInstance().getClient().getUser().getCurrentDepart());
            mzycpkcsq.setSqdate(new Date());
            mzycpkcsq.setStatus("0");
            systemService.save(mzycpkcsq);
        }

        req.setAttribute("mzycpkcsqPage", mzycpkcsq);
        return new ModelAndView("com/mingyue/mzycpkcsq/cpkcsqBySqbh");
    }

    @RequestMapping(params = "sqcpxdAddorupdate")
    public ModelAndView sqcpxdAddorupdate(Mzysqxd mzysqxd, HttpServletRequest req) {
        String sqkcId = oConvertUtils.getString(req.getParameter("sqkcId"));
        req.setAttribute("sqkcId", sqkcId);
        if (StringUtil.isNotEmpty(mzysqxd.getId())) {
            mzysqxd = mzycpkcsqService.getEntity(Mzysqxd.class, mzysqxd.getId());
            req.setAttribute("mzysqxdPage", mzysqxd);
        }
        return new ModelAndView("com/mingyue/mzycpkcsq/mzysqxd_addedit");
    }

    @RequestMapping(params = "mzyProductSelected")
    @ResponseBody
    public AjaxJson mzyProductSelected(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String sqxdId = oConvertUtils.getString(request.getParameter("sqxdId"));
        MzycpkcsqEntity mzycpkcsqEntity = systemService.getEntity(MzycpkcsqEntity.class, sqxdId);
        String ids = request.getParameter("ids");
        List<String> idsList = new ArrayList<String>();
        idsList = extractIdListByComma(ids);
        if (!CollectionUtils.isEmpty(idsList)) {
            for (String pid : idsList) {
                Mzysqxd mzysqxd = new Mzysqxd();

                MzyProductEntity mzyProductEntity = systemService.getEntity(MzyProductEntity.class, pid);

                mzysqxd.setMzyProductEntity(mzyProductEntity);
                mzysqxd.setNums("1");
                mzysqxd.setMzycpkcsqEntity(mzycpkcsqEntity);
                systemService.save(mzysqxd);
            }
        }
        message = "产品列表添加成功";

        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "getSqxdList")
    @ResponseBody
    public List<Object> getSqxdList(HttpServletRequest request) {
        String sqxdId = oConvertUtils.getString(request.getParameter("sqxdId"));
//        Mzy_xsprintEntity mzy_xsprint = systemService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        List<Mzysqxd> mzysqxdList = systemService.findByProperty(Mzysqxd.class, "mzycpkcsqEntity.id", sqxdId);
        List<Object> map = new ArrayList<Object>();
        for (Mzysqxd mzysqxd : mzysqxdList) {
            Map<String, String> ap = new HashMap<String, String>();
            ap.put("id", mzysqxd.getMzyProductEntity().getId());
            ap.put("productName", mzysqxd.getMzyProductEntity().getName());
            if (mzysqxd.getMzyProductEntity().getPrice() != null) {
                ap.put("price", mzysqxd.getMzyProductEntity().getPrice().toString());
            } else {
                ap.put("price", "0.0");
            }

            ap.put("nums", mzysqxd.getNums());

            map.add(ap);
        }
        return map;
    }

    @RequestMapping(params = "check_sqxd")
    @ResponseBody
    public AjaxJson check_sqxd(MzycpkcsqEntity mzycpkcsqEntity, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        j.setMsg("删除成功");
        String sqxdId = oConvertUtils.getString(request.getParameter("sqxdId"));
        mzycpkcsqEntity = systemService.getEntity(MzycpkcsqEntity.class, sqxdId);
        List<Mzysqxd> mzysqxdList = systemService.findByProperty(Mzysqxd.class, "mzycpkcsqEntity.id", sqxdId);
        for (Mzysqxd mzysqxd : mzysqxdList) {
            mzysqxd.setIsDelete("Y");
            systemService.saveOrUpdate(mzysqxd);
        }
//        systemService.deleteAllEntitie(mzysqxdList);
//        systemService.delete(mzycpkcsqEntity);
        return j;
    }

    @RequestMapping(params = "saveProListBySqxd")
    @ResponseBody
    public AjaxJson saveProListBySqxd(MzycpkcsqEntity mzycpkcsqEntity, HttpServletRequest request) {
//        String customId = oConvertUtils.getString(request.getParameter("customId"));
//        MzyCustomEntity mzyCustomEntity=systemService.getEntity(MzyCustomEntity.class,customId);
//        Mzy_xsprintEntity t = systemService.get(Mzy_xsprintEntity.class, mzy_xsprint.getId());
//        try {
//            MyBeanUtils.copyBeanNotNull2Bean(mzy_xsprint, t);
////            systemService.saveOrUpdate(t);
////            systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
//        } catch (Exception e) {
//            e.printStackTrace();
//            message = "销售开单更新失败";
//        }
        String sqxdId = oConvertUtils.getString(request.getParameter("sqxdId"));
        mzycpkcsqEntity = systemService.getEntity(MzycpkcsqEntity.class, sqxdId);
//        List<Mzysqxd> mzysqxdList = systemService.findByProperty(Mzysqxd.class, "mzycpkcsqEntity.id", mzycpkcsqEntity.getId());
//        if (mzysqxdList.size() == 0) {
//            systemService.delete(mzycpkcsqEntity);
//            mutiLangService.setsqbhIdNum();
//        }
        AjaxJson j = new AjaxJson();
        j.setMsg("库存申请保存成功");
        return j;
    }

    @RequestMapping(params = "saveSelect")
    @ResponseBody
    public AjaxJson saveSelect(MzycpkcsqEntity mzycpkcsqEntity, HttpServletRequest request) {
        String ids = oConvertUtils.getString(request.getParameter("ids"));
        String sqxdId = oConvertUtils.getString(request.getParameter("sqxdId"));
        String sqdate = oConvertUtils.getString(request.getParameter("sqdate"));
        String note = oConvertUtils.getString(request.getParameter("note"));
        String pfdate = oConvertUtils.getString(request.getParameter("pfdate"));
        String daodadate = oConvertUtils.getString(request.getParameter("daodadate"));
        String fhdate = oConvertUtils.getString(request.getParameter("fhdate"));
        mzycpkcsqEntity = systemService.getEntity(MzycpkcsqEntity.class, sqxdId);
        List<Mzysqxd> mzysqxdList = systemService.findByProperty(Mzysqxd.class, "mzycpkcsqEntity.id", mzycpkcsqEntity.getId());
        systemService.deleteAllEntitie(mzysqxdList);
        List<String> idsList = new ArrayList<String>();
        idsList = extractIdListByComma(ids);
        AjaxJson j = new AjaxJson();
        if (!CollectionUtils.isEmpty(idsList)) {
            for (int i = 0; i < idsList.size(); i++) {
                String pid = idsList.get(i);
                if (pid.length() > 30) {
                    MzyProductEntity mzyProductEntity = systemService.getEntity(MzyProductEntity.class, pid);
                    if (mzyProductEntity != null) {
                        Mzysqxd mzysqxd = new Mzysqxd();
                        mzysqxd.setMzyProductEntity(mzyProductEntity);
                        String nums = idsList.get(i + 2);
                        mzysqxd.setNums(nums);
//                        String price = idsList.get(i + 1);
//                        double pr = Double.valueOf(price);
//                        mzy_xiaoshouEntity.setPrice(BigDecimal.valueOf(pr));
                        mzysqxd.setMzycpkcsqEntity(mzycpkcsqEntity);
                        systemService.save(mzysqxd);
                    }
                }
            }
            mzycpkcsqEntity.setNote(note);
            mzycpkcsqEntity.setSqdate(DateUtils.str2Date(sqdate, DateUtils.datetimeFormat));
            mzycpkcsqEntity.setPfdate(DateUtils.str2Date(pfdate, DateUtils.datetimeFormat));
            mzycpkcsqEntity.setDaodadate(DateUtils.str2Date(daodadate, DateUtils.datetimeFormat));
            mzycpkcsqEntity.setFhdate(DateUtils.str2Date(fhdate, DateUtils.datetimeFormat));
//            MzyCustomEntity mzyCustomEntity = mzy_xsprint.getMzyCustomEntity();
//            TSUserOrg tsUserOrg = systemService.findUniqueByProperty(TSUserOrg.class, "tsUser.id", mzyCustomEntity.getId());
//            String dname = tsUserOrg.getTsDepart().getDepartname();
//            if (!dname.endsWith(ClientManager.getInstance().getClient().getUser().getCurrentDepart().getDepartname())) {
//                tsUserOrg.setTsDepart(ClientManager.getInstance().getClient().getUser().getCurrentDepart());
//                systemService.updateEntitie(tsUserOrg);
//                //            mzy_xsprint.setTsDepart(ClientManager.getInstance().getClient().getUser().getCurrentDepart());
//            }

//            mzy_xsprint.setRealTotal(BigDecimal.valueOf(Double.valueOf(realTotal)));
//            mzy_xsprint.setIsOK("Y");
            systemService.saveOrUpdate(mzycpkcsqEntity);
            j.setMsg("保存成功");
        } else {
            mzycpkcsqEntity.setIsDelete("Y");
            systemService.saveOrUpdate(mzycpkcsqEntity);
//            systemService.delete(mzycpkcsqEntity);
            j.setSuccess(false);
            j.setMsg("删除成功");
        }
        return j;
    }

//    @RequestMapping(params = "selectProductDatagrid")
//    public void selectDatagrid(MzyProductEntity mzyProductEntity,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
//        CriteriaQuery cq = new CriteriaQuery(MzyProductEntity.class, dataGrid);
//        //查询条件组装器
//        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
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
//        String sqxdId = oConvertUtils.getString(request.getParameter("sqxdId"));
//        MzycpkcsqEntity mzycpkcsqEntity=systemService.getEntity(MzycpkcsqEntity.class, sqxdId);
//        List<Mzysqxd> mzysqxdList = systemService.findByProperty(Mzysqxd.class, "mzycpkcsqEntity.id", mzycpkcsqEntity.getId());
//        List<String> productIds = new ArrayList<String>();
//        for (Mzysqxd mzysqxd : mzysqxdList) {
//            productIds.add(mzysqxd.getMzyProductEntity().getId());
//        }
////        productIds.add(mzy_xsprint.getId());
//        // 获取 当前组织机构的用户信息
//        if (!CollectionUtils.isEmpty(productIds)) {
//            CriteriaQuery subCq = new CriteriaQuery(MzyKuCunEntity.class);
//            subCq.setProjection(Property.forName("id"));
//            subCq.in("mzyProductEntity.id", productIds.toArray());
//            subCq.add();
//
//            cq.add(Property.forName("id").notIn(subCq.getDetachedCriteria()));
//        }
//        // 获取 当前组织机构的用户信息
////        CriteriaQuery subCq = new CriteriaQuery(Mzy_xiaoshouEntity.class);
////        subCq.setProjection(Property.forName("mzyProductEntity.id"));
////        subCq.eq("mzy_xsprintEntity.id", mzy_xsprint.getId());
////        subCq.add();
//
//        cq.add();
//
//        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyKuCun, request.getParameterMap());
//        this.systemService.getDataGridReturn(cq, true);
//        for (Object o : dataGrid.getResults()) {
//            if (o instanceof MzyKuCunEntity) {
//                MzyKuCunEntity mzyKuCunEntity = (MzyKuCunEntity) o;
//                Date dd=new Date();
//                List<MzycuxiaoEntity> mzycuxiaoEntityList=systemService.findHql("from MzycuxiaoEntity cx " +
//                        "where cx.mzyProductEntity.id= ? and sdate< ? and edate > ? ",mzyKuCunEntity.getMzyProductEntity().getId(),dd,dd);
//                if(mzycuxiaoEntityList.size()>0){
//                    mzyKuCunEntity.setIsCx("促销产品");
//                }else{
//                    mzyKuCunEntity.setIsCx("");
//                }
//                mzyKuCunEntity.setName(mzyKuCunEntity.getMzyProductEntity().getName());
//                systemService.saveOrUpdate(mzyKuCunEntity);
//            }
//        }
//        IconImageUtil.convertKcDataGrid(dataGrid, request, systemService);
//        this.mzyKuCunService.getDataGridReturn(cq, true);
//        TagUtil.datagrid(response, dataGrid);
//    }
}
