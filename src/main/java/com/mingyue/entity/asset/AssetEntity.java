package com.mingyue.entity.asset;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSIcon;

/**
 * @author Tony
 * @version V1.0
 * @Title: Entity
 * @Description: 资产列表
 * @date 2015-07-07 11:04:26
 */
@Entity
@Table(name = "mc_asset")
@org.hibernate.annotations.Proxy(lazy = false)
//@DynamicUpdate(true)
//@DynamicInsert(true)
//@SuppressWarnings("serial")
public class AssetEntity extends IdEntity implements java.io.Serializable {

    private AssetEntity assetEntity;


    /**
     * 设备名称
     */
    private java.lang.String fullname;



    /**
     * 设备ID
     */
    private java.lang.String deviceid;




    /**
     * 设备IP地址
     */
    private java.lang.String ip;



    /**
     * 资产排序
     */
    private String assetid;
    @Column(name = "ASSETID", nullable = true, length = 36)
    public String getAssetid() {
        return assetid;
    }

    public void setAssetid(String assetid) {
        this.assetid = assetid;
    }

    private java.lang.String assetorder;
    @Column(name = "ASSETORDER")
    public String getAssetorder() {
        return assetorder;
    }

    public void setAssetorder(String assetorder) {
        this.assetorder = assetorder;
    }

    private java.lang.Integer assetlevel;

    private TSIcon TSIcon = new TSIcon();//菜单图标
//    /**
//     * 图片路径
//     */
//    private java.lang.String src;
    /**
     * 资产等级
     */

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  主键
     */





    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PARENTID")
    public AssetEntity getAssetEntity() {
        return assetEntity;
    }

    public void setAssetEntity(AssetEntity assetEntity) {
        this.assetEntity = assetEntity;
    }

//    /**
//     * 方法: 设置java.lang.String
//     *
//     * @param: java.lang.String  父ID
//     */
//    public void setParentid(java.lang.String parentid) {
//        this.parentid = parentid;
//    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  设备名称
     */
    @Column(name = "FULLNAME", nullable = true, length = 50)
    public java.lang.String getFullname() {
        return this.fullname;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  设备名称
     */
    public void setFullname(java.lang.String fullname) {
        this.fullname = fullname;
    }









    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  设备ID
     */
    @Column(name = "DEVICEID", nullable = true, length = 32)
    public java.lang.String getDeviceid() {
        return this.deviceid;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  设备ID
     */
    public void setDeviceid(java.lang.String deviceid) {
        this.deviceid = deviceid;
    }










    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  设备IP地址
     */
    @Column(name = "IP", nullable = true, length = 32)
    public java.lang.String getIp() {
        return this.ip;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  设备IP地址
     */
    public void setIp(java.lang.String ip) {
        this.ip = ip;
    }









    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  资产等级
     */
    @Column(name = "ASSETLEVEL", nullable = true, precision = 10, scale = 0)
    public java.lang.Integer getAssetlevel() {
        return this.assetlevel;
    }

    /**
     * 方法: 设置java.lang.Integer
     *
     * @param: java.lang.Integer  资产等级
     */
    public void setAssetlevel(java.lang.Integer assetlevel) {
        this.assetlevel = assetlevel;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  图片路径
     */
//    @Column(name = "SRC", nullable = true, length = 200)
//    public java.lang.String getSrc() {
//        return this.src;
//    }
//
//    /**
//     * 方法: 设置java.lang.String
//     *
//     * @param: java.lang.String  图片路径
//     */
//    public void setSrc(java.lang.String src) {
//        this.src = src;
//    }

    private List<AssetEntity> AssetEntitys = new ArrayList<AssetEntity>();
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "assetEntity")
    public List<AssetEntity> getAssetEntitys() {
        return AssetEntitys;
    }

    public void setAssetEntitys(List<AssetEntity> AssetEntitys) {
        this.AssetEntitys = AssetEntitys;
    }

//    private List<TSFunction> TSFunctions = new ArrayList<TSFunction>();
//    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "TSFunction")
//    public List<TSFunction> getTSFunctions() {
//        return TSFunctions;
//    }
//    public void setTSFunctions(List<TSFunction> TSFunctions) {
//        this.TSFunctions = TSFunctions;
//    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "iconid")
    public TSIcon getTSIcon() {
        return TSIcon;
    }
    public void setTSIcon(TSIcon tSIcon) {
        TSIcon = tSIcon;
    }
}
