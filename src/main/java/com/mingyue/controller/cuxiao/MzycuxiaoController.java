package com.mingyue.controller.cuxiao;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.mzy_product.MzyProductEntity;
import org.apache.log4j.Logger;
import org.jeecgframework.core.util.oConvertUtils;
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

import com.mingyue.entity.cuxiao.MzycuxiaoEntity;
import com.mingyue.service.cuxiao.MzycuxiaoServiceI;

/**
 * @author Tony
 * @version V1.0
 * @Title: Controller
 * @Description: 产品促销
 * @date 2015-10-20 06:58:59
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzycuxiaoController")
public class MzycuxiaoController extends BaseController {
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(MzycuxiaoController.class);

    @Autowired
    private MzycuxiaoServiceI mzycuxiaoService;


    /**
     * 产品促销列表 页面跳转
     *
     * @return
     */
    @RequestMapping(params = "mzycuxiao")
    public ModelAndView mzycuxiao(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/cuxiao/mzycuxiaoList");
    }

    @RequestMapping(params = "mzyProduct_cx")
    public ModelAndView mzyKcList(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/cuxiao/mzyProduct_cx");
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
    public void datagrid(MzycuxiaoEntity mzycuxiao, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(MzycuxiaoEntity.class, dataGrid);
        //查询条件组装器
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzycuxiao, request.getParameterMap());
        cq.notEq("isDelete","Y");
        cq.add();

        this.mzycuxiaoService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if (o instanceof MzycuxiaoEntity) {
                MzycuxiaoEntity mzycuxiaoEntity = (MzycuxiaoEntity) o;
                int dis=(int)(Double.valueOf(mzycuxiaoEntity.getDiscount())*100.0)/100;
                mzycuxiaoEntity.setDiscount(String.valueOf(dis)+" %");
            }
        }
        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * 删除产品促销
     *
     * @return
     */
    @RequestMapping(params = "del")
    @ResponseBody
    public AjaxJson del(MzycuxiaoEntity mzycuxiao, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzycuxiao = systemService.getEntity(MzycuxiaoEntity.class, mzycuxiao.getId());
        message = "产品促销删除成功";
        mzycuxiao.setIsDelete("Y");
        systemService.saveOrUpdate(mzycuxiao);
//        mzycuxiaoService.delete(mzycuxiao);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(message);
        return j;
    }


    /**
     * 添加产品促销
     *
     * @param
     * @return
     */
    @RequestMapping(params = "save")
    @ResponseBody
    public AjaxJson save(MzycuxiaoEntity mzycuxiao, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String productids = oConvertUtils.getString(request.getParameter("productids"));
        String pid[] = productids.split(",");
        MzyProductEntity mzyProductEntity = null;
        if (pid[0].length() > 30) {
            mzyProductEntity = systemService.getEntity(MzyProductEntity.class, pid[0]);
            mzycuxiao.setMzyProductEntity(mzyProductEntity);
        }
        if(mzycuxiao.getDisPrice().length()>0){
            double dis=100.0*Double.valueOf(mzycuxiao.getDisPrice())/Double.valueOf(mzycuxiao.getPrice());
            mzycuxiao.setDiscount(String.valueOf(dis));
        }
        if (StringUtil.isNotEmpty(mzycuxiao.getId())) {
            message = "产品促销更新成功";
            MzycuxiaoEntity t = mzycuxiaoService.get(MzycuxiaoEntity.class, mzycuxiao.getId());
            try {
                MyBeanUtils.copyBeanNotNull2Bean(mzycuxiao, t);
                mzycuxiaoService.saveOrUpdate(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "产品促销更新失败";
            }
        } else {
            message = "产品促销添加成功";

            mzycuxiaoService.save(mzycuxiao);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    /**
     * 产品促销列表页面跳转
     *
     * @return
     */
    @RequestMapping(params = "addorupdate")
    public ModelAndView addorupdate(MzycuxiaoEntity mzycuxiao, HttpServletRequest req) {
        if (StringUtil.isNotEmpty(mzycuxiao.getId())) {
            mzycuxiao = mzycuxiaoService.getEntity(MzycuxiaoEntity.class, mzycuxiao.getId());
            req.setAttribute("mzycuxiaoPage", mzycuxiao);
        }
        return new ModelAndView("com/mingyue/cuxiao/mzycuxiao");
    }
}
