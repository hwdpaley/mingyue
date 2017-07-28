package com.mingyue.controller.mzyxfda;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.mzycustom.MzyCustomEntity;
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

import com.mingyue.entity.mzyxfda.MzyxfdaEntity;
import com.mingyue.service.mzyxfda.MzyxfdaServiceI;

/**   
 * @Title: Controller
 * @Description: 顾客消费档案
 * @author Tony
 * @date 2015-09-23 09:38:20
 * @version V1.0   
 *
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzyxfdaController")
public class MzyxfdaController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(MzyxfdaController.class);

	@Autowired
	private MzyxfdaServiceI mzyxfdaService;


	/**
	 * 顾客消费档案列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "mzyxfda")
	public ModelAndView mzyxfda(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("com/mingyue/mzyxfda/mzyxfdaList");
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        mv.addObject("customId", customId);
        return mv;
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
	public void datagrid(MzyxfdaEntity mzyxfda,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        String customId = oConvertUtils.getString(request.getParameter("customId"));

        CriteriaQuery cq = new CriteriaQuery(MzyxfdaEntity.class, dataGrid);
		//查询条件组装器
        cq.eq("mzyCustomEntity.id",customId);
        cq.notEq("isDelete","Y");
        cq.add();
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyxfda, request.getParameterMap());
		this.mzyxfdaService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除顾客消费档案
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(MzyxfdaEntity mzyxfda, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		mzyxfda = systemService.getEntity(MzyxfdaEntity.class, mzyxfda.getId());
		message = "顾客消费档案删除成功";
        mzyxfda.setIsDelete("Y");
        systemService.saveOrUpdate(mzyxfda);
//		mzyxfdaService.delete(mzyxfda);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加顾客消费档案
	 * 
	 * @param
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(MzyxfdaEntity mzyxfda, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        MzyCustomEntity mzyCustomEntity=systemService.getEntity(MzyCustomEntity.class,customId);
        mzyxfda.setMzyCustomEntity(mzyCustomEntity);
        if (StringUtil.isNotEmpty(mzyxfda.getId())) {
			message = "顾客消费档案更新成功";
			MzyxfdaEntity t = mzyxfdaService.get(MzyxfdaEntity.class, mzyxfda.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(mzyxfda, t);
				mzyxfdaService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "顾客消费档案更新失败";
			}
		} else {
			message = "顾客消费档案添加成功";
			mzyxfdaService.save(mzyxfda);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 顾客消费档案列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(MzyxfdaEntity mzyxfda, HttpServletRequest req) {
        String customId = oConvertUtils.getString(req.getParameter("customId"));
        req.setAttribute("customId", customId);
        if (StringUtil.isNotEmpty(mzyxfda.getId())) {
			mzyxfda = mzyxfdaService.getEntity(MzyxfdaEntity.class, mzyxfda.getId());
			req.setAttribute("mzyxfdaPage", mzyxfda);
		}
		return new ModelAndView("com/mingyue/mzyxfda/mzyxfda");
	}
}
