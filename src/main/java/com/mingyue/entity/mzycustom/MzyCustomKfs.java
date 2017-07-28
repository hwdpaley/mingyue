package com.mingyue.entity.mzycustom;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSUser;

import javax.persistence.*;

/**
 * Created by Tony on 1/8/15.
 */
@Entity
@Table(name = "mzy_custom_kfs")
@DynamicUpdate(true)
@DynamicInsert(true)
public class MzyCustomKfs extends IdEntity implements java.io.Serializable{
    private MzyCustomEntity mzyCustomEntity;
    private TSUser tsUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "custom_id")
    public MzyCustomEntity getMzyCustomEntity() {
        return mzyCustomEntity;
    }

    public void setMzyCustomEntity(MzyCustomEntity mzyCustomEntity) {
        this.mzyCustomEntity = mzyCustomEntity;
    }




    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    public TSUser getTsUser() {
        return tsUser;
    }

    public void setTsUser(TSUser tsUser) {
        this.tsUser = tsUser;
    }

    private String isDelete;
    @Column(name = "isDelete", nullable = false, length = 5)
    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }

//    /**发送时间*/
//    private java.util.Date sendtime;
//    /**
//     * 是否邮件、短信、推送、直接发送
//     */
//    private String email,push,msg,direct;
//
//    @Column(name ="email",nullable=true,length=2)
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//    @Column(name ="push",nullable=true,length=2)
//    public String getPush() {
//        return push;
//    }
//
//    public void setPush(String push) {
//        this.push = push;
//    }
//    @Column(name ="msg",nullable=true,length=2)
//    public String getMsg() {
//        return msg;
//    }
//
//    public void setMsg(String msg) {
//        this.msg = msg;
//    }
//    @Column(name ="direct",nullable=true,length=2)
//    public String getDirect() {
//        return direct;
//    }
//
//    public void setDirect(String direct) {
//        this.direct = direct;
//    }
//
//    /**
//     *方法: 取得java.util.Date
//     *@return: java.util.Date  发送时间
//     */
//    @Column(name ="SENDTIME",nullable=true)
//    public java.util.Date getSendtime(){
//        return this.sendtime;
//    }
//
//    /**
//     *方法: 设置java.util.Date
//     *@param: java.util.Date  发送时间
//     */
//    public void setSendtime(java.util.Date sendtime){
//        this.sendtime = sendtime;
//    }

}
