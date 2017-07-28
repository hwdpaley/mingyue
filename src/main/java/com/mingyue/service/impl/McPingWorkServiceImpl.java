package com.mingyue.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.mc.HttpClientUtils;
import com.mingyue.entity.alarm.AlarmEntity;
import com.mingyue.entity.asset.AssetEntity;
import com.mingyue.entity.info.InfoEntity;
import com.mingyue.entity.inforule.InforuleEntity;
import com.mingyue.entity.switch01.Switch01Entity;
import com.mingyue.service.McPingWorkServiceI;
import com.mingyue.service.alarm.AlarmServiceI;
import com.mingyue.service.asset.AssetServiceI;
import com.mingyue.service.info.InfoServiceI;
import com.mingyue.service.inforule.InforuleServiceI;
import com.mingyue.service.switch01.Switch01ServiceI;
import com.mingyue.service.udp.Dgram;
import com.mingyue.service.udp.UdpServerImpl;
import net.sf.json.JSONArray;
import org.apache.log4j.Logger;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.web.system.service.MutiLangServiceI;
import org.jeecgframework.web.system.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.SocketException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service("mcPingWorkService")
public class McPingWorkServiceImpl implements McPingWorkServiceI {
    private static final Logger logger = Logger.getLogger(McPingWorkServiceImpl.class);
    @Autowired
    private SystemService systemService;
    @Autowired
    private MutiLangServiceI mutiLangService;
    @Autowired
    private AssetServiceI assetService;
    @Autowired
    private InforuleServiceI inforuleService;
    @Autowired
    private AlarmServiceI alarmService;
    @Autowired
    private InfoServiceI infoService;
    @Autowired
    private Switch01ServiceI switch01Service;


    //    private int count = 0;
    private int status = 0;
    private HttpClientUtils httpClientUtils = null;
    private String cookie = null;
    //    private String parentId = "";
//    private AjaxJson j = new AjaxJson();
    private AssetEntity assetEntity = new AssetEntity();
    //    StringBuffer sbsb = new StringBuffer();
    List<AssetEntity> assetEntityList;
    private boolean isLogin = false;
    private int asset_i=0;
//    private InforuleEntity inforuleEntity = new InforuleEntity();

    public AjaxJson mcAddNodes() {
        AjaxJson j = new AjaxJson();
        if (isLogin) {
            StringBuffer sbsb = new StringBuffer();
            sbsb.append("FROM AssetEntity  where assetid!=null");
            List<AssetEntity> assetEntityLists = systemService.findByQueryString(sbsb.toString());
            for (AssetEntity assetEntity : assetEntityLists) {
                AjaxJson k = httpClientUtils.removeDeviceNode(assetEntity);
//                if (k.isSuccess())
                {
                    assetEntity.setAssetid(null);
                    systemService.saveOrUpdate(assetEntity);
                }
            }

            sbsb = new StringBuffer();
            sbsb.append("FROM AssetEntity  where assetid=null or assetid=''");
            List<AssetEntity> assetEntityList = systemService.findByQueryString(sbsb.toString());
            for (AssetEntity assetEntity : assetEntityList) {
                AjaxJson k = httpClientUtils.addDeviceNode(assetEntity);
                if (k.isSuccess()) {
                    logger.info(j.getObj());
                    Map<String, Object> map = (Map<String, Object>) k.getObj();
                    assetEntity.setAssetid(map.get("_id").toString());
                    Map<String, Object> entity = (Map<String, Object>) map.get("entity");
                    assetEntity.setDeviceid(entity.get("deviceId").toString());
                    systemService.saveOrUpdate(assetEntity);
                }
            }
            j.setMsg("资产节点添加完毕");
        } else {
            j.setSuccess(false);
            j.setMsg("MC未登录,请开服务");
        }
        return j;
    }

    class UdpSocket extends Thread {
        static final int INPORT = 12010;
        private byte[] buf = new byte[2048];
        private DatagramPacket dp = new DatagramPacket(buf, buf.length);
        private DatagramSocket socket;

        public UdpSocket() {

        }

        public void run() {
            try {
                socket = new DatagramSocket(INPORT);// 创建一接收消息的对象，而不是每次接收消息都创建一个
                System.out.println("Udp Server started");
                while (true) {
                    socket.receive(dp);
                    //接收到客户端的消息
                    String rstr = Dgram.toString(dp);

                    try {
                        Map<String, Object> map = JSON.parseObject(rstr, new TypeReference<Map<String, Object>>() {
                        });
//                        String id = (String) map.get("distinct");
                        Map<String, Object> idmap=JSON.parseObject(map.get("distinct").toString(), new TypeReference<Map<String, Object>>() {
                        });
                        if("switch".endsWith(idmap.get("name").toString())){
                            Switch01Entity switch01Entity = systemService.findUniqueByProperty(Switch01Entity.class, "id", idmap.get("id").toString());
                            if (switch01Entity != null) {
                                if (map.get("res") != null) {
                                    Map<String, Object> res = JSON.parseObject(map.get("res").toString(), new TypeReference<Map<String, Object>>() {
                                    });
                                    if (true == res.get("value")) {
                                        switch01Entity.setState(1);
                                    } else {
                                        switch01Entity.setState(0);
                                    }
                                    systemService.saveOrUpdate(switch01Entity);
                                }
                            }
                        }

                    } catch (Exception e) {
                        e.printStackTrace();
                    }


                    String rcvd = rstr + ",from address:"
                            + dp.getAddress() + ",port:" + dp.getPort();
                    System.out.println("From Client:" + rcvd);

//                String echoString = rcvd;
//                DatagramPacket echo = Dgram.toDatagram(echoString,
//                        dp.getAddress(), dp.getPort());
//                //将数据包发送给客户端
//                socket.send(echo);
                }
            } catch (SocketException e) {
                System.err.println("Can't open socket");
//                System.exit(1);
            } catch (IOException e) {
                System.err.println("Communication error");
                e.printStackTrace();
            }
        }
    }

    public void mcwork() {

        org.jeecgframework.core.util.LogUtil.info(new Date().getTime());
        org.jeecgframework.core.util.LogUtil.info("mcwork-----任务测试-------");
        switch (status) {
            case 0:
//                assetentity.setParentid("");
//                assetentity.setId("");
                httpClientUtils = new HttpClientUtils();
//                TSDemo demo = systemService.getEntity(TSDemo.class, "123456");
//                try {
////                    HttpSession session = ContextHolderUtils.getSession();
////                    TSUser user = ResourceUtil.getSessionUserName();
////                    if(user!=null)
//                    {
//
//                    }
//                } catch (Exception e) {
//                    e.printStackTrace();
//                }
                String aa = mutiLangService.getMapLang("common.mcIp");
                if (aa != null) {
                    httpClientUtils.setUrl(mutiLangService.getMapLang("common.mcIp"));
                    httpClientUtils.setWebSocketUrl(mutiLangService.getMapLang("common.mcWebSocketIp"));
                    httpClientUtils.setUserName(mutiLangService.getMapLang("common.mcUserName"));
                    httpClientUtils.setPassWord(mutiLangService.getMapLang("common.mcPassWord"));
                    status = 10;
                    UdpSocket udpSocket = new UdpSocket();
                    udpSocket.start();
                }
                break;
            case 10:
                cookie = httpClientUtils.login();
                if (cookie != null && cookie.length() > 0) {
                    status = 20;
                    isLogin = true;
                }
                break;
            case 20:
                StringBuffer sbsb = new StringBuffer();
                sbsb.append("FROM AssetEntity  where assetid!=null ");
                assetEntityList = systemService.findByQueryString(sbsb.toString());
                asset_i=0;
                status = 30;
                break;
            case 30:
                if(asset_i<assetEntityList.size()){
                    assetEntity=assetEntityList.get(asset_i);
                    asset_i++;
                    AjaxJson j = httpClientUtils.findAlarmRuleCanSubscribeByAssetId(assetEntity.getAssetid());
                    if (j.isSuccess()) {
                        List<Object> reslist = (List<Object>) j.getObj();
                        for (int i = 0; i < reslist.size(); i++) {
                            Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
                            });

                            InforuleEntity iruleEntity = new InforuleEntity();
                            iruleEntity.setId(list2.get("_id").toString());
                            iruleEntity.setAssetEntity(assetEntity);
                            iruleEntity.setName(list2.get("name").toString());
                            iruleEntity.setType(Integer.parseInt(list2.get("type").toString()));
                            iruleEntity.setSubscribed(0);
                            if (list2.containsKey("subscribed")) {
                                if (true == list2.get("subscribed")) {
                                    iruleEntity.setSubscribed(1);
                                }
                            }
                            if (0 == Integer.parseInt(list2.get("type").toString())) {
                                iruleEntity.setSubscribed(1);
                                j = httpClientUtils.alarmSubscribe(iruleEntity.getId(), "subscribe");
                                logger.info(j);
                            }
                            inforuleService.saveOrUpdate(iruleEntity);
                        }
                    }
                }else{
                    status = 20;
                }
//                sbsb = new StringBuffer();
//                sbsb.append("FROM Switch01Entity  where switch01Entity.id!=null ");
//                List<Switch01Entity> switch01EntityList = systemService.findByQueryString(sbsb.toString());
//                for (Switch01Entity switch01Entity : switch01EntityList) {
//                    Map<String, Object> map = new HashMap<String, Object>();
//                    map.put("system","Portal");
//                    map.put("deviceConfigId",mutiLangService.getMapLang("common.mcPingId"));
//                    map.put("allow_overlay",true);
//                    map.put("module","ping");
//                    map.put("parameter",switch01Entity.getIp());
//
//                    AjaxJson j = httpClientUtils.tiotWeb(map);
//                    if(j.isSuccess()){
//                        switch01Entity.setState(1);
//                        systemService.saveOrUpdate(switch01Entity);
//                    }
//
//                }
                break;
            case 40:
//                isLogin=true;
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
                break;
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
            case 70:
//                AjaxJson j = httpClientUtils.findAlarmRuleCanSubscribeByAssetId(mcasset.getId());
//                if (j.isSuccess()) {
//                    List<Object> reslist = (List<Object>) j.getObj();
//                    for (int i = 0; i < reslist.size(); i++) {
//                        Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
//                        });
//
//                        InforuleEntity iruleEntity = new InforuleEntity();
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
//                            j = httpClientUtils.alarmSubscribe(iruleEntity.getId(), "subscribe");
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
                status = 60;
                break;
            case 80:
//                j = httpClientUtils.getAssetInfoData();
//                if (j.isSuccess()) {
//                    List<Object> reslist = (List<Object>) j.getObj();
//                    if (reslist.size() > 0) {
//                        for (int i = 0; i < reslist.size(); i++) {
//                            Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
//                            });
//                            Map<String, Object> asset = new HashMap<String, Object>();
//                            if (list2.containsKey("asset")) {
//                                asset = JSON.parseObject(list2.get("asset").toString(), new TypeReference<Map<String, Object>>() {
//                                });
//                            }
//                            InfoEntity infoEntity = new InfoEntity();
//                            AlarmEntity alarmEntity = new AlarmEntity();
//                            if ("info".endsWith(list2.get("type").toString())) {
//                                infoEntity.setId(list2.get("alarmRule").toString());
//                                infoEntity.setType(list2.get("type").toString());
//                                infoEntity.setContent(list2.get("content").toString());
////                                infoEntity.setCreatetime(list2.get("createTime").toString());
//                                if (asset.size() > 0) {
////                                    infoEntity.setAssetid(asset.get("_id").toString());
////                                    Map<String, Object> entity = JSON.parseObject(asset.get("entity").toString(), new TypeReference<Map<String, Object>>() {
////                                    });
////                                    infoEntity.setAssetdeviceid(entity.get("deviceId").toString());
////                                    infoEntity.setAssettype(entity.get("type").toString());
//                                }
//                                infoService.saveOrUpdate(infoEntity);
//                            } else {
//                                alarmEntity.setId(list2.get("alarmRule").toString());
//                                alarmEntity.setType(list2.get("type").toString());
//                                alarmEntity.setContent(list2.get("content").toString());
////                                alarmEntity.setCreatetime(list2.get("createTime").toString());
//                                if (asset.size() > 0) {
////                                    alarmEntity.setAssetid(asset.get("_id").toString());
////                                    Map<String, Object> entity = JSON.parseObject(asset.get("entity").toString(), new TypeReference<Map<String, Object>>() {
////                                    });
////                                    alarmEntity.setAssetdeviceid(entity.get("deviceId").toString());
////                                    alarmEntity.setAssettype(entity.get("type").toString());
//                                }
//                                alarmService.saveOrUpdate(alarmEntity);
//                            }
//                        }
//                    } else {
//                        status = 90;
//                    }
//                } else {
//                    status = 90;
//                }
                break;
            case 90:
//                sbsb = new StringBuffer();
//                sbsb.append("FROM AssetEntity  where devicetype!=''");
//                mcasset = systemService.findByQueryString(sbsb.toString());
//                if (mcasset.size() > 0) {
//                    for (int i = 0; i < mcasset.size(); i++) {
//                        j = httpClientUtils.findElementsByAssetId(mcasset.get(i).getId());
//                        if (j.isSuccess()) {
//                            List<Object> reslist = (List<Object>) j.getObj();
//                            for (int k = 0; k < reslist.size(); k++) {
//                                Map<String, Object> list2 = JSON.parseObject(reslist.get(k).toString(), new TypeReference<Map<String, Object>>() {
//                                });
//                                Switch01Entity switch01Entity = new Switch01Entity();
//                                switch01Entity.setId(list2.get("_id").toString());
//                                switch01Entity.setFullname(list2.get("fullName").toString());
//                                switch01Entity.setIp(list2.get("code").toString());
////                                switch01Entity.setPath(list2.get("path").toString());
////                                switch01Entity.setAssetid(mcasset.get(i).getId());
//                                if (true == list2.get("value")) {
//                                    switch01Entity.setState(1);
//                                } else {
//                                    switch01Entity.setState(0);
//                                }
//                                switch01Service.saveOrUpdate(switch01Entity);
//                            }
//                        }
//                    }
//                }
                status = 80;
                break;
            case 100:
//                j = httpClientUtils.findElementsByAssetId();
//                if (j.isSuccess()) {
//                    List<Object> reslist = (List<Object>) j.getObj();
//                    for (int i = 0; i < reslist.size(); i++) {
//                        Map<String, Object> list2 = JSON.parseObject(reslist.get(i).toString(), new TypeReference<Map<String, Object>>() {
//                        });
//                    }
//                }
                break;
            default:
                break;
        }
        org.jeecgframework.core.util.LogUtil.info(status);
    }

    private int status1 = 0;
    private int i=0;
    List<Switch01Entity> switch01EntityList;
//    Switch01Entity switch01Entity;
    //    StringBuffer sbsb1 = new StringBuffer();
//    List<AssetEntity> mcasset1;
////    TSIcon icon;
//    private AjaxJson j1 = new AjaxJson();
//
    private String distinct(String name,String id){
        Map<String, Object> idmap = new HashMap<String, Object>();
        idmap.put("name",name);
        idmap.put("id",id);
        return JSON.toJSONString(idmap);
    }
    public void mcPingwork() {//检查资产是否已经登记，
        org.jeecgframework.core.util.LogUtil.info(new Date().getTime());
        org.jeecgframework.core.util.LogUtil.info("--------mcPingwork------");
        switch (status1) {
            case 0:
                if (isLogin) {
                    status1 = 10;
                }
                break;
            case 10:

                StringBuffer sbsb = new StringBuffer();
                sbsb.append("FROM Switch01Entity  where switch01Entity.id!=null ");
                switch01EntityList = systemService.findByQueryString(sbsb.toString());
                i=0;
                status1 = 20;
                break;
            case 20:
                if(i<switch01EntityList.size()){
                    Switch01Entity switch01Entity=switch01EntityList.get(i);
                    i++;
                    Map<String, Object> map = new HashMap<String, Object>();
                    map.put("system", "Portal");
                    map.put("deviceConfigId", mutiLangService.getMapLang("common.mcPingId"));
                    map.put("allow_overlay", "true");
                    map.put("module", "ping");
                    map.put("trap", "true");
                    map.put("parameter", switch01Entity.getIp());
                    map.put("distinct", distinct("switch",switch01Entity.getId()));
                    AjaxJson j = httpClientUtils.tiotWeb(map);
//                    if (j.isSuccess()) {
//                        Map<String, Object> reslist = (Map<String, Object>) j.getObj();
//                        if (reslist != null) {
//                            if (true == reslist.get("value")) {
//                                switch01Entity.setState(1);
//                            } else {
//                                switch01Entity.setState(0);
//                            }
//                        }
//                        systemService.saveOrUpdate(switch01Entity);
//                    }
                }else{
                    status1 = 10;
                }

                break;
//            case 30:
//                status1 = 0;
//                break;
            default:
                break;
        }
//        org.jeecgframework.core.util.LogUtil.info(status1);
    }


}
