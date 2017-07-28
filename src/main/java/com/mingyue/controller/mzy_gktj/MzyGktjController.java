package com.mingyue.controller.mzy_gktj;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.mzy_gktj.MzyGktjOrg;
import org.apache.log4j.Logger;
import org.hibernate.criterion.Property;
import org.jeecgframework.core.common.exception.BusinessException;
import org.jeecgframework.core.util.DateUtils;
import org.jeecgframework.core.util.oConvertUtils;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.web.system.manager.ClientManager;
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
import org.jeecgframework.core.util.StringUtil;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.core.util.MyBeanUtils;

import com.mingyue.entity.mzy_gktj.MzyGktjEntity;
import com.mingyue.service.mzy_gktj.MzyGktjServiceI;

/**
 * @author Tony
 * @version V1.0
 * @Title: Controller
 * @Description: 顾客数量统计
 * @date 2015-08-20 12:17:28
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzyGktjController")
public class MzyGktjController extends BaseController {
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(MzyGktjController.class);

    @Autowired
    private MzyGktjServiceI mzyGktjService;


    /**
     * 顾客数量统计列表 页面跳转
     *
     * @return
     */
    @RequestMapping(params = "mzyGktj")
    public ModelAndView mzyGktj(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/mzy_gktj/mzyGktjList");
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
    public void datagrid(MzyGktjEntity mzyGktj, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(MzyGktjEntity.class, dataGrid);
        //查询条件组装器
//        mzyGktj.setCreateDate(null);
//        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyGktj, request.getParameterMap());
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
            }

        } else {
//            String orgIds = request.getParameter("orgIds");
            orgIdList = extractIdListByComma(orgId);
        }

        // 获取 当前组织机构的用户信息
        if (!CollectionUtils.isEmpty(orgIdList)) {
            CriteriaQuery subCq = new CriteriaQuery(MzyGktjOrg.class);
            subCq.setProjection(Property.forName("mzyGktjEntity.id"));
            subCq.in("tsDepart.id", orgIdList.toArray());
            subCq.add();

            cq.add(Property.forName("id").in(subCq.getDetachedCriteria()));
        }
        String tjdate = oConvertUtils.getString(request.getParameter("createDate"));
        Date dd = new Date();
        if (tjdate != null && tjdate.length() > 0) {
            dd = DateUtils.str2Date(tjdate, DateUtils.date_sdf);
            try {
                String query_createtime_begin = DateUtils.date2Str(dd, DateUtils.time_sdf_s);
                String query_createtime_end = DateUtils.date2Str(dd, DateUtils.time_sdf_e);

                if (StringUtil.isNotEmpty(query_createtime_begin)) {
                    cq.ge("createDate", DateUtils.datetimeFormat.parse(query_createtime_begin));
                }
                if (StringUtil.isNotEmpty(query_createtime_end))
                    cq.le("createDate", DateUtils.datetimeFormat.parse(query_createtime_end));
            } catch (Exception e) {
                throw new BusinessException(e.getMessage());
            }
        }
        cq.addOrder("createDate", SortDirection.asc);
        cq.notEq("isDelete","Y");
        cq.add();
        this.mzyGktjService.getDataGridReturn(cq, true);
        List<MzyGktjEntity> mzyGktjEntityList=new ArrayList<MzyGktjEntity>();
        int zxgks=0;
        int tygks=0;
        int kflcgks=0;
        int yhlcgks=0;
        int lsgks=0;
        for (Object o : dataGrid.getResults()) {
            if (o instanceof MzyGktjEntity) {
                MzyGktjEntity cfe = (MzyGktjEntity) o;
                if (cfe.getId() != null && !"".equals(cfe.getId())) {
                    MzyGktjOrg mzyGktjOrg = systemService.findUniqueByProperty(MzyGktjOrg.class, "mzyGktjEntity.id", cfe.getId());
                    if (mzyGktjOrg != null)
                        cfe.setShopName(mzyGktjOrg.getTsDepart().getDepartname());
                }
                zxgks+=Integer.parseInt(cfe.getZxgks());
                tygks+=Integer.parseInt(cfe.getTygks());
                kflcgks+=Integer.parseInt(cfe.getKflcgks());
                yhlcgks+=Integer.parseInt(cfe.getYhlcgks());
                lsgks+=Integer.parseInt(cfe.getLsgks());
                mzyGktjEntityList.add(cfe);
                systemService.saveOrUpdate(cfe);
            }
        }
        MzyGktjEntity mzyGktjEntity = new MzyGktjEntity();
        mzyGktjEntity.setShopName("合计");
        mzyGktjEntity.setZxgks(String.valueOf(zxgks));
        mzyGktjEntity.setTygks(String.valueOf(tygks));
        mzyGktjEntity.setKflcgks(String.valueOf(kflcgks));
        mzyGktjEntity.setYhlcgks(String.valueOf(yhlcgks));
        mzyGktjEntity.setLsgks(String.valueOf(lsgks));
        mzyGktjEntityList.add(mzyGktjEntity);
        dataGrid.setResults(mzyGktjEntityList);
        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * 删除顾客数量统计
     *
     * @return
     */
    @RequestMapping(params = "del")
    @ResponseBody
    public AjaxJson del(MzyGktjEntity mzyGktj, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        mzyGktj = systemService.getEntity(MzyGktjEntity.class, mzyGktj.getId());
        List<MzyGktjOrg> mzyGktjOrgList = systemService.findByProperty(MzyGktjOrg.class, "mzyGktjEntity.id", mzyGktj.getId());
        systemService.deleteAllEntitie(mzyGktjOrgList);
        message = "顾客数量统计删除成功";
        mzyGktj.setIsDelete("Y");
        systemService.saveOrUpdate(mzyGktj);
//        mzyGktjService.delete(mzyGktj);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(message);
        return j;
    }

    private void saveGktjOrg(HttpServletRequest request, MzyGktjEntity mzyGktj) {
        MzyGktjOrg gktjOrg1=systemService.findUniqueByProperty(MzyGktjOrg.class,"mzyGktjEntity.id",mzyGktj.getId());
        if(gktjOrg1==null){
            String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
            TSDepart tsDepart = systemService.findUniqueByProperty(TSDepart.class, "id", orgId);
            tsDepart.setId(orgId);

            MzyGktjOrg gktjOrg = new MzyGktjOrg();
            gktjOrg.setMzyGktjEntity(mzyGktj);
            gktjOrg.setTsDepart(tsDepart);
            systemService.save(gktjOrg);
        }

    }

    /**
     * 添加顾客数量统计
     *
     * @param
     * @return
     */
    @RequestMapping(params = "save")
    @ResponseBody
    public AjaxJson save(MzyGktjEntity mzyGktj, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        if (StringUtil.isNotEmpty(mzyGktj.getId())) {
            message = "顾客数量统计更新成功";
            MzyGktjEntity t = mzyGktjService.get(MzyGktjEntity.class, mzyGktj.getId());
            try {
//                systemService.executeSql("delete from mzy_gktj_org where gktj_id=?", t.getId());
                saveGktjOrg(request, t);
                MyBeanUtils.copyBeanNotNull2Bean(mzyGktj, t);
                mzyGktjService.saveOrUpdate(t);

                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "顾客数量统计更新失败";
            }
        } else {
            message = "顾客数量统计添加成功";
            mzyGktjService.save(mzyGktj);
            saveGktjOrg(request, mzyGktj);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    /**
     * 顾客数量统计列表页面跳转
     *
     * @return
     */
    @RequestMapping(params = "addorupdate")
    public ModelAndView addorupdate(MzyGktjEntity mzyGktj, HttpServletRequest req) {
        if (StringUtil.isNotEmpty(mzyGktj.getId())) {
            mzyGktj = mzyGktjService.getEntity(MzyGktjEntity.class, mzyGktj.getId());
            req.setAttribute("mzyGktjPage", mzyGktj);
        }
        return new ModelAndView("com/mingyue/mzy_gktj/mzyGktj");
    }
}
