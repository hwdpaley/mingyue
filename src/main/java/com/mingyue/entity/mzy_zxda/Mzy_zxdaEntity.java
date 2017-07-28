package com.mingyue.entity.mzy_zxda;

import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSUser;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="mzy_zxda", schema="")
@DynamicUpdate(true)
@DynamicInsert(true)
@JsonAutoDetect
public class Mzy_zxdaEntity
        extends IdEntity
        implements Serializable
{
    private MzyCustomEntity mzyCustomEntity;
    private Date hfData;
    private String fwPj;
    private String xiaoguoPj;
    private String note;
    private TSUser tsUser;
    private String isDelete;

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="custom_id")
    public MzyCustomEntity getMzyCustomEntity()
    {
        return this.mzyCustomEntity;
    }

    public void setMzyCustomEntity(MzyCustomEntity mzyCustomEntity)
    {
        this.mzyCustomEntity = mzyCustomEntity;
    }

    @Column(name="hfData", nullable=true)
    public Date getHfData()
    {
        return this.hfData;
    }

    public void setHfData(Date hfData)
    {
        this.hfData = hfData;
    }

    @Column(name="fwPj", nullable=true, length=500)
    public String getFwPj()
    {
        return this.fwPj;
    }

    public void setFwPj(String fwPj)
    {
        this.fwPj = fwPj;
    }

    @Column(name="xiaoguoPj", nullable=true, length=500)
    public String getXiaoguoPj()
    {
        return this.xiaoguoPj;
    }

    public void setXiaoguoPj(String xiaoguoPj)
    {
        this.xiaoguoPj = xiaoguoPj;
    }

    @Column(name="note", nullable=true, length=500)
    public String getNote()
    {
        return this.note;
    }

    public void setNote(String note)
    {
        this.note = note;
    }

    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="user_id")
    public TSUser getTsUser()
    {
        return this.tsUser;
    }

    public void setTsUser(TSUser tsUser)
    {
        this.tsUser = tsUser;
    }

    @Column(name="isDelete", nullable=false, length=5)
    public String getIsDelete()
    {
        return this.isDelete;
    }

    public void setIsDelete(String isDelete)
    {
        this.isDelete = isDelete;
    }
}
