package com.mingyue.entity.mzycustom;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.web.system.pojo.base.TSUser;

/**
 * @author Tony
 * @version V1.0
 * @Title: Entity
 * @Description: 顾客表
 * @date 2015-08-11 04:55:53
 */
@Entity
@Table(name = "mzy_custom", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
@PrimaryKeyJoinColumn(name = "id")
public class MzyCustomEntity extends TSUser implements java.io.Serializable {
    /**
     * 会员号码
     */
    private String idNums;

    @Column(name = "idNums", nullable = true, length = 32)
    public String getIdNums() {
        return idNums;
    }

    public void setIdNums(String idNums) {
        this.idNums = idNums;
    }

    /**
     * 客户类型
     */
    private String customType;

    @Column(name = "customtype", nullable = true, length = 5)
    public String getCustomType() {
        return customType;
    }

    public void setCustomType(String customType) {
        this.customType = customType;
    }

    /**
     * 就读学校
     */
    private java.lang.String school;
    /**
     * 近视年龄
     */
    private java.lang.String jsage;
    /**
     * 带镜年龄
     */
    private java.lang.String djage;
    /**
     * 斜视
     */
    private java.lang.String isxs;
    /**
     * 治疗
     */
    private java.lang.String iszl;
    /**
     * 遗传近视
     */
    private java.lang.String isycjs;
    /**
     * 弱视
     */
    private java.lang.String isrs;

//    private String blsr, blsl, bjzr, bjzl, bqjr, bqjl, bzjr, bzjl;
//    private String alsr, alsl, ajzr, ajzl, aqjr, aqjl, azjr, azjl;


    /**
     * 康复师
     */
    private String kfmen, name;

    @Column(name = "name", nullable = true, length = 50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "kfmen", nullable = true, length = 50)
    public String getKfmen() {
        return kfmen;
    }

    public void setKfmen(String kfmen) {
        this.kfmen = kfmen;
    }

    /**
     * 建档时间
     */
    private java.util.Date createDate;


    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  就读学校
     */
    @Column(name = "SCHOOL", nullable = true, length = 100)
    public java.lang.String getSchool() {
        return this.school;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  就读学校
     */
    public void setSchool(java.lang.String school) {
        this.school = school;
    }

    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  近视年龄
     */
    @Column(name = "JSAGE", nullable = true, length = 10)
    public java.lang.String getJsage() {
        return this.jsage;
    }

    /**
     * 方法: 设置java.lang.Integer
     *
     * @param: java.lang.Integer  近视年龄
     */
    public void setJsage(java.lang.String jsage) {
        this.jsage = jsage;
    }

    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  带镜年龄
     */
    @Column(name = "DJAGE", nullable = true, length = 10)
    public java.lang.String getDjage() {
        return this.djage;
    }

    public void setDjage(String djage) {
        this.djage = djage;
    }

    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  斜视
     */
    @Column(name = "ISXS", nullable = true, length = 5)
    public java.lang.String getIsxs() {
        return this.isxs;
    }

    /**
     * 方法: 设置java.lang.Integer
     *
     * @param: java.lang.Integer  斜视
     */
    public void setIsxs(java.lang.String isxs) {
        this.isxs = isxs;
    }


    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  治疗
     */
    @Column(name = "ISZL", nullable = true, length = 5)
    public java.lang.String getIszl() {
        return this.iszl;
    }

    /**
     * 方法: 设置java.lang.Integer
     *
     * @param: java.lang.Integer  治疗
     */
    public void setIszl(java.lang.String iszl) {
        this.iszl = iszl;
    }

    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  遗传近视
     */
    @Column(name = "ISYCJS", nullable = true, length = 5)
    public java.lang.String getIsycjs() {
        return this.isycjs;
    }

    /**
     * 方法: 设置java.lang.Integer
     *
     * @param: java.lang.Integer  遗传近视
     */
    public void setIsycjs(java.lang.String isycjs) {
        this.isycjs = isycjs;
    }

    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  弱视
     */
    @Column(name = "ISRS", nullable = true, length = 5)
    public java.lang.String getIsrs() {
        return this.isrs;
    }

    /**
     * 方法: 设置java.lang.Integer
     *
     * @param: java.lang.Integer  弱视
     */
    public void setIsrs(java.lang.String isrs) {
        this.isrs = isrs;
    }


    /**
     * 方法: 取得java.util.Date
     *
     * @return: java.util.Date  建档时间
     */
    @Column(name = "CREATE_DATE", nullable = true)
    public java.util.Date getCreateDate() {
        return this.createDate;
    }

    /**
     * 方法: 设置java.util.Date
     *
     * @param: java.util.Date  建档时间
     */
    public void setCreateDate(java.util.Date createDate) {
        this.createDate = createDate;
    }




    /**
     * 积分
     */
    private String jf;
    /**
     * 喜欢物品、运动、菜肴
     */
    private String likeWp, likeYd, likeCy;

    /**
     * 家庭情况、兴趣爱好、交通工具、生日、体质
     */
    private String jtqk, xqah, jtgj, tz;
    private Date shengri;
    /**
     * 联系地址
     */
    private String lxAddress;
    /**
     * 方便理疗时间
     */
    private String fbsj_s, fbsj_e;
    /**
     * 血型、身高
     */
    private String xuexing, shenggao;
    /**
     * 身份：学生、社会人士、备注
     */
    private String shengfen, note;

    @Column(name = "note", nullable = true, length = 300)
    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Column(name = "jf", nullable = true, length = 10)
    public String getJf() {
        return jf;
    }

    public void setJf(String jf) {
        this.jf = jf;
    }

    @Column(name = "likeWp", nullable = true, length = 100)
    public String getLikeWp() {
        return likeWp;
    }

    public void setLikeWp(String likeWp) {
        this.likeWp = likeWp;
    }

    @Column(name = "likeYd", nullable = true, length = 100)
    public String getLikeYd() {
        return likeYd;
    }

    public void setLikeYd(String likeYd) {
        this.likeYd = likeYd;
    }

    @Column(name = "likeCy", nullable = true, length = 100)
    public String getLikeCy() {
        return likeCy;
    }

    public void setLikeCy(String likeCy) {
        this.likeCy = likeCy;
    }

    @Column(name = "jtqk", nullable = true, length = 100)
    public String getJtqk() {
        return jtqk;
    }

    public void setJtqk(String jtqk) {
        this.jtqk = jtqk;
    }

    @Column(name = "xqah", nullable = true, length = 100)
    public String getXqah() {
        return xqah;
    }

    public void setXqah(String xqah) {
        this.xqah = xqah;
    }

    @Column(name = "jtgj", nullable = true, length = 50)
    public String getJtgj() {
        return jtgj;
    }

    public void setJtgj(String jtgj) {
        this.jtgj = jtgj;
    }

    @Column(name = "tz", nullable = true, length = 50)
    public String getTz() {
        return tz;
    }

    public void setTz(String tz) {
        this.tz = tz;
    }

    @Column(name = "shengri", nullable = true)
    public Date getShengri() {
        return shengri;
    }

    public void setShengri(Date shengri) {
        this.shengri = shengri;
    }

    @Column(name = "lxAddress", nullable = true, length = 100)
    public String getLxAddress() {
        return lxAddress;
    }

    public void setLxAddress(String lxAddress) {
        this.lxAddress = lxAddress;
    }

    @Column(name = "fbsj_s", nullable = true, length = 100)
    public String getFbsj_s() {
        return fbsj_s;
    }

    public void setFbsj_s(String fbsj_s) {
        this.fbsj_s = fbsj_s;
    }

    @Column(name = "fbsj_e", nullable = true, length = 100)
    public String getFbsj_e() {
        return fbsj_e;
    }

    public void setFbsj_e(String fbsj_e) {
        this.fbsj_e = fbsj_e;
    }

    @Column(name = "xuexing", nullable = true, length = 50)
    public String getXuexing() {
        return xuexing;
    }

    public void setXuexing(String xuexing) {
        this.xuexing = xuexing;
    }

    @Column(name = "shenggao", nullable = true, length = 50)
    public String getShenggao() {
        return shenggao;
    }

    public void setShenggao(String shenggao) {
        this.shenggao = shenggao;
    }

    @Column(name = "shengfen", nullable = true, length = 50)
    public String getShengfen() {
        return shengfen;
    }

    public void setShengfen(String shengfen) {
        this.shengfen = shengfen;
    }

    private String mamaName, babaName, mamaWork, babaWork, mamaPhone, babaPhone;

    @Column(name = "mamaName", nullable = true, length = 20)
    public String getMamaName() {
        return mamaName;
    }

    public void setMamaName(String mamaName) {
        this.mamaName = mamaName;
    }

    @Column(name = "babaName", nullable = true, length = 20)
    public String getBabaName() {
        return babaName;
    }

    public void setBabaName(String babaName) {
        this.babaName = babaName;
    }

    @Column(name = "mamaWork", nullable = true, length = 100)
    public String getMamaWork() {
        return mamaWork;
    }

    public void setMamaWork(String mamaWork) {
        this.mamaWork = mamaWork;
    }

    @Column(name = "babaWork", nullable = true, length = 100)
    public String getBabaWork() {
        return babaWork;
    }

    public void setBabaWork(String babaWork) {
        this.babaWork = babaWork;
    }

    @Column(name = "mamaPhone", nullable = true, length = 20)
    public String getMamaPhone() {
        return mamaPhone;
    }

    public void setMamaPhone(String mamaPhone) {
        this.mamaPhone = mamaPhone;
    }

    @Column(name = "babaPhone", nullable = true, length = 20)
    public String getBabaPhone() {
        return babaPhone;
    }

    public void setBabaPhone(String babaPhone) {
        this.babaPhone = babaPhone;
    }

    @Column(name = "orgName", nullable = true, length = 40)
    private String orgName;

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
    }

    private String isDelete;

    @Column(name = "isDelete", nullable = false, length = 5)
    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }
//  a：调理类  b养护类
    private String isTl, isYh,showTlYh;

    @Column(name = "isTl",  length = 4)
    public String getIsTl() {
        return isTl;
    }

    public void setIsTl(String isTl) {
        this.isTl = isTl;
    }

    @Column(name = "isYh",  length = 4)
    public String getIsYh() {
        return isYh;
    }

    public void setIsYh(String isYh) {
        this.isYh = isYh;
    }

    public String getShowTlYh() {
        return showTlYh;
    }

    public void setShowTlYh(String showTlYh) {
        this.showTlYh = showTlYh;
    }
}
