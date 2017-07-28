package com.mingyue.controller.mzy_product;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.cuxiao.MzycuxiaoEntity;
import org.apache.log4j.Logger;
import org.jeecgframework.core.common.model.json.ComboTree;
import org.jeecgframework.core.common.model.json.McuiTreeGrid;
import org.jeecgframework.core.util.*;
import org.jeecgframework.tag.vo.datatable.SortDirection;
import org.jeecgframework.tag.vo.easyui.ComboTreeModel;
import org.jeecgframework.tag.vo.easyui.McuiTreeGridModel;
import org.jeecgframework.web.system.controller.core.IconImageUtil;
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

import com.mingyue.entity.mzy_product.MzyProductEntity;
import com.mingyue.service.mzy_product.MzyProductServiceI;

/**   
 * @Title: Controller
 * @Description: 产品管理
 * @author Tony
 * @date 2015-07-30 13:26:55
 * @version V1.0   
 *
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzyProductController")
public class MzyProductController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(MzyProductController.class);

	@Autowired
	private MzyProductServiceI mzyProductService;


	/**
	 * 产品管理列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "mzyProduct")
	public ModelAndView mzyProduct(HttpServletRequest request) {
		return new ModelAndView("com/mingyue/mzy_product/mzyProductList");
	}
    @RequestMapping(params = "mzyProductList")
    public ModelAndView mzyProductList(HttpServletRequest request) {
        return new ModelAndView("com/mingyue/mzy_product/mzyProductListList");
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
	public void datagrid(MzyProductEntity mzyProduct,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(MzyProductEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyProduct, request.getParameterMap());
//		cq.e("price");
        cq.notEq("isDelete","Y");
        cq.add();
        this.mzyProductService.getDataGridReturn(cq, true);
        IconImageUtil.convertProductDataGrid(dataGrid,request,systemService);
		TagUtil.datagrid(response, dataGrid);
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
        IconImageUtil.convertMzyProductList(mcuiEntityList, request, treegrid.getId() == null ? true : false);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径

//        Collections.sort(assetList, new NumberComparator());
        List<McuiTreeGrid> mcuiTreeGrids = new ArrayList<McuiTreeGrid>();
        McuiTreeGridModel mcuiTreeGridModel = new McuiTreeGridModel();
        mcuiTreeGridModel.setDescription("description");
        mcuiTreeGridModel.setPrice("price");
        mcuiTreeGridModel.setDiscount("discount");

        mcuiTreeGridModel.setTextField("name");
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
    /**
     * 父级权限下拉菜单
     */
    @RequestMapping(params = "setPFunction")
    @ResponseBody
    public List<ComboTree> setPFunction(HttpServletRequest request,
                                        ComboTree comboTree) {
        CriteriaQuery cq = new CriteriaQuery(MzyProductEntity.class);
        if (null != request.getParameter("selfId")) {
            cq.notEq("id", request.getParameter("selfId"));
        }
        if (comboTree.getId() != null) {
            cq.eq("mzyProductEntity.id", comboTree.getId());
        }
        if (comboTree.getId() == null) {
            cq.isNull("mzyProductEntity");
        }
        cq.add();
        List<MzyProductEntity> assetList = systemService.getListByCriteriaQuery(cq, false);
        List<ComboTree> comboTrees = new ArrayList<ComboTree>();
        ComboTreeModel comboTreeModel = new ComboTreeModel("id","name", "mzyProductEntities");
        comboTrees = systemService.ComboTree(assetList, comboTreeModel,null, false);
        MutiLangUtil.setMutiTree(comboTrees);
        return comboTrees;
    }
	/**
	 * 删除产品管理
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(MzyProductEntity mzyProduct, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		mzyProduct = systemService.getEntity(MzyProductEntity.class, mzyProduct.getId());
		message = "产品管理删除成功";
		List<MzycuxiaoEntity> mzycuxiaoEntityList=systemService.findByProperty(MzycuxiaoEntity.class,"mzyProductEntity.id",mzyProduct.getId());
        for(MzycuxiaoEntity mzycuxiaoEntity:mzycuxiaoEntityList){
            mzycuxiaoEntity.setIsDelete("Y");
            systemService.saveOrUpdate(mzycuxiaoEntity);
        }
//        systemService.deleteAllEntitie(mzycuxiaoEntityList);
        mzyProduct.setIsDelete("Y");
        systemService.saveOrUpdate(mzyProduct);
//        mzyProductService.delete(mzyProduct);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加产品管理
	 * 
	 * @param
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(MzyProductEntity mzyProduct, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
        if(mzyProduct.getMzyProductEntity().getId()==""){
            mzyProduct.setMzyProductEntity(null);
        }
        try {
            int dis = Integer.parseInt(mzyProduct.getDiscount());
        }catch (Exception e){
            mzyProduct.setDiscount("100");
        }

		if (StringUtil.isNotEmpty(mzyProduct.getId())) {
			message = "产品管理更新成功";
			MzyProductEntity t = mzyProductService.get(MzyProductEntity.class, mzyProduct.getId());
            try {

                String pa= ResourceUtil.getConfigByName("uploadpath");
                if(mzyProduct.getSrc().indexOf(pa) != -1){
                    request.setCharacterEncoding("UTF-8");
                    String realPath = request.getSession().getServletContext().getRealPath("/") + "/" + mzyProduct.getSrc();// 文件的硬盘真实路径

                    FileInputStream fins= StreamUtils.getFileInputStream(realPath);
                    StreamUtils streamUtils=new StreamUtils();
                    byte[] pcontent=streamUtils.getBytes(fins);
                    int first=mzyProduct.getSrc().lastIndexOf("/");
                    String name=mzyProduct.getSrc().substring(first+1,mzyProduct.getSrc().length());
                    first=name.lastIndexOf(".");
                    mzyProduct.setPicClas(name.substring(0,first));
                    mzyProduct.setExtend(name.substring(first+1,name.length()));
                    mzyProduct.setPicContent(pcontent);
                }
                MyBeanUtils.copyBeanNotNull2Bean(mzyProduct, t);
                mzyProductService.saveOrUpdate(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "UI界面更新失败";
            }
		} else {
			message = "产品管理添加成功";
            MzyProductEntity t=new MzyProductEntity();
            try {

                String pa= ResourceUtil.getConfigByName("uploadpath");
                if(mzyProduct.getSrc().indexOf(pa) != -1){
                    request.setCharacterEncoding("UTF-8");
                    String realPath = request.getSession().getServletContext().getRealPath("/") + "/" + mzyProduct.getSrc();// 文件的硬盘真实路径

                    FileInputStream fins= StreamUtils.getFileInputStream(realPath);
                    StreamUtils streamUtils=new StreamUtils();
                    byte[] pcontent=streamUtils.getBytes(fins);
                    int first=mzyProduct.getSrc().lastIndexOf("/");
                    String name=mzyProduct.getSrc().substring(first+1,mzyProduct.getSrc().length());
                    first=name.lastIndexOf(".");
                    mzyProduct.setPicClas(name.substring(0,first));
                    mzyProduct.setExtend(name.substring(first+1,name.length()));
                    mzyProduct.setPicContent(pcontent);
                }
                MyBeanUtils.copyBeanNotNull2Bean(mzyProduct, t);
                mzyProductService.save(mzyProduct);
                systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "产品管理添加失败";
            }

		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 产品管理列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(MzyProductEntity mzyProduct, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(mzyProduct.getId())) {
			mzyProduct = mzyProductService.getEntity(MzyProductEntity.class, mzyProduct.getId());
			req.setAttribute("mzyProductPage", mzyProduct);
		}
		return new ModelAndView("com/mingyue/mzy_product/mzyProduct");
	}
}
