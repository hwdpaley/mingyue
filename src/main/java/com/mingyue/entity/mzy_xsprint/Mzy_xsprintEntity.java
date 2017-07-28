package com.mingyue.entity.mzy_xsprint;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.mingyue.entity.mzy_xiaoshou.Mzy_xiaoshouEntity;
import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.pojo.base.TSUser;

/**
 * @author Tony
 * @version V1.0
 * @Title: Entity
 * @Description: 顾客销售清单
 * @date 2015-09-10 05:37:04
 */
@Entity
@Table(name = "mzy_xsprint", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class Mzy_xsprintEntity extends IdEntity implements java.io.Serializable {
    /**
     * 该单据的所属店面部门
     */
    private TSDepart tsDepart;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "depart_id")
    public TSDepart getTsDepart() {
        return tsDepart;
    }

    public void setTsDepart(TSDepart tsDepart) {
        this.tsDepart = tsDepart;
    }

    /**
     * 顾客
     */
    private MzyCustomEntity mzyCustomEntity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "custom_id")
    public MzyCustomEntity getMzyCustomEntity() {
        return mzyCustomEntity;
    }

    public void setMzyCustomEntity(MzyCustomEntity mzyCustomEntity) {
        this.mzyCustomEntity = mzyCustomEntity;
    }

    /**
     * 开单人
     */
    private TSUser tsUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    public TSUser getTsUser() {
        return tsUser;
    }

    public void setTsUser(TSUser tsUser) {
        this.tsUser = tsUser;
    }

    private String idDanNum;

    @Column(name = "idDanNum", nullable = true, length = 20)
    public String getIdDanNum() {
        return idDanNum;
    }

    public void setIdDanNum(String idDanNum) {
        this.idDanNum = idDanNum;
    }

    /**
     * 创建人名称
     */
    private java.lang.String createName;
    /**
     * 创建人登录名称
     */
    private java.lang.String createBy;
    /**
     * 创建日期
     */
    private java.util.Date createDate;
    /**
     * 备注
     */
    private java.lang.String note;
    /**
     * 总金额
     */
    private BigDecimal total,realTotal;

    /**
     * 实收金额
     * @return
     */
    @Column(name = "realTotal", nullable = true)
    public BigDecimal getRealTotal() {
        return realTotal;
    }

    public void setRealTotal(BigDecimal realTotal) {
        this.realTotal = realTotal;
    }

    /**
     * 现金或刷卡
     */
    private java.lang.String iscard;
    /**
     * 积分是否兑换，1，则已兑换,是否已打印 1，已打印
     */
    private int jfdh, isPrint;

    @Column(name = "isPrint", nullable = true, precision = 10, scale = 0)
    public int getIsPrint() {
        return isPrint;
    }

    public void setIsPrint(int isPrint) {
        this.isPrint = isPrint;
    }

    @Column(name = "jfdh", nullable = true, precision = 10, scale = 0)
    public int getJfdh() {
        return jfdh;
    }

    public void setJfdh(int jfdh) {
        this.jfdh = jfdh;
    }

    /**
     * 销售名称
     */
    private String xsName;

    @Column(name = "xsName", nullable = true, length = 20)
    public String getXsName() {
        return xsName;
    }

    public void setXsName(String xsName) {
        this.xsName = xsName;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  创建人名称
     */
    @Column(name = "CREATE_NAME", nullable = true, length = 50)
    public java.lang.String getCreateName() {
        return this.createName;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  创建人名称
     */
    public void setCreateName(java.lang.String createName) {
        this.createName = createName;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  创建人登录名称
     */
    @Column(name = "CREATE_BY", nullable = true, length = 50)
    public java.lang.String getCreateBy() {
        return this.createBy;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  创建人登录名称
     */
    public void setCreateBy(java.lang.String createBy) {
        this.createBy = createBy;
    }

    /**
     * 方法: 取得java.util.Date
     *
     * @return: java.util.Date  创建日期
     */
    @Column(name = "CREATE_DATE", nullable = true)
    public java.util.Date getCreateDate() {
        return this.createDate;
    }

    /**
     * 方法: 设置java.util.Date
     *
     * @param: java.util.Date  创建日期
     */
    public void setCreateDate(java.util.Date createDate) {
        this.createDate = createDate;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  备注
     */
    @Column(name = "NOTE", nullable = true, length = 100)
    public java.lang.String getNote() {
        return this.note;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  备注
     */
    public void setNote(java.lang.String note) {
        this.note = note;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  总金额
     */
    @Column(name = "TOTAL", nullable = true)
    public BigDecimal getTotal() {
        return this.total;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  总金额
     */
    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  支付方式
     */
    @Column(name = "ISCARD", nullable = true, length = 2)
    public java.lang.String getIscard() {
        return this.iscard;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  支付方式
     */
    public void setIscard(java.lang.String iscard) {
        this.iscard = iscard;
    }

    private String isOK;

    @Column(name = "isOK", nullable = true, length = 2)
    public String getIsOK() {
        return isOK;
    }

    public void setIsOK(String isOK) {
        this.isOK = isOK;
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
