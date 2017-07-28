package com.mingyue.entity.mcui;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

/**   
 * @Title: Entity
 * @Description: UI界面
 * @author Tony
 * @date 2015-07-08 12:01:01
 * @version V1.0   
 *
 */
@Entity
@Table(name = "mc_ui_temp", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class McuiTempEntity implements java.io.Serializable {

	/**主键*/
	private String id;
	/**X坐标*/
	private Integer x;
	/**Y坐标*/
	private Integer y;
	/**宽度*/
	private Integer width;
	/**高度*/
	private Integer height;
	/**图片名称*/
	private String picname;
    /**图片名称*/
    private String picnameh;
	/**按钮功能*/
	private String functionname;
	/**按钮文字*/
	private String text;
	/**排序*/
	private Integer uiorder;
	/**功能名称*/
	private String name;
	/**按钮标识*/
	private Integer level;
	/**背景图片*/
//	private String backimage;
    private String type;

    @Column(name ="TYPE",nullable=true,length=32)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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
    @Column(name = "extend", length = 32)
    public String getExtend() {
        return extend;
    }

    public void setExtend(String extend) {
        this.extend = extend;
    }

    private byte[] picContenth;
    private String picClash;
    private String extendh;
    @Column(name = "piccontent_h")
    public byte[] getPicContenth() {
        return picContenth;
    }

    public void setPicContenth(byte[] picContenth) {
        this.picContenth = picContenth;
    }
    @Column(name = "picclas_h", length = 100)
    public String getPicClash() {
        return picClash;
    }

    public void setPicClash(String picClash) {
        this.picClash = picClash;
    }
    @Column(name = "extend_h", length = 32)
    public String getExtendh() {
        return extendh;
    }

    public void setExtendh(String extendh) {
        this.extendh = extendh;
    }
    /**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  主键
	 */

	@Id
    @GeneratedValue(generator = "paymentableGenerator")
    @GenericGenerator(name = "paymentableGenerator", strategy = "uuid")
    @Column(name ="ID",nullable=false,length=36)
	public String getId(){
		return this.id;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  主键
	 */
	public void setId(String id){
		this.id = id;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  X坐标
	 */
	@Column(name ="X",nullable=true,precision=10,scale=0)
	public Integer getX(){
		return this.x;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  X坐标
	 */
	public void setX(Integer x){
		this.x = x;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  Y坐标
	 */
	@Column(name ="Y",nullable=true,precision=10,scale=0)
	public Integer getY(){
		return this.y;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  Y坐标
	 */
	public void setY(Integer y){
		this.y = y;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  宽度
	 */
	@Column(name ="WIDTH",nullable=true,precision=10,scale=0)
	public Integer getWidth(){
		return this.width;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  宽度
	 */
	public void setWidth(Integer width){
		this.width = width;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  高度
	 */
	@Column(name ="HEIGHT",nullable=true,precision=10,scale=0)
	public Integer getHeight(){
		return this.height;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  高度
	 */
	public void setHeight(Integer height){
		this.height = height;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  图片名称
	 */
	@Column(name ="PICNAME",nullable=true,length=200)
	public String getPicname(){
		return this.picname;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  图片名称
	 */
	public void setPicname(String picname){
		this.picname = picname;
	}
    /**
     *方法: 取得java.lang.String
     *@return: java.lang.String  图片名称
     */
    @Column(name ="PICNAME_H",nullable=true,length=200)
    public String getPicnameh() {
        return picnameh;
    }

    public void setPicnameh(String picnameh) {
        this.picnameh = picnameh;
    }
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  按钮功能
	 */
	@Column(name ="FUNCTIONNAME",nullable=true,length=50)
	public String getFunctionname(){
		return this.functionname;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  按钮功能
	 */
	public void setFunctionname(String functionname){
		this.functionname = functionname;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  按钮文字
	 */
	@Column(name ="TEXT",nullable=true,length=50)
	public String getText(){
		return this.text;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  按钮文字
	 */
	public void setText(String text){
		this.text = text;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  排序
	 */
	@Column(name ="UIORDER",nullable=true,precision=10,scale=0)
	public Integer getUiorder(){
		return this.uiorder;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  排序
	 */
	public void setUiorder(Integer uiorder){
		this.uiorder = uiorder;
	}
	/**
	 *方法: 取得java.lang.String
	 *@return: java.lang.String  功能名称
	 */
	@Column(name ="NAME",nullable=true,length=50)
	public String getName(){
		return this.name;
	}

	/**
	 *方法: 设置java.lang.String
	 *@param: java.lang.String  功能名称
	 */
	public void setName(String name){
		this.name = name;
	}
	/**
	 *方法: 取得java.lang.Integer
	 *@return: java.lang.Integer  按钮标识
	 */
	@Column(name ="LEVEL",nullable=true,precision=10,scale=0)
	public Integer getLevel(){
		return this.level;
	}

	/**
	 *方法: 设置java.lang.Integer
	 *@param: java.lang.Integer  按钮标识
	 */
	public void setLevel(Integer level){
		this.level = level;
	}

//	/**
//	 *方法: 取得java.lang.String
//	 *@return: java.lang.String  背景图片
//	 */
//	@Column(name ="BACKIMAGE",nullable=true,length=200)
//	public String getBackimage(){
//		return this.backimage;
//	}
//
//	/**
//	 *方法: 设置java.lang.String
//	 *@param: java.lang.String  背景图片
//	 */
//	public void setBackimage(String backimage){
//		this.backimage = backimage;
//	}

    private McuiTempEntity mcuiTempEntity;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PARENTID")
    public McuiTempEntity getMcuiTempEntity() {
        return mcuiTempEntity;
    }

    public void setMcuiTempEntity(McuiTempEntity mcuiTempEntity) {
        this.mcuiTempEntity = mcuiTempEntity;
    }



    private List<McuiTempEntity> McuiTempEntitys;


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "mcuiTempEntity")
    public List<McuiTempEntity> getMcuiTempEntitys() {
        return McuiTempEntitys;
    }

    public void setMcuiTempEntitys(List<McuiTempEntity> mcuiTempEntitys) {
        McuiTempEntitys = mcuiTempEntitys;
    }
}
