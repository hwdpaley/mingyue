package com.mingyue.entity.mzy_tl;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.poi.excel.annotation.Excel;

/**   
 * @Title: Entity
 * @Description: 顾客表
 * @author Tony
 * @date 2015-08-11 05:06:16
 * @version V1.0   
 *  调理记录
 */
@Entity
@Table(name = "mzy_tl", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class Mzy_tlEntity extends IdEntity implements java.io.Serializable {
	/**顾客ID*/
	private MzyCustomEntity mzyCustomEntity;
	/**训练时间*/
    @Excel(name="训练时间",orderNum="1",exportFormat="yyyy-MM-dd HH:mm")
    private java.util.Date time;
	/**天气情况*/
    @Excel(name="天气情况",orderNum="2")
    private java.lang.String tqqk;
	/**当初项目*/
    @Excel(name="当初项目",orderNum="3")
    private java.lang.String dcxm;
	/**锻炼地点距离*/
    @Excel(name="地点距离",orderNum="4")
    private java.lang.String ddjl;
	/**锻炼情况*/
    @Excel(name="锻炼情况",orderNum="5")
    private java.lang.String dlqk;
	/**经络排毒*/
	private java.lang.String jlpd;
	/**刮痧*/
	private java.lang.String guasha;
	/**加强针*/
	private java.lang.String jqz;
	/**顾客详细情况*/
    @Excel(name="详细情况",orderNum="10")
    private java.lang.String gkdetail;
    /**键档时间*/
    private java.util.Date createDate;
    /**
     *方法: 取得java.util.Date
     *@return: java.util.Date  键档时间
     */
    @Column(name ="CREATE_DATE",nullable=true)
    public java.util.Date getCreateDate(){
        return this.createDate;
    }

    /**
     *方法: 设置java.util.Date
     *@param: java.util.Date  键档时间
     */
    public void setCreateDate(java.util.Date createDate){
        this.createDate = createDate;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customid")
    public MzyCustomEntity getMzyCustomEntity() {
        return mzyCustomEntity;
    }

    public void setMzyCustomEntity(MzyCustomEntity mzyCustomEntity) {
        this.mzyCustomEntity = mzyCustomEntity;
    }

    /**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  训练时间
	 */
	@Column(name ="TIME",nullable=true)
	public java.util.Date getTime(){
		return this.time;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  训练时间
	 */
	public void setTime(java.util.Date time){
		this.time = time;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  天气情况
	 */
	@Column(name ="TQQK",nullable=true,length=50)
	public java.lang.String getTqqk(){
		return this.tqqk;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  天气情况
	 */
	public void setTqqk(java.lang.String tqqk){
		this.tqqk = tqqk;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  当初项目
	 */
	@Column(name ="DCXM",nullable=true,length=50)
	public java.lang.String getDcxm(){
		return this.dcxm;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  当初项目
	 */
	public void setDcxm(java.lang.String dcxm){
		this.dcxm = dcxm;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  锻炼地点距离
	 */
	@Column(name ="DDJL",nullable=true,length=50)
	public java.lang.String getDdjl(){
		return this.ddjl;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  锻炼地点距离
	 */
	public void setDdjl(java.lang.String ddjl){
		this.ddjl = ddjl;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  锻炼情况
	 */
	@Column(name ="DLQK",nullable=true,length=50)
	public java.lang.String getDlqk(){
		return this.dlqk;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  锻炼情况
	 */
	public void setDlqk(java.lang.String dlqk){
		this.dlqk = dlqk;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  经络排毒
	 */
	@Column(name ="JLPD",nullable=true,length=30)
	public java.lang.String getJlpd(){
		return this.jlpd;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  经络排毒
	 */
	public void setJlpd(java.lang.String jlpd){
		this.jlpd = jlpd;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  刮痧
	 */
	@Column(name ="GUASHA",nullable=true,length=30)
	public java.lang.String getGuasha(){
		return this.guasha;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  刮痧
	 */
	public void setGuasha(java.lang.String guasha){
		this.guasha = guasha;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  加强针
	 */
	@Column(name ="JQZ",nullable=true,length=30)
	public java.lang.String getJqz(){
		return this.jqz;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  加强针
	 */
	public void setJqz(java.lang.String jqz){
		this.jqz = jqz;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  顾客详细情况
	 */
	@Column(name ="GKDETAIL",nullable=true,length=200)
	public java.lang.String getGkdetail(){
		return this.gkdetail;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  顾客详细情况
	 */
	public void setGkdetail(java.lang.String gkdetail){
		this.gkdetail = gkdetail;
	}

    private String qxsbL,qxsbR,qxslxgL,qxslxgR,qxslL,qxslR,jxslxgL,jxslxgR,jxsbL,jxsbR,jxslL,jxslR;


    @Column(name ="qxslxgL",nullable=true,length=10)
    public String getQxslxgL() {
        return qxslxgL;
    }

    public void setQxslxgL(String qxslxgL) {
        this.qxslxgL = qxslxgL;
    }

    @Column(name ="qxslxgR",nullable=true,length=10)
    public String getQxslxgR() {
        return qxslxgR;
    }

    public void setQxslxgR(String qxslxgR) {
        this.qxslxgR = qxslxgR;
    }

    @Column(name ="jxslxgL",nullable=true,length=10)
    public String getJxslxgL() {
        return jxslxgL;
    }

    public void setJxslxgL(String jxslxgL) {
        this.jxslxgL = jxslxgL;
    }

    @Column(name ="jxslxgR",nullable=true,length=10)
    public String getJxslxgR() {
        return jxslxgR;
    }

    public void setJxslxgR(String jxslxgR) {
        this.jxslxgR = jxslxgR;
    }

    @Column(name ="qxsbL",nullable=true,length=10)
    public String getQxsbL() {
        return qxsbL;
    }

    public void setQxsbL(String qxsbL) {
        this.qxsbL = qxsbL;
    }

    @Column(name ="qxsbR",nullable=true,length=10)
    public String getQxsbR() {
        return qxsbR;
    }

    public void setQxsbR(String qxsbR) {
        this.qxsbR = qxsbR;
    }

    @Column(name ="qxslL",nullable=true,length=10)
    public String getQxslL() {
        return qxslL;
    }

    public void setQxslL(String qxslL) {
        this.qxslL = qxslL;
    }

    @Column(name ="qxslR",nullable=true,length=10)
    public String getQxslR() {
        return qxslR;
    }

    public void setQxslR(String qxslR) {
        this.qxslR = qxslR;
    }

    @Column(name ="jxsbL",nullable=true,length=10)
    public String getJxsbL() {
        return jxsbL;
    }

    public void setJxsbL(String jxsbL) {
        this.jxsbL = jxsbL;
    }

    @Column(name ="jxsbR",nullable=true,length=10)
    public String getJxsbR() {
        return jxsbR;
    }

    public void setJxsbR(String jxsbR) {
        this.jxsbR = jxsbR;
    }

    @Column(name ="jxslL",nullable=true,length=10)
    public String getJxslL() {
        return jxslL;
    }

    public void setJxslL(String jxslL) {
        this.jxslL = jxslL;
    }

    @Column(name ="jxslR",nullable=true,length=10)
    public String getJxslR() {
        return jxslR;
    }

    public void setJxslR(String jxslR) {
        this.jxslR = jxslR;
    }
    @Excel(name="左眼清晰",orderNum="7")
    private String qxslLeft;
    @Excel(name="右眼清晰",orderNum="6")
    private String qxslRight;
    @Excel(name="左眼极限",orderNum="9")
    private String jxslLeft;
    @Excel(name="右眼极限",orderNum="8")
    private String jxslRight;

    @Column(name ="qxslLeft",nullable=true,length=20)
    public String getQxslLeft() {
        return qxslLeft;
    }

    public void setQxslLeft(String qxslLeft) {
        this.qxslLeft = qxslLeft;
    }

    @Column(name ="qxslRight",nullable=true,length=20)
    public String getQxslRight() {
        return qxslRight;
    }

    public void setQxslRight(String qxslRight) {
        this.qxslRight = qxslRight;
    }

    @Column(name ="jxslLeft",nullable=true,length=20)
    public String getJxslLeft() {
        return jxslLeft;
    }

    public void setJxslLeft(String jxslLeft) {
        this.jxslLeft = jxslLeft;
    }

    @Column(name ="jxslRight",nullable=true,length=20)
    public String getJxslRight() {
        return jxslRight;
    }

    public void setJxslRight(String jxslRight) {
        this.jxslRight = jxslRight;
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
