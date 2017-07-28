package com.mingyue.entity.mzyxfda;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
/**   
 * @Title: Entity
 * @Description: 顾客消费档案
 * @author Tony
 * @date 2015-09-23 09:38:21
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mzy_xfda", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class MzyxfdaEntity extends IdEntity implements java.io.Serializable {
    /**顾客ID*/
    private MzyCustomEntity mzyCustomEntity;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customid")
    public MzyCustomEntity getMzyCustomEntity() {
        return mzyCustomEntity;
    }

    public void setMzyCustomEntity(MzyCustomEntity mzyCustomEntity) {
        this.mzyCustomEntity = mzyCustomEntity;
    }
    /**创建人名称*/
	private java.lang.String createName;
	/**创建人登录名称*/
	private java.lang.String createBy;
	/**创建日期*/
	private java.util.Date createDate;
	/**购买次数*/
	private java.lang.String gmtimes;
	/**购买时间*/
	private java.util.Date gmdate;
	/**项目详情*/
	private java.lang.String gmneirong;
	/**金额*/
	private java.lang.String jiner;
	/**服务人员*/
	private java.lang.String fuwu;
	/**顾客签名*/
	private java.lang.String gksing;
	/**备注*/
	private java.lang.String note;
	
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
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  购买次数
	 */
	@Column(name ="GMTIMES",nullable=true,length=10)
	public java.lang.String getGmtimes(){
		return this.gmtimes;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  购买次数
	 */
	public void setGmtimes(java.lang.String gmtimes){
		this.gmtimes = gmtimes;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  购买时间
	 */
	@Column(name ="GMDATE",nullable=true)
	public java.util.Date getGmdate(){
		return this.gmdate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  购买时间
	 */
	public void setGmdate(java.util.Date gmdate){
		this.gmdate = gmdate;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  项目详情
	 */
	@Column(name ="GMNEIRONG",nullable=true,length=100)
	public java.lang.String getGmneirong(){
		return this.gmneirong;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  项目详情
	 */
	public void setGmneirong(java.lang.String gmneirong){
		this.gmneirong = gmneirong;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  金额
	 */
	@Column(name ="JINER",nullable=true,length=10)
	public java.lang.String getJiner(){
		return this.jiner;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  金额
	 */
	public void setJiner(java.lang.String jiner){
		this.jiner = jiner;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  服务人员
	 */
	@Column(name ="FUWU",nullable=true,length=32)
	public java.lang.String getFuwu(){
		return this.fuwu;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  服务人员
	 */
	public void setFuwu(java.lang.String fuwu){
		this.fuwu = fuwu;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  顾客签名
	 */
	@Column(name ="GKSING",nullable=true,length=32)
	public java.lang.String getGksing(){
		return this.gksing;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  顾客签名
	 */
	public void setGksing(java.lang.String gksing){
		this.gksing = gksing;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  备注
	 */
	@Column(name ="NOTE",nullable=true,length=200)
	public java.lang.String getNote(){
		return this.note;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  备注
	 */
	public void setNote(java.lang.String note){
		this.note = note;
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
