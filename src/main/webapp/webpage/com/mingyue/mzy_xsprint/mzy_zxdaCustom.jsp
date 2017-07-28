<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>咨询档案清单</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzy_xsprintController.do?saveZxdaCustom&customId=${customId}">
			<input id="id" name="id" type="hidden" value="${mzy_xsprintPage.id }">
			<table style="width: 100%;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
                    <td align="right">
                        <label class="Validform_label">
                            顾客:
                        </label>
                    </td>

                    <td class="value" style="width: 25%">${mzyCustom.realName}

                    </td>
                    <td align="right">
                        <label class="Validform_label">
                            回访日期:
                        </label>
                    </td>
                    <td class="value">
                        <input   style="width: 200px"
                                 id="hfData" name="hfData" ignore="ignore" readonly="true"
                                 value="<fmt:formatDate value='${hfDate}' type="date" pattern="yyyy-MM-dd HH:mm:ss"/>">
                        <span class="Validform_checktip"></span>
                    </td>
				</tr>
                <tr style="height:60px">
                    <td align="right" style="width: 25%">
                        <label class="Validform_label">
                           服务评价:
                        </label>
                    </td>
                    <td class="value" style="width: 25%">
                        <textarea id="fwPj" name="fwPj" datatype="*" rows="3" cols="30" >${mzy_xsprintPage.fwPj}</textarea>
                    </td>
                    <td align="right" style="width: 25%">
                        <label class="Validform_label">
                            效果评价:
                        </label>
                    </td>
                    <td class="value" style="width: 25%">
                       <textarea id="xiaoguoPj" name="xiaoguoPj" datatype="*" rows="3" cols="30" >${mzy_xsprintPage.xiaoguoPj}</textarea>


                    </td>
                </tr>
                <%--<tr>--%>

                <%--</tr>--%>
				<tr style="height:60px">
                    <td align="right" style="width: 25%">
                        <label class="Validform_label">
                            回访人:
                        </label>
                    </td>
                    <td class="value" style="width: 25%">${hfr}
                    </td>
					<td align="right" style="width: 25%">
						<label class="Validform_label">
                            回访备注:
						</label>
					</td>
					<td class="value" style="width: 25%">
                        <textarea id="note" name="note" datatype="*" rows="3" cols="30" >${mzy_xsprintPage.note}</textarea>

						<%--<input class="inputxt" id="note" name="note" ignore="ignore"--%>
							   <%--value="${mzy_xsprintPage.note}">--%>
						<%--<span class="Validform_checktip"></span>--%>
					</td>
				</tr>

			</table>
		</t:formvalid>
 </body>