package org.jeecgframework.core.common.model.json;

import com.alibaba.fastjson.JSON;

import java.util.HashMap;
import java.util.Map;

public class McuiTreeGrid implements java.io.Serializable {
	private String id;
    private String description,price,discount;
    private String x;
    private String y;
    private String width;
    private String height;
    private String level;
    private String guige,num;

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

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    private String functionname;

    public String getFunctionname() {
        return functionname;
    }

    public void setFunctionname(String functionname) {
        this.functionname = functionname;
    }

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

    private String iconName,iconName_h;

    public String getIconName() {
        return iconName;
    }

    public void setIconName(String iconName) {
        this.iconName = iconName;
    }

    public String getIconName_h() {
        return iconName_h;
    }

    public void setIconName_h(String iconName_h) {
        this.iconName_h = iconName_h;
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
