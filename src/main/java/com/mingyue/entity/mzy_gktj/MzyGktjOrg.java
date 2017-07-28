package com.mingyue.entity.mzy_gktj;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSDepart;

import javax.persistence.*;

/**
 * Created by Tony on 20/8/15.
 */
@Entity
@Table(name = "mzy_gktj_org")
@DynamicUpdate(true)
@DynamicInsert(true)
public class MzyGktjOrg extends IdEntity implements java.io.Serializable{
    private MzyGktjEntity mzyGktjEntity;
    private TSDepart tsDepart;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "gktj_id")
    public MzyGktjEntity getMzyGktjEntity() {
        return mzyGktjEntity;
    }

    public void setMzyGktjEntity(MzyGktjEntity mzyGktjEntity) {
        this.mzyGktjEntity = mzyGktjEntity;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "org_id")
    public TSDepart getTsDepart() {
        return tsDepart;
    }

    public void setTsDepart(TSDepart tsDepart) {
        this.tsDepart = tsDepart;
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
