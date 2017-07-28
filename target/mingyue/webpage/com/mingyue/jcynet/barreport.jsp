<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,Echarts"></t:base>

<script type="text/javascript">
require.config({
    paths: {
        echarts: 'plug-in/echarts/source'

    }
});
// 使用
require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/pie',
            'echarts/chart/map'
            // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            $.ajax({
                type: "get",
                dataType: 'json',
                url: "reportDemoController.do?jcynet&reportType=pie",
                success: function (jsondata) {
                    var data = eval(jsondata);
                    console.log(data);

//                        var zr = zrender.init(document.getElementById('main'));

                    // 基于准备好的dom，初始化echarts图表
                    var myChart_line = ec.init(document.getElementById('containerline'));
                    var myChart_pie = ec.init(document.getElementById('containerPie'));
                    var myChart_bar = ec.init(document.getElementById('containerBar'));
//                        var thirdChart = ec.init(document.getElementById('main'));
                    //var fourChart = ec.init(document.getElementById('four'));
                    var option_bar = {
                        title: {
                            text: '<t:mutiLang langKey="class.jzjcy.count.analysis"/>-<t:mutiLang langKey="common.bar.chart"/>',
//                                    subtext: '纯属虚构',
                            x: 'center'
                        },
                        tooltip: {
                            show: true
                        },
                        legend: {
                            x: 'center',
                            y: 'bottom',
                            data: ['荆州区检察院','沙市区检察院','松滋市检察院','公安县检察院','江陵县检察院','石首市检察院','洪湖市检察院','监利县检察院']
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data:  ['荆州区检察院','沙市区检察院','松滋市检察院','公安县检察院','江陵县检察院','石首市检察院','洪湖市检察院','监利县检察院']
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: [
                            {
                                "name": "告警数量",
                                "type": "bar",
                                "data": [
                                    {value: 10, name: '荆州区检察院'},
                                    {value: 5, name: '沙市区检察院'},
                                    {value: 15, name: '松滋市检察院'},
                                    {value: 25, name: '公安县检察院'},
                                    {value: 20, name: '江陵县检察院'},
                                    {value: 35, name: '石首市检察院'},
                                    {value: 30, name: '洪湖市检察院'},
                                    {value: 40, name: '监利县检察院'}
                                ]
                            }
                        ]
                    };

                    var option_pie = {
                        title: {
                            text: '<t:mutiLang langKey="class.jzjcy.count.analysis"/>-<t:mutiLang langKey="common.pie.chart"/>',
//                                    subtext: '纯属虚构',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            x: 'center',
                            y: 'bottom',
                            data: ['荆州区检察院','沙市区检察院','松滋市检察院','公安县检察院','江陵县检察院','石首市检察院','洪湖市检察院','监利县检察院']
                        },
                        calculable: true,
                        series: [
                            {
                                name: '面积模式',
                                type: 'pie',
                                radius: [50, 200],
                                center: ['50%', 300],
                                roseType: 'area',
                                x: '70%',               // for funnel
                                max: 40,                // for funnel
                                sort: 'ascending',     // for funnel
                                data: [
                                    {value: 10, name: '荆州区检察院'},
                                    {value: 5, name: '沙市区检察院'},
                                    {value: 15, name: '松滋市检察院'},
                                    {value: 25, name: '公安县检察院'},
                                    {value: 20, name: '江陵县检察院'},
                                    {value: 35, name: '石首市检察院'},
                                    {value: 30, name: '洪湖市检察院'},
                                    {value: 40, name: '监利县检察院'}
                                ]
                            }
                        ]
                    };
                    var option_line =
                            <%--{--%>
                            <%--title: {--%>
                            <%--text: '<t:mutiLang langKey="class.jzjcy.count.analysis"/>-<t:mutiLang langKey="common.line.chart"/>',--%>
                            <%--//                                    subtext: '纯属虚构',--%>
                            <%--x: 'center'--%>
                            <%--},--%>
                            <%--tooltip: {--%>
                            <%--trigger: 'item',--%>
                            <%--formatter: "{a} <br/>{b} : {c} ({d}%)"--%>
                            <%--},--%>
                            <%--legend: {--%>
                            <%--x: 'center',--%>
                            <%--y: 'bottom',--%>
                            <%--data: data[0].xdata--%>
                            <%--},--%>
                            <%--calculable: true,--%>
                            <%--series: [--%>
                            <%--{--%>
                            <%--name: '面积模式',--%>
                            <%--type: 'line',--%>

                            <%--data: [--%>
                            <%--{value: 10, name: 'rose1'},--%>
                            <%--{value: 5, name: 'rose2'},--%>
                            <%--{value: 15, name: 'rose3'},--%>
                            <%--{value: 25, name: 'rose4'},--%>
                            <%--{value: 20, name: 'rose5'},--%>
                            <%--{value: 35, name: 'rose6'},--%>
                            <%--{value: 30, name: 'rose7'},--%>
                            <%--{value: 40, name: 'rose8'}--%>
                            <%--]--%>
                            <%--}--%>
                            <%--]--%>
                            <%--};--%>
                    {
                        title: {
                            text: '<t:mutiLang langKey="class.jzjcy.count.analysis"/>-<t:mutiLang langKey="common.line.chart"/>',
                            x: 'center'
//                            subtext: '纯属虚构'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            y: 'bottom',
                            data: ['最高数量', '最低数量']
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: ['荆州区检察院','沙市区检察院','松滋市检察院','公安县检察院','江陵县检察院','石首市检察院','洪湖市检察院','监利县检察院']
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLabel: {
                                    formatter: '{value} '
                                }
                            }
                        ],
                        series: [
                            {
                                name: '最高数量',
                                type: 'line',
                                data: [
                                    {value: 10, name: '荆州区检察院'},
                                    {value: 5, name: '沙市区检察院'},
                                    {value: 15, name: '松滋市检察院'},
                                    {value: 25, name: '公安县检察院'},
                                    {value: 20, name: '江陵县检察院'},
                                    {value: 35, name: '石首市检察院'},
                                    {value: 30, name: '洪湖市检察院'},
                                    {value: 40, name: '监利县检察院'}
                                ],
                                markPoint: {
                                    data: [
                                        {type: 'max', name: '最大值'},
                                        {type: 'min', name: '最小值'}
                                    ]
                                },
                                markLine: {
                                    data: [
                                        {type: 'average', name: '平均值'}
                                    ]
                                }
                            },
                            {
                                name: '最低数量',
                                type: 'line',
                                data: [
                                    {value: 2, name: '荆州区检察院'},
                                    {value: 1, name: '沙市区检察院'},
                                    {value: 19, name: '松滋市检察院'},
                                    {value: 15, name: '公安县检察院'},
                                    {value: 10, name: '江陵县检察院'},
                                    {value: 15, name: '石首市检察院'},
                                    {value: 10, name: '洪湖市检察院'},
                                    {value: 20, name: '监利县检察院'}
                                ],
//                                markPoint: {
//                                    data: [
//                                        {name: '周最低', value: 1, xAxis: 1, yAxis: -1.5}
//                                    ]
//                                },
                                markLine: {
                                    data: [
                                        {type: 'average', name: '平均值'}
                                    ]
                                }
                            }
                        ]
                    };
                    var option_map = {
//                            backgroundColor: '#1b1b1b',
                        color: ['gold', 'aqua', 'lime'],
                        title: {
                            text: '模拟迁徙',
//                                subtext:'数据纯属虚构',
                            x: 'center',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}'
                        },
                        legend: {
                            orient: 'vertical',
                            x: 'left',
                            data: ['北京 Top10', '上海 Top10', '广州 Top10'],
                            selectedMode: 'single',
                            selected: {
                                '上海 Top10': false,
                                '广州 Top10': false
                            },
                            textStyle: {
                                color: '#fff'
                            }
                        },
//                            toolbox: {
//                                show : true,
//                                orient : 'vertical',
//                                x: 'right',
//                                y: 'center',
//                                feature : {
//                                    mark : {show: true},
//                                    dataView : {show: true, readOnly: false},
//                                    restore : {show: true},
//                                    saveAsImage : {show: true}
//                                }
//                            },
//                            dataRange: {
//                                min : 0,
//                                max : 100,
//                                calculable : true,
//                                color: ['#ff3333', 'orange', 'red','lime','blue'],
//                                textStyle:{
//                                    color:'#fff'
//                                }
//                            },
                        series: [
                            {
                                name: '全国',
                                type: 'map',
                                roam: true,
                                hoverable: false,
                                mapType: 'china',
                                itemStyle: {
                                    normal: {
                                        borderColor: 'rgba(100,149,237,1)',
                                        borderWidth: 0.5,
                                        areaStyle: {
                                            color: 'orange'
                                        }
                                    }
                                },
                                data: [],
                                markLine: {
                                    smooth: true,
                                    symbol: ['none', 'circle'],
                                    symbolSize: 1,
                                    itemStyle: {
                                        normal: {
                                            color: '#fff',
                                            borderWidth: 1,
                                            borderColor: 'rgba(30,144,255,0.5)'
                                        }
                                    },
                                    data: [
                                        [
                                            {name: '北京'},
                                            {name: '东莞'}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '中山'}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '广州'}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '包头'}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '南京'}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '哈尔滨'}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '韶关'}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '南昌'}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '常州'}
                                        ]

                                    ]
                                },
                                geoCoord: {
                                    '上海': [121.4648, 31.2891],
                                    '东莞': [113.8953, 22.901],
                                    '东营': [118.7073, 37.5513],
                                    '中山': [113.4229, 22.478],
                                    '临汾': [111.4783, 36.1615],
                                    '临沂': [118.3118, 35.2936],
                                    '丹东': [124.541, 40.4242],
                                    '丽水': [119.5642, 28.1854],
                                    '乌鲁木齐': [87.9236, 43.5883],
                                    '佛山': [112.8955, 23.1097],
                                    '保定': [115.0488, 39.0948],
                                    '兰州': [103.5901, 36.3043],
                                    '包头': [110.3467, 41.4899],
                                    '北京': [116.4551, 40.2539],
                                    '北海': [109.314, 21.6211],
                                    '南京': [118.8062, 31.9208],
                                    '南宁': [108.479, 23.1152],
                                    '南昌': [116.0046, 28.6633],
                                    '南通': [121.1023, 32.1625],
                                    '厦门': [118.1689, 24.6478],
                                    '台州': [121.1353, 28.6688],
                                    '合肥': [117.29, 32.0581],
                                    '呼和浩特': [111.4124, 40.4901],
                                    '咸阳': [108.4131, 34.8706],
                                    '哈尔滨': [127.9688, 45.368],
                                    '唐山': [118.4766, 39.6826],
                                    '嘉兴': [120.9155, 30.6354],
                                    '大同': [113.7854, 39.8035],
                                    '大连': [122.2229, 39.4409],
                                    '天津': [117.4219, 39.4189],
                                    '太原': [112.3352, 37.9413],
                                    '威海': [121.9482, 37.1393],
                                    '宁波': [121.5967, 29.6466],
                                    '宝鸡': [107.1826, 34.3433],
                                    '宿迁': [118.5535, 33.7775],
                                    '常州': [119.4543, 31.5582],
                                    '广州': [113.5107, 23.2196],
                                    '廊坊': [116.521, 39.0509],

                                    '韶关': [113.7964, 24.7028]
                                }
                            },
                            {
                                name: '北京 Top10',
                                type: 'map',
                                mapType: 'china',
                                data: [],
                                markLine: {
                                    smooth: true,
                                    effect: {
                                        show: true,
                                        scaleSize: 1,
                                        period: 30,
                                        color: '#fff',
                                        shadowBlur: 10
                                    },
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 1,
                                            lineStyle: {
                                                type: 'solid',
                                                shadowBlur: 10
                                            }
                                        }
                                    },
                                    data: [
                                        [
                                            {name: '北京'},
                                            {name: '上海', value: 95}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '广州', value: 90}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '南京', value: 80}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '南宁', value: 70}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '南昌', value: 60}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '韶关', value: 50}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '中山', value: 40}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '包头', value: 30}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '哈尔滨', value: 20}
                                        ],
                                        [
                                            {name: '北京'},
                                            {name: '常州', value: 10}
                                        ]
                                    ]
                                },
                                markPoint: {
                                    symbol: 'emptyCircle',
                                    symbolSize: function (v) {
                                        return 10 + v / 10
                                    },
                                    effect: {
                                        show: true,
                                        shadowBlur: 0
                                    },
                                    itemStyle: {
                                        normal: {
                                            label: {show: false}
                                        },
                                        emphasis: {
                                            label: {position: 'top'}
                                        }
                                    },
                                    data: [
                                        {name: '上海', value: 95},
                                        {name: '广州', value: 90},
                                        {name: '南京', value: 80},
                                        {name: '南宁', value: 70},
                                        {name: '南昌', value: 60},
                                        {name: '韶关', value: 50},
                                        {name: '中山', value: 40},
                                        {name: '包头', value: 30},
                                        {name: '哈尔滨', value: 20},
                                        {name: '常州', value: 10}
                                    ]
                                }
                            }

                        ]
                    };
                    // 为echarts对象加载数据
                    myChart_pie.setOption(option_pie);
                    myChart_bar.setOption(option_bar);
                    myChart_line.setOption(option_line);
//               fourChart.setOption(option);
                }
            });

        }
);

</script>
<div id="containerBar" style="float: left; width: 1000px; height: 600px"></div>
<div id="containerline" style="float: left; width:1000px; height:600px"></div>
<div id="containerPie" style="float: left; width: 550px; height: 600px"></div>
<%--<div id="main" style="width:1000px; height:600px"></div>--%>
<%--<div id="page">--%>
<%--<div id="main" ></div>--%>
<%--<div id="second" ></div>--%>
<%--</div>--%>
<%--<div id="hello">--%>
<%--<div id="third" ></div>--%>
<%--<div id="four" ></div>--%>
<%--</div>--%>


