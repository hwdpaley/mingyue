package com.mingyue.entity.mzy_product;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;

/**   
 * @Title: Entity
 * @Description: 产品管理
 * @author Tony
 * @date 2015-07-30 13:26:56
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mzy_product", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class MzyProductEntity extends IdEntity implements java.io.Serializable {

    private MzyProductEntity mzyProductEntity;
	/**名称*/
	private java.lang.String name;

	/**描述*/
	private java.lang.String description;
	/**价格*/
	private BigDecimal price;
    /**单位*/
    private java.lang.String dw;
    /**规格*/
    private java.lang.String guige;

    @Column(name = "guige", length = 20)
    public String getGuige() {
        return guige;
    }

    public void setGuige(String guige) {
        this.guige = guige;
    }

    @Column(name = "dw", length = 10)
    public String getDw() {
        return dw;
    }

    public void setDw(String dw) {
        this.dw = dw;
    }

    private java.lang.String src;

    private java.lang.Integer level;

    private List<MzyProductEntity> mzyProductEntities;

    @Column(name = "src", length = 100)
    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
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

    private byte[] picContent;
    private String picClas;
    private String extend;

    @Column(name = "piccontent")
    public byte[] getPicContent() {
        return picContent;
    }

    public void setPicContent(byte[] picContent) {
        this.picContent = picContent;
    }
    @Column(name = "picclas", length = 100)
    public String getPicClas() {
        return picClas;
    }

    public void setPicClas(String picClas) {
        this.picClas = picClas;
    }
    @Column(name = "extend", length = 10)
    public String getExtend() {
        return extend;
    }

    public void setExtend(String extend) {
        this.extend = extend;
    }

    @Column(name ="DESCRIPTION",nullable=true,length=500)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  价格
	 */
	@Column(name ="PRICE",nullable=true)
	public BigDecimal getPrice(){
		return this.price;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  价格
	 */
	public void setPrice(BigDecimal price){
		this.price = price;
	}

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parentid")
    public MzyProductEntity getMzyProductEntity() {
        return mzyProductEntity;
    }

    public void setMzyProductEntity(MzyProductEntity mzyProductEntity) {
        this.mzyProductEntity = mzyProductEntity;
    }

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "mzyProductEntity")
    public List<MzyProductEntity> getMzyProductEntities() {
        return mzyProductEntities;
    }

    public void setMzyProductEntities(List<MzyProductEntity> mzyProductEntities) {
        this.mzyProductEntities = mzyProductEntities;
    }

    @Column(name ="LEVEL",nullable=true,precision=10,scale=0)
    public java.lang.Integer getLevel(){
        return this.level;
    }

    /**
     *方法: 设置java.lang.Integer
     *@param: java.lang.Integer  按钮标识
     */
    public void setLevel(java.lang.Integer level){
        this.level = level;
    }

    /**折扣*/
    private java.lang.String discount;
    /**
     *方法: 取得java.lang.String
     *@return: java.lang.String  折扣
     */
    @Column(name ="DISCOUNT",nullable=true,length=10)
    public java.lang.String getDiscount(){
        return this.discount;
    }

    /**
     *方法: 设置java.lang.String
     *@param: java.lang.String  折扣
     */
    public void setDiscount(java.lang.String discount){
        this.discount = discount;
    }

    private String isDelete;
    @Column(name = "isDelete", nullable = false, length = 5)
    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }

    /**
     * 数量
     */
    private java.lang.String nums;

    public String getNums() {
        return nums;
    }

    public void setNums(String nums) {
        this.nums = nums;
    }
}
