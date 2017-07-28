package com.mingyue.controller.asset;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.service.McPingWorkServiceI;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.jeecgframework.core.common.model.json.ComboTree;
import org.jeecgframework.core.common.model.json.TreeGrid;
import org.jeecgframework.core.util.*;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.tag.vo.easyui.ComboTreeModel;
import org.jeecgframework.tag.vo.easyui.TreeGridModel;
import org.jeecgframework.web.system.controller.core.IconImageUtil;
import org.jeecgframework.web.system.pojo.base.TSFunction;
import org.jeecgframework.web.system.pojo.base.TSIcon;
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
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.service.SystemService;

import com.mingyue.entity.asset.AssetEntity;
import com.mingyue.service.asset.AssetServiceI;

/**
 * @author Tony
 * @version V1.0
 * @Title: Controller
 * @Description: 资产列表
 * @date 2015-07-07 14:12:44
 */
@Scope("prototype")
@Controller
@RequestMapping("/assetController")
public class AssetController extends BaseController {
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(AssetController.class);

    @Autowired
    private AssetServiceI assetService;

    @Autowired
    private McPingWorkServiceI mcPingWorkService;

    /**
     * 资产列表列表 页面跳转
     *
     * @return
     */
    @RequestMapping(params = "asset")
    public ModelAndView asset(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/asset/assetList");
    }

    /**
     * easyui AJAX请求数据
     *
     * @param request
     * @param response
     * @param dataGrid
     */

    @RequestMapping(params = "datagrid")
    public void datagrid(AssetEntity asset, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(AssetEntity.class, dataGrid);
        //查询条件组装器
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, asset, request.getParameterMap());
        this.assetService.getDataGridReturn(cq, true);
        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * 资产列表
     */
    @RequestMapping(params = "assetGrid")
    @ResponseBody
    public List<TreeGrid> assetGrid(HttpServletRequest request,
                                    TreeGrid treegrid) {
        CriteriaQuery cq = new CriteriaQuery(AssetEntity.class);
        String selfId = request.getParameter("selfId");
        if (selfId != null) {
            cq.notEq("id", selfId);
        }
        if (treegrid.getId() != null) {
            cq.eq("assetEntity.id", treegrid.getId());
        }
        if (treegrid.getId() == null) {
            cq.isNull("assetEntity");
        }
        cq.addOrder("assetorder", SortDirection.asc);
        cq.add();
        List<AssetEntity> assetList = systemService.getListByCriteriaQuery(cq, false);
        IconImageUtil.convertList(assetList, request);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径
//        Collections.sort(assetList, new NumberComparator());
        List<TreeGrid> treeGrids = new ArrayList<TreeGrid>();
        TreeGridModel treeGridModel = new TreeGridModel();
        treeGridModel.setIconName("TSIcon_iconName");
        treeGridModel.setIcon("TSIcon_iconPath");
        treeGridModel.setTextField("fullName");
        treeGridModel.setParentText("assetEntity_fullName");
        treeGridModel.setParentId("assetEntity_id");
//        treeGridModel.setSrc("src");
        treeGridModel.setIdField("id");
        treeGridModel.setIp("ip");
        treeGridModel.setAssetid("assetid");
        treeGridModel.setChildList("AssetEntitys");
        // 添加排序字段
        treeGridModel.setOrder("assetorder");

//        treeGridModel.setFunctionType("functionType");

        treeGrids = systemService.treegrid(assetList, treeGridModel);

        MutiLangUtil.setMutiTree(treeGrids);

        return treeGrids;
    }

    /**
     * 添加节点
     *
     * @param request
     * @return
     */
    @RequestMapping(params = "addNodes")
    @ResponseBody
    public AjaxJson addNodes(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        j = mcPingWorkService.mcAddNodes();
        return j;
    }

    /**
     * 删除资产列表
     *
     * @return
     */
    @RequestMapping(params = "del")
    @ResponseBody
    public AjaxJson del(AssetEntity asset, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        asset = systemService.getEntity(AssetEntity.class, asset.getId());
        message = "资产列表删除成功";
        assetService.delete(asset);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(message);
        return j;
    }


    /**
     * 添加资产列表
     *
     * @param asset
     * @return
     */
    @RequestMapping(params = "save")
    @ResponseBody
    public AjaxJson save(AssetEntity asset, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        if (StringUtil.isNotEmpty(asset.getId())) {
            message = "资产列表更新成功";
            AssetEntity t = assetService.get(AssetEntity.class, asset.getId());
            try {
                MyBeanUtils.copyBeanNotNull2Bean(asset, t);
                assetService.saveOrUpdate(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "资产列表更新失败";
            }
        } else {
            message = "资产列表添加成功";
            assetService.save(asset);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    /**
     * 资产列表列表页面跳转
     *
     * @return
     */
    @RequestMapping(params = "addorupdate")
    public ModelAndView addorupdate(AssetEntity asset, HttpServletRequest req) {
//		if (StringUtil.isNotEmpty(asset.getId())) {
//			asset = assetService.getEntity(AssetEntity.class, asset.getId());
//			req.setAttribute("assetPage", asset);
//		}
//		return new ModelAndView("com/mingyue/asset/asset");

        String assetid = req.getParameter("id");
        List<AssetEntity> assetlist = systemService
                .getList(AssetEntity.class);
        req.setAttribute("assetlist", assetlist);
        // List<TSIcon> iconlist = systemService.getList(TSIcon.class);
        List<TSIcon> iconlist = systemService
                .findByQueryString("from TSIcon where iconType = 4");
        req.setAttribute("iconlist", iconlist);
//        List<TSIcon> iconDeskList = systemService
//                .findByQueryString("from TSIcon where iconType = 3");
//        req.setAttribute("iconDeskList", iconDeskList);
        if (assetid != null) {
            asset = systemService.getEntity(AssetEntity.class, assetid);
            req.setAttribute("asset", asset);
        }
        if (asset.getAssetEntity() != null
                && asset.getAssetEntity().getId() != null) {
//            asset.setFunctionLevel((short) 1);
            asset.setAssetEntity((AssetEntity) systemService.getEntity(
                    AssetEntity.class, asset.getAssetEntity().getId()));
            req.setAttribute("asset", asset);
        }
        return new ModelAndView("com/mingyue/asset/asset");
    }

    /**
     * 父级权限下拉菜单
     */
    @RequestMapping(params = "setPFunction")
    @ResponseBody
    public List<ComboTree> setPFunction(HttpServletRequest request,
                                        ComboTree comboTree) {
        CriteriaQuery cq = new CriteriaQuery(AssetEntity.class);
        if (null != request.getParameter("selfId")) {
            cq.notEq("id", request.getParameter("selfId"));
        }
        if (comboTree.getId() != null) {
            cq.eq("assetEntity.id", comboTree.getId());
        }
        if (comboTree.getId() == null) {
            cq.isNull("assetEntity");
        }
        cq.add();
        List<AssetEntity> assetList = systemService.getListByCriteriaQuery(cq, false);
        List<ComboTree> comboTrees = new ArrayList<ComboTree>();
        ComboTreeModel comboTreeModel = new ComboTreeModel("id", "fullname", "AssetEntitys");
        comboTrees = systemService.ComboTree(assetList, comboTreeModel, null, false);
        MutiLangUtil.setMutiTree(comboTrees);
        return comboTrees;
    }

    @RequestMapping(params = "saveAsset")
    @ResponseBody
    public AjaxJson saveFunction(AssetEntity asset, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
//        asset.setFunctionUrl(asset.getFunctionUrl().trim());
        String assetorder = asset.getAssetorder();
        if (StringUtils.isEmpty(assetorder)) {
            asset.setAssetorder("0");
        }
        if (asset.getAssetEntity().getId().equals("")) {
            asset.setAssetEntity(null);
        } else {
            AssetEntity parent = systemService.getEntity(AssetEntity.class,
                    asset.getAssetEntity().getId());
            asset.setAssetlevel(parent.getAssetlevel() + 1);
        }
        if (StringUtil.isNotEmpty(asset.getId())) {
            try {
                message = MutiLangUtil.paramUpdSuccess("common.asset");

                AssetEntity as = systemService.getEntity(AssetEntity.class,
                        asset.getId());
                MyBeanUtils.copyBeanNotNull2Bean(asset, as);
                assetService.saveOrUpdate(as);
                systemService.addLog(message, Globals.Log_Type_UPDATE,
                        Globals.Log_Leavel_INFO);
                List<AssetEntity> subAsset = systemService.findByProperty(AssetEntity.class, "assetEntity.id", asset.getId());
                updateSubFunction(subAsset, asset);
            } catch (Exception e) {
                e.printStackTrace();
            }

//            systemService.flushRoleFunciton(function.getId(), function);

        } else {
            if (asset.getAssetlevel().equals(Globals.Function_Leave_ONE)) {
                List<AssetEntity> functionList = systemService.findByProperty(
                        AssetEntity.class, "assetlevel",
                        Globals.Asset_Leave_ONE);
                // int ordre=functionList.size()+1;
                // function.setFunctionOrder(Globals.Function_Order_ONE+ordre);
                asset.setAssetorder(asset.getAssetorder());
            } else {
                List<AssetEntity> functionList = systemService.findByProperty(
                        AssetEntity.class, "assetlevel",
                        Globals.Asset_Leave_TWO);
                // int ordre=functionList.size()+1;
                // function.setFunctionOrder(Globals.Function_Order_TWO+ordre);
                asset.setAssetorder(asset.getAssetorder());
            }
            message = MutiLangUtil.paramAddSuccess("common.asset");
            assetService.save(asset);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }

        j.setMsg(message);
        return j;
    }

    /**
     * 递归更新子菜单的FunctionLevel
     *
     * @param assetEntityList
     * @param parent
     */
    private void updateSubFunction(List<AssetEntity> assetEntityList, AssetEntity parent) {
        if (assetEntityList.size() == 0) {//没有子菜单是结束
            return;
        } else {
            for (AssetEntity assetEntity : assetEntityList) {
                assetEntity.setAssetlevel(parent.getAssetlevel() + 1);
                systemService.saveOrUpdate(assetEntity);
                List<AssetEntity> assetEntityList1 = systemService.findByProperty(AssetEntity.class, "assetEntity.id", assetEntity.getId());
                updateSubFunction(assetEntityList1, assetEntity);
            }
        }
    }
}
