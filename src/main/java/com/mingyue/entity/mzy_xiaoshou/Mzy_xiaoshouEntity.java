package com.mingyue.entity.mzy_xiaoshou;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.mingyue.entity.mzy_product.MzyProductEntity;
import com.mingyue.entity.mzy_xsprint.Mzy_xsprintEntity;
import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSDepart;

/**
 * @Title: Entity
 * @Description: 销售表
 * @author Tony
 * @date 2015-09-07 10:37:42
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mzy_xiaoshou", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@JsonAutoDetect
@SuppressWarnings("serial")
public class Mzy_xiaoshouEntity extends IdEntity implements java.io.Serializable {



    /**
     * 顾客销售清单
     */
    private Mzy_xsprintEntity mzy_xsprintEntity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "xsprint_id")
    public Mzy_xsprintEntity getMzy_xsprintEntity() {
        return mzy_xsprintEntity;
    }

    public void setMzy_xsprintEntity(Mzy_xsprintEntity mzy_xsprintEntity) {
        this.mzy_xsprintEntity = mzy_xsprintEntity;
    }

    /**
     * 产品

     */
    private MzyProductEntity mzyProductEntity;




    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    public MzyProductEntity getMzyProductEntity() {
        return mzyProductEntity;
    }

    public void setMzyProductEntity(MzyProductEntity mzyProductEntity) {
        this.mzyProductEntity = mzyProductEntity;
    }

    /**创建人名称*/
	private java.lang.String createName;
	/**创建人登录名称*/
	private java.lang.String createBy;
	/**创建日期*/
	private java.util.Date createDate;
	/**数量*/
	private java.lang.String nums;
	/**价格*/
	private BigDecimal price;
	/**折扣*/
	private java.lang.String discount;
	

	private String productName;

    @Column(name ="productName",nullable=true,length=50)
    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    private String note;

    @Column(name ="note",nullable=true,length=100)
    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
    /**价格*/
    private BigDecimal total;

    @Column(name ="total",nullable=true)
    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

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
	 *@return: java.lang.String  数量
	 */
	@Column(name ="NUMS",nullable=true,length=10)
	public java.lang.String getNums(){
		return this.nums;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  数量
	 */
	public void setNums(java.lang.String nums){
		this.nums = nums;
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
}
