package org.jeecgframework.core.timer;

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
import org.apache.xpath.operations.Bool;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.jeecgframework.core.common.hibernate.qbc.CriteriaQuery;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.core.util.ContextHolderUtils;
import org.jeecgframework.core.util.ResourceUtil;
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.jeecgframework.web.system.service.MutiLangServiceI;
import org.jeecgframework.web.system.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class Job {

    private static final Logger logger = Logger.getLogger(Job.class);

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
//    private int count = 0;
//    private int status = 100;
//    private HttpClientUtils httpClientUtils = new HttpClientUtils();
//    private String cookie = null;
////    private String parentId = "";
//    private AjaxJson j = new AjaxJson();
//    private AssetEntity assetentity = new AssetEntity();
//    StringBuffer sbsb = new StringBuffer();
//    List<AssetEntity> mcasset;
//    private InforuleEntity inforuleEntity = new InforuleEntity();

//    @Scheduled(cron = "*/10 * * * * *")
    public void mcAsset() {
//        count++;
//        if(count==60){
//            count=0;
//        }

//        switch (status) {
//            case 0:
////                assetentity.setParentid("");
//                assetentity.setId("");
////                TSDemo demo = systemService.getEntity(TSDemo.class, "123456");
//                try {
////                    HttpSession session = ContextHolderUtils.getSession();
////                    TSUser user = ResourceUtil.getSessionUserName();
////                    if(user!=null)
//                    {
//                        String aa = mutiLangService.getMapLang("common.mcIp");
//                        if (aa != null) {
//                            httpClientUtils.setUrl(mutiLangService.getMapLang("common.mcIp"));
//                            httpClientUtils.setUserName(mutiLangService.getMapLang("common.mcUserName"));
//                            httpClientUtils.setPassWord(mutiLangService.getMapLang("common.mcPassWord"));
//                            cookie = httpClientUtils.login();
//                            if (cookie != null && cookie.length() > 0)
//                                status = 10;
//                        }
//                    }
//                } catch (Exception e) {
//                    e.printStackTrace();
//                }
//                break;
//            case 10:
//                j = httpClientUtils.findAssetDirectory(assetentity.getId());
//                //j为得到的asset数组，先全部保存起来，遍历map
//                if (j.isSuccess()) {
//                    List<Object> reslist = (List<Object>) j.getObj();
//                    for (int i = 0; i < reslist.size(); i++) {
////                        org.jeecgframework.core.util.LogUtil.info(reslist.get(i));
//                        Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
//                        });
//                        AssetEntity asset = new AssetEntity();
//                        asset.setId(list2.get("_id").toString());
//                        asset.setFullname(list2.get("fullName").toString());
//                        asset.setType(list2.get("type").toString());
//                        asset.setAssetcount(Integer.parseInt(list2.get("assetCount").toString()));
//                        if (true == list2.get("activity")) {
//                            asset.setActivity(1);
//                        } else {
//                            asset.setActivity(0);
//                        }
//                        String ip = null;
//                        if (list2.containsKey("ip")) {
//                            ip = list2.get("ip").toString();
//                        }
//                        asset.setIp(ip);
//
//                        int leaf = 0;
//                        if (list2.containsKey("leaf")) {
//                            if (true == list2.get("leaf")) {
//                                leaf = 1;
//                            }
//                        }
//                        asset.setLeaf(leaf);
//
//                        asset.setIsread(0);
////                        asset.setParentid(assetentity.getId());
//                        try {
//                            assetService.saveOrUpdate(asset);
//                        } catch (Exception e) {
//                            e.printStackTrace();
//                        }
//                    }
//                }
//                //更新isread=1
//                status = 20;
//                break;
//            case 20:
//                sbsb = new StringBuffer();
//                sbsb.append("FROM AssetEntity  where isread=0 and leaf=0");
//                mcasset = systemService.findByQueryString(sbsb.toString());
//                if (mcasset.size() > 0) {
//                    org.jeecgframework.core.util.LogUtil.info(mcasset.get(0).getId());
//                    assetentity = mcasset.get(0);
//                    assetentity.setIsread(1);
//                    status = 10;
//                    try {
//                        assetService.saveOrUpdate(assetentity);
//                    } catch (Exception e) {
//                        e.printStackTrace();
//                    }
//                } else {
//                    status = 30;
//                }
//                break;
//            case 30:
//                sbsb = new StringBuffer();
//                sbsb.append("FROM AssetEntity  where isread=0 and leaf=1 and assetcount!=0");
//                mcasset = systemService.findByQueryString(sbsb.toString());
//                if (mcasset.size() > 0) {
//                    org.jeecgframework.core.util.LogUtil.info(mcasset.get(0).getId());
//                    assetentity = mcasset.get(0);
//                    assetentity.setIsread(1);
//                    status = 40;
//                    try {
//                        assetService.saveOrUpdate(assetentity);
//                    } catch (Exception e) {
//                        e.printStackTrace();
//                    }
//                } else {
//                    status = 50;
//                }
//                break;
//            case 40:
//                j = httpClientUtils.findAssetByDir(assetentity.getId());
//                //j为得到的asset数组，先全部保存起来，遍历map
//                if (j.isSuccess()) {
//                    List<Object> reslist = (List<Object>) j.getObj();
//                    for (int i = 0; i < reslist.size(); i++) {
////                        org.jeecgframework.core.util.LogUtil.info(reslist.get(i));
//                        Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
//                        });
//                        AssetEntity asset = new AssetEntity();
//                        asset.setId(list2.get("_id").toString());
//                        if (list2.containsKey("fullName")) {
//                            asset.setFullname(list2.get("fullName").toString());
//                        }
//                        if (list2.containsKey("type")) {
//                            asset.setType(list2.get("type").toString());
//                        }
//                        if (list2.containsKey("hitType")) {
//                            asset.setHittype(list2.get("hitType").toString());
//                        }
//                        if (list2.containsKey("identification")) {
//                            asset.setIdentification(list2.get("identification").toString());
//                        }
//                        if (list2.containsKey("assetCount")) {
//                            asset.setAssetcount(Integer.parseInt(list2.get("assetCount").toString()));
//                        }
//                        if (true == list2.get("activity")) {
//                            asset.setActivity(1);
//                        } else {
//                            asset.setActivity(0);
//                        }
//                        if (list2.containsKey("ip")) {
//                            asset.setIp(list2.get("ip").toString());
//                        }
//                        if (list2.containsKey("path")) {
//                            asset.setPath(list2.get("path").toString());
//                        }
//                        if (list2.containsKey("leaf")) {
//                            if (true == list2.get("leaf")) {
//                                asset.setLeaf(1);
//                            } else {
//                                asset.setLeaf(0);
//                            }
//                        }
//                        if (list2.containsKey("entity")) {
//                            Map<String, String> entity = (Map<String, String>) list2.get("entity");
//                            if (entity.containsKey("fullName")) {
//                                asset.setFullname(entity.get("fullName").toString());
//                            }
//                            if (entity.containsKey("IP")) {
//                                asset.setIp(entity.get("IP").toString());
//                            }
//                            if (entity.containsKey("mac")) {
//                                asset.setMac(entity.get("mac").toString());
//                            }
//                            if (entity.containsKey("identification")) {
//                                asset.setIdentification(entity.get("identification").toString());
//                            }
//                            if (entity.containsKey("deviceType")) {
//                                asset.setDevicetype(entity.get("deviceType").toString());
//                            }
//                            if (entity.containsKey("type")) {
//                                asset.setType(entity.get("type").toString());
//                            }
//                            if (entity.containsKey("deviceId")) {
//                                asset.setDeviceid(entity.get("deviceId").toString());
//                            }
//                            asset.setLeaf(2);
//                        }
//                        asset.setIsread(0);
//                        asset.setIsassetid(0);
////                        asset.setParentid(assetentity.getId());
//                        try {
//                            assetService.saveOrUpdate(asset);
//                        } catch (Exception e) {
//                            e.printStackTrace();
//                        }
//                    }
//                }
//                //更新isread=1
//                status = 30;
//                break;
//            case 50://判断下数据库是否为空，为空则重新运行getCount
//                sbsb = new StringBuffer();
//                sbsb.append("FROM AssetEntity  where 1=1");
//                mcasset = systemService.findByQueryString(sbsb.toString());
//                if (mcasset.size() == 0) {
//                    status = 0;
//                } else {
//                    logger.info("Asset statMaction is nothing to do");
//                    status = 60;
//                }
//                break;
//            case 60:
//                sbsb = new StringBuffer();
//                sbsb.append("FROM AssetEntity  where leaf=2 and isassetid=0 ");
//                mcasset = systemService.findByQueryString(sbsb.toString());
//                if (mcasset.size() > 0) {
//                    status = 70;
//                    mcasset.get(0).setIsassetid(1);
//                    assetService.saveOrUpdate(mcasset.get(0));
//                } else {
//                    status = 80;
//                }
//                break;
//            case 70:
//                j = httpClientUtils.findAlarmRuleCanSubscribeByAssetId(mcasset.get(0).getId());
//                if (j.isSuccess()) {
//                    List<Object> reslist = (List<Object>) j.getObj();
//                    for (int i = 0; i < reslist.size(); i++) {
//                        Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
//                        });
//
//                        InforuleEntity iruleEntity=new InforuleEntity();
//                        iruleEntity.setId(list2.get("_id").toString());
////                        iruleEntity.setAssetid(mcasset.get(0).getId());
////                        iruleEntity.setCreatetime(list2.get("createTime").toString());
//                        iruleEntity.setName(list2.get("name").toString());
//                        iruleEntity.setType(Integer.parseInt(list2.get("type").toString()));
//                        iruleEntity.setSubscribed(0);
//                        if (list2.containsKey("subscribed")) {
//                            if (true == list2.get("subscribed")) {
//                                iruleEntity.setSubscribed(1);
//                            }
//                        }
//                        if (0 == Integer.parseInt(list2.get("type").toString())) {
//                            iruleEntity.setSubscribed(1);
//                            j=httpClientUtils.alarmSubscribe(iruleEntity.getId(),"subscribe");
//                            logger.info(j);
//                        }
////                        else if (1 == Integer.parseInt(list2.get("type").toString())) {
////
////                        }
//
//                        inforuleService.saveOrUpdate(iruleEntity);
//
//                    }
//                }
//                status = 60;
//                break;
//            case 80:
//                j = httpClientUtils.getAssetInfoData();
//                if (j.isSuccess()) {
//                    List<Object> reslist = (List<Object>) j.getObj();
//                    if(reslist.size()>0){
//                        for (int i = 0; i < reslist.size(); i++) {
//                            Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
//                            });
//                            Map<String, Object> asset=new HashMap<String, Object>();
//                            if(list2.containsKey("asset")){
//                                asset = JSON.parseObject(list2.get("asset").toString(), new TypeReference<Map<String, Object>>() {
//                                });
//                            }
//                            InfoEntity infoEntity=new InfoEntity();
//                            AlarmEntity alarmEntity=new AlarmEntity();
//                            if ("info".endsWith(list2.get("type").toString()) ) {
//                                infoEntity.setId(list2.get("alarmRule").toString());
//                                infoEntity.setType(list2.get("type").toString());
//                                infoEntity.setContent(list2.get("content").toString());
////                                infoEntity.setCreatetime(list2.get("createTime").toString());
//                                if(asset.size()>0){
////                                    infoEntity.setAssetid(asset.get("_id").toString());
////                                    Map<String, Object> entity = JSON.parseObject(asset.get("entity").toString(), new TypeReference<Map<String, Object>>() {
////                                    });
////                                    infoEntity.setAssetdeviceid(entity.get("deviceId").toString());
////                                    infoEntity.setAssettype(entity.get("type").toString());
//                                }
//                                infoService.saveOrUpdate(infoEntity);
//                            }else{
//                                alarmEntity.setId(list2.get("alarmRule").toString());
//                                alarmEntity.setType(list2.get("type").toString());
//                                alarmEntity.setContent(list2.get("content").toString());
////                                alarmEntity.setCreatetime(list2.get("createTime").toString());
//                                if(asset.size()>0){
////                                    alarmEntity.setAssetid(asset.get("_id").toString());
////                                    Map<String, Object> entity = JSON.parseObject(asset.get("entity").toString(), new TypeReference<Map<String, Object>>() {
////                                    });
////                                    alarmEntity.setAssetdeviceid(entity.get("deviceId").toString());
////                                    alarmEntity.setAssettype(entity.get("type").toString());
//                                }
//                                alarmService.saveOrUpdate(alarmEntity);
//                            }
//                        }
//                    }else{
//                        status = 90;
//                    }
//                }else{
//                    status = 90;
//                }
//                break;
//            case 90:
//                sbsb = new StringBuffer();
//                sbsb.append("FROM AssetEntity  where devicetype!=''");
//                mcasset = systemService.findByQueryString(sbsb.toString());
//                if (mcasset.size() > 0) {
//                    for(int i=0;i<mcasset.size();i++){
//                        j = httpClientUtils.findElementsByAssetId(mcasset.get(i).getId());
//                        if (j.isSuccess()) {
//                            List<Object> reslist = (List<Object>) j.getObj();
//                            for (int k = 0; k < reslist.size(); k++) {
//                                Map<String, Object> list2 = JSON.parseObject(reslist.get(k).toString(), new TypeReference<Map<String, Object>>() {
//                                });
//                                Switch01Entity switch01Entity=new Switch01Entity();
//                                switch01Entity.setId(list2.get("_id").toString());
//                                switch01Entity.setFullname(list2.get("fullName").toString());
//                                switch01Entity.setIp(list2.get("code").toString());
////                                switch01Entity.setPath(list2.get("path").toString());
////                                switch01Entity.setAssetid(mcasset.get(i).getId());
//                                if(true==list2.get("value")){
//                                    switch01Entity.setState(1);
//                                }else{
//                                    switch01Entity.setState(0);
//                                }
//                                switch01Service.saveOrUpdate(switch01Entity);
//                            }
//                        }
//                    }
//                }
//                status = 80;
//                break;
//            case 100:
////                j = httpClientUtils.findElementsByAssetId();
////                if (j.isSuccess()) {
////                    List<Object> reslist = (List<Object>) j.getObj();
////                    for (int i = 0; i < reslist.size(); i++) {
////                        Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
////                        });
////                    }
////                }
//                break;
//            default:
//                break;
//        }
//        org.jeecgframework.core.util.LogUtil.info(status);
    }

    private int status1 = 0;

//    @Scheduled(cron = "0/10 * * * * *")
    public void m1() {
        switch (status1) {
            case 0:
                status1 = 10;
                break;
            case 10:
                status1 = 20;
                break;
            case 20:
                status1 = 30;
                break;
            case 30:
                status1 = 0;
                break;
            default:
                break;
        }
        org.jeecgframework.core.util.LogUtil.info(status1);
//        org.jeecgframework.core.util.LogUtil.info("1m");
    }

    /**
     * 每天1点执行一次
     * */
//    @Scheduled(cron="0 0 1 * * ?")
//    public void oneOClockPerDay(){
//        org.jeecgframework.core.util.LogUtil.info("1h");
//    }


}