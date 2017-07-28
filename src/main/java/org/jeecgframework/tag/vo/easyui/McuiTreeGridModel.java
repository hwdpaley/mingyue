package org.jeecgframework.tag.vo.easyui;

import java.util.Map;

/**
 * 
 * @ClassName: McuiTreeGridModel
 * @Description: TODO(树形列表模型设置类) 
 * @author  张代浩 
 * @date 2013-1-6 下午07:24:22 
 *
  */
public class McuiTreeGridModel implements java.io.Serializable {
    private String description,price,discount;
    private String xField;
    private String yField;
    private String widthField;
    private String heightField;
    private String functionnameField;
    private String guige;
    private String num;

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public String getGuige() {
        return guige;
    }

    public void setGuige(String guige) {
        this.guige = guige;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    private String type;
    private String levelField;

    public String getLevelField() {
        return levelField;
    }

    public void setLevelField(String levelField) {
        this.levelField = levelField;
    }

    private String idField;
	private String textField;
	private String childList;
 	private String parentId;
 	private String parentText;
 	private String code;
 	private String src;
 	private String roleid;
 	private String icon;
 	private String order;
 	private String functionType;
    private String ip;
    private String iconName,iconName_h;

    public String getIconName_h() {
        return iconName_h;
    }

    public void setIconName_h(String iconName_h) {
        this.iconName_h = iconName_h;
    }

    public String getIconName() {
        return iconName;
    }

    public void setIconName(String iconName) {
        this.iconName = iconName;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getFunctionType() {
		return functionType;
	}
	public void setFunctionType(String functionType) {
		this.functionType = functionType;
	}

	private Map<String, Object> fieldMap; // 存储实体字段信息容器：key-字段名称，value-字段值

	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getRoleid() {
		return roleid;
	}
	public void setRoleid(String roleid) {
		this.roleid = roleid;
	}
	public String getParentText() {
		return parentText;
	}
	public void setParentText(String parentText) {
		this.parentText = parentText;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	 
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public String getParentId() {
		return parentId;
	}
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}	
	public String getIdField() {
		return idField;
	}
	public void setIdField(String idField) {
		this.idField = idField;
	}
	public String getTextField() {
		return textField;
	}
	public void setTextField(String textField) {
		this.textField = textField;
	}
	public String getChildList() {
		return childList;
	}
	public void setChildList(String childList) {
		this.childList = childList;
	}

    public Map<String, Object> getFieldMap() {
        return fieldMap;
    }

    public void setFieldMap(Map<String, Object> fieldMap) {
        this.fieldMap = fieldMap;
    }

    public String getxField() {
        return xField;
    }

    public void setxField(String xField) {
        this.xField = xField;
    }

    public String getyField() {
        return yField;
    }

    public void setyField(String yField) {
        this.yField = yField;
    }

    public String getWidthField() {
        return widthField;
    }

    public void setWidthField(String widthField) {
        this.widthField = widthField;
    }

    public String getHeightField() {
        return heightField;
    }

    public void setHeightField(String heightField) {
        this.heightField = heightField;
    }

    public String getFunctionnameField() {
        return functionnameField;
    }

    public void setFunctionnameField(String functionnameField) {
        this.functionnameField = functionnameField;
    }
}
