package com.mingyue.entity.mzy_kc;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;

import com.mingyue.entity.mzy_product.MzyProductEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.GenericGenerator;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSDepart;

/**
 * @author Tony
 * @version V1.0
 * @Title: Entity
 * @Description: 库存管理
 * @date 2015-07-30 13:28:44
 */
@Entity
@Table(name = "mzy_kc", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
@SuppressWarnings("serial")
public class MzyKuCunEntity extends IdEntity implements java.io.Serializable {

    private TSDepart TSPDepart;//店面


    /**
     * 数量
     */
    private java.lang.String nums;

    /**
     * 告警数量
     */
    private java.lang.String alarmNums;

    private MzyProductEntity mzyProductEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "departid")
    public TSDepart getTSPDepart() {
        return TSPDepart;
    }

    public void setTSPDepart(TSDepart TSPDepart) {
        this.TSPDepart = TSPDepart;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productid")
    public MzyProductEntity getMzyProductEntity() {
        return mzyProductEntity;
    }

    public void setMzyProductEntity(MzyProductEntity mzyProductEntity) {
        this.mzyProductEntity = mzyProductEntity;
    }


    /**
     * 方法: 取得java.lang.String
     *
     * @return: java.lang.String  数量
     */
    @Column(name = "NUMS", nullable = true, length = 10)
    public java.lang.String getNums() {
        return this.nums;
    }

    /**
     * 方法: 设置java.lang.String
     *
     * @param: java.lang.String  数量
     */
    public void setNums(java.lang.String nums) {
        this.nums = nums;
    }

    @Column(name = "ALARMNUMS", nullable = true, length = 10)
    public String getAlarmNums() {
        return alarmNums;
    }

    public void setAlarmNums(String alarmNums) {
        this.alarmNums = alarmNums;
    }

    private String name;

    @Column(name = "name", nullable = true, length = 50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    /**
     * 是否促销产品
     */
    private String isCx;

    public String getIsCx() {
        return isCx;
    }

    public void setIsCx(String isCx) {
        this.isCx = isCx;
    }

    private String isAlarm;

    @Column(name = "isAlarm", nullable = true, length = 5)
    public String getIsAlarm() {
        return isAlarm;
    }

    public void setIsAlarm(String isAlarm) {
        this.isAlarm = isAlarm;
    }

    private String isDelete;
    @Column(name = "isDelete",nullable = false, length = 5)
    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }
}
