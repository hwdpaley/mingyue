package org.jeecgframework.web.demo.service.impl.test;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.mc.HttpClientUtils;
import com.mingyue.entity.alarm.AlarmEntity;
import com.mingyue.entity.asset.AssetEntity;
import com.mingyue.entity.info.InfoEntity;
import com.mingyue.entity.inforule.InforuleEntity;
import com.mingyue.entity.switch01.Switch01Entity;
import com.mingyue.service.alarm.AlarmServiceI;
import com.mingyue.service.asset.AssetServiceI;
import com.mingyue.service.info.InfoServiceI;
import com.mingyue.service.inforule.InforuleServiceI;
import com.mingyue.service.switch01.Switch01ServiceI;
import org.apache.log4j.Logger;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.web.system.pojo.base.TSIcon;
import org.jeecgframework.web.system.service.MutiLangServiceI;
import org.jeecgframework.web.system.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import org.jeecgframework.web.demo.service.test.TaskDemoServiceI;
@Service("taskDemoService")
public class TaskDemoServiceImpl implements TaskDemoServiceI {
    private static final Logger logger = Logger.getLogger(TaskDemoServiceImpl.class);
//    @Autowired
//    private SystemService systemService;
//    @Autowired
//    private MutiLangServiceI mutiLangService;
//    @Autowired
//    private AssetServiceI assetService;
//    @Autowired
//    private InforuleServiceI inforuleService;
//    @Autowired
//    private AlarmServiceI alarmService;
//    @Autowired
//    private InfoServiceI infoService;
//    @Autowired
//    private Switch01ServiceI switch01Service;
//
//
////    private int count = 0;
//    private int status = 0;
//    private HttpClientUtils httpClientUtils = new HttpClientUtils();
//    private String cookie = null;
//    //    private String parentId = "";
//    private AjaxJson j = new AjaxJson();
//    private AssetEntity assetentity = new AssetEntity();
//    StringBuffer sbsb = new StringBuffer();
//    List<AssetEntity> mcasset;
//    private boolean isLogin=false;
//    private InforuleEntity inforuleEntity = new InforuleEntity();





	public void work() {
		org.jeecgframework.core.util.LogUtil.info(new Date().getTime());
		org.jeecgframework.core.util.LogUtil.info("----------任务测试-------");
	}

}
