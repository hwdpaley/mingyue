<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<!-- context path -->
<t:base type="jquery,easyui,Highcharts"></t:base>
<%--<script type="text/javascript" src="plug-in/Highcharts-2.2.5/js/highcharts.src.js"></script>--%>
<%--<script type="text/javascript" src="plug-in/Highcharts-2.2.5/js/modules/exporting.src.js"></script>--%>

<c:set var="ctxPath" value="${pageContext.request.contextPath}"/>
<script type="text/javascript">
    $(function () {
        $(document).ready(function () {
            var chart;
            $.ajax({
                type: "POST",
                url: "reportDemoController.do?jcynet&reportType=line",
                success: function (jsondata) {
                    data = eval(jsondata);
                    chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'containerline',
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false
                        },
                        title: {
                            text: '<t:mutiLang langKey="class.jzjcy.count.analysis"/>-<b><t:mutiLang langKey="common.line.chart"/></b>'
                        },
                        xAxis: {
                            categories: data[0].xdata
                        },
                        tooltip: {
                            shadow: false,
                            percentageDecimals: 1,
                            formatter: function () {
                                return  '<b>' + this.point.name + '</b>:' + Highcharts.numberFormat(this.percentage, 1) + '%';
                            }

                        },
                        exporting: {
                            filename: 'pie',
                            url: '${ctxPath}/reportDemoController.do?export'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                showInLegend: true,
                                dataLabels: {
                                    enabled: true,
                                    color: '#000000',
                                    connectorColor: '#000000',
                                    formatter: function () {
                                        return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + "%";
                                    }
                                }
                            }
                        },
                        series: data
                    });
                }
            });
        });
    });
</script>


<script type="text/javascript">
    $(function () {
        $(document).ready(function () {
            var chart;
            $.ajax({
                type: "POST",
                url: "reportDemoController.do?jcynet&reportType=column",
                success: function (jsondata) {

                    data = eval(jsondata);
                    var xxd=data[0].xdata;
//                    alert(xxd);
                    console.log(data);
                    chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'containerCol',
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false
                        },
                        title: {
                            text: '<t:mutiLang langKey="class.jzjcy.count.analysis"/>-<b><t:mutiLang langKey="common.histogram"/></b>'
                        },
                        xAxis: {
                            categories: xxd
                        },
                        tooltip: {
                            percentageDecimals: 1,
                            formatter: function () {
                                return  '<b>' + this.point.name + '</b>:' + Highcharts.numberFormat(this.percentage, 1) + '%';
                            }

                        },
                        exporting: {
                            filename: 'column',
                            url: '${ctxPath}/reportDemoController.do?export'//
                        },
                        plotOptions: {
                            column: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                showInLegend: true,
                                dataLabels: {
                                    enabled: true,
                                    color: '#000000',
                                    connectorColor: '#000000',
                                    formatter: function () {
                                        return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + "%";
                                    }
                                }
                            }
                        },
                        series: data
                    });
                }
            });
        });
    });
</script>


<script type="text/javascript">
    $(function () {
        $(document).ready(function () {
            var chart;
            $.ajax({
                type: "POST",
                url: "reportDemoController.do?jcynet&reportType=pie",
                success: function (jsondata) {
                    data = eval(jsondata);
                    chart = new Highcharts.Chart({
                        chart: {
                            renderTo: 'containerPie',
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false
                        },
                        title: {
                            text: '<t:mutiLang langKey="class.jzjcy.count.analysis"/>-<b><t:mutiLang langKey="common.pie.chart"/></b>'
                        },
                        xAxis: {
                            categories:data[0].xdata
                        },
                        tooltip: {
                            shadow: false,
                            percentageDecimals: 1,
                            formatter: function () {
                                return  '<b>' + this.point.name + '</b>:' + Highcharts.numberFormat(this.percentage, 1) + '%';
                            }

                        },
                        exporting: {
                            filename: 'pie',
                            url: '${ctxPath}/reportDemoController.do?export'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                showInLegend: true,
                                dataLabels: {
                                    enabled: true,
                                    color: '#000000',
                                    connectorColor: '#000000',
                                    formatter: function () {
                                        return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 1) + "%";
                                    }
                                }
                            }
                        },
                        series: data
                    });
                }
            });
        });
    });
</script>
<span id="containerline" style="float: left; width: 30%; height: 60%"></span>
<span id="containerCol" style="float: left; width: 30%; height: 60%"></span>
<span id="containerPie" style="width: 38%; height: 60%"></span>

<div region="center" style="width:1100px;height:280px">
    <%--<div region="center" style="padding: 1px;">--%>
        <t:datagrid name="jcynetList" title="检察院网络状态统计"
                    actionUrl="reportDemoController.do?listAllNetByJdbc" idField="id" fit="true">
            <t:dgCol title="common.code" field="id" hidden="true"></t:dgCol>
            <t:dgCol title="检察院名称" field="name" width="130" align="center"></t:dgCol>
            <t:dgCol title="网络状态" field="net" width="130" align="center"></t:dgCol>
            <t:dgCol title="时间" field="time" width="130" align="center"></t:dgCol>
            <t:dgCol title="common.proportion" field="rate" width="130" align="center"></t:dgCol>
        </t:datagrid>
    <%--</div>--%>
</div>