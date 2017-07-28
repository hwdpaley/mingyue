<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>告警信息</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="alarmController.do?save">
			<input id="id" name="id" type="hidden" value="${alarmPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							告警内容:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="content" name="content" ignore="ignore"
							   value="${alarmPage.content}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							告警类型:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="type" name="type" ignore="ignore"
							   value="${alarmPage.type}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							资产ID:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="assetid" name="assetid" ignore="ignore"
							   value="${alarmPage.assetid}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							资产类型:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="assettype" name="assettype" ignore="ignore"
							   value="${alarmPage.assettype}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							资产设备ID:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="assetdeviceid" name="assetdeviceid" ignore="ignore"
							   value="${alarmPage.assetdeviceid}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							创建时间:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="createtime" name="createtime" ignore="ignore"
							   value="${alarmPage.createtime}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							是否已读:
						</label>
					</td>
					<td class="value">
						<input class="inputxt" id="unread" name="unread" ignore="ignore"
							   value="${alarmPage.unread}" datatype="n">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>