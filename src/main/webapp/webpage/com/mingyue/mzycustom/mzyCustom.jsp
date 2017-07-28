<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/context/mytags.jsp"%>
<!DOCTYPE html>
<html>
 <head>
  <title>mzy</title>
  <t:base type="jquery,easyui,tools,DatePicker"></t:base>
 </head>
 <body style="overflow-y: hidden" scroll="yes">
  <t:formvalid formid="formobj" dialog="true" usePlugin="password" layout="div" action="mzy_customController.do?save">
		<input id="id" name="id" type="hidden" value="${mzy_customPage.id }">
		<fieldset >
			<div class="form">
		      <label class="Validform_label">就读学校:</label>
		      <input class="inputxt" id="school" name="school" ignore="ignore"
					   value="${mzy_customPage.school}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">近视年龄:</label>
		      <input class="inputxt" id="jsage" name="jsage" ignore="ignore"
					   value="${mzy_customPage.jsage}" datatype="n">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">带镜年龄:</label>
		      <input class="inputxt" id="djage" name="djage" ignore="ignore"
					   value="${mzy_customPage.djage}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">矫正视力左:</label>
		      <input class="inputxt" id="jzslL" name="jzslL" ignore="ignore"
					   value="${mzy_customPage.jzslL}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">矫正视力右:</label>
		      <input class="inputxt" id="jzslR" name="jzslR" ignore="ignore"
					   value="${mzy_customPage.jzslR}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">屈光球镜S左:</label>
		      <input class="inputxt" id="qgqjL" name="qgqjL" ignore="ignore"
					   value="${mzy_customPage.qgqjL}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">散光住镜D左:</label>
		      <input class="inputxt" id="sgzjL" name="sgzjL" ignore="ignore"
					   value="${mzy_customPage.sgzjL}">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">屈光球镜S右:</label>
		      <input class="inputxt" id="qgqjR" name="qgqjR" ignore="ignore"
					   value="${mzy_customPage.qgqjR}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">散光住镜D右:</label>
		      <input class="inputxt" id="sgzjR" name="sgzjR" ignore="ignore"
					   value="${mzy_customPage.sgzjR}">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">调理前视力右:</label>
		      <input class="inputxt" id="beforeR" name="beforeR" ignore="ignore"
					   value="${mzy_customPage.beforeR}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">斜视:</label>
		      <input class="inputxt" id="isxs" name="isxs" ignore="ignore"
					   value="${mzy_customPage.isxs}" datatype="n">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">调理前视力左:</label>
		      <input class="inputxt" id="beforeL" name="beforeL" ignore="ignore"
					   value="${mzy_customPage.beforeL}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">治疗:</label>
		      <input class="inputxt" id="iszl" name="iszl" ignore="ignore"
					   value="${mzy_customPage.iszl}" datatype="n">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">遗传近视:</label>
		      <input class="inputxt" id="isycjs" name="isycjs" ignore="ignore"
					   value="${mzy_customPage.isycjs}" datatype="n">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">弱视:</label>
		      <input class="inputxt" id="isrs" name="isrs" ignore="ignore"
					   value="${mzy_customPage.isrs}" datatype="n">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">体验后视力左:</label>
		      <input class="inputxt" id="aftertyL" name="aftertyL" ignore="ignore"
					   value="${mzy_customPage.aftertyL}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">体验后视力右:</label>
		      <input class="inputxt" id="aftertyR" name="aftertyR" ignore="ignore"
					   value="${mzy_customPage.aftertyR}">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">体验前视力左:</label>
		      <input class="inputxt" id="beforetyR" name="beforetyR" ignore="ignore"
					   value="${mzy_customPage.beforetyR}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">体验前视力右:</label>
		      <input class="inputxt" id="beforetyL" name="beforetyL" ignore="ignore"
					   value="${mzy_customPage.beforetyL}">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">调理前视力右米:</label>
		      <input class="inputxt" id="beforeRm" name="beforeRm" ignore="ignore"
					   value="${mzy_customPage.beforeRm}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">调理前视力左米:</label>
		      <input class="inputxt" id="beforeLm" name="beforeLm" ignore="ignore"
					   value="${mzy_customPage.beforeLm}">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">康复师:</label>
		      <input class="inputxt" id="kfmenid" name="kfmenid" ignore="ignore"
					   value="${mzy_customPage.kfmenid}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">带镜视力右:</label>
		      <input class="inputxt" id="djslR" name="djslR" ignore="ignore"
					   value="${mzy_customPage.djslR}">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">裸眼视力右:</label>
		      <input class="inputxt" id="lyslR" name="lyslR" ignore="ignore"
					   value="${mzy_customPage.lyslR}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">带镜视力左:</label>
		      <input class="inputxt" id="djslL" name="djslL" ignore="ignore"
					   value="${mzy_customPage.djslL}">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">裸眼视力左:</label>
		      <input class="inputxt" id="lyslL" name="lyslL" ignore="ignore"
					   value="${mzy_customPage.lyslL}">
		      <span class="Validform_checktip"></span>
		    </div>
			<div class="form">
		      <label class="Validform_label">散光:</label>
		      <input class="inputxt" id="issg" name="issg" ignore="ignore"
					   value="${mzy_customPage.issg}" datatype="n">
		      <span class="Validform_checktip"></span>
		    <%--</div>--%>
			<%--<div class="form">--%>
		      <label class="Validform_label">调理次数:</label>
		      <input class="inputxt" id="tlTimes" name="tlTimes" ignore="ignore"
					   value="${mzy_customPage.tlTimes}" datatype="n">
		      <span class="Validform_checktip"></span>
		    </div>
	    </fieldset>
  </t:formvalid>
 </body>