package com.mingyue.entity.mzy_scty;

import com.mingyue.entity.mzy_kfyh.Mzy_kfyhEntity;
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
public class MzySctyTls extends IdEntity implements java.io.Serializable{
    private MzySctyEntity mzySctyEntity;
    private TSUser tsUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "scty_id")
    public MzySctyEntity getMzySctyEntity() {
        return mzySctyEntity;
    }

    public void setMzySctyEntity(MzySctyEntity mzySctyEntity) {
        this.mzySctyEntity = mzySctyEntity;
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
