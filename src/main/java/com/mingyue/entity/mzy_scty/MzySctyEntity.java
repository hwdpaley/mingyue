package com.mingyue.entity.mzy_scty;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;

/**
 * @author Tony
 * @version V1.0
 *          首次体验
 * @Title: Entity
 * @Description: 顾客表
 * @date 2015-08-11 05:00:50
 */
@Entity
@Table(name = "mzy_scty", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class MzySctyEntity extends IdEntity implements java.io.Serializable {
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
     * 视标
     */
    private java.lang.String sb;
    /**
     * 前清晰视力右
     */
    private java.lang.String bqxslr, bqxslxgR;
    /**
     * 前清晰视力左
     */
    private java.lang.String bqxsll, bqxslxgL;
    /**
     * 前清晰视力右
     */
    private java.lang.String bqxslr_show;
    /**
     * 前清晰视力左
     */
    private java.lang.String bqxsll_show;
    /**
     * 前清晰视力右
     */
    private java.lang.String bqxslr_sb;
    /**
     * 前清晰视力左
     */
    private java.lang.String bqxsll_sb;
    /**
     * 前极限视力右
     */
    private java.lang.String bJxslR_show;
    /**
     * 前极限视力左
     */
    private java.lang.String bJxslL_show;


    /**
     * 前极限视力右
     */
    private java.lang.String bJxslR, bjxslxgR;
    /**
     * 前极限视力左
     */
    private java.lang.String bJxslL, bjxslxgL;
    /**
     * 前极限视力右
     */
    private java.lang.String bJxslR_sb;
    /**
     * 前极限视力左
     */
    private java.lang.String bJxslL_sb;
    /**
     * 后清晰视力右
     */
    private java.lang.String aQxslR_show;
    /**
     * 后清晰视力左
     */
    private java.lang.String aQxslL_show;
    /**
     * 后清晰视力右
     */
    private java.lang.String aQxslR, aqxslxgR;
    /**
     * 后清晰视力左
     */
    private java.lang.String aQxslL, aqxslxgL;
    /**
     * 后清晰视力右
     */
    private java.lang.String aQxslR_sb;
    /**
     * 后清晰视力左
     */
    private java.lang.String aQxslL_sb;
    /**
     * 后极限视力右
     */
    private java.lang.String aJxslR_show;
    /**
     * 后极限视力左
     */
    private java.lang.String aJxslL_show;
    /**
     * 后极限视力右
     */
    private java.lang.String aJxslR, ajxslxgR;
    /**
     * 后极限视力左
     */
    private java.lang.String aJxslL, ajxslxgL;
    /**
     * 后极限视力右
     */
    private java.lang.String aJxslR_sb;
    /**
     * 后极限视力左
     */
    private java.lang.String aJxslL_sb;

    private String blsr, blsslxgR, blsl, blsslxgL, bjzr, bjzl, bqjr, bqjl, bzjr, bzjl;
    private String blsr_sb, blsl_sb, bjzr_sb, bjzl_sb, bqjr_sb, bqjl_sb, bzjr_sb, bzjl_sb;

    @Column(name = "bqxslxgR", nullable = true, length = 10)
    public String getBqxslxgR() {
        return bqxslxgR;
    }

    public void setBqxslxgR(String bqxslxgR) {
        this.bqxslxgR = bqxslxgR;
    }

    @Column(name = "bqxslxgL", nullable = true, length = 10)
    public String getBqxslxgL() {
        return bqxslxgL;
    }

    public void setBqxslxgL(String bqxslxgL) {
        this.bqxslxgL = bqxslxgL;
    }

    @Column(name = "bjxslxgR", nullable = true, length = 10)
    public String getBjxslxgR() {
        return bjxslxgR;
    }

    public void setBjxslxgR(String bjxslxgR) {
        this.bjxslxgR = bjxslxgR;
    }

    @Column(name = "bjxslxgL", nullable = true, length = 10)
    public String getBjxslxgL() {
        return bjxslxgL;
    }

    public void setBjxslxgL(String bjxslxgL) {
        this.bjxslxgL = bjxslxgL;
    }

    @Column(name = "aqxslxgR", nullable = true, length = 10)
    public String getAqxslxgR() {
        return aqxslxgR;
    }

    public void setAqxslxgR(String aqxslxgR) {
        this.aqxslxgR = aqxslxgR;
    }

    @Column(name = "aqxslxgL", nullable = true, length = 10)
    public String getAqxslxgL() {
        return aqxslxgL;
    }

    public void setAqxslxgL(String aqxslxgL) {
        this.aqxslxgL = aqxslxgL;
    }

    @Column(name = "ajxslxgR", nullable = true, length = 10)
    public String getAjxslxgR() {
        return ajxslxgR;
    }

    public void setAjxslxgR(String ajxslxgR) {
        this.ajxslxgR = ajxslxgR;
    }

    @Column(name = "ajxslxgL", nullable = true, length = 10)
    public String getAjxslxgL() {
        return ajxslxgL;
    }

    public void setAjxslxgL(String ajxslxgL) {
        this.ajxslxgL = ajxslxgL;
    }

    @Column(name = "blsslxgR", nullable = true, length = 10)
    public String getBlsslxgR() {
        return blsslxgR;
    }

    public void setBlsslxgR(String blsslxgR) {
        this.blsslxgR = blsslxgR;
    }

    @Column(name = "blsslxgL", nullable = true, length = 10)
    public String getBlsslxgL() {
        return blsslxgL;
    }

    public void setBlsslxgL(String blsslxgL) {
        this.blsslxgL = blsslxgL;
    }

    @Column(name = "blsr", nullable = true, length = 10)
    public String getBlsr() {
        return blsr;
    }

    public void setBlsr(String blsr) {
        this.blsr = blsr;
    }

    @Column(name = "blsl", nullable = true, length = 10)
    public String getBlsl() {
        return blsl;
    }

    public void setBlsl(String blsl) {
        this.blsl = blsl;
    }

    @Column(name = "bjzr", nullable = true, length = 10)
    public String getBjzr() {
        return bjzr;
    }

    public void setBjzr(String bjzr) {
        this.bjzr = bjzr;
    }

    @Column(name = "bjzl", nullable = true, length = 10)
    public String getBjzl() {
        return bjzl;
    }

    public void setBjzl(String bjzl) {
        this.bjzl = bjzl;
    }

    @Column(name = "bqjr", nullable = true, length = 10)
    public String getBqjr() {
        return bqjr;
    }

    public void setBqjr(String bqjr) {
        this.bqjr = bqjr;
    }

    @Column(name = "bqjl", nullable = true, length = 10)
    public String getBqjl() {
        return bqjl;
    }

    public void setBqjl(String bqjl) {
        this.bqjl = bqjl;
    }

    @Column(name = "bzjr", nullable = true, length = 10)
    public String getBzjr() {
        return bzjr;
    }

    public void setBzjr(String bzjr) {
        this.bzjr = bzjr;
    }

    @Column(name = "bzjl", nullable = true, length = 10)
    public String getBzjl() {
        return bzjl;
    }

    public void setBzjl(String bzjl) {
        this.bzjl = bzjl;
    }

    @Column(name = "blsr_sb", nullable = true, length = 10)
    public String getBlsr_sb() {
        return blsr_sb;
    }

    public void setBlsr_sb(String blsr_sb) {
        this.blsr_sb = blsr_sb;
    }

    @Column(name = "blsl_sb", nullable = true, length = 10)
    public String getBlsl_sb() {
        return blsl_sb;
    }

    public void setBlsl_sb(String blsl_sb) {
        this.blsl_sb = blsl_sb;
    }

    @Column(name = "bjzr_sb", nullable = true, length = 10)
    public String getBjzr_sb() {
        return bjzr_sb;
    }

    public void setBjzr_sb(String bjzr_sb) {
        this.bjzr_sb = bjzr_sb;
    }

    @Column(name = "bjzl_sb", nullable = true, length = 10)
    public String getBjzl_sb() {
        return bjzl_sb;
    }

    public void setBjzl_sb(String bjzl_sb) {
        this.bjzl_sb = bjzl_sb;
    }

    @Column(name = "bqjr_sb", nullable = true, length = 10)
    public String getBqjr_sb() {
        return bqjr_sb;
    }

    public void setBqjr_sb(String bqjr_sb) {
        this.bqjr_sb = bqjr_sb;
    }

    @Column(name = "bqjl_sb", nullable = true, length = 10)
    public String getBqjl_sb() {
        return bqjl_sb;
    }

    public void setBqjl_sb(String bqjl_sb) {
        this.bqjl_sb = bqjl_sb;
    }

    @Column(name = "bzjr_sb", nullable = true, length = 10)
    public String getBzjr_sb() {
        return bzjr_sb;
    }

    public void setBzjr_sb(String bzjr_sb) {
        this.bzjr_sb = bzjr_sb;
    }

    @Column(name = "bzjl_sb", nullable = true, length = 10)
    public String getBzjl_sb() {
        return bzjl_sb;
    }

    public void setBzjl_sb(String bzjl_sb) {
        this.bzjl_sb = bzjl_sb;
    }


    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  视标
     */
    @Column(name = "SB", nullable = true, length = 10)
    public java.lang.String getSb() {
        return this.sb;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  视标
     */
    public void setSb(java.lang.String sb) {
        this.sb = sb;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  前清晰视力右
     */
    @Column(name = "B_QXSL_R", nullable = true, length = 10)
    public String getBqxslr() {
        return bqxslr;
    }

    public void setBqxslr(String bqxslr) {
        this.bqxslr = bqxslr;
    }


    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  前清晰视力左
     */
    @Column(name = "B_QXSL_L", nullable = true, length = 10)

    public String getBqxsll() {
        return bqxsll;
    }

    public void setBqxsll(String bqxsll) {
        this.bqxsll = bqxsll;
    }


    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  前极限视力右
     */
    @Column(name = "B_JXSL_R", nullable = true, length = 10)
    public String getbJxslR() {
        return bJxslR;
    }

    public void setbJxslR(String bJxslR) {
        this.bJxslR = bJxslR;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  前极限视力左
     */
    @Column(name = "B_JXSL_L", nullable = true, length = 10)
    public String getbJxslL() {
        return bJxslL;
    }

    public void setbJxslL(String bJxslL) {
        this.bJxslL = bJxslL;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  后清晰视力右
     */
    @Column(name = "A_QXSL_R", nullable = true, length = 10)
    public String getaQxslR() {
        return aQxslR;
    }

    public void setaQxslR(String aQxslR) {
        this.aQxslR = aQxslR;
    }


    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  后清晰视力左
     */
    @Column(name = "A_QXSL_L", nullable = true, length = 10)
    public String getaQxslL() {
        return aQxslL;
    }

    public void setaQxslL(String aQxslL) {
        this.aQxslL = aQxslL;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  后极限视力右
     */
    @Column(name = "A_JXSL_R", nullable = true, length = 10)
    public String getaJxslR() {
        return aJxslR;
    }

    public void setaJxslR(String aJxslR) {
        this.aJxslR = aJxslR;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  后极限视力左
     */
    @Column(name = "A_JXSL_L", nullable = true, length = 10)
    public String getaJxslL() {
        return aJxslL;
    }

    public void setaJxslL(String aJxslL) {
        this.aJxslL = aJxslL;
    }

    @Column(name = "bqxslr_sb", nullable = true, length = 10)
    public String getBqxslr_sb() {
        return bqxslr_sb;
    }

    public void setBqxslr_sb(String bqxslr_sb) {
        this.bqxslr_sb = bqxslr_sb;
    }

    @Column(name = "bqxsll_sb", nullable = true, length = 10)
    public String getBqxsll_sb() {
        return bqxsll_sb;
    }

    public void setBqxsll_sb(String bqxsll_sb) {
        this.bqxsll_sb = bqxsll_sb;
    }

    @Column(name = "bJxslR_sb", nullable = true, length = 10)
    public String getbJxslR_sb() {
        return bJxslR_sb;
    }

    public void setbJxslR_sb(String bJxslR_sb) {
        this.bJxslR_sb = bJxslR_sb;
    }

    @Column(name = "bJxslL_sb", nullable = true, length = 10)
    public String getbJxslL_sb() {
        return bJxslL_sb;
    }

    public void setbJxslL_sb(String bJxslL_sb) {
        this.bJxslL_sb = bJxslL_sb;
    }

    @Column(name = "aQxslR_sb", nullable = true, length = 10)
    public String getaQxslR_sb() {
        return aQxslR_sb;
    }

    public void setaQxslR_sb(String aQxslR_sb) {
        this.aQxslR_sb = aQxslR_sb;
    }

    @Column(name = "aQxslL_sb", nullable = true, length = 10)
    public String getaQxslL_sb() {
        return aQxslL_sb;
    }

    public void setaQxslL_sb(String aQxslL_sb) {
        this.aQxslL_sb = aQxslL_sb;
    }

    @Column(name = "aJxslR_sb", nullable = true, length = 10)
    public String getaJxslR_sb() {
        return aJxslR_sb;
    }

    public void setaJxslR_sb(String aJxslR_sb) {
        this.aJxslR_sb = aJxslR_sb;
    }

    @Column(name = "aJxslL_sb", nullable = true, length = 10)
    public String getaJxslL_sb() {
        return aJxslL_sb;
    }

    public void setaJxslL_sb(String aJxslL_sb) {
        this.aJxslL_sb = aJxslL_sb;
    }

    @Column(name = "bqxslr_show", nullable = true, length = 20)
    public String getBqxslr_show() {
        return bqxslr_show;
    }

    public void setBqxslr_show(String bqxslr_show) {
        this.bqxslr_show = bqxslr_show;
    }

    @Column(name = "bqxsll_show", nullable = true, length = 20)
    public String getBqxsll_show() {
        return bqxsll_show;
    }

    public void setBqxsll_show(String bqxsll_show) {
        this.bqxsll_show = bqxsll_show;
    }

    @Column(name = "bJxslR_show", nullable = true, length = 20)
    public String getbJxslR_show() {
        return bJxslR_show;
    }

    public void setbJxslR_show(String bJxslR_show) {
        this.bJxslR_show = bJxslR_show;
    }

    @Column(name = "bJxslL_show", nullable = true, length = 20)
    public String getbJxslL_show() {
        return bJxslL_show;
    }

    public void setbJxslL_show(String bJxslL_show) {
        this.bJxslL_show = bJxslL_show;
    }

    @Column(name = "aQxslR_show", nullable = true, length = 20)
    public String getaQxslR_show() {
        return aQxslR_show;
    }

    public void setaQxslR_show(String aQxslR_show) {
        this.aQxslR_show = aQxslR_show;
    }

    @Column(name = "aQxslL_show", nullable = true, length = 20)
    public String getaQxslL_show() {
        return aQxslL_show;
    }

    public void setaQxslL_show(String aQxslL_show) {
        this.aQxslL_show = aQxslL_show;
    }

    @Column(name = "aJxslR_show", nullable = true, length = 20)
    public String getaJxslR_show() {
        return aJxslR_show;
    }

    public void setaJxslR_show(String aJxslR_show) {
        this.aJxslR_show = aJxslR_show;
    }

    @Column(name = "aJxslL_show", nullable = true, length = 20)
    public String getaJxslL_show() {
        return aJxslL_show;
    }

    public void setaJxslL_show(String aJxslL_show) {
        this.aJxslL_show = aJxslL_show;
    }

    private String note;

    @Column(name = "note", nullable = true, length = 300)
    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
    private String tls;

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
