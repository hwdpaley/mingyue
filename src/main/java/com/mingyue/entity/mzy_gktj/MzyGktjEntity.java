package com.mingyue.entity.mzy_gktj;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.SequenceGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
/**   
 * @Title: Entity
 * @Description: 顾客数量统计
 * @author Tony
 * @date 2015-08-20 12:17:28
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mzy_gktj", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class MzyGktjEntity extends IdEntity implements java.io.Serializable {
	/**创建人名称*/
	private java.lang.String createName;
	/**创建人登录名称*/
	private java.lang.String createBy;
	/**创建日期*/
	private java.util.Date createDate;
	/**咨询顾客数量*/
	private java.lang.String zxgks;
	/**体验顾客数量*/
	private java.lang.String tygks;
	/**康复疗程数量*/
	private java.lang.String kflcgks;
	/**养护疗程数量*/
	private java.lang.String yhlcgks;
	/**流失顾客数量*/
	private java.lang.String lsgks;

    private String shopName;

    @Column(name ="shopName",nullable=true,length=20)
    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    /**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  id
	 */
	


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
	 *@return: java.lang.String  咨询顾客数量
	 */
	@Column(name ="ZXGKS",nullable=true,length=10)
	public java.lang.String getZxgks(){
		return this.zxgks;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  咨询顾客数量
	 */
	public void setZxgks(java.lang.String zxgks){
		this.zxgks = zxgks;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  体验顾客数量
	 */
	@Column(name ="TYGKS",nullable=true,length=10)
	public java.lang.String getTygks(){
		return this.tygks;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  体验顾客数量
	 */
	public void setTygks(java.lang.String tygks){
		this.tygks = tygks;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  康复疗程数量
	 */
	@Column(name ="KFLCGKS",nullable=true,length=10)
	public java.lang.String getKflcgks(){
		return this.kflcgks;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  康复疗程数量
	 */
	public void setKflcgks(java.lang.String kflcgks){
		this.kflcgks = kflcgks;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  养护疗程数量
	 */
	@Column(name ="YHLCGKS",nullable=true,length=10)
	public java.lang.String getYhlcgks(){
		return this.yhlcgks;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  养护疗程数量
	 */
	public void setYhlcgks(java.lang.String yhlcgks){
		this.yhlcgks = yhlcgks;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  流失顾客数量
	 */
	@Column(name ="LSGKS",nullable=true,length=10)
	public java.lang.String getLsgks(){
		return this.lsgks;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  流失顾客数量
	 */
	public void setLsgks(java.lang.String lsgks){
		this.lsgks = lsgks;
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
