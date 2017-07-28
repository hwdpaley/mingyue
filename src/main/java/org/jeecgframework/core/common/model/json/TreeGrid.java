package org.jeecgframework.core.common.model.json;

import com.alibaba.fastjson.JSON;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
 
public class TreeGrid implements java.io.Serializable {
	private String id;
	private String text;
 	private String parentId;
 	private String parentText;
 	private String code;
 	private String src;
 	private String note;
	private Map<String,String> attributes;// 其他参数
 	private String  operations;// 其他参数
 	private String state = "open";// 是否展开(open,closed)
 	private String order;//排序
    private Map<String, Object> fieldMap; // 存储实体字段信息容器： key-字段名称，value-字段值
    private String  functionType;// 其他参数

    private String ip;
    private String isLink;

    private String tel,mainName,address;
    private String opendate,departCode,customCode;

    public String getCustomCode() {
        return customCode;
    }

    public void setCustomCode(String customCode) {
        this.customCode = customCode;
    }

    public String getDepartCode() {
        return departCode;
    }

    public void setDepartCode(String departCode) {
        this.departCode = departCode;
    }

    public String getOpendate() {
        return opendate;
    }

    public void setOpendate(String opendate) {
        this.opendate = opendate;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getMainName() {
        return mainName;
    }

    public void setMainName(String mainName) {
        this.mainName = mainName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIsLink() {
        return isLink;
    }

    public void setIsLink(String isLink) {
        this.isLink = isLink;
    }

    public String getAssetid() {
        return assetid;
    }

    public void setAssetid(String assetid) {
        this.assetid = assetid;
    }

    private String assetid;

    private String iconName;

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
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public String getOperations() {
		return operations;
	}
	public void setOperations(String operations) {
		this.operations = operations;
	}
	public Map<String, String> getAttributes() {
		return attributes;
	}
	public void setAttributes(Map<String, String> attributes) {
		this.attributes = attributes;
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
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getParentId() {
		return parentId;
	}
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}	 
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

    public Map<String, Object> getFieldMap() {
        return fieldMap;
    }

    public void setFieldMap(Map<String, Object> fieldMap) {
        this.fieldMap = fieldMap;
    }

    public String toJson() {
        return "{" +
                "'id':'" + id + '\'' +
                ", 'text':'" + text + '\'' +
                ", 'parentId':'" + parentId + '\'' +
                ", 'parentText':'" + parentText + '\'' +
                ", 'code':'" + code + '\'' +
                ", 'src':'" + src + '\'' +
                ", 'note':'" + note + '\'' +
                ", 'attributes':" + attributes +
                ", 'operations':'" + operations + '\'' +
                ", 'state':'" + state + '\'' +
                ", 'order':'" + order + '\'' +
                ", 'address':'" + address + '\'' +
                ", 'tel':'" + tel + '\'' +
                ", 'mainName':'" + mainName + '\'' +
                ", 'openDate':'" + opendate + '\'' +
                ", 'departCode':'" + departCode + '\'' +
                ", 'customCode':'" + customCode + '\'' +
                ", 'ip':'" + ip + '\'' +
                assembleFieldsJson() +
                '}';
    }

    private String assembleFieldsJson() {
        String fieldsJson = ", 'fieldMap':" + fieldMap;
        if (fieldMap != null && fieldMap.size() > 0) {
            Map<String, Object> resultMap = new HashMap<String, Object>();
            for (Map.Entry<String, Object> entry : fieldMap.entrySet()) {
                resultMap.put("fieldMap." + entry.getKey(), entry.getValue());
            }
            fieldsJson = ", " + JSON.toJSON(resultMap).toString().replace("{", "").replace("}", "");
        }
        return fieldsJson;
    }
 
}
