package com.mingyue.entity.mzycpkcsq;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSDepart;
import org.jeecgframework.web.system.pojo.base.TSUser;

/**
 * @Title: Entity
 * @Description: 产品库存申请表
 * @author Tony
 * @date 2015-09-24 03:09:24
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mzy_cpkcsq", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class MzycpkcsqEntity extends IdEntity implements java.io.Serializable {
    private TSUser tsUser;//下单人

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userid")
    public TSUser getTsUser() {
        return tsUser;
    }

    public void setTsUser(TSUser tsUser) {
        this.tsUser = tsUser;
    }

    private TSUser tsUserSh;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shuserid")
    public TSUser getTsUserSh() {
        return tsUserSh;
    }

    public void setTsUserSh(TSUser tsUserSh) {
        this.tsUserSh = tsUserSh;
    }



    private TSDepart tsDepart;//店面

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "departid")
    public TSDepart getTsDepart() {
        return tsDepart;
    }

    public void setTsDepart(TSDepart tsDepart) {
        this.tsDepart = tsDepart;
    }


    /**创建人名称*/
	private java.lang.String createName;
	/**创建人登录名称*/
	private java.lang.String createBy;
	/**创建日期*/
	private java.util.Date createDate;
	/**申请日期*/
	private java.util.Date sqdate;
	/**申请编号*/
	private java.lang.String sqbh;
	/**通过时间*/
	private java.util.Date pfdate;
	/**到货时间*/
	private java.util.Date daodadate;
	/**发货时间*/
	private java.util.Date fhdate;
    private java.lang.String note;

    @Column(name ="note",nullable=true,length=200)
    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }



    /**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  创建人名称
	 */
	@Column(name ="CREATE_NAME",nullable=true,length=50)
	public java.lang.String getCreateName(){
		return this.createName;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  创建人名称
	 */
	public void setCreateName(java.lang.String createName){
		this.createName = createName;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  创建人登录名称
	 */
	@Column(name ="CREATE_BY",nullable=true,length=50)
	public java.lang.String getCreateBy(){
		return this.createBy;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  创建人登录名称
	 */
	public void setCreateBy(java.lang.String createBy){
		this.createBy = createBy;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  创建日期
	 */
	@Column(name ="CREATE_DATE",nullable=true)
	public java.util.Date getCreateDate(){
		return this.createDate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  创建日期
	 */
	public void setCreateDate(java.util.Date createDate){
		this.createDate = createDate;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  申请日期
	 */
	@Column(name ="SQDATE",nullable=true)
	public java.util.Date getSqdate(){
		return this.sqdate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  申请日期
	 */
	public void setSqdate(java.util.Date sqdate){
		this.sqdate = sqdate;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  申请编号
	 */
	@Column(name ="SQBH",nullable=true,length=32)
	public java.lang.String getSqbh(){
		return this.sqbh;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  申请编号
	 */
	public void setSqbh(java.lang.String sqbh){
		this.sqbh = sqbh;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  通过时间
	 */
	@Column(name ="PFDATE",nullable=true)
	public java.util.Date getPfdate(){
		return this.pfdate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  通过时间
	 */
	public void setPfdate(java.util.Date pfdate){
		this.pfdate = pfdate;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  到货时间
	 */
	@Column(name ="DAODADATE",nullable=true)
	public java.util.Date getDaodadate(){
		return this.daodadate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  到货时间
	 */
	public void setDaodadate(java.util.Date daodadate){
		this.daodadate = daodadate;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  发货时间
	 */
	@Column(name ="FHDATE",nullable=true)
	public java.util.Date getFhdate(){
		return this.fhdate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  发货时间
	 */
	public void setFhdate(java.util.Date fhdate){
		this.fhdate = fhdate;
	}
    /*
    状态
     */
    private String status;

    @Column(name ="status",nullable=true,length=10)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
