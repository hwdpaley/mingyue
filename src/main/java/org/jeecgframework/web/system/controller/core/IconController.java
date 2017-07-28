package org.jeecgframework.web.system.controller.core;

import java.awt.image.BufferedImage;
import java.io.*;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mingyue.entity.mcui.McuiEntity;
import org.jeecgframework.core.util.*;
import org.jeecgframework.web.system.pojo.base.TSFunction;
import org.jeecgframework.web.system.pojo.base.TSIcon;
import org.jeecgframework.web.system.pojo.base.TSOperation;
import org.jeecgframework.web.system.service.MutiLangServiceI;
import org.jeecgframework.web.system.service.SystemService;

import org.jeecgframework.core.common.controller.BaseController;
import org.jeecgframework.core.common.hibernate.qbc.CriteriaQuery;
import org.jeecgframework.core.common.model.common.UploadFile;
import org.jeecgframework.core.common.model.json.AjaxJson;
import org.jeecgframework.core.common.model.json.DataGrid;
import org.jeecgframework.core.constant.Globals;
import org.jeecgframework.tag.core.easyui.TagUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


/**
 * 图标信息处理类
 *
 * @author 张代浩
 */
@Scope("prototype")
@Controller
@RequestMapping("/iconController")
public class IconController extends BaseController {

    /**
     * 图标列表页面跳转
     *
     * @return
     */
    @RequestMapping(params = "icon")
    public ModelAndView icon() {
        return new ModelAndView("system/icon/iconList");
    }

    @RequestMapping(params = "deviceIcon")
    public ModelAndView deviceIcon() {
        return new ModelAndView("system/icon/deviceIconList");
    }


    /**
     * easyuiAJAX请求数据
     *
     * @param request
     * @param response
     * @param dataGrid
     */
    @RequestMapping(params = "datagrid")
    public void datagrid(TSIcon icon, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(TSIcon.class, dataGrid);
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, icon);
        cq.add();
        this.systemService.getDataGridReturn(cq, true);
        IconImageUtil.convertDataGrid(dataGrid, request, systemService);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径
        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * easyuiAJAX请求数据
     *
     * @param request
     * @param response
     * @param dataGrid
     */
    @RequestMapping(params = "deviceDatagrid")
    public void deviceDatagrid(TSIcon icon, HttpServletRequest request, HttpServletResponse response, DataGrid dataGrid) {
        CriteriaQuery cq = new CriteriaQuery(TSIcon.class, dataGrid);
        org.jeecgframework.core.extend.hqlsearch.HqlGenerateUtil.installHql(cq, icon);
        cq.eq("iconType", (short) 4);
        cq.add();
        this.systemService.getDataGridReturn(cq, true);
        IconImageUtil.convertDataGrid(dataGrid, request, systemService);//先把数据库的byte存成图片到临时目录，再给每个TsIcon设置目录路径
        TagUtil.datagrid(response, dataGrid);
    }

    /**
     * 上传图标
     *
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(params = "saveOrUpdateIcon", method = RequestMethod.POST)
    @ResponseBody
    public AjaxJson saveOrUpdateIcon(HttpServletRequest request) throws Exception {
        AjaxJson j = new AjaxJson();
        TSIcon icon = new TSIcon();
        Short iconType = oConvertUtils.getShort(request.getParameter("iconType"));
        String iconName = oConvertUtils.getString(request.getParameter("iconName"));
        String id = request.getParameter("id");
        icon.setId(id);
        icon.setIconName(iconName);
        icon.setIconType(iconType);
        // uploadFile.setBasePath("images/accordion");
        UploadFile uploadFile = new UploadFile(request, icon);
        uploadFile.setCusPath("plug-in/accordion/images");
        uploadFile.setExtend("extend");
        uploadFile.setTitleField("iconclas");
        uploadFile.setRealPath("iconPath");
        uploadFile.setObject(icon);
        uploadFile.setByteField("iconContent");
        uploadFile.setRename(false);
        systemService.uploadFile(uploadFile);
        // 图标的css样式
        String css = "." + icon.getIconClas() + "{background:url('../images/" + icon.getIconClas() + "." + icon.getExtend() + "') no-repeat}";
        write(request, css);
        message = MutiLangUtil.paramAddSuccess("common.icon");
        j.setMsg(message);
        return j;
    }

    @RequestMapping(params = "save")
    @ResponseBody
    public AjaxJson save(TSIcon icon, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();
//        if(icon.getMcuiEntity().getId()==""){
//            icon.setMcuiEntity(null);
//        }
        TSIcon t = null;
        if (StringUtil.isNotEmpty(icon.getId())) {
            message = "UI界面更新成功";
            t = systemService.get(TSIcon.class, icon.getId());
            try {

                String pa = ResourceUtil.getConfigByName("uploadpath");
                if (icon.getIconPath().indexOf(pa) != -1) {
                    request.setCharacterEncoding("UTF-8");
                    String realPath = request.getSession().getServletContext().getRealPath("/") + "/" + icon.getIconPath();// 文件的硬盘真实路径
                    int last = realPath.lastIndexOf("/");
                    String fname = realPath.substring(last + 1, realPath.length());
                    last = fname.lastIndexOf(".");
                    String ext = fname.substring(last + 1, fname.length());
                    String ffname = fname.substring(0, last);
                    FileInputStream fins = StreamUtils.getFileInputStream(realPath);
                    StreamUtils streamUtils = new StreamUtils();
                    byte[] pcontent = streamUtils.getBytes(fins);
                    icon.setIconContent(pcontent);
                    if (ffname.length() > 0 && ext.length() > 0) {
                        icon.setExtend(ext);
                        icon.setIconClas(ffname);
                    }
                }
                MyBeanUtils.copyBeanNotNull2Bean(icon, t);
                systemService.saveOrUpdate(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "UI界面更新失败";
            }
        } else {
            message = "UI界面添加成功";
            t = new TSIcon();
            try {

                String pa = ResourceUtil.getConfigByName("uploadpath");
                if (icon.getIconPath().indexOf(pa) != -1) {
                    request.setCharacterEncoding("UTF-8");
                    String realPath = request.getSession().getServletContext().getRealPath("/") + "/" + icon.getIconPath();// 文件的硬盘真实路径
                    int last = realPath.lastIndexOf("/");
                    String fname = realPath.substring(last + 1, realPath.length());
                    last = fname.lastIndexOf(".");
                    String ext = fname.substring(last + 1, fname.length());
                    String ffname = fname.substring(0, last);
                    FileInputStream fins = StreamUtils.getFileInputStream(realPath);
                    StreamUtils streamUtils = new StreamUtils();
                    byte[] pcontent = streamUtils.getBytes(fins);
                    icon.setIconContent(pcontent);
                    if (ffname.length() > 0 && ext.length() > 0) {
                        icon.setExtend(ext);
                        icon.setIconClas(ffname);
                    }
                }
                icon.setIconType((short)4);
                MyBeanUtils.copyBeanNotNull2Bean(icon, t);
                systemService.save(t);
                systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
            } catch (Exception e) {
                e.printStackTrace();
                message = "UI界面添加失败";
            }
        }
//        try {
//
//            String pa = ResourceUtil.getConfigByName("uploadpath");
//            if (icon.getIconPath().indexOf(pa) != -1) {
//                request.setCharacterEncoding("UTF-8");
//                String realPath = request.getSession().getServletContext().getRealPath("/") + "/" + icon.getIconPath();// 文件的硬盘真实路径
//                int last = realPath.lastIndexOf("/");
//                String fname = realPath.substring(last + 1, realPath.length());
//                last = fname.lastIndexOf(".");
//                String ext = fname.substring(last + 1, fname.length());
//                String ffname = fname.substring(0, last);
//
//                FileInputStream fins = StreamUtils.getFileInputStream(realPath);
//                StreamUtils streamUtils = new StreamUtils();
//                byte[] pcontent = streamUtils.getBytes(fins);
//                icon.setIconContent(pcontent);
//                if (ffname.length() > 0 && ext.length() > 0) {
//                    icon.setExtend(ext);
//                    icon.setIconClas(ffname);
//                }
//            }
//            MyBeanUtils.copyBeanNotNull2Bean(icon, t);
//            systemService.saveOrUpdate(t);
//            systemService.addLog(message, Globals.Log_Type_UPDATE, Globals.Log_Leavel_INFO);
//        } catch (Exception e) {
//            e.printStackTrace();
//            message = "UI界面更新失败";
//        }
//        } else {
//            message = "UI界面添加成功";
//            systemService.save(icon);
//            systemService.addLog(message, Globals.Log_Type_INSERT, Globals.Log_Leavel_INFO);
//        }
        j.setMsg(message);
        return j;
    }

    /**
     * 没有上传文件时更新信息
     *
     * @param request
     * @return
     * @throws Exception
     */
    @SuppressWarnings("deprecation")
    @RequestMapping(params = "update", method = RequestMethod.POST)
    @ResponseBody
    public AjaxJson update(HttpServletRequest request) throws Exception {
        AjaxJson j = new AjaxJson();
        Short iconType = oConvertUtils.getShort(request.getParameter("iconType"));
        String iconName = java.net.URLDecoder.decode(oConvertUtils.getString(request.getParameter("iconName")));
        String id = request.getParameter("id");
        TSIcon icon = new TSIcon();
        if (StringUtil.isNotEmpty(id)) {
            icon = systemService.get(TSIcon.class, id);
            icon.setId(id);
        }
        icon.setIconName(iconName);
        icon.setIconType(iconType);
        systemService.saveOrUpdate(icon);
        // 图标的css样式
        String css = "." + icon.getIconClas() + "{background:url('../images/" + icon.getIconClas() + "." + icon.getExtend() + "') no-repeat}";
        write(request, css);
        message = "更新成功";
        j.setMsg(message);
        return j;
    }

    /**
     * 添加图标样式
     *
     * @param request
     * @param css
     */
    protected void write(HttpServletRequest request, String css) {
        try {
            String path = request.getSession().getServletContext().getRealPath("/plug-in/accordion/css/icons.css");
            File file = new File(path);
            if (!file.exists()) {
                file.createNewFile();
            }
            FileWriter out = new FileWriter(file, true);
            out.write("\r\n");
            out.write(css);
            out.close();
        } catch (Exception e) {
        }
    }

    /**
     * 恢复图标（将数据库图标数据写入图标存放的路径下）
     *
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(params = "repair")
    @ResponseBody
    public AjaxJson repair(HttpServletRequest request) throws Exception {
        AjaxJson json = new AjaxJson();
        List<TSIcon> icons = systemService.loadAll(TSIcon.class);
        String rootpath = request.getSession().getServletContext().getRealPath("/");
        String csspath = request.getSession().getServletContext().getRealPath("/plug-in/accordion/css/icons.css");
        // 清空CSS文件内容
        clearFile(csspath);
        for (TSIcon c : icons) {
            File file = new File(rootpath + c.getIconPath());
            if (!file.exists()) {
                byte[] content = c.getIconContent();
                if (content != null) {
                    BufferedImage imag = ImageIO.read(new ByteArrayInputStream(content));
                    ImageIO.write(imag, "PNG", file);// 输出到 png 文件
                }
            }
            String css = "." + c.getIconClas() + "{background:url('../images/" + c.getIconClas() + "." + c.getExtend() + "') no-repeat}";
            write(request, css);
        }
        json.setMsg(MutiLangUtil.paramAddSuccess("common.icon.style"));
        json.setSuccess(true);
        return json;
    }

    /**
     * 清空文件内容
     *
     * @param path
     */
    protected void clearFile(String path) {
        try {
            FileOutputStream fos = new FileOutputStream(new File(path));
            fos.write("".getBytes());
            fos.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 删除图标
     *
     * @param icon
     * @param request
     * @return
     */
    @RequestMapping(params = "del")
    @ResponseBody
    public AjaxJson del(TSIcon icon, HttpServletRequest request) {
        AjaxJson j = new AjaxJson();

        icon = systemService.getEntity(TSIcon.class, icon.getId());

        boolean isPermit = isPermitDel(icon);

        if (isPermit) {
            systemService.delete(icon);

            message = MutiLangUtil.paramDelSuccess("common.icon");

            systemService.addLog(message, Globals.Log_Type_DEL, Globals.Log_Leavel_INFO);

            j.setMsg(message);

            return j;
        }

        message = MutiLangUtil.paramDelFail("common.icon,common.icon.isusing");
        j.setMsg(message);

        return j;
    }

    /**
     * 检查是否允许删除该图标。
     *
     * @param icon 图标。
     * @return true允许；false不允许；
     */
    private boolean isPermitDel(TSIcon icon) {
        List<TSFunction> functions = systemService.findByProperty(TSFunction.class, "TSIcon.id", icon.getId());
        if (functions == null || functions.isEmpty()) {
            return true;
        }
        return false;
    }

    public void upEntity(TSIcon icon) {
        List<TSFunction> functions = systemService.findByProperty(TSFunction.class, "TSIcon.id", icon.getId());
        if (functions.size() > 0) {
            for (TSFunction tsFunction : functions) {
                tsFunction.setTSIcon(null);
                systemService.saveOrUpdate(tsFunction);
            }
        }
        List<TSOperation> operations = systemService.findByProperty(TSOperation.class, "TSIcon.id", icon.getId());
        if (operations.size() > 0) {
            for (TSOperation tsOperation : operations) {
                tsOperation.setTSIcon(null);
                systemService.saveOrUpdate(tsOperation);
            }
        }
    }

    /**
     * 图标页面跳转
     *
     * @param icon
     * @param req
     * @return
     */
    @RequestMapping(params = "addorupdate")
    public ModelAndView addorupdate(TSIcon icon, HttpServletRequest req) {
        if (StringUtil.isNotEmpty(icon.getId())) {
            icon = systemService.getEntity(TSIcon.class, icon.getId());
            req.setAttribute("icon", icon);
        }
        return new ModelAndView("system/icon/icons");
    }

    /**
     * 图标页面跳转
     *
     * @param icon
     * @param req
     * @return
     */
    @RequestMapping(params = "addorupdate_dev")
    public ModelAndView addorupdate_dev(TSIcon icon, HttpServletRequest req) {
        if (StringUtil.isNotEmpty(icon.getId())) {
            icon = systemService.getEntity(TSIcon.class, icon.getId());

            req.setAttribute("icon", icon);
        }
        return new ModelAndView("system/icon/deviceIcons");
    }
}
