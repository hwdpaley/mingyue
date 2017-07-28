package com.mingyue.entity.alarm;

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
 * @Description: 告警信息
 * @author Tony
 * @date 2015-07-06 13:22:01
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mc_alarm", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class AlarmEntity extends IdEntity implements java.io.Serializable {

    private AssetEntity assetEntity;
	/**告警内容*/
	private java.lang.String content;
	/**告警类型*/
	private java.lang.String type;



	/**创建时间*/
	private Date create_date;
	/**是否已读*/
	private java.lang.Integer unread;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ASSETID")
    public AssetEntity getAssetEntity() {
        return assetEntity;
    }

    public void setAssetEntity(AssetEntity assetEntity) {
        this.assetEntity = assetEntity;
    }

    /**
	 *方法: 取得java.lang.Object
	 *@return: java.lang.Object  告警内容
	 */
	@Column(name ="CONTENT",nullable=true,length=1000)
	public java.lang.String getContent(){
		return this.content;
	}

	/**
	 *方法: 设置java.lang.Object
	 *@param: java.lang.Object  告警内容
	 */
	public void setContent(java.lang.String content){
		this.content = content;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  告警类型
	 */
	@Column(name ="TYPE",nullable=true,length=32)
	public java.lang.String getType(){
		return this.type;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  告警类型
	 */
	public void setType(java.lang.String type){
		this.type = type;
	}

    @Column(name ="create_date",nullable=true)
    public Date getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Date create_date) {
        this.create_date = create_date;
    }

    /**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  是否已读
	 */
	@Column(name ="UNREAD",nullable=true,precision=10,scale=0)
	public java.lang.Integer getUnread(){
		return this.unread;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  是否已读
	 */
	public void setUnread(java.lang.Integer unread){
		this.unread = unread;
	}
}
