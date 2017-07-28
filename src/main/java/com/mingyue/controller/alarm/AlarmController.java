package com.mingyue.controller.alarm;
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

import com.mingyue.entity.alarm.AlarmEntity;
import com.mingyue.service.alarm.AlarmServiceI;

/**   
 * @Title: Controller
 * @Description: 告警信息
 * @author Tony
 * @date 2015-07-06 13:22:01
 * @version V1.0   
 *
 */
@Scope("prototype")
@Controller
@RequestMapping("/alarmController")
public class AlarmController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(AlarmController.class);

	@Autowired
	private AlarmServiceI alarmService;


	/**
	 * 告警信息列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "alarm")
	public ModelAndView alarm(HttpServletRequest request) {
		return new ModelAndView("com/mingyue/alarm/alarmList");
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
	public void datagrid(AlarmEntity alarm,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
		CriteriaQuery cq = new CriteriaQuery(AlarmEntity.class, dataGrid);
		//查询条件组装器
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, alarm, request.getParameterMap());
		this.alarmService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除告警信息
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(AlarmEntity alarm, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		alarm = systemService.getEntity(AlarmEntity.class, alarm.getId());
		message = "告警信息删除成功";
		alarmService.delete(alarm);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加告警信息
	 * 
	 * @param ids
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(AlarmEntity alarm, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		if (StringUtil.isNotEmpty(alarm.getId())) {
			message = "告警信息更新成功";
			AlarmEntity t = alarmService.get(AlarmEntity.class, alarm.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(alarm, t);
				alarmService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "告警信息更新失败";
			}
		} else {
			message = "告警信息添加成功";
			alarmService.save(alarm);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 告警信息列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(AlarmEntity alarm, HttpServletRequest req) {
		if (StringUtil.isNotEmpty(alarm.getId())) {
			alarm = alarmService.getEntity(AlarmEntity.class, alarm.getId());
			req.setAttribute("alarmPage", alarm);
		}
		return new ModelAndView("com/mingyue/alarm/alarm");
	}
}
