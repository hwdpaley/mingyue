package org.jeecgframework.web.system.pojo.base;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.jeecgframework.core.common.entity.IdEntity;

/**
 * 部门机构表
 * @author  张代浩
 */
@Entity
@Table(name = "t_s_depart")
public class TSDepart extends IdEntity implements java.io.Serializable {
	private TSDepart TSPDepart;//上级部门
	private String departname;//部门名称
	private String description;//部门描述
    private String orgCode;//机构编码
    private String orgType;//机构编码
	private List<TSDepart> TSDeparts = new ArrayList<TSDepart>();//下属部门

    private String address;//店铺地址

    @Column(name = "departCode", length = 20)
    public String getDepartCode() {
        return departCode;
    }

    public void setDepartCode(String departCode) {
        this.departCode = departCode;
    }

    private Date openDate;//开业时间
    private String tel;//电话
    private String mainName;//店长
    private String departCode,customCode;//部门名称,单号前缀,会员编码

    @Column(name = "customCode", length = 20)
    public String getCustomCode() {
        return customCode;
    }

    public void setCustomCode(String customCode) {
        this.customCode = customCode;
    }

    @Column(name = "address", length = 100)
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    @Column(name ="openDate",nullable=true)
    public Date getOpenDate() {
        return openDate;
    }

    public void setOpenDate(Date openDate) {
        this.openDate = openDate;
    }
    @Column(name = "tel", length = 30)
    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }
    @Column(name = "mainName", length = 30)
    public String getMainName() {
        return mainName;
    }

    public void setMainName(String mainName) {
        this.mainName = mainName;
    }

    @ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parentdepartid")
	public TSDepart getTSPDepart() {
		return this.TSPDepart;
	}

	public void setTSPDepart(TSDepart TSPDepart) {
		this.TSPDepart = TSPDepart;
	}

	@Column(name = "departname", nullable = false, length = 100)
	public String getDepartname() {
		return this.departname;
	}

	public void setDepartname(String departname) {
		this.departname = departname;
	}

	@Column(name = "description", length = 500)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "TSPDepart")
	public List<TSDepart> getTSDeparts() {
		return TSDeparts;
	}

	public void setTSDeparts(List<TSDepart> tSDeparts) {
		TSDeparts = tSDeparts;
	}

    @Column(name = "org_code", length = 64)
    public String getOrgCode() {
        return orgCode;
    }

    public void setOrgCode(String orgCode) {
        this.orgCode = orgCode;
    }

    @Column(name = "org_type", length = 1)
    public String getOrgType() {
        return orgType;
    }

    public void setOrgType(String orgType) {
        this.orgType = orgType;
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