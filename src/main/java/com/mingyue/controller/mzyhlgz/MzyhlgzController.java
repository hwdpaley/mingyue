package com.mingyue.controller.mzyhlgz;
import java.util.Date;
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

import com.mingyue.entity.mzyhlgz.MzyhlgzEntity;
import com.mingyue.service.mzyhlgz.MzyhlgzServiceI;

/**   
 * @Title: Controller
 * @Description: 顾客护理跟踪
 * @author Tony
 * @date 2015-09-23 09:39:02
 * @version V1.0   
 *
 */
@Scope("prototype")
@Controller
@RequestMapping("/mzyhlgzController")
public class MzyhlgzController extends BaseController {
	/**
	 * Logger for this class
	 */
	private static final Logger logger = Logger.getLogger(MzyhlgzController.class);

	@Autowired
	private MzyhlgzServiceI mzyhlgzService;


	/**
	 * 顾客护理跟踪列表 页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "mzyhlgz")
	public ModelAndView mzyhlgz(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("com/mingyue/mzyhlgz/mzyhlgzList");
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
	public void datagrid(MzyhlgzEntity mzyhlgz,HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        String customId = oConvertUtils.getString(request.getParameter("customId"));

        CriteriaQuery cq = new CriteriaQuery(MzyhlgzEntity.class, dataGrid);
		//查询条件组装器
        cq.eq("mzyCustomEntity.id",customId);
        cq.notEq("isDelete","Y");
        cq.add();
		org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, mzyhlgz, request.getParameterMap());
		this.mzyhlgzService.getDataGridReturn(cq, true);
		TagUtil.datagrid(response, dataGrid);
	}

	/**
	 * 删除顾客护理跟踪
	 * 
	 * @return
	 */
	@RequestMapping(params = "del")
	@ResponseBody
	public AjaxJson del(MzyhlgzEntity mzyhlgz, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
		mzyhlgz = systemService.getEntity(MzyhlgzEntity.class, mzyhlgz.getId());
		message = "顾客护理跟踪删除成功";
        mzyhlgz.setIsDelete("Y");
//		mzyhlgzService.delete(mzyhlgz);
        systemService.saveOrUpdate(mzyhlgz);
		systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);
		
		j.setMsg(message);
		return j;
	}


	/**
	 * 添加顾客护理跟踪
	 * 
	 * @param
	 * @return
	 */
	@RequestMapping(params = "save")
	@ResponseBody
	public AjaxJson save(MzyhlgzEntity mzyhlgz, HttpServletRequest request) {
		AjaxJson j = new AjaxJson();
        String customId = oConvertUtils.getString(request.getParameter("customId"));
        MzyCustomEntity mzyCustomEntity=systemService.getEntity(MzyCustomEntity.class,customId);
        mzyhlgz.setMzyCustomEntity(mzyCustomEntity);
        if (StringUtil.isNotEmpty(mzyhlgz.getId())) {
			message = "顾客护理跟踪更新成功";
			MzyhlgzEntity t = mzyhlgzService.get(MzyhlgzEntity.class, mzyhlgz.getId());
			try {
				MyBeanUtils.copyBeanNotNull2Bean(mzyhlgz, t);
				mzyhlgzService.saveOrUpdate(t);
				systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
			} catch (Exception e) {
				e.printStackTrace();
				message = "顾客护理跟踪更新失败";
			}
		} else {
			message = "顾客护理跟踪添加成功";
			mzyhlgzService.save(mzyhlgz);
			systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
		}
		j.setMsg(message);
		return j;
	}

	/**
	 * 顾客护理跟踪列表页面跳转
	 * 
	 * @return
	 */
	@RequestMapping(params = "addorupdate")
	public ModelAndView addorupdate(MzyhlgzEntity mzyhlgz, HttpServletRequest req) {
        String customId = oConvertUtils.getString(req.getParameter("customId"));
        req.setAttribute("customId", customId);
        if (StringUtil.isNotEmpty(mzyhlgz.getId())) {
			mzyhlgz = mzyhlgzService.getEntity(MzyhlgzEntity.class, mzyhlgz.getId());
			req.setAttribute("mzyhlgzPage", mzyhlgz);
		}else{
            mzyhlgz=new MzyhlgzEntity();
            mzyhlgz.setDtime(new Date());
            req.setAttribute("mzyhlgzPage", mzyhlgz);
        }
		return new ModelAndView("com/mingyue/mzyhlgz/mzyhlgz");
	}
}
