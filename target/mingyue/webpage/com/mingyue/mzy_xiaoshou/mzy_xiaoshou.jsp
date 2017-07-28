<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>销售表</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzy_xiaoshouController.do?save&xsprintId=${xsprintId}">
			<input id="id" name="id" type="hidden" value="${mzy_xiaoshouPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							产品名称:
						</label>
					</td>
					<%--<td class="value" style="height:60px">--%>
						<%--<input class="inputxt" id="name" name="name" ignore="ignore"--%>
							   <%--value="${mzy_xiaoshouPage.mzyProductEntity.name}">--%>
						<%--<span class="Validform_checktip"></span>--%>
					<%--</td>--%>
                    <td class="value">
                        <input id="productids" name="productids" type="hidden" value="${id}">
                        <input id="name" name="name" class="inputxt" value="${mzy_xiaoshouPage.mzyProductEntity.name }" readonly="readonly" datatype="*"
                                />
                    </td>

				</tr>
                <tr>
                    <td align="right">
                        <t:choose hiddenName="productids" hiddenid="id" url="mzy_xiaoshouController.do?mzyKcList" name="mzyKuCunList_xs" width="600px"
                                  icon="icon-search" title="产品列表" textname="name" isclear="true"
                                  isInit="true"></t:choose>
                    </td>

                </tr>
                <tr>
                    <td align="right">
                        <label class="Validform_label">
                            数量:
                        </label>
                    </td>
                    <td class="value" style="height:60px">
                        <input class="inputxt" id="nums" name="nums" ignore="ignore" datatype="n"
                               value="${mzy_xiaoshouPage.nums}">
                        <span class="Validform_checktip"></span>
                    </td>
                </tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							金额:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="price" name="price" ignore="ignore" datatype="d"
							   value="${mzy_xiaoshouPage.price}">单价,可不填
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							折扣:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="discount" name="discount" ignore="ignore" datatype="n"
							   value="${mzy_xiaoshouPage.discount}">%,可不填
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>