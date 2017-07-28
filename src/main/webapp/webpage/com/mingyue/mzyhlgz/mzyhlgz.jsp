<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>顾客护理跟踪</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzyhlgzController.do?save&customId=${customId}">
			<input id="id" name="id" type="hidden" value="${mzyhlgzPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
                    <td align="right">
                        <label class="Validform_label">
                            卡项目服务:
                        </label>
                    </td>
                    <td class="value" style="height:60px">
                        <input class="inputxt" id="neirong" name="neirong" ignore="ignore"
                               value="${mzyhlgzPage.neirong}">
                        <span class="Validform_checktip"></span>
                    </td>
					<td align="right">
						<label class="Validform_label">
							日期:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="Wdate"   style="width: 200px" id="dtime" name="dtime" ignore="ignore"
							     value="<fmt:formatDate value='${mzyhlgzPage.dtime}' type="date" pattern="yyyy-MM-dd HH:mm:ss"/>">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							护理时间:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="Wdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"  style="width: 200px" id="hltime" name="hltime" ignore="ignore"
							     value="<fmt:formatDate value='${mzyhlgzPage.hltime}' type="date" pattern="yyyy-MM-dd HH:mm:ss"/>">
						<span class="Validform_checktip"></span>
					</td>
				<%--</tr>--%>
				<%--<tr>--%>
					<td align="right">
						<label class="Validform_label">
							剩余次数:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="shengyu" name="shengyu" ignore="ignore"
							   value="${mzyhlgzPage.shengyu}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							理疗师建议签名:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="jianyi" name="jianyi" ignore="ignore"
							   value="${mzyhlgzPage.jianyi}">
						<span class="Validform_checktip"></span>
					</td>
				<%--</tr>--%>
				<%--<tr>--%>
					<td align="right">
						<label class="Validform_label">
							备注:
						</label>
					</td>
					<td class="value" style="height:60px">
						<textarea class="inputxt" id="note" name="note" rows="5" cols="35">
							   ${mzyhlgzPage.note}
                        </textarea>
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>