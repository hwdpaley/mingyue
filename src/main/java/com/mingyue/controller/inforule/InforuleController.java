package com.mingyue.controller.inforule;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
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

import com.mingyue.entity.inforule.InforuleEntity;
import com.mingyue.service.inforule.InforuleServiceI;

/**   
 * @Title: Controller
 * @Description: 规则订阅
 * @author Tony
 * @date 2015-07-06 10:34:47
 * @version V1.0   
 *
 */
@Scope("prototype")
@Controller
@RequestMapping("/inforuleController")
public class InforuleController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(InforuleController.class);

	@Autowired
	private InforuleServiceI inforuleService;


	/**
	 * 规则订阅列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "inforule")
	public ModelAndView inforule(HttpServletRequest request) {
		return new ModelAndView("com/mingyue/inforule/inforuleList");
	}

	/**
	 * easyui AJAX请求数据
	 * 
	 * @param request
	 * @param response
	 * @param dataGrid
	 * @param user
	 */

	@RequestMapping(params = "datagrid")
	public void datagrid(InforuleEntity inforule,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(InforuleEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, inforule, request.getParameterMap());
		this.inforuleService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除规则订阅
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(InforuleEntity inforule, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		inforule = systemService.getEntity(InforuleEntity.class, inforule.getId());
		message = "规则订阅删除成功";
		inforuleService.delete(inforule);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加规则订阅
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(InforuleEntity inforule, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(inforule.getId())) {
			message = "规则订阅更新成功";
			InforuleEntity t = inforuleService.get(InforuleEntity.class, inforule.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(inforule, t);
				inforuleService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "规则订阅更新失败";
			}
		} else {
			message = "规则订阅添加成功";
			inforuleService.save(inforule);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 规则订阅列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(InforuleEntity inforule, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(inforule.getId())) {
			inforule = inforuleService.getEntity(InforuleEntity.class, inforule.getId());
			req.setAttribute("inforulePage", inforule);
		}
		return new ModelAndView("com/mingyue/inforule/inforule");
	}
}
