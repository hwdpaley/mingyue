package com.mingyue.entity.mzyhlgz;

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
 * @Description: 顾客护理跟踪
 * @author Tony
 * @date 2015-09-23 09:39:02
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mzy_hlgz", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class MzyhlgzEntity extends IdEntity implements java.io.Serializable {
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
	/**日期*/
	private java.util.Date dtime;
	/**卡项目服务*/
	private java.lang.String neirong;
	/**护理时间*/
	private java.util.Date hltime;
	/**剩余次数*/
	private java.lang.String shengyu;
	/**建议签名*/
	private java.lang.String jianyi;
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
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  日期
	 */
	@Column(name ="DTIME",nullable=true)
	public java.util.Date getDtime(){
		return this.dtime;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  日期
	 */
	public void setDtime(java.util.Date dtime){
		this.dtime = dtime;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  卡项目服务
	 */
	@Column(name ="NEIRONG",nullable=true,length=32)
	public java.lang.String getNeirong(){
		return this.neirong;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  卡项目服务
	 */
	public void setNeirong(java.lang.String neirong){
		this.neirong = neirong;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  护理时间
	 */
	@Column(name ="HLTIME",nullable=true)
	public java.util.Date getHltime(){
		return this.hltime;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  护理时间
	 */
	public void setHltime(java.util.Date hltime){
		this.hltime = hltime;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  剩余次数
	 */
	@Column(name ="SHENGYU",nullable=true,length=10)
	public java.lang.String getShengyu(){
		return this.shengyu;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  剩余次数
	 */
	public void setShengyu(java.lang.String shengyu){
		this.shengyu = shengyu;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  建议签名
	 */
	@Column(name ="JIANYI",nullable=true,length=100)
	public java.lang.String getJianyi(){
		return this.jianyi;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  建议签名
	 */
	public void setJianyi(java.lang.String jianyi){
		this.jianyi = jianyi;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  备注
	 */
	@Column(name ="NOTE",nullable=true,length=100)
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
