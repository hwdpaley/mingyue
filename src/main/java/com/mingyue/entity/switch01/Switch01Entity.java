package com.mingyue.entity.switch01;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSIcon;

/**   
 * @Title: Entity
 * @Description: 交换机信息
 * @author Tony
 * @date 2015-07-06 15:05:41
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mc_switch", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class Switch01Entity extends IdEntity implements java.io.Serializable {
	/**名称*/
	private java.lang.String fullname;
	/**设备状态*/
	private java.lang.Integer state;
	/**设备IP地址*/
	private java.lang.String ip;

    private Switch01Entity switch01Entity;
    private List<Switch01Entity> Switch01Entities;
    private org.jeecgframework.web.system.pojo.base.TSIcon TSIcon = new TSIcon();//菜单图标

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "iconid")
    public TSIcon getTSIcon() {
        return TSIcon;
    }
    public void setTSIcon(TSIcon tSIcon) {
        TSIcon = tSIcon;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PARENTID")
    public Switch01Entity getSwitch01Entity() {
        return switch01Entity;
    }

    public void setSwitch01Entity(Switch01Entity switch01Entity) {
        this.switch01Entity = switch01Entity;
    }

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "switch01Entity")
    public List<Switch01Entity> getSwitch01Entities() {
        return Switch01Entities;
    }

    public void setSwitch01Entities(List<Switch01Entity> switch01Entities) {
        this.Switch01Entities = switch01Entities;
    }
    private java.lang.String assetorder;
    @Column(name = "ASSETORDER")
    public String getAssetorder() {
        return assetorder;
    }

    public void setAssetorder(String assetorder) {
        this.assetorder = assetorder;
    }

    /**修改时间*/
    private java.util.Date updateDate;
    @Column(name ="update_date",nullable=true)
    public java.util.Date getUpdateDate(){
        return this.updateDate;
    }

    /**
     *方法: 设置java.util.Date
     *@param: java.util.Date  修改时间
     */
    public void setUpdateDate(java.util.Date updateDate){
        this.updateDate = updateDate;
    }


    /**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  名称
	 */
	@Column(name ="FULLNAME",nullable=true,length=50)
	public java.lang.String getFullname(){
		return this.fullname;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  名称
	 */
	public void setFullname(java.lang.String fullname){
		this.fullname = fullname;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  设备状态
	 */
	@Column(name ="STATE",nullable=true,precision=10,scale=0)
	public java.lang.Integer getState(){
		return this.state;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  设备状态
	 */
	public void setState(java.lang.Integer state){
		this.state = state;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  设备IP地址
	 */
	@Column(name ="IP",nullable=true,length=32)
	public java.lang.String getIp(){
		return this.ip;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  设备IP地址
	 */
	public void setIp(java.lang.String ip){
		this.ip = ip;
	}
    private java.lang.Integer assetlevel;
    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  资产等级
     */
    @Column(name = "ASSETLEVEL", nullable = true, precision = 10, scale = 0)
    public java.lang.Integer getAssetlevel() {
        return this.assetlevel;
    }

    /**
     * 方法: 设置java.lang.Integer
     *
     * @param: java.lang.Integer  资产等级
     */
    public void setAssetlevel(java.lang.Integer assetlevel) {
        this.assetlevel = assetlevel;
    }

}
