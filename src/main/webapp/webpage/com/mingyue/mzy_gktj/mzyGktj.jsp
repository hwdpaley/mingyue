<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>顾客数量统计</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="no">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="table" action="mzyGktjController.do?save">
			<input id="id" name="id" type="hidden" value="${mzyGktjPage.id }">
			<table style="width: 600px;" cellpadding="0" cellspacing="1" class="formtable">
				<tr>
					<td align="right">
						<label class="Validform_label">
							咨询顾客数量:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="zxgks" name="zxgks" ignore="ignore"
							   value="${mzyGktjPage.zxgks}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							体验顾客数量:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="tygks" name="tygks" ignore="ignore"
							   value="${mzyGktjPage.tygks}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							康复疗程数量:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="kflcgks" name="kflcgks" ignore="ignore"
							   value="${mzyGktjPage.kflcgks}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							养护疗程数量:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="yhlcgks" name="yhlcgks" ignore="ignore"
							   value="${mzyGktjPage.yhlcgks}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
				<tr>
					<td align="right">
						<label class="Validform_label">
							流失顾客数量:
						</label>
					</td>
					<td class="value" style="height:60px">
						<input class="inputxt" id="lsgks" name="lsgks" ignore="ignore"
							   value="${mzyGktjPage.lsgks}">
						<span class="Validform_checktip"></span>
					</td>
				</tr>
			</table>
		</t:formvalid>
 </body>