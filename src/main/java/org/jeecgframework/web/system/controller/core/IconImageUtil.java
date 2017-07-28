package org.jeecgframework.web.system.controller.core;

import com.mingyue.entity.asset.AssetEntity;
import com.mingyue.entity.mcui.McuiEntity;
import com.mingyue.entity.mcui.McuiTempEntity;
import com.mingyue.entity.mzy_kc.MzyKuCunEntity;
import com.mingyue.entity.mzy_product.MzyProductEntity;
import com.mingyue.entity.switch01.Switch01Entity;
import com.mingyue.entity.switch01.Switch01Entity_temp;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
import javax.imageio.stream.FileImageOutputStream;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.jeecgframework.core.common.model.json.DataGrid;
import org.jeecgframework.web.system.pojo.base.TSIcon;
import org.jeecgframework.web.system.pojo.base.TSUser;
import org.jeecgframework.web.system.service.SystemService;

public class IconImageUtil
{
    public static void convertMcuiList(List<McuiEntity> mcuiEntityList, HttpServletRequest request, boolean istop)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "tempMcui";
        if (istop) {
            delFolder(fileDirName);
        }
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            for (McuiEntity mcuiEntity : mcuiEntityList)
            {
                String fileName = "mcui" + UUID.randomUUID() + "." + mcuiEntity.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (mcuiEntity.getPicContent() != null)
                {
                    byte2image(mcuiEntity.getPicContent(), tempFile);
                    mcuiEntity.setPicname("tempMcui/" + fileName);
                }
                String fileName_h = "mcui" + UUID.randomUUID() + "." + mcuiEntity.getExtendh();
                File tempFile_h = new File(fileDirName + File.separator + fileName_h);
                if (mcuiEntity.getPicContenth() != null)
                {
                    byte2image(mcuiEntity.getPicContenth(), tempFile_h);
                    mcuiEntity.setPicnameh("tempMcui/" + fileName_h);
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertMzyProductList(List<MzyProductEntity> mcuiEntityList, HttpServletRequest request, boolean istop)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "tempMzy";
        if (istop) {
            delFolder(fileDirName);
        }
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            for (MzyProductEntity mcuiEntity : mcuiEntityList)
            {
                String fileName = "mzy" + UUID.randomUUID() + "." + mcuiEntity.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (mcuiEntity.getPicContent() != null)
                {
                    byte2image(mcuiEntity.getPicContent(), tempFile);
                    mcuiEntity.setSrc("tempMzy/" + fileName);
                }else{
                    mcuiEntity.setSrc("plug-in/mingyue/images/logo3.png");
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertProductDataGrid(DataGrid dataGrid, HttpServletRequest request, SystemService systemService)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "tempProduct";
        delFolder(fileDirName);
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            List list = dataGrid.getResults();
            for (Object obj : list)
            {
                MzyProductEntity u = (MzyProductEntity)obj;
                String fileName = "user" + UUID.randomUUID() + "." + u.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (u.getPicContent() != null)
                {
                    byte2image(u.getPicContent(), tempFile);
                    u.setSrc("tempProduct/" + fileName);
                    systemService.saveOrUpdate(u);
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertMcuiTempList(List<McuiTempEntity> mcuiEntityList, HttpServletRequest request)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "tempMcui";
        delFolder(fileDirName);
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            for (McuiTempEntity mcuiEntity : mcuiEntityList)
            {
                String fileName = "mcui" + UUID.randomUUID() + "." + mcuiEntity.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (mcuiEntity.getPicContent() != null)
                {
                    byte2image(mcuiEntity.getPicContent(), tempFile);
                    mcuiEntity.setPicname("tempMcui/" + fileName);
                }
                String fileName_h = "mcui" + UUID.randomUUID() + "." + mcuiEntity.getExtendh();
                File tempFile_h = new File(fileDirName + File.separator + fileName_h);
                if (mcuiEntity.getPicContenth() != null)
                {
                    byte2image(mcuiEntity.getPicContenth(), tempFile_h);
                    mcuiEntity.setPicnameh("tempMcui/" + fileName_h);
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertList(List<AssetEntity> assetEntityList, HttpServletRequest request)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "temp";
        delFolder(fileDirName);
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            for (AssetEntity assetEntity : assetEntityList)
            {
                TSIcon icon = assetEntity.getTSIcon();
                String fileName = "icon" + UUID.randomUUID() + "." + icon.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (icon.getIconContent() != null)
                {
                    byte2image(icon.getIconContent(), tempFile);
                    icon.setIconPath("temp/" + fileName);
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertSwitchList(List<Switch01Entity> assetEntityList, HttpServletRequest request)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "temp";
        delFolder(fileDirName);
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            for (Switch01Entity assetEntity : assetEntityList)
            {
                TSIcon icon = assetEntity.getTSIcon();
                String fileName = "icon" + UUID.randomUUID() + "." + icon.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (icon.getIconContent() != null)
                {
                    byte2image(icon.getIconContent(), tempFile);
                    icon.setIconPath("temp/" + fileName);
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertSwitchTempList(List<Switch01Entity_temp> assetEntityList, HttpServletRequest request)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "temp";
        delFolder(fileDirName);
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            for (Switch01Entity_temp assetEntity : assetEntityList)
            {
                TSIcon icon = assetEntity.getTSIcon();
                String fileName = "icon" + UUID.randomUUID() + "." + icon.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (icon.getIconContent() != null)
                {
                    byte2image(icon.getIconContent(), tempFile);
                    icon.setIconPath("temp/" + fileName);
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertDataGrid(DataGrid dataGrid, HttpServletRequest request, SystemService systemService)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "temp";
        delFolder(fileDirName);
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            List list = dataGrid.getResults();
            for (Object obj : list)
            {
                TSIcon icon = (TSIcon)obj;
                String fileName = "icon" + UUID.randomUUID() + "." + icon.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (icon.getIconContent() != null)
                {
                    byte2image(icon.getIconContent(), tempFile);
                    icon.setIconPath("temp/" + fileName);
                    systemService.saveOrUpdate(icon);
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertUserDataGrid(DataGrid dataGrid, HttpServletRequest request, SystemService systemService)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "temp";
        delFolder(fileDirName);
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            List list = dataGrid.getResults();
            for (Object obj : list)
            {
                TSUser u = (TSUser)obj;
                String fileName = "user" + u.getId() + "." + u.getExtend();
                File tempFile = new File(fileDirName + File.separator + fileName);
                if (u.getUserContent() != null)
                {
                    byte2image(u.getUserContent(), tempFile);
                    u.setPicPath("temp/" + fileName);
                    systemService.saveOrUpdate(u);
                }
                else
                {
                    u.setPicPath("plug-in/bieber/user.jpg");
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static void convertKcDataGrid(DataGrid dataGrid, HttpServletRequest request, SystemService systemService)
    {
        String fileDirName = request.getSession().getServletContext().getRealPath("") + File.separator + "tempKc";
        delFolder(fileDirName);
        File fileDir = new File(fileDirName);
        if (!fileDir.exists()) {
            fileDir.mkdirs();
        }
        try
        {
            List list = dataGrid.getResults();
            for (Object obj : list)
            {
                MzyKuCunEntity u = (MzyKuCunEntity)obj;
                if (u.getMzyProductEntity() != null)
                {
                    String fileName = "kc" + u.getId().replace("-", "") + "." + u.getMzyProductEntity().getExtend();
                    File tempFile = new File(fileDirName + File.separator + fileName);
                    if ((u.getMzyProductEntity() != null) && (u.getMzyProductEntity().getPicContent() != null))
                    {
                        byte2image(u.getMzyProductEntity().getPicContent(), tempFile);
                        u.getMzyProductEntity().setSrc("tempKc/" + fileName);
                        systemService.saveOrUpdate(u);
                    }
                }
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    private static void byte2image(byte[] data, File file)
    {
        if (data.length < 3) {
            return;
        }
        FileImageOutputStream imageOutput = null;
        String fileName = null;
        try
        {
            imageOutput = new FileImageOutputStream(file);
            imageOutput.write(data, 0, data.length); return;
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
        }
        finally
        {
            try
            {
                imageOutput.close();
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }
        }
    }

    private static void delFolder(String folderPath)
    {
        try
        {
            delAllFile(folderPath);
            File folder = new File(folderPath);
            folder.delete();
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    private static boolean delAllFile(String path)
    {
        boolean flag = false;
        File file = new File(path);
        if (!file.exists()) {
            return flag;
        }
        if (!file.isDirectory()) {
            return flag;
        }
        String[] tempList = file.list();
        File temp = null;
        for (int i = 0; i < tempList.length; i++)
        {
            if (path.endsWith(File.separator)) {
                temp = new File(path + tempList[i]);
            } else {
                temp = new File(path + File.separator + tempList[i]);
            }
            if (temp.isFile()) {
                temp.delete();
            }
            if (temp.isDirectory())
            {
                delAllFile(path + "/" + tempList[i]);
                delFolder(path + "/" + tempList[i]);
                flag = true;
            }
        }
        return flag;
    }
}
