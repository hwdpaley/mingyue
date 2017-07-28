package com.mingyue.entity.mzycpkcsq;

import com.mingyue.entity.mzy_kfyh.Mzy_kfyhEntity;
import com.mingyue.entity.mzy_product.MzyProductEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSUser;

import javax.persistence.*;

/**
 * Created by Tony on 1/8/15.
 */
@Entity
@Table(name = "mzy_sqxd")
@DynamicUpdate(true)
@DynamicInsert(true)
public class Mzysqxd extends IdEntity implements java.io.Serializable{
    private MzycpkcsqEntity mzycpkcsqEntity;
    private MzyProductEntity mzyProductEntity;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sqku_id")
    public MzycpkcsqEntity getMzycpkcsqEntity() {
        return mzycpkcsqEntity;
    }

    public void setMzycpkcsqEntity(MzycpkcsqEntity mzycpkcsqEntity) {
        this.mzycpkcsqEntity = mzycpkcsqEntity;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    public MzyProductEntity getMzyProductEntity() {
        return mzyProductEntity;
    }

    public void setMzyProductEntity(MzyProductEntity mzyProductEntity) {
        this.mzyProductEntity = mzyProductEntity;
    }

    private String nums;

    @Column(name ="nums",nullable=true,length=10)
    public String getNums() {
        return nums;
    }

    public void setNums(String nums) {
        this.nums = nums;
    }

    private String note;

    @Column(name ="note",nullable=true,length=500)
    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
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
