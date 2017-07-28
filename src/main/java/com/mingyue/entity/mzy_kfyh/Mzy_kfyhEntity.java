package com.mingyue.entity.mzy_kfyh;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.poi.excel.annotation.Excel;
import org.jeecgframework.web.system.pojo.base.TSUser;

/**
 * @author Tony
 * @version V1.0
 *          康复养护
 * @Title: Entity
 * @Description: 顾客表
 * @date 2015-08-11 05:03:01
 */
@Entity
@Table(name = "mzy_kfyh", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class Mzy_kfyhEntity extends IdEntity implements java.io.Serializable {

    /**
     * 顾客ID
     */
    private MzyCustomEntity mzyCustomEntity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customid")
    public MzyCustomEntity getMzyCustomEntity() {
        return mzyCustomEntity;
    }

    public void setMzyCustomEntity(MzyCustomEntity mzyCustomEntity) {
        this.mzyCustomEntity = mzyCustomEntity;
    }

    /**
     * 键档时间
     */
    private java.util.Date createDate;
    /**
     * 日期
     */
    @Excel(name="日期",orderNum="1",exportFormat="yyyy-MM-dd HH:mm")
    private java.util.Date time;
    /**
     * 回升右
     */
    private java.lang.String hsR,hsslxgR;
    /**
     * 回升左
     */
    private java.lang.String hsL,hsslxgL;

    @Column(name = "hsslxgR", nullable = true, length = 20)
    public String getHsslxgR() {
        return hsslxgR;
    }

    public void setHsslxgR(String hsslxgR) {
        this.hsslxgR = hsslxgR;
    }

    @Column(name = "hsslxgL", nullable = true, length = 20)
    public String getHsslxgL() {
        return hsslxgL;
    }

    public void setHsslxgL(String hsslxgL) {
        this.hsslxgL = hsslxgL;
    }

    /**
     * 理疗师
     */
    @Excel(name="理疗师",orderNum="4",needMerge=true)
    private String tls;
    @Excel(name="左眼",orderNum="3",needMerge=true)
    private String showL;
    @Excel(name="右眼",orderNum="2",needMerge=true)
    private String showR;

    @Column(name = "showL", nullable = true, length = 20)
    public String getShowL() {
        return showL;
    }

    public void setShowL(String showL) {
        this.showL = showL;
    }

    @Column(name = "showR", nullable = true, length = 20)
    public String getShowR() {
        return showR;
    }

    public void setShowR(String showR) {
        this.showR = showR;
    }

    private String sbR,sbL;

    @Excel(name="备注",orderNum="5",needMerge=true)
    private String note;

    @Column(name = "note", nullable = true, length = 300)
    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  视标
     */
    @Column(name = "sbR", nullable = true, length = 10)
    public String getSbR() {
        return sbR;
    }

    public void setSbR(String sbR) {
        this.sbR = sbR;
    }


    @Column(name = "sbL", nullable = true, length = 10)
    public String getSbL() {
        return sbL;
    }

    public void setSbL(String sbL) {
        this.sbL = sbL;
    }
/**
     *方法: 取得java.lang.String
     *@return: java.lang.String  主键
     */

    /**
     * 方法: 取得java.util.Date
     *
     * @return: java.util.Date  键档时间
     */
    @Column(name = "CREATE_DATE", nullable = true)
    public java.util.Date getCreateDate() {
        return this.createDate;
    }

    /**
     * 方法: 设置java.util.Date
     *
     * @param: java.util.Date  键档时间
     */
    public void setCreateDate(java.util.Date createDate) {
        this.createDate = createDate;
    }

    /**
     * 方法: 取得java.util.Date
     *
     * @return: java.util.Date  日期
     */
    @Column(name = "TIME", nullable = true)
    public java.util.Date getTime() {
        return this.time;
    }

    /**
     * 方法: 设置java.util.Date
     *
     * @param: java.util.Date  日期
     */
    public void setTime(java.util.Date time) {
        this.time = time;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  回升右
     */
    @Column(name = "HS_R", nullable = true, length = 10)
    public java.lang.String getHsR() {
        return this.hsR;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  回升右
     */
    public void setHsR(java.lang.String hsR) {
        this.hsR = hsR;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  回升左
     */
    @Column(name = "HS_L", nullable = true, length = 10)
    public java.lang.String getHsL() {
        return this.hsL;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  回升左
     */
    public void setHsL(java.lang.String hsL) {
        this.hsL = hsL;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  理疗师
     */
    @Column(name = "tls", nullable = true, length = 20)
    public String getTls() {
        return tls;
    }

    public void setTls(String tls) {
        this.tls = tls;
    }

    private String isDelete;
    @Column(name = "isDelete", nullable = false, length = 5)
    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }
}
