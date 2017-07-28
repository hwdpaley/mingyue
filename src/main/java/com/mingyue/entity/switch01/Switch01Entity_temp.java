package com.mingyue.entity.switch01;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSIcon;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**   
 * @Title: Entity
 * @Description: 交换机信息
 * @author Tony
 * @date 2015-07-06 15:05:41
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mc_switch_temp", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class Switch01Entity_temp extends IdEntity implements java.io.Serializable {
	/**名称*/
	private String name;
//	/**设备状态*/
//	private Integer state;
	/**设备IP地址*/
	private String ip;

    private Switch01Entity_temp switch01Entity;
    private List<Switch01Entity_temp> Switch01Entities;
//    private org.jeecgframework.web.system.pojo.base.TSIcon TSIcon = new TSIcon();//菜单图标

//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "iconid")
//    public TSIcon getTSIcon() {
//        return TSIcon;
//    }
//    public void setTSIcon(TSIcon tSIcon) {
//        TSIcon = tSIcon;
//    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PID")
    public Switch01Entity_temp getSwitch01Entity() {
        return switch01Entity;
    }

    public void setSwitch01Entity(Switch01Entity_temp switch01Entity) {
        this.switch01Entity = switch01Entity;
    }

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "switch01Entity")
    public List<Switch01Entity_temp> getSwitch01Entities() {
        return Switch01Entities;
    }

    public void setSwitch01Entities(List<Switch01Entity_temp> switch01Entities) {
        this.Switch01Entities = switch01Entities;
    }
//    private String assetorder;
//    @Column(name = "ASSETORDER")
//    public String getAssetorder() {
//        return assetorder;
//    }
//
//    public void setAssetorder(String assetorder) {
//        this.assetorder = assetorder;
//    }

    /**修改时间*/
//    private Date updateDate;
//    @Column(name ="update_date",nullable=true)
//    public Date getUpdateDate(){
//        return this.updateDate;
//    }
//
//    /**
//     *方法: 设置java.util.Date
//     *@param: java.util.Date  修改时间
//     */
//    public void setUpdateDate(Date updateDate){
//        this.updateDate = updateDate;
//    }

    /**
     *方法: 取得java.lang.String
     *@return: java.lang.String  名称
     */
    @Column(name ="NAME",nullable=true,length=50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



//	/**
//	 *方法: 取得java.lang.Integer
//	 *@return: java.lang.Integer  设备状态
//	 */
//	@Column(name ="STATE",nullable=true,precision=10,scale=0)
//	public Integer getState(){
//		return this.state;
//	}
//
//	/**
//	 *方法: 设置java.lang.Integer
//	 *@param: java.lang.Integer  设备状态
//	 */
//	public void setState(Integer state){
//		this.state = state;
//	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  设备IP地址
	 */
	@Column(name ="IP",nullable=true,length=32)
	public String getIp(){
		return this.ip;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  设备IP地址
	 */
	public void setIp(String ip){
		this.ip = ip;
	}

    private Integer nLevel;
    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  资产等级
     */
    @Column(name = "nLevel", nullable = true, precision = 10, scale = 0)
    public Integer getnLevel() {
        return nLevel;
    }

    public void setnLevel(Integer nLevel) {
        this.nLevel = nLevel;
    }

    private org.jeecgframework.web.system.pojo.base.TSIcon TSIcon = new TSIcon();//菜单图标

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "iconid")
    public TSIcon getTSIcon() {
        return TSIcon;
    }
    public void setTSIcon(TSIcon tSIcon) {
        TSIcon = tSIcon;
    }
}
