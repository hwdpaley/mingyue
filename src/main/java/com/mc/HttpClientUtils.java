package com.mc;

/**
 * Created by Tony on 2/7/15.
 */

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.mingyue.entity.asset.AssetEntity;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.conn.tsccm.ThreadSafeClientConnManager;

import java.io.IOException;
import java.text.MessageFormat;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.apache.http.cookie.Cookie;
import org.apache.http.message.BasicNameValuePair;

import org.jeecgframework.core.common.model.json.AjaxJson;

import java.util.*;

/**
 * 分装一个http请求的工具类
 *
 * @author
 */
public class HttpClientUtils {
    private static final Log log = LogFactory.getLog(HttpClientUtils.class);
    /**
     * 初始化HttpClient
     */
    private static HttpClient httpClient = null;

    private String url,webSocketUrl;

    public String getWebSocketUrl() {
        return webSocketUrl;
    }

    public void setWebSocketUrl(String webSocketUrl) {
        this.webSocketUrl = webSocketUrl;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    private String passWord;

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    private String userName;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    /**
     * 生产HttpClient实例
     * 公开，静态的工厂方法，需要使用时才去创建该单体
     *
     * @return
     */
    public static HttpClient getHttpClient() {
        if (httpClient == null) {
            httpClient = new DefaultHttpClient(new ThreadSafeClientConnManager());
        }
        return httpClient;
    }


    public String login() {
        AjaxJson j = new AjaxJson();
        Map<String, String> map = new HashMap<String, String>();
        map.put("username", userName);
        map.put("password", passWord);
        map.put("responseResult", "json");
        try {
            j = postUrlWithParams(url + "/Service/login", map);
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
        }
        if (j.isSuccess()) {
            Map<String, Object> list2 = JSON.parseObject(j.getObj().toString(), new TypeReference<Map<String, Object>>() {
            });
            Map<String, Object> res = JSON.parseObject(list2.get("res").toString(), new TypeReference<Map<String, Object>>() {
            });
            j.setObj(res);
        }
        return j.getMsg();
    }

    public AjaxJson findAssetDirectory(String parentId) {
        AjaxJson j = new AjaxJson();
        try {
            j = getUrl(url + "/Service/findAssetDirectory?parent=" + parentId + "");
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
            j.setObj(null);
        }
        return j;
    }
    public AjaxJson findAssetByDir(String parentId) {
        AjaxJson j = new AjaxJson();
        try {
            j = getUrl(url + "/Service/findAssetByDir?dir=" + parentId + "");
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
            j.setObj(null);
        }
        return j;
    }
    public AjaxJson findAlarmRuleCanSubscribeByAssetId(String assetId) {
        AjaxJson j = new AjaxJson();
        try {
            j = getUrl(url + "/Service/findAlarmRuleCanSubscribeByAssetId?assetId=" + assetId + "");
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
            j.setObj(null);
        }
        return j;
    }
    public AjaxJson alarmSubscribe(String alarmRule,String subscribe) {
        AjaxJson j = new AjaxJson();
        try {
            j = getUrl(url + "/Service/alarmSubscribe?owner=" + userName + "&alarmRule="+alarmRule+"&action="+subscribe);
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
            j.setObj(null);
        }
        return j;
    }
    public AjaxJson getAssetInfoData() {
        AjaxJson j = new AjaxJson();
        Map<String, String> map = new HashMap<String, String>();
        map.put("owner", userName);
        map.put("mark", "true");
        map.put("noLimitType", "true");
        map.put("limit", "50");
        try {
            j = postUrlWithParams_1(url + "/Service/findAlarmLog", map);
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
        }
//        if (j.isSuccess()) {
//            Map<String, Object> list2 = JSON.parseObject(j.getObj().toString(), new TypeReference<Map<String, Object>>() {
//            });
//            Map<String, Object> res = JSON.parseObject(list2.get("res").toString(), new TypeReference<Map<String, Object>>() {
//            });
//            j.setObj(res);
//        }
        return j;
    }
    public AjaxJson findElementsByAssetId(String assetId) {
        AjaxJson j = new AjaxJson();
        try {
            j = getUrl(url + "/Service/SBP/findElementsByAssetId?assetId=" + assetId );
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
            j.setObj(null);
        }
        return j;
    }

    /**
     * 添加节点
     * @param assetEntity
     * @return
     */
    public AjaxJson addDeviceNode(AssetEntity assetEntity) {
        AjaxJson j = new AjaxJson();
        Map<String, String> map = new HashMap<String, String>();
//        map.put("parentNode", assetEntity.getParentid());
        map.put("IP", assetEntity.getIp());
        map.put("fullName", assetEntity.getFullname());
        map.put("deviceType", assetEntity.getTSIcon().getIconName());
//        if(assetEntity.getAssetEntity()!=null){
//            map.put("parentNode",assetEntity.getAssetEntity().getId());
//        }else{
//            map.put("parentNode","");
//        }
        map.put("parentNode","");
        try {
            j = postUrlWithParams_2(url + "/Service/ThinFunClient/addDeviceNode", map);
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
        }
        return j;
    }
    public AjaxJson tiotWeb(Map<String, Object> map) {
        AjaxJson j = new AjaxJson();
        try {
            j = postUrlWithParams_2(webSocketUrl + "/TiotWeb/service/Ajax/invokeProcedure.do", map);
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
        }
        return j;
    }
    /**
     * 更新节点
     * @param assetEntity
     * @return
     */
    public AjaxJson updateDeviceNode(AssetEntity assetEntity) {
        AjaxJson j = new AjaxJson();
        Map<String, String> map = new HashMap<String, String>();
//        map.put("parentNode", assetEntity.getParentid());
        map.put("IP", assetEntity.getIp());
        map.put("fullName", assetEntity.getFullname());
//        map.put("deviceType", assetEntity.getDevicetype());
        try {
            j = postUrlWithParams_1(url + "/Service/ThinFunClient/updateDeviceNode", map);
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
        }
        return j;
    }
    /**
     * 删除节点
     * @param assetEntity
     * @return
     */
    public AjaxJson removeDeviceNode(AssetEntity assetEntity) {
        AjaxJson j = new AjaxJson();
        try {
            j = getUrl(url + "/Service/ThinFunClient/removeDeviceNode?id=" + assetEntity.getAssetid() );
        } catch (Exception e) {
            org.jeecgframework.core.util.LogUtil.info(e.toString());
            j.setSuccess(false);
            j.setMsg(null);
            j.setObj(null);
        }
        return j;
    }









    public AjaxJson getUrl(String url)
            throws ClientProtocolException, IOException {
        AjaxJson j = new AjaxJson();
        // 默认的client类。
        HttpClient client = new DefaultHttpClient();
        // 设置为get取连接的方式.
        HttpGet get = new HttpGet(url);
        // 得到返回的response.
        HttpResponse response = client.execute(get);
        // 得到返回的client里面的实体对象信息.
        HttpEntity entity = response.getEntity();

        if (entity != null) {
//            org.jeecgframework.core.util.LogUtil.info("内容编码是：" + entity.getContentEncoding());
//            org.jeecgframework.core.util.LogUtil.info("内容类型是：" + entity.getContentType());
            // 得到返回的主体内容.
            InputStream instream = entity.getContent();
            try {
                BufferedReader reader = new BufferedReader(new InputStreamReader(instream, "UTF-8"));
                j.setObj(reader.readLine());
                Map<String, Object> list2 = JSON.parseObject(j.getObj().toString(), new TypeReference<Map<String, Object>>() {});
                if(true == list2.get("success")){
                    List<Object> lis = new ArrayList<Object>();
                    lis = (List<Object>) list2.get("res");
                    j.setObj(lis);
                }else{
                    j.setSuccess(false);
                    j.setObj(null);
                }

            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                instream.close();
            }
        }

        // 关闭连接.
        client.getConnectionManager().shutdown();
        return j;
    }


    public AjaxJson postUrlWithParams(String url, Map params)
            throws Exception {
        DefaultHttpClient httpclient = new DefaultHttpClient();
        AjaxJson j = new AjaxJson();
        try {

            HttpPost httpost = new HttpPost(url);
            // 添加参数
            List<NameValuePair> nvps = new ArrayList<NameValuePair>();
            if (params != null && params.keySet().size() > 0) {
                Iterator iterator = params.entrySet().iterator();
                while (iterator.hasNext()) {
                    Map.Entry entry = (Map.Entry) iterator.next();
                    nvps.add(new BasicNameValuePair((String) entry.getKey(),
                            (String) entry.getValue()));
                }
            }

            httpost.setEntity(new UrlEncodedFormEntity(nvps, "UTF-8"));

            HttpResponse response = httpclient.execute(httpost);
            HttpEntity entity = response.getEntity();

//            System.out.println("Login form get: " + response.getStatusLine()
//                    + entity.getContent());

            j.setObj(dump(entity, "UTF-8"));
//            System.out.println("Post logon cookies:");
            List<Cookie> cookies = httpclient.getCookieStore().getCookies();
            if (cookies.isEmpty()) {
                System.out.println("None");
            } else {
                for (int i = 0; i < cookies.size(); i++) {
                    System.out.println("- " + cookies.get(i).toString());
                }
                j.setMsg(cookies.get(0).getValue().toString());
            }
            j.setSuccess(true);
        } finally {
            // 关闭请求
            httpclient.getConnectionManager().shutdown();
        }
        return j;
    }
    public AjaxJson postUrlWithParams_1(String url, Map params)
            throws Exception {
        DefaultHttpClient httpclient = new DefaultHttpClient();
        AjaxJson j = new AjaxJson();
        try {

            HttpPost httpost = new HttpPost(url);
            // 添加参数
            List<NameValuePair> nvps = new ArrayList<NameValuePair>();
            if (params != null && params.keySet().size() > 0) {
                Iterator iterator = params.entrySet().iterator();
                while (iterator.hasNext()) {
                    Map.Entry entry = (Map.Entry) iterator.next();
                    nvps.add(new BasicNameValuePair((String) entry.getKey(),
                            (String) entry.getValue()));
                }
            }

            httpost.setEntity(new UrlEncodedFormEntity(nvps, "UTF-8"));

            HttpResponse response = httpclient.execute(httpost);
            HttpEntity entity = response.getEntity();

//            System.out.println("Login form get: " + response.getStatusLine()
//                    + entity.getContent());

            j.setObj(dump(entity, "UTF-8"));
//            System.out.println("Post logon cookies:");
            Map<String, Object> list2 = JSON.parseObject(j.getObj().toString(), new TypeReference<Map<String, Object>>() {});
            if(true == list2.get("success")){
                List<Object> lis = new ArrayList<Object>();
                lis = (List<Object>) list2.get("res");
                j.setObj(lis);
            }else{
                j.setSuccess(false);
                j.setObj(null);
            }
        } finally {
            // 关闭请求
            httpclient.getConnectionManager().shutdown();
        }
        return j;
    }
    public AjaxJson postUrlWithParams_2(String url, Map params)
            throws Exception {
        DefaultHttpClient httpclient = new DefaultHttpClient();
//        httpclient.getConnectionManager().wait(2000);
//        getHttpConnectionManager().getParams().setConnectionTimeout(60000);
        AjaxJson j = new AjaxJson();
        try {

            HttpPost httpost = new HttpPost(url);
            // 添加参数
            List<NameValuePair> nvps = new ArrayList<NameValuePair>();
            if (params != null && params.keySet().size() > 0) {
                Iterator iterator = params.entrySet().iterator();
                while (iterator.hasNext()) {
                    Map.Entry entry = (Map.Entry) iterator.next();
                    nvps.add(new BasicNameValuePair((String) entry.getKey(),
                            (String) entry.getValue()));
                }
            }

            httpost.setEntity(new UrlEncodedFormEntity(nvps, "UTF-8"));

            HttpResponse response = httpclient.execute(httpost);
            HttpEntity entity = response.getEntity();

//            System.out.println("Login form get: " + response.getStatusLine()
//                    + entity.getContent());

            try {
                j.setObj(dump(entity, "UTF-8"));
                Map<String, Object> list2 = JSON.parseObject(j.getObj().toString(), new TypeReference<Map<String, Object>>() {});
                if(true == list2.get("success")){
                    List<Object> lis = new ArrayList<Object>();
//                lis = (List<Object>) list2.get("res");
                    j.setObj(list2.get("res"));
                }else{
                    j.setSuccess(false);
                    j.setObj(null);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
//            System.out.println("Post logon cookies:");

        } finally {
            // 关闭请求
            httpclient.getConnectionManager().shutdown();
        }
        return j;
    }
    private static String dump(HttpEntity entity, String encoding)
            throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(
                entity.getContent(), encoding));
//        System.out.println(br.readLine());
        String r = br.readLine();
        return r;
    }

    /**
     * POST方式调用
     *
     * @param url
     * @param params 参数为NameValuePair键值对对象
     * @return 响应字符串
     * @throws java.io.UnsupportedEncodingException
     */
    public static String executeByPOST(String url, List<NameValuePair> params) {
        HttpClient httpclient = getHttpClient();
        HttpPost post = new HttpPost(url);

        ResponseHandler<String> responseHandler = new BasicResponseHandler();
        String responseJson = null;
        try {
            if (params != null) {
                post.setEntity(new UrlEncodedFormEntity(params));
            }
            responseJson = httpclient.execute(post, responseHandler);
            log.info("HttpClient POST请求结果：" + responseJson);
        } catch (ClientProtocolException e) {
            e.printStackTrace();
            log.info("HttpClient POST请求异常：" + e.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            httpclient.getConnectionManager().closeExpiredConnections();
            httpclient.getConnectionManager().closeIdleConnections(30, TimeUnit.SECONDS);
        }
        return responseJson;
    }

    /**
     * Get方式请求
     *
     * @param url    带参数占位符的URL，例：http://****User/user/center.aspx?_action=GetSimpleUserInfo&codes={0}&email={1}
     * @param params 参数值数组，需要与url中占位符顺序对应
     * @return 响应字符串
     * @throws java.io.UnsupportedEncodingException
     */
    public static String executeByGET(String url, Object[] params) {
        HttpClient httpclient = getHttpClient();
        String messages = MessageFormat.format(url, params);
        HttpGet get = new HttpGet(messages);
        ResponseHandler<String> responseHandler = new BasicResponseHandler();
        String responseJson = null;
        try {
            responseJson = httpclient.execute(get, responseHandler);
            log.info("HttpClient GET请求结果：" + responseJson);
        } catch (ClientProtocolException e) {
            e.printStackTrace();
            log.info("HttpClient GET请求异常：" + e.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
            log.info("HttpClient GET请求异常：" + e.getMessage());
        } finally {
            httpclient.getConnectionManager().closeExpiredConnections();
            httpclient.getConnectionManager().closeIdleConnections(30, TimeUnit.SECONDS);
        }
        return responseJson;
    }

    /**
     * @param url
     * @return
     */
    public static String executeByGET(String url) {
        HttpClient httpclient = getHttpClient();
        HttpGet get = new HttpGet(url);
        ResponseHandler<String> responseHandler = new BasicResponseHandler();
        String responseJson = null;
        try {
            responseJson = httpclient.execute(get, responseHandler);
            log.info("HttpClient GET请求结果：" + responseJson);
        } catch (ClientProtocolException e) {
            e.printStackTrace();
            log.info("HttpClient GET请求异常：" + e.getMessage());
        } catch (IOException e) {
            e.printStackTrace();
            log.info("HttpClient GET请求异常：" + e.getMessage());
        } finally {
            httpclient.getConnectionManager().closeExpiredConnections();
            httpclient.getConnectionManager().closeIdleConnections(30, TimeUnit.SECONDS);
        }
        return responseJson;
    }
}
