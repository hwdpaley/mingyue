<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>顾客销售清单</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>

 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzy_xsprintController.do?save">
			<input id="id" name="id" type="hidden" value="${mzy_xsprintPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							名称:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="xsName" name="xsName" ignore="ignore"
							   value="${mzy_xsprintPage.xsName}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
                <%--<tr>--%>
                    <%--<td align="right">--%>
                        <%--<label class="Validform_label">--%>
                            <%--开单人:--%>
                        <%--</label>--%>
                    <%--</td>--%>
                    <%--<td class="value" style="height:60px">--%>
                        <%--<input class="inputxt" id="createId" name="createId" ignore="ignore" readonly="readonly"--%>
                               <%--value="${mzy_xsprintPage.tsUser.realName}">--%>
                        <%--<span class="Validform_checktip"></span>--%>
                    <%--</td>--%>
                <%--</tr>--%>
				<tr>
					<td align="right">
						<label class="Validform_label">
							备注:
						</label>
					</td>
					<td class="value" style="height:60px">
                        <textarea id="note" name="note" datatype="*" rows="3" cols="30" >
                                ${mzy_xsprintPage.note}
                        </textarea>
						<%--<input class="inputxt" id="note" name="note" ignore="ignore"--%>
							   <%--value="${mzy_xsprintPage.note}">--%>
						<%--<span class="Validform_checktip"></span>--%>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							总金额:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="total" name="total" ignore="ignore" readonly="readonly"
							   value="${mzy_xsprintPage.total}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
                            支付方式:
						</label>
					</td>
					<td class="value" style="height:60px">
						<%--<input class="inputxt" id="iscard" name="iscard" ignore="ignore"--%>
							   <%--value="${mzy_xsprintPage.iscard}">--%>
						<%--<span class="Validform_checktip"></span>--%>
                        <t:dictSelect field="iscard" type="list"
                                      typeGroupCode="xjCard" defaultVal="${mzy_xsprintPage.iscard}" hasLabel="false" title="性别">
                        </t:dictSelect>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>