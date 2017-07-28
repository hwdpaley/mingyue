package com.mingyue.entity.jcynet;

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
import org.jeecgframework.core.common.entity.IdEntity;

import javax.persistence.SequenceGenerator;

/**   
 * @Title: Entity
 * @Description: 检察院网络数据分析
 * @author Tony
 * @date 2015-07-14 14:20:49
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mc_jcy", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class JcynetEntity extends IdEntity implements java.io.Serializable {
//	/**id*/
//	private java.lang.String id;
	/**检察院名称*/
	private java.lang.String name;
	/**网络状态*/
	private java.lang.String net;
	/**时间*/
	private java.util.Date time;
	
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  id
	 */
	
//	@Id
//	@Column(name ="ID",nullable=false,length=36)
//	public java.lang.String getId(){
//		return this.id;
//	}
//
//	/**
//	 *方法: 设置java.lang.String
//	 *@param: java.lang.String  id
//	 */
//	public void setId(java.lang.String id){
//		this.id = id;
//	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  检察院名称
	 */
	@Column(name ="NAME",nullable=true,length=32)
	public java.lang.String getName(){
		return this.name;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  检察院名称
	 */
	public void setName(java.lang.String name){
		this.name = name;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  网络状态
	 */
	@Column(name ="NET",nullable=true,length=32)
	public java.lang.String getNet(){
		return this.net;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  网络状态
	 */
	public void setNet(java.lang.String net){
		this.net = net;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  时间
	 */
	@Column(name ="TIME",nullable=true)
	public java.util.Date getTime(){
		return this.time;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  时间
	 */
	public void setTime(java.util.Date time){
		this.time = time;
	}
}
