package com.mingyue.entity.mzy_kfyh;

import com.mingyue.entity.mzycustom.MzyCustomEntity;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.jeecgframework.core.common.entity.IdEntity;
import org.jeecgframework.web.system.pojo.base.TSUser;

import javax.persistence.*;

/**
 * Created by Tony on 1/8/15.
 */
@Entity
@Table(name = "mzy_khyh_tls")
@DynamicUpdate(true)
@DynamicInsert(true)
public class MzyKfyhTls extends IdEntity implements java.io.Serializable{
    private Mzy_kfyhEntity mzyKfyhEntity;
    private TSUser tsUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "kfyh_id")
    public Mzy_kfyhEntity getMzyKfyhEntity() {
        return mzyKfyhEntity;
    }

    public void setMzyKfyhEntity(Mzy_kfyhEntity mzyKfyhEntity) {
        this.mzyKfyhEntity = mzyKfyhEntity;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    public TSUser getTsUser() {
        return tsUser;
    }

    public void setTsUser(TSUser tsUser) {
        this.tsUser = tsUser;
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
