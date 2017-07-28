package org.jeecgframework.web.system.pojo.base;

import org.jeecgframework.core.common.entity.IdEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * 部门机构表
 * @author  张代浩
 */
@Entity
@Table(name = "t_s_depart_tmp")
public class TSDepart_tmp extends IdEntity implements java.io.Serializable {
	private TSDepart_tmp TSPDepart;//上级部门
	private String departname;//部门名称

    @ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parentdepartid")
	public TSDepart_tmp getTSPDepart() {
		return this.TSPDepart;
	}

	public void setTSPDepart(TSDepart_tmp TSPDepart) {
		this.TSPDepart = TSPDepart;
	}

	@Column(name = "departname", nullable = false, length = 100)
	public String getDepartname() {
		return this.departname;
	}

	public void setDepartname(String departname) {
		this.departname = departname;
	}



    private String x, y;

    @Column(name = "x", nullable = true, length = 10)
    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    @Column(name = "y", nullable = true, length = 10)
    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    private java.lang.Integer departlevel;
    /**
     * 方法: 取得java.lang.Integer
     *
     * @return: java.lang.Integer  资产等级
     */
    @Column(name = "departlevel", nullable = true, precision = 10, scale = 0)
    public Integer getDepartlevel() {
        return departlevel;
    }

    public void setDepartlevel(Integer departlevel) {
        this.departlevel = departlevel;
    }

//    private TSIcon TSIcon = new TSIcon();//菜单图标
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "iconid")
//    public TSIcon getTSIcon() {
//        return TSIcon;
//    }
//
//    public void setTSIcon(TSIcon tSIcon) {
//        TSIcon = tSIcon;
//    }
}