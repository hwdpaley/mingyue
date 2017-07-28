<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>顾客销售清单</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzy_xsprintController.do?saveCustom&customId=${customId}">
			<input id="id" name="id" type="hidden" value="${mzy_xsprintPage.id }">
			<table style="width: 100%;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right" style="width: 25%">
						<label class="Validform_label">
							单号:
						</label>
					</td>
					<td class="value" style="width: 25%;height:60px">
						<input class="inputxt" id="idDanNum" name="idDanNum" ignore="ignore"
							   value="${mzy_xsprintPage.idDanNum}">
						<span class="Validform_checktip"></span>
					</td>
                    <td align="right" style="width: 25%">
                        <label class="Validform_label">
                            支付方式:
                        </label>
                    </td>
                    <td class="value" style="width: 25%">
                        <t:dictSelect field="iscard" type="list"
                                      typeGroupCode="xjCard" defaultVal="${mzy_xsprintPage.iscard}" hasLabel="false" title="性别">
                        </t:dictSelect>
                    </td>
				</tr>
                <tr style="height:60px">
                    <td align="right" style="width: 25%">
                        <label class="Validform_label">
                            总金额:
                        </label>
                    </td>
                    <td class="value" style="width: 25%">
                            ${mzy_xsprintPage.total}
                    </td>
                    <td align="right" style="width: 25%">
                        <label class="Validform_label">
                            实收金额:
                        </label>
                    </td>
                    <td class="value" style="width: 25%">
                            ${mzy_xsprintPage.realTotal}
                    </td>
                </tr>
                <%--<tr>--%>

                <%--</tr>--%>
				<tr style="height:60px">
                    <td align="right" style="width: 25%">
                        <label class="Validform_label">
                            开单人:
                        </label>
                    </td>
                    <td class="value" style="width: 25%">${mzy_xsprintPage.tsUser.realName}
                    </td>
					<td align="right" style="width: 25%">
						<label class="Validform_label">
							备注:
						</label>
					</td>
					<td class="value" style="width: 25%">
                        <textarea id="note" name="note" datatype="*" rows="3" cols="30" >
                                ${mzy_xsprintPage.note}
                        </textarea>
						<%--<input class="inputxt" id="note" name="note" ignore="ignore"--%>
							   <%--value="${mzy_xsprintPage.note}">--%>
						<%--<span class="Validform_checktip"></span>--%>
					</td>
				</tr>

			</table>
		</t:formvalid>
 </body>