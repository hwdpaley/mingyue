package com.mingyue.entity.inforule;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.mingyue.entity.asset.AssetEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;

/**   
 * @Title: Entity
 * @Description: 规则订阅
 * @author Tony
 * @date 2015-07-06 10:34:48
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mc_inforule", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class InforuleEntity implements java.io.Serializable {

    private String id;

    @Id
//    @GeneratedValue(generator = "paymentableGenerator")
//    @GenericGenerator(name = "paymentableGenerator", strategy = "uuid")
    @Column(name ="ID",nullable=false,length=32)
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    private AssetEntity assetEntity;
	/**名称*/
	private java.lang.String name;
	/**是否订阅*/
	private java.lang.Integer subscribed;
	/**告警或是信息*/
	private java.lang.Integer type;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ASSETID")
    public AssetEntity getAssetEntity() {
        return assetEntity;
    }

    public void setAssetEntity(AssetEntity assetEntity) {
        this.assetEntity = assetEntity;
    }

    /**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  名称
	 */
	@Column(name ="NAME",nullable=true,length=50)
	public java.lang.String getName(){
		return this.name;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  名称
	 */
	public void setName(java.lang.String name){
		this.name = name;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  是否订阅
	 */
	@Column(name ="SUBSCRIBED",nullable=true,precision=10,scale=0)
	public java.lang.Integer getSubscribed(){
		return this.subscribed;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  是否订阅
	 */
	public void setSubscribed(java.lang.Integer subscribed){
		this.subscribed = subscribed;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  告警或是信息
	 */
	@Column(name ="TYPE",nullable=true,precision=10,scale=0)
	public java.lang.Integer getType(){
		return this.type;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  告警或是信息
	 */
	public void setType(java.lang.Integer type){
		this.type = type;
	}

}
