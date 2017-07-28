<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>产品库存申请表</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzycpkcsqController.do?save">
			<input id="id" name="id" type="hidden" value="${mzycpkcsqPage.id }">
            <input id="sqbh" name="sqbh" type="hidden" value="${mzycpkcsqPage.sqbh }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
                <tr>
                    <td align="right">
                        <label class="Validform_label">
                            申请编号:
                        </label>
                    </td>
                    <td class="value" style="height:60px">${mzycpkcsqPage.sqbh}
                        <%--<input class="inputxt" id="sqbh" name="sqbh" ignore="ignore" readonly="true"--%>
                               <%--value="${mzycpkcsqPage.sqbh}">--%>
                        <%--<span class="Validform_checktip"></span>--%>
                    </td>
                </tr>
                <tr>
					<td align="right">
						<label class="Validform_label">
							申请日期:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"  style="width: 150px" id="sqdate" name="sqdate" ignore="ignore"
							     value="<fmt:formatDate value='${mzycpkcsqPage.sqdate}' type="date" pattern="yyyy-MM-dd HH:mm:ss"/>">
						<span class="Validform_checktip"></span>
					</td>
				</tr>

				<tr>
					<td align="right">
						<label class="Validform_label">
							通过时间:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"  style="width: 150px" id="pfdate" name="pfdate" ignore="ignore"
							     value="<fmt:formatDate value='${mzycpkcsqPage.pfdate}' type="date" pattern="yyyy-MM-dd HH:mm:ss"/>">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							到货时间:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"  style="width: 150px" id="daodadate" name="daodadate" ignore="ignore"
							     value="<fmt:formatDate value='${mzycpkcsqPage.daodadate}' type="date" pattern="yyyy-MM-dd HH:mm:ss"/>">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							发货时间:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"  style="width: 150px" id="fhdate" name="fhdate" ignore="ignore"
							     value="<fmt:formatDate value='${mzycpkcsqPage.fhdate}' type="date" pattern="yyyy-MM-dd HH:mm:ss"/>">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>