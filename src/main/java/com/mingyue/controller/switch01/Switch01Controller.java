package com.mingyue.controller.switch01;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.switch01.Switch01Entity_temp;
import org.apache.log4j.Logger;
import org.hibernate.criterion.Order;
import org.jeecgframework.core.common.model.json.ComboTree;
import org.jeecgframework.core.common.model.json.TreeGrid;
import org.jeecgframework.core.util.MutiLangUtil;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.tag.vo.easyui.ComboTreeModel;
import org.jeecgframework.tag.vo.easyui.TreeGridModel;
import org.jeecgframework.web.system.controller.core.IconImageUtil;
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
import org.jeecgframework.core.util.StringUtil;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.service.SystemService;
import org.jeecgframework.core.util.MyBeanUtils;

import com.mingyue.entity.switch01.Switch01Entity;
import com.mingyue.service.switch01.Switch01ServiceI;

/**
 * @author Tony
 * @version V1.0
 * @Title: Controller
 * @Description: 交换机信息
 * @date 2015-07-06 15:05:40
 */
@Scope("prototype")
@Controller
@RequestMapping("/switch01Controller")
public class Switch01Controller extends BaseController {
    /**
     * Logger for this class
     */
    private static final Logger logger = Logger.getLogger(Switch01Controller.class);

    @Autowired
    private Switch01ServiceI switch01Service;


    /**
     * 交换机信息列表 页面跳转
     *
     * @return
     */
    @RequestMapping(params = "switch01")
    public ModelAndView switch01(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/switch01/switch01List");
    }

    @RequestMapping(params = "neibuTop")
    public ModelAndView neibuTop(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/switch01/neibuTop");
    }

    @RequestMapping(params = "jzjcyTop")
    public ModelAndView jzjcyTop(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/switch01/jzjcyTop");
    }

    /**
     * easyui AJAX请求数据
     *
     * @param request
     * @param response
     * @param dataGrid
     */

    @RequestMapping(params = "datagrid")
    public void datagrid(Switch01Entity switch01, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(Switch01Entity.class, dataGrid);
        //查询条件组装器
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, switch01, request.getParameterMap());
        this.switch01Service.getDataGridReturn(cq, true);
        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * 资产列表
     */
    @RequestMapping(params = "switchGrid")
    @ResponseBody
    public List<TreeGrid> switchGrid(HttpServletRequest request,
                                     TreeGrid treegrid) {
        CriteriaQuery cq = new CriteriaQuery(Switch01Entity.class);
        String selfId = request.getParameter("selfId");
        if (selfId != null) {
            cq.notEq("id", selfId);
        }
        if (treegrid.getId() != null) {
            cq.eq("switch01Entity.id", treegrid.getId());
        }
        if (treegrid.getId() == null) {
            cq.isNull("switch01Entity");
        }
        cq.addOrder("assetorder", SortDirection.asc);
        cq.add();
        List<Switch01Entity> assetList = systemService.getListByCriteriaQuery(cq, false);
        IconImageUtil.convertSwitchList(assetList, request);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径
//        Collections.sort(assetList, new NumberComparator());
        List<TreeGrid> treeGrids = new ArrayList<TreeGrid>();
        TreeGridModel treeGridModel = new TreeGridModel();
        treeGridModel.setIconName("TSIcon_iconName");
        treeGridModel.setIcon("TSIcon_iconPath");
        treeGridModel.setTextField("fullName");
        treeGridModel.setParentText("switch01Entity_fullName");
        treeGridModel.setParentId("switch01Entity_id");
        treeGridModel.setIsLink("state");
        treeGridModel.setIdField("id");
        treeGridModel.setIp("ip");
//        treeGridModel.setAssetid("assetid");
        treeGridModel.setChildList("Switch01Entities");
        // 添加排序字段
        treeGridModel.setOrder("assetorder");

//        treeGridModel.setFunctionType("functionType");

        treeGrids = systemService.treegrid(assetList, treeGridModel);

        MutiLangUtil.setMutiTree(treeGrids);

        return treeGrids;
    }

    @RequestMapping(params = "switchTree")
    @ResponseBody
    public AjaxJson switchTree(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        CriteriaQuery cq = new CriteriaQuery(Switch01Entity.class);
        cq.isNull("switch01Entity");
        cq.add();
        List<Switch01Entity> switch01EntityList = systemService.getListByCriteriaQuery(cq, false);
        List<Switch01Entity_temp> switch01Entity_tempList = null;
        if (switch01EntityList.size() > 0) {
            systemService.callableStatementByName("call switchTreeNodes('" + switch01EntityList.get(0).getId() + "')");
            cq = new CriteriaQuery(Switch01Entity_temp.class);
            cq.add();
            switch01Entity_tempList = this.systemService.getListByCriteriaQuery(cq, Boolean.valueOf(false));
            IconImageUtil.convertSwitchTempList(switch01Entity_tempList, request);
            List<Object> nodes = new ArrayList<Object>();
            List<Object> relations = new ArrayList<Object>();
            Map<String, Object> all = new HashMap<String, Object>();
            for (int i = 0; i < switch01Entity_tempList.size(); i++) {
                Map<String, Object> relation = new HashMap<String, Object>();
                Map<String, Object> node = new HashMap<String, Object>();
                if (switch01Entity_tempList.get(i).getSwitch01Entity() == null) {
                    node.put("parent", "top");
                    relation.put("from", null);
                } else {
                    relation.put("from", switch01Entity_tempList.get(i).getSwitch01Entity().getId());
                    node.put("parent", switch01Entity_tempList.get(i).getSwitch01Entity().getId());
                }
                relation.put("to", switch01Entity_tempList.get(i).getId());
                relation.put("ip", switch01Entity_tempList.get(i).getIp());
                node.put("id", switch01Entity_tempList.get(i).getId());
                node.put("name", switch01Entity_tempList.get(i).getName() + "\n" + switch01Entity_tempList.get(i).getIp());
                node.put("path", switch01Entity_tempList.get(i).getTSIcon().getIconPath());
                node.put("ip", switch01Entity_tempList.get(i).getIp());
                relations.add(relation);
                nodes.add(node);
            }
            all.put("relations", relations);
            all.put("nodes", nodes);
            j.setObj(all);
        }

        return j;
    }

    @RequestMapping(params = "getState")
    @ResponseBody
    public AjaxJson getState(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        CriteriaQuery cq = new CriteriaQuery(Switch01Entity.class);
        cq.add();
        List<Switch01Entity> switch01EntityList = systemService.getListByCriteriaQuery(cq, false);
        Map<String, Object> all = new HashMap<String, Object>();
        for (Switch01Entity switch01Entity : switch01EntityList) {
            Map<String, Object> ip = new HashMap<String, Object>();
            ip.put("state", switch01Entity.getState());
            ip.put("ip", switch01Entity.getIp());
            ip.put("id", switch01Entity.getId());
            if (0==switch01Entity.getState()) {
                ip.put("msg", "网络故障");
            } else {
                ip.put("msg", "");
            }
            all.put(switch01Entity.getIp(), ip);
        }
        j.setObj(all);
        return j;
    }

    //    @RequestMapping(params = "resetState")
//    public AjaxJson resetState(HttpServletRequest request) {
//        AjaxJson j=new AjaxJson();
//        state = 0;
//        j.setSuccess(true);
//        return j;
//    }
    private static int state = 0;

    private int calState() {
        int i = 1;
        int st = 0;
        boolean r = false;
        CriteriaQuery cq = new CriteriaQuery(Switch01Entity.class);
        cq.addOrder("assetorder", SortDirection.asc);
        cq.add();
        List<Switch01Entity> switch01EntityList = systemService.getListByCriteriaQuery(cq, false);

        for (Switch01Entity switch01Entity : switch01EntityList) {
            st += i * switch01Entity.getState();
            i += 10;
        }
//        if(state == st){
//            r=true;
//        }
//        state=st;
        return st;
    }

    @RequestMapping(params = "getJcyTop")
    @ResponseBody
    public AjaxJson getJcyTop(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        state = calState();
//        if (calState()) {
//            j.setSuccess(false);
//            return j;
//        }
        CriteriaQuery cq = new CriteriaQuery(Switch01Entity.class);
        cq.eq("assetlevel", 0);
        cq.add();
        List<Switch01Entity> switch01EntityList = systemService.getListByCriteriaQuery(cq, false);
        Switch01Entity s0 = switch01EntityList.get(0);
        cq = new CriteriaQuery(Switch01Entity.class);
        cq.notEq("assetlevel", 0);
        cq.eq("state", 1);
        cq.add();
        switch01EntityList = systemService.getListByCriteriaQuery(cq, false);
        Map<String, Object> allDtat = new HashMap<String, Object>();
        List<Object> data1 = new ArrayList<Object>();
        for (Switch01Entity switch01Entity : switch01EntityList) {
            Map<String, Object> name1 = new HashMap<String, Object>();
            Map<String, Object> name2 = new HashMap<String, Object>();
            List<Object> data = new ArrayList<Object>();
            name1.put("name", s0.getFullname());
            name1.put("value2", switch01Entity.getFullname());
            name2.put("name", switch01Entity.getFullname());
            data.add(name1);
            data.add(name2);
            data1.add(data);
        }
        allDtat.put("data1", data1);
        cq = new CriteriaQuery(Switch01Entity.class);
        cq.notEq("assetlevel", 0);
        cq.notEq("state", 1);
        cq.add();
        switch01EntityList = systemService.getListByCriteriaQuery(cq, false);
        List<Object> data2 = new ArrayList<Object>();
        for (Switch01Entity switch01Entity : switch01EntityList) {
            Map<String, Object> name1 = new HashMap<String, Object>();
            name1.put("name", switch01Entity.getFullname());
            name1.put("value2", switch01Entity.getIp());
            data2.add(name1);
        }
        allDtat.put("data2", data2);
        allDtat.put("state", state);
        j.setObj(allDtat);
        return j;
    }

    @RequestMapping(params = "getJcyState")
    @ResponseBody
    public AjaxJson getJcyState(HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        String name = request.getParameter("name");
        CriteriaQuery cq = new CriteriaQuery(Switch01Entity.class);
        cq.eq("fullname", name);
        cq.add();
        List<Switch01Entity> switch01EntityList = systemService.getListByCriteriaQuery(cq, false);
        if (switch01EntityList != null) {
            String msg = name + "<br/>" + switch01EntityList.get(0).getIp();
            if(0==switch01EntityList.get(0).getState()){
                msg+="<br/>"+"网络故障";
            }else{
                msg+="<br/>"+"网络正常";
            }
            j.setMsg(msg);
        }
//        String value = request.getParameter("value");
//        logger.info(name);
//        logger.info(value);
        return j;
    }

    /**
     * 删除交换机信息
     *
     * @return
     */
    @RequestMapping(params = "del")
    @ResponseBody
    public AjaxJson del(Switch01Entity switch01, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        switch01 = systemService.getEntity(Switch01Entity.class, switch01.getId());
        message = "交换机信息删除成功";
        switch01Service.delete(switch01);
        systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

        j.setMsg(message);
        return j;
    }


    /**
     * 添加交换机信息
     *
     * @param switch01
     * @return
     */
    @RequestMapping(params = "save")
    @ResponseBody
    public AjaxJson save(Switch01Entity switch01, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
        if (StringUtil.isNotEmpty(switch01.getId())) {
            message = "交换机信息更新成功";
            Switch01Entity t = switch01Service.get(Switch01Entity.class, switch01.getId());
            try {
                MyBeanUtils.copyBeanNotNull2Bean(switch01, t);
                switch01Service.saveOrUpdate(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "交换机信息更新失败";
            }
        } else {
            message = "交换机信息添加成功";
            switch01.setState(0);
            switch01Service.save(switch01);
            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
        }
        j.setMsg(message);
        return j;
    }

    /**
     * 交换机信息列表页面跳转
     *
     * @return
     */
    @RequestMapping(params = "addorupdate")
    public ModelAndView addorupdate(Switch01Entity switch01, HttpServletRequest req) {
//		if (StringUtil.isNotEmpty(switch01.getId())) {
//			switch01 = switch01Service.getEntity(Switch01Entity.class, switch01.getId());
//			req.setAttribute("switch01Page", switch01);
//		}
        String assetid = req.getParameter("id");
        List<Switch01Entity> assetlist = systemService
                .getList(Switch01Entity.class);
        req.setAttribute("assetlist", assetlist);
        List<TSIcon> iconlist = systemService
                .findByQueryString("from TSIcon where iconType = 4");
        req.setAttribute("iconlist", iconlist);
        if (assetid != null) {
            switch01 = systemService.getEntity(Switch01Entity.class, assetid);
            req.setAttribute("switch01Page", switch01);
        }
        if (switch01.getSwitch01Entity() != null
                && switch01.getSwitch01Entity().getId() != null) {
//            asset.setFunctionLevel((short) 1);
            switch01.setSwitch01Entity((Switch01Entity) systemService.getEntity(
                    Switch01Entity.class, switch01.getSwitch01Entity().getId()));
            req.setAttribute("switch01Page", switch01);
        }
        return new ModelAndView("com/mingyue/switch01/switch01");
    }

    /**
     * 父级权限下拉菜单
     */
    @RequestMapping(params = "setPFunction")
    @ResponseBody
    public List<ComboTree> setPFunction(HttpServletRequest request,
                                        ComboTree comboTree) {
        CriteriaQuery cq = new CriteriaQuery(Switch01Entity.class);
        if (null != request.getParameter("selfId")) {
            cq.notEq("id", request.getParameter("selfId"));
        }
        if (comboTree.getId() != null) {
            cq.eq("switch01Entity.id", comboTree.getId());
        }
        if (comboTree.getId() == null) {
            cq.isNull("switch01Entity");
        }
        cq.add();
        List<Switch01Entity> assetList = systemService.getListByCriteriaQuery(cq, false);
        List<ComboTree> comboTrees = new ArrayList<ComboTree>();
        ComboTreeModel comboTreeModel = new ComboTreeModel("id", "fullname", "Switch01Entities");
        comboTrees = systemService.ComboTree(assetList, comboTreeModel, null, false);
        MutiLangUtil.setMutiTree(comboTrees);
        return comboTrees;
    }
}
