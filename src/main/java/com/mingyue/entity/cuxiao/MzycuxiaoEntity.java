package com.mingyue.entity.cuxiao;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.mingyue.entity.mzy_product.MzyProductEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
/**   
 * @Title: Entity
 * @Description: 产品促销
 * @author Tony
 * @date 2015-10-20 06:58:59
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mzy_cuxiao", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class MzycuxiaoEntity extends IdEntity implements java.io.Serializable {

    /**产品*/
    private MzyProductEntity mzyProductEntity;
    /**价格*/
	private java.lang.String price,disPrice;
	/**折扣*/
	private java.lang.String discount;
	/**开始时间*/
	private java.util.Date sdate;
	/**结束时间*/
	private java.util.Date edate;

//	private java.lang.String productid;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    public MzyProductEntity getMzyProductEntity() {
        return mzyProductEntity;
    }

    public void setMzyProductEntity(MzyProductEntity mzyProductEntity) {
        this.mzyProductEntity = mzyProductEntity;
    }


    @Column(name ="disPrice",nullable=true,length=20)
    public String getDisPrice() {
        return disPrice;
    }

    public void setDisPrice(String disPrice) {
        this.disPrice = disPrice;
    }

    /**
     *方法: 取得java.lang.String
     *@return: java.lang.String  价格
     */
	@Column(name ="PRICE",nullable=true,length=20)
	public java.lang.String getPrice(){
		return this.price;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  价格
	 */
	public void setPrice(java.lang.String price){
		this.price = price;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  折扣
	 */
	@Column(name ="DISCOUNT",nullable=true,length=20)
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
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  开始时间
	 */
	@Column(name ="SDATE",nullable=true)
	public java.util.Date getSdate(){
		return this.sdate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  开始时间
	 */
	public void setSdate(java.util.Date sdate){
		this.sdate = sdate;
	}
	/**
	 *方法: 取得java.util.Date
	 *@return: java.util.Date  结束时间
	 */
	@Column(name ="EDATE",nullable=true)
	public java.util.Date getEdate(){
		return this.edate;
	}

	/**
	 *方法: 设置java.util.Date
	 *@param: java.util.Date  结束时间
	 */
	public void setEdate(java.util.Date edate){
		this.edate = edate;
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
