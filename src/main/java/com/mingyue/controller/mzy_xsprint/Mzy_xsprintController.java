package com.mingyue.controller.mzy_xsprint;

import com.mingyue.entity.cuxiao.MzycuxiaoEntity;
import com.mingyue.entity.mzy_kc.MzyKuCunEntity;
import com.mingyue.entity.mzy_product.MzyProductEntity;
import com.mingyue.entity.mzy_xiaoshou.Mzy_xiaoshouEntity;
import com.mingyue.entity.mzy_xsprint.Mzy_xsprintEntity;
import com.mingyue.entity.mzy_zxda.Mzy_zxdaEntity;
import com.mingyue.entity.mzycustom.MzyCustomEntity;
import com.mingyue.service.mzy_xsprint.Mzy_xsprintServiceI;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;
import org.jeecgframework.core.common.controller.BaseController;
import org.jeecgframework.core.common.hibernate.qbc.CriteriaQuery;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.core.common.model.json.DataGrid;
import org.jeecgframework.core.constant.Globals;
import org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil;
import org.jeecgframework.core.util.DateUtils;
import org.jeecgframework.core.util.MyBeanUtils;
import org.jeecgframework.core.util.StringUtil;
import org.jeecgframework.core.util.oConvertUtils;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.web.system.manager.ClientManager;
import org.jeecgframework.web.system.pojo.base.Client;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.jeecgframework.web.system.pojo.base.TSUserOrg;
import org.jeecgframework.web.system.service.MutiLangServiceI;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.web.system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Scope("prototype")
@Controller
@RequestMapping({"/mzy_xsprintController"})
public class Mzy_xsprintController
        extends BaseController
{
    private static final Logger logger = Logger.getLogger(Mzy_xsprintController.class);
    @Autowired
    private Mzy_xsprintServiceI mzy_xsprintService;
    @Autowired
    private MutiLangServiceI mutiLangService;
    @Autowired
    private UserService userService;

    @RequestMapping(params={"mzy_xsprint"})
    public ModelAndView mzy_xsprint(HttpServletRequest request)
    {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_xsprint/mzy_xsprintList");
        request.setAttribute("isAdmin", Integer.valueOf(this.userService.isAdmin()));
        request.setAttribute("departIsNotOne", Integer.valueOf(this.userService.getDepart()));
        return mv;
    }

    @RequestMapping(params={"xiaoshouByid"})
    public ModelAndView xiaoshouByid(HttpServletRequest request)
    {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_xsprint/xiaoshouListByid");
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        mv.addObject("xsprintId", xsprintId);

        return mv;
    }

    @RequestMapping(params={"xfListByCustom"})
    public ModelAndView xfListByCustom(HttpServletRequest request)
    {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_xsprint/mzy_xsprintListCustom");

        String customId = oConvertUtils.getString(request.getParameter("customId"));
        request.setAttribute("isAdmin", Integer.valueOf(this.userService.isAdmin()));
        request.setAttribute("customId", customId);
        return mv;
    }

    @RequestMapping(params={"zxdabyCustom"})
    public ModelAndView zxdabyCustom(HttpServletRequest request)
    {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_xsprint/mzy_zxdaListCustom");

        String customId = oConvertUtils.getString(request.getParameter("customId"));
        request.setAttribute("isAdmin", Integer.valueOf(this.userService.isAdmin()));
        request.setAttribute("customId", customId);
        return mv;
    }

    @RequestMapping(params={"zxdaList"})
    public ModelAndView zxdaList(HttpServletRequest request)
    {
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_xsprint/mzy_zxdaList");

        request.setAttribute("isAdmin", Integer.valueOf(this.userService.isAdmin()));
        return mv;
    }

    @RequestMapping(params={"xfPrintByCustom"})
    public ModelAndView xfPrintByCustom(MzyCustomEntity mzyCustomEntity, HttpServletRequest request)
    {
        String del = request.getParameter("del");
        if (del != null) {
            return null;
        }
        ModelAndView mv = new ModelAndView("com/mingyue/mzy_custom/xfListByCustom");

        mzyCustomEntity = (MzyCustomEntity)this.systemService.getEntity(MzyCustomEntity.class, mzyCustomEntity.getId());

        Mzy_xsprintEntity mzy_xsprintEntity = new Mzy_xsprintEntity();
        String bm = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getDepartCode();
        String idDanNum = bm + this.mutiLangService.getIdNum();
        mzy_xsprintEntity.setIdDanNum(idDanNum);
        mzy_xsprintEntity.setIscard("1");
        mzy_xsprintEntity.setIsPrint(1);
        mzy_xsprintEntity.setIsOK("N");
        mzy_xsprintEntity.setIsDelete("Y");
        mzy_xsprintEntity.setTsDepart(ClientManager.getInstance().getClient().getUser().getCurrentDepart());
        mzy_xsprintEntity.setRealTotal(BigDecimal.valueOf(0.0D));
        mzy_xsprintEntity.setTsUser(ClientManager.getInstance().getClient().getUser());
        mzy_xsprintEntity.setMzyCustomEntity(mzyCustomEntity);
        this.systemService.save(mzy_xsprintEntity);

        mv.addObject("mzy_xsprintEntity", mzy_xsprintEntity);
        List<Mzy_xiaoshouEntity> columns = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", mzy_xsprintEntity.getId());
        request.setAttribute("columns", columns);
        request.setAttribute("customId", mzyCustomEntity.getId());
        return mv;
    }

    @RequestMapping(params={"datagrid"})
    public void datagrid(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid)
    {
        String customId = oConvertUtils.getString(request.getParameter("customId"));

        CriteriaQuery cq = new CriteriaQuery(Mzy_xsprintEntity.class, dataGrid);

        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();

        cq.addOrder("createDate", SortDirection.desc);
        if ((customId != null) && (customId.length() > 30)) {
            cq.eq("mzyCustomEntity.id", customId);
        }
        String orgName = request.getParameter("departname");
        if ((orgName != null) && (orgName.length() > 1))
        {
            TSDepart tsDepart = (TSDepart)this.systemService.findUniqueByProperty(TSDepart.class, "departname", orgName);
            if (tsDepart != null) {
                cq.eq("tsDepart.id", tsDepart.getId());
            }
        }
        else
        {
            int a = this.userService.getDepart();
            if ((a == 1) || (a == 2)) {
                cq.eq("tsDepart.id", ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId());
            }
        }
        cq.eq("isOK", "Y");
        cq.notEq("isDelete", "Y");
        cq.add();
        HqlGenerateUtil.installHql(cq, mzy_xsprint, request.getParameterMap());
        this.mzy_xsprintService.getDataGridReturn(cq, true);
        for (Object o : dataGrid.getResults()) {
            if ((o instanceof Mzy_xsprintEntity))
            {
                Mzy_xsprintEntity mzyXsprintEntity = (Mzy_xsprintEntity)o;
                List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", mzyXsprintEntity.getId());
                if (mzy_xiaoshouEntityList.size() == 0)
                {
                    this.systemService.delete(mzyXsprintEntity);
                    dataGrid.getResults().remove(o);
                }
                else
                {
                    float total = 0.0F;
                    for (Mzy_xiaoshouEntity mzy_xiaoshouEntity : mzy_xiaoshouEntityList)
                    {
                        float price = 0.0F;
                        try
                        {
                            price = Integer.parseInt(mzy_xiaoshouEntity.getNums()) * mzy_xiaoshouEntity.getPrice().floatValue();
                        }
                        catch (NumberFormatException e)
                        {
                            e.printStackTrace();
                        }
                        total += price;
                    }
                    mzyXsprintEntity.setTotal(BigDecimal.valueOf(total));
                    if (mzyXsprintEntity.getTsDepart() == null) {
                        mzyXsprintEntity.setTsDepart(ClientManager.getInstance().getClient().getUser().getCurrentDepart());
                    }
                    this.systemService.saveOrUpdate(mzyXsprintEntity);
                }
            }
        }
        TagUtil.datagrid(response, dataGrid);
    }

    @RequestMapping(params={"xsdatagrid"})
    public void xsdatagrid(Mzy_xiaoshouEntity mzy_xiaoshou, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid)
    {
        CriteriaQuery cq = new CriteriaQuery(Mzy_xiaoshouEntity.class, dataGrid);

        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        if ((xsprintId != null) && (xsprintId.length() > 30)) {
            cq.eq("mzy_xsprintEntity.id", xsprintId);
        }
        cq.notEq("isDelete", "Y");
        cq.addOrder("createDate", SortDirection.desc);
        cq.add();
        HqlGenerateUtil.installHql(cq, mzy_xiaoshou, request.getParameterMap());
        this.mzy_xsprintService.getDataGridReturn(cq, true);
        Mzy_xsprintEntity mzyXsprintEntity = (Mzy_xsprintEntity)this.systemService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        for (Object o : dataGrid.getResults()) {
            if ((o instanceof Mzy_xiaoshouEntity))
            {
                Mzy_xiaoshouEntity mzy_xiaoshouEntity = (Mzy_xiaoshouEntity)o;
                if (mzy_xiaoshouEntity.getMzyProductEntity() != null)
                {
                    float price = 0.0F;
                    try
                    {
                        price = Integer.parseInt(mzy_xiaoshouEntity.getNums()) * mzy_xiaoshouEntity.getPrice().floatValue();
                    }
                    catch (NumberFormatException e)
                    {
                        e.printStackTrace();
                    }
                    mzy_xiaoshouEntity.setPrice(BigDecimal.valueOf(price));
                    mzy_xiaoshouEntity.setNums(mzy_xiaoshouEntity.getNums() + " " + mzy_xiaoshouEntity.getMzyProductEntity().getDw());
                }
            }
        }
        TagUtil.datagrid(response, dataGrid);
    }

    @RequestMapping(params={"getXiaoshouList"})
    @ResponseBody
    public List<Object> getXiaoshouList(HttpServletRequest request)
    {
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));

        List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", xsprintId);
        List<Object> map = new ArrayList();
        for (Mzy_xiaoshouEntity mzy_xiaoshouEntity : mzy_xiaoshouEntityList)
        {
            Map<String, String> ap = new HashMap();
            ap.put("id", mzy_xiaoshouEntity.getMzyProductEntity().getId());
            ap.put("productName", mzy_xiaoshouEntity.getMzyProductEntity().getName());
            ap.put("price", mzy_xiaoshouEntity.getPrice().toString());
            ap.put("nums", mzy_xiaoshouEntity.getNums());

            map.add(ap);
        }
        return map;
    }

    @RequestMapping(params={"mzyKuCunSelect"})
    @ResponseBody
    public AjaxJson mzyKuCunSelect(HttpServletRequest request)
    {
        AjaxJson j = new AjaxJson();
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        Mzy_xsprintEntity mzy_xsprint = (Mzy_xsprintEntity)this.systemService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        String ids = request.getParameter("ids");
        List<String> idsList = new ArrayList();
        idsList = extractIdListByComma(ids);
        if (!CollectionUtils.isEmpty(idsList)) {
            for (String pid : idsList)
            {
                Mzy_xiaoshouEntity mzy_xiaoshouEntity = new Mzy_xiaoshouEntity();

                MzyKuCunEntity mzyKuCunEntity = (MzyKuCunEntity)this.systemService.getEntity(MzyKuCunEntity.class, pid);
                Date dd = new Date();
                List<MzycuxiaoEntity> mzycuxiaoEntityList = this.systemService.findHql("from MzycuxiaoEntity cx where cx.mzyProductEntity.id= ? and sdate< ? and edate > ? and isDelete != ?", new Object[] { mzyKuCunEntity.getMzyProductEntity().getId(), dd, dd, "Y" });
                if (mzycuxiaoEntityList.size() > 0)
                {
                    if (((MzycuxiaoEntity)mzycuxiaoEntityList.get(0)).getDisPrice().length() > 0)
                    {
                        mzy_xiaoshouEntity.setPrice(BigDecimal.valueOf(Double.valueOf(((MzycuxiaoEntity)mzycuxiaoEntityList.get(0)).getDisPrice()).doubleValue()));
                        double dis = 100.0D * Double.valueOf(((MzycuxiaoEntity)mzycuxiaoEntityList.get(0)).getDisPrice()).doubleValue() / Double.valueOf(((MzycuxiaoEntity)mzycuxiaoEntityList.get(0)).getPrice()).doubleValue();
                        mzy_xiaoshouEntity.setDiscount(String.valueOf(dis));
                    }
                    else
                    {
                        double dis = Double.valueOf(((MzycuxiaoEntity)mzycuxiaoEntityList.get(0)).getDiscount()).doubleValue() / 100.0D;
                        mzy_xiaoshouEntity.setPrice(BigDecimal.valueOf(dis * Double.valueOf(((MzycuxiaoEntity)mzycuxiaoEntityList.get(0)).getPrice()).doubleValue()));
                        mzy_xiaoshouEntity.setDiscount(((MzycuxiaoEntity)mzycuxiaoEntityList.get(0)).getDiscount());
                    }
                }
                else
                {
                    if (mzyKuCunEntity.getMzyProductEntity().getDiscount() == null) {
                        mzyKuCunEntity.getMzyProductEntity().setDiscount("100");
                    }
                    double dis = Double.valueOf(mzyKuCunEntity.getMzyProductEntity().getDiscount()).doubleValue() / 100.0D;
                    dis *= Double.valueOf(mzyKuCunEntity.getMzyProductEntity().getPrice().toString()).doubleValue();
                    mzy_xiaoshouEntity.setPrice(BigDecimal.valueOf(Double.valueOf(String.valueOf(dis)).doubleValue()));
                    mzy_xiaoshouEntity.setDiscount(mzyKuCunEntity.getMzyProductEntity().getDiscount());
                }
                mzy_xiaoshouEntity.setMzyProductEntity(mzyKuCunEntity.getMzyProductEntity());
                mzy_xiaoshouEntity.setNums("1");
                mzy_xiaoshouEntity.setMzy_xsprintEntity(mzy_xsprint);
                this.systemService.save(mzy_xiaoshouEntity);
            }
        }
        this.message = "销售列表添加成功";

        j.setMsg(this.message);
        return j;
    }

    @RequestMapping(params={"delXsprint"})
    @ResponseBody
    public AjaxJson delXsprint(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request)
    {
        AjaxJson j = new AjaxJson();
        mzy_xsprint = (Mzy_xsprintEntity)this.systemService.getEntity(Mzy_xsprintEntity.class, mzy_xsprint.getId());
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", mzy_xsprint.getId());
        for (Mzy_xiaoshouEntity mzy_xiaoshouEntity : mzy_xiaoshouEntityList)
        {
            float price = 0.0F;
            try
            {
                if (mzy_xsprint.getIsPrint() == 0)
                {
                    List<MzyKuCunEntity> mzyKuCunEntityList = this.systemService.findHql("from MzyKuCunEntity k where k.mzyProductEntity.id=? ", new Object[] { mzy_xiaoshouEntity.getMzyProductEntity().getId() });
                    if (mzyKuCunEntityList.size() == 1)
                    {
                        MzyKuCunEntity mzyKuCunEntity = (MzyKuCunEntity)mzyKuCunEntityList.get(0);
                        int nums = Integer.parseInt(mzyKuCunEntity.getNums()) + Integer.parseInt(mzy_xiaoshouEntity.getNums());
                        mzyKuCunEntity.setNums(String.valueOf(nums));
                        this.systemService.saveOrUpdate(mzyKuCunEntity);
                    }
                }
            }
            catch (NumberFormatException e)
            {
                e.printStackTrace();
            }
        }
        this.systemService.deleteAllEntitie(mzy_xiaoshouEntityList);
        this.message = "顾客销售清单删除成功";
        mzy_xsprint.setIsDelete("Y");
        this.systemService.saveOrUpdate(mzy_xsprint);

        this.systemService.addLog(this.message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(this.message);
        return j;
    }

    @RequestMapping(params={"del"})
    @ResponseBody
    public AjaxJson del(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request)
    {
        AjaxJson j = new AjaxJson();
        mzy_xsprint = (Mzy_xsprintEntity)this.systemService.getEntity(Mzy_xsprintEntity.class, mzy_xsprint.getId());
        this.message = "顾客销售清单删除成功";
        mzy_xsprint.setIsDelete("Y");

        this.systemService.addLog(this.message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(this.message);
        return j;
    }

    @RequestMapping(params={"jfdhXs"})
    @ResponseBody
    public AjaxJson jfdhXs(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request)
    {
        AjaxJson j = new AjaxJson();
        mzy_xsprint = (Mzy_xsprintEntity)this.systemService.getEntity(Mzy_xsprintEntity.class, mzy_xsprint.getId());
        if (mzy_xsprint.getJfdh() != 1)
        {
            List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", mzy_xsprint.getId());
            float total = 0.0F;
            for (Mzy_xiaoshouEntity mzy_xiaoshouEntity : mzy_xiaoshouEntityList)
            {
                float price = 0.0F;
                try
                {
                    price = Integer.parseInt(mzy_xiaoshouEntity.getNums()) * mzy_xiaoshouEntity.getPrice().floatValue();
                }
                catch (NumberFormatException e)
                {
                    e.printStackTrace();
                }
                total += price;
            }
            int jfdh = 0;
            if (mzy_xsprint.getMzyCustomEntity().getCustomType().endsWith("1")) {
                jfdh = Integer.parseInt(this.mutiLangService.getMapLang("mingyue.goldJfdh"));
            } else {
                jfdh = Integer.parseInt(this.mutiLangService.getMapLang("mingyue.putongJfdh"));
            }
            if (jfdh != 0)
            {
                int jf = (int)total / jfdh + Integer.parseInt(mzy_xsprint.getMzyCustomEntity().getJf());
                mzy_xsprint.getMzyCustomEntity().setJf(String.valueOf(jf));
                this.systemService.saveOrUpdate(mzy_xsprint.getMzyCustomEntity());
            }
            mzy_xsprint.setJfdh(1);
            this.mzy_xsprintService.saveOrUpdate(mzy_xsprint);
            this.message = "顾客销售清单积分兑换成功";
        }
        else
        {
            this.message = "顾客销售清单积分已经兑换";
        }
        j.setMsg(this.message);
        return j;
    }

    @RequestMapping(params={"save"})
    @ResponseBody
    public AjaxJson save(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request)
    {
        AjaxJson j = new AjaxJson();
        if (StringUtil.isNotEmpty(mzy_xsprint.getId()))
        {
            this.message = "顾客销售清单更新成功";
            Mzy_xsprintEntity t = (Mzy_xsprintEntity)this.mzy_xsprintService.get(Mzy_xsprintEntity.class, mzy_xsprint.getId());
            try
            {
                MyBeanUtils.copyBeanNotNull2Bean(mzy_xsprint, t);
                this.mzy_xsprintService.saveOrUpdate(t);
                this.systemService.addLog(this.message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            }
            catch (Exception e)
            {
                e.printStackTrace();
                this.message = "顾客销售清单更新失败";
            }
        }
        else
        {
            this.message = "顾客销售清单添加成功";
            mzy_xsprint.setTsUser(ClientManager.getInstance().getClient().getUser());

            this.mzy_xsprintService.save(mzy_xsprint);
            this.systemService.addLog(this.message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(this.message);
        return j;
    }

    @RequestMapping(params={"saveCustom"})
    @ResponseBody
    public AjaxJson saveCustom(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request)
    {
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        if ((customId != null) && (customId.length() > 30))
        {
            MzyCustomEntity mzyCustomEntity = (MzyCustomEntity)this.systemService.getEntity(MzyCustomEntity.class, customId);
            mzy_xsprint.setMzyCustomEntity(mzyCustomEntity);
        }
        AjaxJson j = new AjaxJson();
        if (StringUtil.isNotEmpty(mzy_xsprint.getId()))
        {
            this.message = "顾客销售清单更新成功";
            Mzy_xsprintEntity t = (Mzy_xsprintEntity)this.mzy_xsprintService.get(Mzy_xsprintEntity.class, mzy_xsprint.getId());
            try
            {
                MyBeanUtils.copyBeanNotNull2Bean(mzy_xsprint, t);
                this.mzy_xsprintService.saveOrUpdate(t);
                this.systemService.addLog(this.message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            }
            catch (Exception e)
            {
                e.printStackTrace();
                this.message = "顾客销售清单更新失败";
            }
        }
        else
        {
            this.message = "顾客销售清单添加成功";
            mzy_xsprint.setIdDanNum(this.mutiLangService.getIdNum());
            mzy_xsprint.setTsUser(ClientManager.getInstance().getClient().getUser());
            mzy_xsprint.setIsPrint(1);
            this.mzy_xsprintService.save(mzy_xsprint);
            this.systemService.addLog(this.message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(this.message);
        return j;
    }

    @RequestMapping(params={"addorupdate"})
    public ModelAndView addorupdate(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest req)
    {
        if (StringUtil.isNotEmpty(mzy_xsprint.getId()))
        {
            mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, mzy_xsprint.getId());
            req.setAttribute("mzy_xsprintPage", mzy_xsprint);
        }
        return new ModelAndView("com/mingyue/mzy_xsprint/mzy_xsprint");
    }

    @RequestMapping(params={"xsPrintAddorupdate"})
    public ModelAndView xsPrintAddorupdate(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest req)
    {
        String xsprintId = oConvertUtils.getString(req.getParameter("xsprintId"));
        req.setAttribute("xsprintId", xsprintId);
        if (StringUtil.isNotEmpty(mzy_xsprint.getId()))
        {
            mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, mzy_xsprint.getId());
            req.setAttribute("mzy_xsprintPage", mzy_xsprint);
        }
        return new ModelAndView("com/mingyue/mzy_xsprint/mzy_xsprint");
    }

    @RequestMapping(params={"addorupdateCustom"})
    public ModelAndView addorupdateCustom(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest req)
    {
        String customId = oConvertUtils.getString(req.getParameter("customId"));
        req.setAttribute("customId", customId);
        if (StringUtil.isNotEmpty(mzy_xsprint.getId()))
        {
            mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, mzy_xsprint.getId());
            req.setAttribute("mzy_xsprintPage", mzy_xsprint);
        }
        return new ModelAndView("com/mingyue/mzy_xsprint/mzy_xsprintCustom");
    }

    @RequestMapping(params={"xsprint_save"})
    public ModelAndView xsprint(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest req)
    {
        String xsprintId = oConvertUtils.getString(req.getParameter("xsprintId"));
        String realTotal = oConvertUtils.getString(req.getParameter("realTotal"));
        String note = oConvertUtils.getString(req.getParameter("note"));
        String iscard = oConvertUtils.getString(req.getParameter("iscard"));
        if ((mzy_xsprint == null) && (xsprintId != null) && (xsprintId.length() > 30)) {
            mzy_xsprint = (Mzy_xsprintEntity)this.systemService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        }
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        if (StringUtil.isNotEmpty(mzy_xsprint.getId()))
        {
            mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, mzy_xsprint.getId());
            List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", mzy_xsprint.getId());
            float total = 0.0F;
            for (Mzy_xiaoshouEntity mzy_xiaoshouEntity : mzy_xiaoshouEntityList)
            {
                float price = 0.0F;
                try
                {
                    price = Integer.parseInt(mzy_xiaoshouEntity.getNums()) * mzy_xiaoshouEntity.getPrice().floatValue();
                    if (mzy_xsprint.getIsPrint() == 1)
                    {
                        List<MzyKuCunEntity> mzyKuCunEntityList = this.systemService.findHql("from MzyKuCunEntity k where k.mzyProductEntity.id=? and k.TSPDepart.id=?", new Object[] { mzy_xiaoshouEntity.getMzyProductEntity().getId(), orgId });
                        if (mzyKuCunEntityList.size() == 1)
                        {
                            MzyKuCunEntity mzyKuCunEntity = (MzyKuCunEntity)mzyKuCunEntityList.get(0);
                            int nums = Integer.parseInt(mzyKuCunEntity.getNums()) - Integer.parseInt(mzy_xiaoshouEntity.getNums());
                            mzyKuCunEntity.setNums(String.valueOf(nums));
                            this.systemService.saveOrUpdate(mzyKuCunEntity);
                        }
                    }
                    mzy_xiaoshouEntity.setTotal(BigDecimal.valueOf(price));
                    this.systemService.saveOrUpdate(mzy_xiaoshouEntity);
                }
                catch (NumberFormatException e)
                {
                    e.printStackTrace();
                }
                total += price;
            }
            if ((realTotal == null) || (realTotal.length() < 1)) {
                realTotal = "0.0";
            }
            mzy_xsprint.setNote(note);
            mzy_xsprint.setIscard(iscard);
            mzy_xsprint.setRealTotal(BigDecimal.valueOf(Double.valueOf(realTotal).doubleValue()));
            if (mzy_xsprint.getIsPrint() == 1)
            {
                mzy_xsprint.setIsPrint(0);
                this.systemService.saveOrUpdate(mzy_xsprint);
            }
            if (mzy_xsprint.getIscard().endsWith("1")) {
                req.setAttribute("iscard", "现金");
            } else {
                req.setAttribute("iscard", "刷卡");
            }
            TSDepart tsDepart = (TSDepart)this.systemService.findUniqueByProperty(TSDepart.class, "id", orgId);
            req.setAttribute("tsDepart", tsDepart);
            req.setAttribute("total", Float.valueOf(total));
            req.setAttribute("note", mzy_xsprint.getNote());
            req.setAttribute("realTotal", mzy_xsprint.getRealTotal());
            req.setAttribute("printDate", DateUtils.date2Str(new Date(), DateUtils.time_sdf));
            req.setAttribute("xsList", mzy_xiaoshouEntityList);
            req.setAttribute("mzy_xsprintPage", mzy_xsprint);
        }
        return new ModelAndView("com/mingyue/mzy_xsprint/mzy_xsprint_xs");
    }

    @RequestMapping(params={"xsprint_1"})
    public ModelAndView xsprint_1(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest req)
    {
        String xsprintId = oConvertUtils.getString(req.getParameter("xsprintId"));
        if ((mzy_xsprint == null) && (xsprintId != null) && (xsprintId.length() > 30)) {
            mzy_xsprint = (Mzy_xsprintEntity)this.systemService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        }
        String orgId = ClientManager.getInstance().getClient().getUser().getCurrentDepart().getId();
        if (StringUtil.isNotEmpty(mzy_xsprint.getId()))
        {
            mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, mzy_xsprint.getId());
            List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", mzy_xsprint.getId());
            float total = 0.0F;
            for (Mzy_xiaoshouEntity mzy_xiaoshouEntity : mzy_xiaoshouEntityList)
            {
                float price = 0.0F;
                try
                {
                    price = Integer.parseInt(mzy_xiaoshouEntity.getNums()) * mzy_xiaoshouEntity.getPrice().floatValue();
                    if (mzy_xsprint.getIsPrint() == 1)
                    {
                        List<MzyKuCunEntity> mzyKuCunEntityList = this.systemService.findHql("from MzyKuCunEntity k where k.mzyProductEntity.id=? ", new Object[] { mzy_xiaoshouEntity.getMzyProductEntity().getId() });
                        if (mzyKuCunEntityList.size() == 1)
                        {
                            MzyKuCunEntity mzyKuCunEntity = (MzyKuCunEntity)mzyKuCunEntityList.get(0);
                            int nums = Integer.parseInt(mzyKuCunEntity.getNums()) - Integer.parseInt(mzy_xiaoshouEntity.getNums());
                            mzyKuCunEntity.setNums(String.valueOf(nums));
                            this.systemService.saveOrUpdate(mzyKuCunEntity);
                        }
                    }
                    mzy_xiaoshouEntity.setTotal(BigDecimal.valueOf(price));
                    this.systemService.saveOrUpdate(mzy_xiaoshouEntity);
                }
                catch (NumberFormatException e)
                {
                    e.printStackTrace();
                }
                total += price;
            }
            if (mzy_xsprint.getIsPrint() == 1)
            {
                mzy_xsprint.setIsPrint(0);
                this.systemService.saveOrUpdate(mzy_xsprint);
            }
            if (mzy_xsprint.getIscard().endsWith("1")) {
                req.setAttribute("iscard", "现金");
            } else if (mzy_xsprint.getIscard().endsWith("2")){
                req.setAttribute("iscard", "刷卡");
            }else if (mzy_xsprint.getIscard().endsWith("3")){
                req.setAttribute("iscard", "扫码支付");
            }
            TSDepart tsDepart = (TSDepart)this.systemService.findUniqueByProperty(TSDepart.class, "id", orgId);
            if (mzy_xsprint.getTsDepart() != null) {
                req.setAttribute("tsDepart", mzy_xsprint.getTsDepart());
            } else {
                req.setAttribute("tsDepart", tsDepart);
            }
            req.setAttribute("total", Float.valueOf(total));
            req.setAttribute("note", mzy_xsprint.getNote());
            req.setAttribute("realTotal", mzy_xsprint.getRealTotal());
            req.setAttribute("printDate", DateUtils.date2Str(new Date(), DateUtils.time_sdf));
            req.setAttribute("xsList", mzy_xiaoshouEntityList);
            req.setAttribute("mzy_xsprintPage", mzy_xsprint);
        }
        return new ModelAndView("com/mingyue/mzy_xsprint/mzy_xsprint_xs");
    }

    @RequestMapping(params={"printXs"})
    @ResponseBody
    public AjaxJson printXs(HttpServletRequest req)
    {
        AjaxJson j = new AjaxJson();
        String xsprintId = oConvertUtils.getString(req.getParameter("xsprintId"));
        this.message = "销售清单数据已经更新完成";
        if (StringUtil.isNotEmpty(xsprintId))
        {
            Mzy_xsprintEntity mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, xsprintId);
            if ((mzy_xsprint != null) && (mzy_xsprint.getIsPrint() == 1))
            {
                mzy_xsprint.setIsPrint(0);
                this.systemService.saveOrUpdate(mzy_xsprint);
                this.message = "销售清单数据更新成功";
            }
        }
        j.setMsg(this.message);
        return j;
    }

    @RequestMapping(params={"saveXfListByCustom"})
    @ResponseBody
    public AjaxJson saveXfListByCustom(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request)
    {
        Mzy_xsprintEntity t = (Mzy_xsprintEntity)this.systemService.get(Mzy_xsprintEntity.class, mzy_xsprint.getId());
        this.message = "销售开单添加成功";
        try
        {
            t.setIsDelete("N");
            MyBeanUtils.copyBeanNotNull2Bean(mzy_xsprint, t);
            this.systemService.saveOrUpdate(t);
            this.systemService.addLog(this.message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
        }
        catch (Exception e)
        {
            e.printStackTrace();
            this.message = "销售开单更新失败";
        }
        AjaxJson j = new AjaxJson();
        List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", mzy_xsprint.getId());
        if (mzy_xiaoshouEntityList.size() > 0) {
            j.setMsg("销售开单保存成功");
        }
        return j;
    }

    @RequestMapping(params={"saveSelect"})
    @ResponseBody
    public AjaxJson saveSelect(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request)
    {
        String ids = oConvertUtils.getString(request.getParameter("ids"));
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        String realTotal = oConvertUtils.getString(request.getParameter("realTotal"));
        String note = oConvertUtils.getString(request.getParameter("note"));
        String iscard = oConvertUtils.getString(request.getParameter("iscard"));
        mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", xsprintId);
        this.systemService.deleteAllEntitie(mzy_xiaoshouEntityList);
        List<String> idsList = new ArrayList();
        idsList = extractIdListByComma(ids);
        AjaxJson j = new AjaxJson();
        if (!CollectionUtils.isEmpty(idsList))
        {
            for (int i = 0; i < idsList.size(); i++)
            {
                String pid = (String)idsList.get(i);
                if (pid.length() > 30)
                {
                    MzyProductEntity mzyProductEntity = (MzyProductEntity)this.systemService.getEntity(MzyProductEntity.class, pid);
                    if (mzyProductEntity != null)
                    {
                        Mzy_xiaoshouEntity mzy_xiaoshouEntity = new Mzy_xiaoshouEntity();
                        mzy_xiaoshouEntity.setMzyProductEntity(mzyProductEntity);
                        String nums = (String)idsList.get(i + 2);
                        mzy_xiaoshouEntity.setNums(nums);
                        String price = (String)idsList.get(i + 1);
                        double pr = Double.valueOf(price).doubleValue();
                        mzy_xiaoshouEntity.setPrice(BigDecimal.valueOf(pr));
                        mzy_xiaoshouEntity.setMzy_xsprintEntity(mzy_xsprint);
                        this.systemService.save(mzy_xiaoshouEntity);
                    }
                }
            }
            if ((realTotal == null) || (realTotal.length() < 1)) {
                realTotal = "0.0";
            }
            mzy_xsprint.setNote(note);
            mzy_xsprint.setIscard(iscard);
            MzyCustomEntity mzyCustomEntity = mzy_xsprint.getMzyCustomEntity();
            TSUserOrg tsUserOrg = (TSUserOrg)this.systemService.findUniqueByProperty(TSUserOrg.class, "tsUser.id", mzyCustomEntity.getId());
            String dname = tsUserOrg.getTsDepart().getDepartname();
            if (!dname.endsWith(ClientManager.getInstance().getClient().getUser().getCurrentDepart().getDepartname()))
            {
                tsUserOrg.setTsDepart(ClientManager.getInstance().getClient().getUser().getCurrentDepart());
                this.systemService.updateEntitie(tsUserOrg);
            }
            mzy_xsprint.setRealTotal(BigDecimal.valueOf(Double.valueOf(realTotal).doubleValue()));
            mzy_xsprint.setIsOK("Y");
            this.systemService.saveOrUpdate(mzy_xsprint);
            j.setMsg("保存成功");
        }
        else
        {
            mzy_xsprint.setIsDelete("Y");
            this.systemService.saveOrUpdate(mzy_xsprint);

            j.setSuccess(false);
            j.setMsg("删除成功");
        }
        return j;
    }

    @RequestMapping(params={"check_xprin"})
    @ResponseBody
    public AjaxJson check_xprin(Mzy_xsprintEntity mzy_xsprint, HttpServletRequest request)
    {
        AjaxJson j = new AjaxJson();
        j.setMsg("删除成功");
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", xsprintId);
        this.systemService.deleteAllEntitie(mzy_xiaoshouEntityList);
        mzy_xsprint.setIsDelete("Y");
        this.systemService.saveOrUpdate(mzy_xsprint);

        return j;
    }

    @RequestMapping(params={"delField"})
    @ResponseBody
    public AjaxJson delField(MzyProductEntity mzyProductEntity, HttpServletRequest request)
    {
        AjaxJson j = new AjaxJson();
        String xsprintId = oConvertUtils.getString(request.getParameter("xsprintId"));
        Mzy_xsprintEntity mzy_xsprint = (Mzy_xsprintEntity)this.mzy_xsprintService.getEntity(Mzy_xsprintEntity.class, xsprintId);
        List<Mzy_xiaoshouEntity> mzy_xiaoshouEntityList = this.systemService.findByProperty(Mzy_xiaoshouEntity.class, "mzy_xsprintEntity.id", xsprintId);
        for (Mzy_xiaoshouEntity mzy_xiaoshouEntity : mzy_xiaoshouEntityList) {
            if (mzy_xiaoshouEntity.getMzyProductEntity().getId().endsWith(mzyProductEntity.getId()))
            {
                mzy_xiaoshouEntity.setIsDelete("Y");
                this.systemService.saveOrUpdate(mzy_xiaoshouEntity);

                break;
            }
        }
        j.setMsg("删除成功");
        return j;
    }

    @RequestMapping(params={"zxdaDatagrid"})
    public void zxdaDatagrid(Mzy_zxdaEntity mzy_xsprint, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid)
    {
        String customId = oConvertUtils.getString(request.getParameter("customId"));

        CriteriaQuery cq = new CriteriaQuery(Mzy_zxdaEntity.class, dataGrid);
        if ((customId != null) && (customId.length() > 30)) {
            cq.eq("mzyCustomEntity.id", customId);
        }
        cq.addOrder("hfData", SortDirection.desc);
        cq.add();
        HqlGenerateUtil.installHql(cq, mzy_xsprint, request.getParameterMap());
        this.mzy_xsprintService.getDataGridReturn(cq, true);
        TagUtil.datagrid(response, dataGrid);
    }

    @RequestMapping(params={"delZxda"})
    @ResponseBody
    public AjaxJson delZxda(Mzy_zxdaEntity mzy_xsprint, HttpServletRequest request)
    {
        AjaxJson j = new AjaxJson();
        mzy_xsprint = (Mzy_zxdaEntity)this.systemService.getEntity(Mzy_zxdaEntity.class, mzy_xsprint.getId());
        this.message = "顾客咨询档案删除成功";

        this.mzy_xsprintService.delete(mzy_xsprint);
        this.systemService.addLog(this.message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(this.message);
        return j;
    }

    @RequestMapping(params={"zxdaAddorupdateCustom"})
    public ModelAndView zxdaAddorupdateCustom(Mzy_zxdaEntity mzyZxdaEntity, HttpServletRequest req)
    {
        String customId = oConvertUtils.getString(req.getParameter("customId"));
        req.setAttribute("customId", customId);
        MzyCustomEntity mzyCustom=systemService.getEntity(MzyCustomEntity.class,customId);
        req.setAttribute("mzyCustom", mzyCustom);
        req.setAttribute("hfr", ClientManager.getInstance().getClient().getUser().getRealName());
        if (StringUtil.isNotEmpty(mzyZxdaEntity.getId()))
        {
            mzyZxdaEntity = (Mzy_zxdaEntity)this.mzy_xsprintService.getEntity(Mzy_zxdaEntity.class, mzyZxdaEntity.getId());
            String a = mzyZxdaEntity.getNote().trim();
            mzyZxdaEntity.setNote(a);
            a = mzyZxdaEntity.getXiaoguoPj().trim();
            mzyZxdaEntity.setXiaoguoPj(a);
            req.setAttribute("mzy_xsprintPage", mzyZxdaEntity);
            req.setAttribute("hfDate", mzyZxdaEntity.getHfData());
        }
        else
        {
            req.setAttribute("hfDate", new Date());
        }
        return new ModelAndView("com/mingyue/mzy_xsprint/mzy_zxdaCustom");
    }

    @RequestMapping(params={"saveZxdaCustom"})
    @ResponseBody
    public AjaxJson saveZxdaCustom(Mzy_zxdaEntity mzy_xsprint, HttpServletRequest request)
    {
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        if ((customId != null) && (customId.length() > 30))
        {
            MzyCustomEntity mzyCustomEntity = (MzyCustomEntity)this.systemService.getEntity(MzyCustomEntity.class, customId);
            mzy_xsprint.setMzyCustomEntity(mzyCustomEntity);
        }
        AjaxJson j = new AjaxJson();
        if (StringUtil.isNotEmpty(mzy_xsprint.getId()))
        {
            this.message = "顾客回访更新成功";
            Mzy_zxdaEntity t = (Mzy_zxdaEntity)this.mzy_xsprintService.get(Mzy_zxdaEntity.class, mzy_xsprint.getId());
            try
            {
                MyBeanUtils.copyBeanNotNull2Bean(mzy_xsprint, t);
                t.setFwPj(t.getFwPj().replace("\r\n", "").trim());
                t.setXiaoguoPj(t.getXiaoguoPj().replace("\r\n", "").trim());
                t.setNote(t.getNote().replace("\r\n", "").trim());
                this.mzy_xsprintService.saveOrUpdate(t);
                this.systemService.addLog(this.message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            }
            catch (Exception e)
            {
                e.printStackTrace();
                this.message = "顾客回访更新失败";
            }
        }
        else
        {
            this.message = "顾客回访添加成功";
            mzy_xsprint.setTsUser(ClientManager.getInstance().getClient().getUser());
            mzy_xsprint.setIsDelete("N");
            mzy_xsprint.setFwPj(mzy_xsprint.getFwPj().replace("\r\n", "").trim());
            mzy_xsprint.setXiaoguoPj(mzy_xsprint.getXiaoguoPj().replace("\r\n", "").trim());
            mzy_xsprint.setNote(mzy_xsprint.getNote().replace("\r\n", "").trim());
            this.mzy_xsprintService.save(mzy_xsprint);
            this.systemService.addLog(this.message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(this.message);
        return j;
    }
}
