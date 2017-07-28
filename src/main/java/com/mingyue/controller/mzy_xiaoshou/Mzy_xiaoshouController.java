package com.mingyue.controller.mzy_xiaoshou;

import java.math.BigDecimal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.mzy_kc.MzyKuCunEntity;
import com.mingyue.entity.mzy_product.MzyProductEntity;
import com.mingyue.entity.mzy_xsprint.Mzy_xsprintEntity;
import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.apache.log4j.Logger;
import org.jeecgframework.core.util.oConvertUtils;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.web.system.service.MutiLangServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
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

import com.mingyue.entity.mzy_xiaoshou.Mzy_xiaoshouEntity;
import com.mingyue.service.mzy_xiaoshou.Mzy_xiaoshouServiceI;

/**
 * @author Tony
 * @version V1.0
 * @Title: Controller
 * @Description: 销售表
 * @date 2015-09-07 10:37:42
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzy_xiaoshouController")
public class Mzy_xiaoshouController extends BaseController {
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(Mzy_xiaoshouController.class);

    @Autowired
    private Mzy_xiaoshouServiceI mzy_xiaoshouService;
    @Autowired
    private MutiLangServiceI mutiLangService;

    /**
     * 销售表列表 页面跳转
     *
     * @return
     */
    @RequestMapping(params = "mzy_xiaoshou")
    public ModelAndView mzy_xiaoshou(HttpServletRequest request) {
//        String xsprintId= oConvertUtils.getString(request.getParameter("xsprintId"));
//        request.setAttribute("xsprintId", xsprintId);
        return new ModelAndView("com/mingyue/mzy_xiaoshou/mzy_xiaoshouList");
    }

    @RequestMapping(params = "xiaoshouByid")
    public ModelAndView xiaoshouByid(HttpServletRequest request) {
//        String customId= oConvertUtils.getString(request.getParameter("customId"));
//        request.setAttribute("customId", customId);
//        return new ModelAndView("com/mingyue/mzy_xiaoshou/xiaoshouListByid");
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_xiaoshou/xiaoshouListByid");
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        mv.addObject("customId", customId);
        return mv;
    }
    @RequestMapping(params = "mzyKcList")
    public ModelAndView mzyKcList(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/mzy_xiaoshou/mzyKuCunList_xs");
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
    public void datagrid(Mzy_xiaoshouEntity mzy_xiaoshou, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {

        CriteriaQuery cq = new CriteriaQuery(Mzy_xiaoshouEntity.class, dataGrid);
        //查询条件组装器
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        if (xsprintId != null && xsprintId.length() > 30) {
            cq.eq("mzyCustomEntity.id", xsprintId);
        }
        cq.notEq("isDelete","Y");
        cq.addOrder("createDate", SortDirection.desc);
        cq.add();

        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzy_xiaoshou, request.getParameterMap());
        this.mzy_xiaoshouService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if(o instanceof Mzy_xiaoshouEntity){
                Mzy_xiaoshouEntity mzy_xiaoshouEntity=(Mzy_xiaoshouEntity)o;

                if(mzy_xiaoshouEntity.getMzyProductEntity()!=null) {
                    mzy_xiaoshouEntity.setNums(mzy_xiaoshouEntity.getNums()+" "+mzy_xiaoshouEntity.getMzyProductEntity().getDw());
//                    mzy_xiaoshouEntity.setProductName(mzy_xiaoshouEntity.getMzyProductEntity().getName());
//                    systemService.saveOrUpdate(mzy_xiaoshouEntity);
                }
            }
        }
        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * 删除销售表
     *
     * @return
     */
    @RequestMapping(params = "del")
    @ResponseBody
    public AjaxJson del(Mzy_xiaoshouEntity mzy_xiaoshou, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzy_xiaoshou = systemService.getEntity(Mzy_xiaoshouEntity.class, mzy_xiaoshou.getId());
        message = "销售表删除成功";
        mzy_xiaoshou.setIsDelete("Y");
        systemService.saveOrUpdate(mzy_xiaoshou);
//        mzy_xiaoshouService.delete(mzy_xiaoshou);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(message);
        return j;
    }


    /**
     * 添加销售表
     *
     * @param
     * @return
     */
    @RequestMapping(params = "save")
    @ResponseBody
    public AjaxJson save(Mzy_xiaoshouEntity mzy_xiaoshou, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        String productids = oConvertUtils.getString(request.getParameter("productids"));
        String[] productid = productids.split(",");
        MzyProductEntity mzyProductEntity = null;
        for (int i = 0; i < 1; i++) {
            if(productid[i]!=null&&productid[i].length()>30){
                MzyKuCunEntity mzyKuCunEntity=systemService.getEntity(MzyKuCunEntity.class, productid[i]);
                mzyProductEntity = mzyKuCunEntity.getMzyProductEntity();
            }
        }
        Mzy_xsprintEntity mzy_xsprintEntity = null;
        if (xsprintId != null && xsprintId.length() > 30) {
            mzy_xsprintEntity = systemService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        }
        if (StringUtil.isNotEmpty(mzy_xiaoshou.getId())) {
            message = "销售表更新成功";
            Mzy_xiaoshouEntity t = mzy_xiaoshouService.get(Mzy_xiaoshouEntity.class, mzy_xiaoshou.getId());
            try {
                MyBeanUtils.copyBeanNotNull2Bean(mzy_xiaoshou, t);
                t.setMzy_xsprintEntity(mzy_xsprintEntity);
                if (mzyProductEntity != null) {
                    t.setMzyProductEntity(mzyProductEntity);
                }
                if(mzy_xiaoshou.getDiscount()==null||mzy_xiaoshou.getDiscount().length()==0){
                    if(t.getMzy_xsprintEntity().getMzyCustomEntity().getCustomType().endsWith("1")){
                        t.setDiscount(mutiLangService.getMapLang("mingyue.goldCardDiscount"));
                    }else {
                        t.setDiscount(mutiLangService.getMapLang("mingyue.putongCardDiscount"));
                    }
                }
                if(mzy_xiaoshou.getNums()==null||mzy_xiaoshou.getNums().length()==0){
                    t.setNums("1");
                }
                if(mzy_xiaoshou.getPrice()==null||mzy_xiaoshou.getPrice().toString().length()==0||mzy_xiaoshou.getPrice().floatValue()==0.0){
                    float dis=Float.valueOf(t.getDiscount())/100.0f;
                    float pp=t.getMzyProductEntity().getPrice().floatValue()*dis;
                    t.setPrice(BigDecimal.valueOf(pp));
                }
                mzy_xiaoshouService.saveOrUpdate(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "销售表更新失败";
            }
        } else {
            message = "销售表添加成功";
            mzy_xiaoshou.setMzy_xsprintEntity(mzy_xsprintEntity);
            mzy_xiaoshou.setMzyProductEntity(mzyProductEntity);
            if(mzy_xiaoshou.getDiscount()==null||mzy_xiaoshou.getDiscount().length()==0){
                if(mzy_xiaoshou.getMzy_xsprintEntity().getMzyCustomEntity().getCustomType().endsWith("1")){
                    mzy_xiaoshou.setDiscount(mutiLangService.getMapLang("mingyue.goldCardDiscount"));
                }else {
                    mzy_xiaoshou.setDiscount(mutiLangService.getMapLang("mingyue.putongCardDiscount"));
                }
            }
            if(mzy_xiaoshou.getNums()==null||mzy_xiaoshou.getNums().length()==0){
                mzy_xiaoshou.setNums("1");
            }
            if(mzy_xiaoshou.getPrice()==null||mzy_xiaoshou.getPrice().toString().length()==0||mzy_xiaoshou.getPrice().floatValue()==0.0){
                float dis=Float.valueOf(mzy_xiaoshou.getDiscount())/100.0f;
                float pp=mzy_xiaoshou.getMzyProductEntity().getPrice().floatValue()*dis;
                mzy_xiaoshou.setPrice(BigDecimal.valueOf(pp));
            }
            mzy_xiaoshouService.save(mzy_xiaoshou);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    /**
     * 销售表列表页面跳转
     *
     * @return
     */
    @RequestMapping(params = "addorupdate")
    public ModelAndView addorupdate(Mzy_xiaoshouEntity mzy_xiaoshou, HttpServletRequest req) {
        String xsprintId = oConvertUtils.getString(req.getParameter("xsprintId"));
        req.setAttribute("xsprintId", xsprintId);
        if (StringUtil.isNotEmpty(mzy_xiaoshou.getId())) {
            mzy_xiaoshou = mzy_xiaoshouService.getEntity(Mzy_xiaoshouEntity.class, mzy_xiaoshou.getId());
            req.setAttribute("mzy_xiaoshouPage", mzy_xiaoshou);
        }
        return new ModelAndView("com/mingyue/mzy_xiaoshou/mzy_xiaoshou");
    }
}
