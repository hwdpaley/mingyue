<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>顾客消费档案</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzyxfdaController.do?save&customId=${customId}">
			<input id="id" name="id" type="hidden" value="${mzyxfdaPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							购买次数:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="gmtimes" name="gmtimes" ignore="ignore"
							   value="${mzyxfdaPage.gmtimes}">
						<span class="Validform_checktip"></span>
					</td>
				<%--</tr>--%>
				<%--<tr>--%>
					<td align="right">
						<label class="Validform_label">
							购买时间:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"  style="width: 200px" id="gmdate" name="gmdate" ignore="ignore"
							     value="<fmt:formatDate value='${mzyxfdaPage.gmdate}' type="date" pattern="yyyy-MM-dd hh:mm:ss"/>">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							项目详情:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="gmneirong" name="gmneirong" ignore="ignore"
							   value="${mzyxfdaPage.gmneirong}">
						<span class="Validform_checktip"></span>
					</td>
				<%--</tr>--%>
				<%--<tr>--%>
					<td align="right">
						<label class="Validform_label">
							金额:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="jiner" name="jiner" ignore="ignore"
							   value="${mzyxfdaPage.jiner}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							服务人员:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="fuwu" name="fuwu" ignore="ignore"
							   value="${mzyxfdaPage.fuwu}">
						<span class="Validform_checktip"></span>
					</td>
				<%--</tr>--%>
				<%--<tr>--%>
					<td align="right">
						<label class="Validform_label">
							顾客签名:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="gksing" name="gksing" ignore="ignore"
							   value="${mzyxfdaPage.gksing}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							备注:
						</label>
					</td>
					<td class="value" style="height:60px">
						<textarea class="inputxt" id="note" name="note" rows="6" cols="35">
							   ${mzyxfdaPage.note}
                        </textarea>
						<span class="Validform_checktip"></span>
					</td>
                    <td></td>
                    <td></td>
				</tr>
			</table>
		</t:formvalid>
 </body>