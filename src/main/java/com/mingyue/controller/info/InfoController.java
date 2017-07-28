package com.mingyue.controller.info;
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

import com.mingyue.entity.info.InfoEntity;
import com.mingyue.service.info.InfoServiceI;

/**   
 * @Title: Controller
 * @Description: 资产信息
 * @author Tony
 * @date 2015-07-06 13:22:27
 * @version V1.0   
 *
 */
@Scope("prototype")
@Controller
@RequestMapping("/infoController")
public class InfoController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(InfoController.class);

	@Autowired
	private InfoServiceI infoService;


	/**
	 * 资产信息列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "info")
	public ModelAndView info(HttpServletRequest request) {
		return new ModelAndView("com/mingyue/info/infoList");
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
	public void datagrid(InfoEntity info,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(InfoEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, info, request.getParameterMap());
		this.infoService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除资产信息
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(InfoEntity info, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		info = systemService.getEntity(InfoEntity.class, info.getId());
		message = "资产信息删除成功";
		infoService.delete(info);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加资产信息
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(InfoEntity info, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(info.getId())) {
			message = "资产信息更新成功";
			InfoEntity t = infoService.get(InfoEntity.class, info.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(info, t);
				infoService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "资产信息更新失败";
			}
		} else {
			message = "资产信息添加成功";
			infoService.save(info);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 资产信息列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(InfoEntity info, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(info.getId())) {
			info = infoService.getEntity(InfoEntity.class, info.getId());
			req.setAttribute("infoPage", info);
		}
		return new ModelAndView("com/mingyue/info/info");
	}
}
