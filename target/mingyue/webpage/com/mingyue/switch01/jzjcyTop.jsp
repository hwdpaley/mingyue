<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="/context/mytags.jsp" %>
<t:base type="jquery,easyui,Echarts"></t:base>

<script type="text/javascript">
var myChart, option;

require.config({
    paths: {
        echarts: 'plug-in/echarts/source',
        zrender: 'plug-in/zrender/src',
        geoJson: 'plug-in/echarts/geoJson'
    }
});
require(
        [
            'echarts',
            'echarts/chart/map', // 使用柱状图就加载bar模块，按需加载
            'zrender'
        ],
        function (echarts) {
            // 基于准备好的dom，初始化echarts图表
            myChart = echarts.init(document.getElementById('main'));
            var cityMap = {
                "荆州市": "421000"
            };

            //   var curIndx = 0;
            var mapType = [];
            var mapGeoData = require('echarts/util/mapData/params');
            //			console.log(mapGeoData)
            for (var city in cityMap) {
                mapType.push(city);
                // 自定义扩展图表类型
                mapGeoData.params[city] = {
                    getGeoJson: (function (c) {
                        var geoJsonName = cityMap[c];
                        return function (callback) {
                            //         $.getJSON('geoJson/china-main-city/' + geoJsonName + '.json', callback);
                            $.getJSON('plug-in/echarts/geoJson/' + geoJsonName + '.json', callback);
                        }
                    })(city)
                }
            }

            //   var ecConfig = require('echarts/config');
            //   var zrEvent = require('zrender/tool/event');
//                document.getElementById('main').onmousewheel = function (e) {
//                 //   var event = e || window.event;
////                    curIndx += zrEvent.getDelta(event) > 0 ? (-1) : 1;
////                    if (curIndx < 0) {
////                        curIndx = mapType.length - 1;
////                    }
////                    var mt = mapType[curIndx % mapType.length];
////                    option.series[0].mapType = mt;
////                    option.title.subtext = mt + ' （滚轮或点击切换）';
//                    myChart.setOption(option, true);
//                    // zrEvent.stop(event);
//                };
//                myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param) {
//                    curIndx++;
//                    var mt = mapType[curIndx % mapType.length];
//                    option.series[0].mapType = mt;
//                    option.title.subtext = mt + ' （滚轮或点击切换）';
//                    myChart.setOption(option, true);
//                });


            option = {
                title: {
                    x: 'center',
                    text: '荆州市地图'
//                        link: 'http://www.pactera.com/',
//                        subtext: '荆州市'
                },
//                    tooltip: {
//                        trigger: 'item',
//                        formatter: '{b}'
//
//                    },
                tooltip: {
//                        trigger: 'item',
//                        formatter: '{b}'
                    trigger: 'item',
                    //show: true,   //default true
                    showDelay: 0,
                    hideDelay: 50,
                    transitionDuration: 0,
                    backgroundColor: 'rgba(255,0,255,0.7)',
                    borderColor: '#f50',
                    borderRadius: 8,
                    borderWidth: 2,
                    padding: 10,    // [5, 10, 15, 20]
                    position: function (p) {
                        // 位置回调
//                             console.log && console.log(p);
                        return [p[0] + 10, p[1] - 10];
                    },
                    textStyle: {
                        color: 'white',
                        decoration: 'none',
                        fontFamily: 'Verdana, sans-serif',
                        fontSize: 15,
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    },
                    formatter: function (params, ticket, callback) {
//                            console.log(params);
                        var name = params.data.value2;
                        $.ajax({
                            type: "get",
                            dataType: 'json',
                            url: "switch01Controller.do?getJcyState&name=" + name,
                            success: function (jsondata) {
//                                data = eval(jsondata);
//                                console.log(data);
                                name = jsondata.msg;
                            }
                        });
                        setTimeout(function () {
                            // 仅为了模拟异步回调
                            callback(ticket, name);
                        }, 500)
                        return '加载中...';
                    }
                },

//                    dataRange: {
//                        x:'center',
//                        show:false,
//                        min: 800,
//                        max: 50000,
////                        text:['High','Low'],
//                        realtime: false,
//                        calculable : false,
//                        color: ['yellow','lightskyblue']
//                    },

                series: [
                    {
                        name: '荆州市地图',
                        type: 'map',
                        mapType: '荆州市',
                        roam: true,
                        hoverable: true,
//                            selectedMode: 'single',
//                            itemStyle: {
//                                normal: {label: {show: true}}
////                                emphasis: {label: {show: true}}
//                            }
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(100,149,237,0.5)',
                                borderWidth: 1,
                                areaStyle: {
                                    color: 'white'
                                },
                                label: {show: true}
                            }
                        },
                        data: [
                            {name: '荆州区', value2: '荆州区检察院'},
                            {name: '沙市区', value2: '沙市区检察院'},
                            {name: '松滋市', value2: '松滋市检察院'},
                            {name: '公安县', value2: '公安县检察院'},
                            {name: '江陵县', value2: '江陵县检察院'},
                            {name: '石首市', value2: '石首市检察院'},
                            {name: '洪湖市', value2: '洪湖市检察院'},
                            {name: '监利县', value2: '监利县检察院'}
                        ],
//                            markLine : {
//                                smooth:true,
//                                symbol: ['none', 'circle'],
//                                symbolSize : 3,
//                                itemStyle : {
//                                    normal: {
//                                        color:'#fff',
//                                        borderWidth:1,
//                                        borderColor:'rgba(255,0,0,0)'
//                                    }
//                                },
//                                data : [
//                                    [{name:'荆州市检察院'},{name:'沙市区'}],
//                                    [{name:'荆州市检察院'},{name:'江陵县'}],
//                                    [{name:'荆州市检察院'},{name:'洪湖市'}],
//                                    [{name:'荆州市检察院'},{name:'松滋市'}],
//                                    [{name:'荆州市检察院'},{name:'公安县'}],
//                                    [{name:'荆州市检察院'},{name:'石首市'}],
//                                    [{name:'荆州市检察院'},{name:'荆州区'}],
//                                    [{name:'荆州市检察院'},{name:'监利县'}]
//
//                                ]
//                            },
                        geoCoord: {
                            '荆州市检察院': [112.757345,
                                30.603843],
                            '沙市区检察院': [112.377750273438,
                                30.3834181953126],
                            '江陵县检察院': [112.483922148438,
                                30.1260353828126],
                            '洪湖市检察院': [113.387345,
                                30.013843],
                            '监利县检察院': [112.997345,
                                29.883843],
                            '荆州区检察院': [112.077345,
                                30.4338430000001],
                            '松滋市检察院': [111.712899199219,
                                30.0593971992188],
                            '石首市检察院': [112.517345,
                                29.723843],
                            '公安县检察院': [112.077345,
                                30.0038430000001]
                        }
                    },
                    {
                        name: '荆州市检察院',
                        type: 'map',
                        mapType: '荆州市',
                        data: [],
                        markLine: {
                            smooth: true,
                            effect: {
                                show: true,
                                scaleSize: 1,
                                period: 10,
                                color: '#fff',
                                shadowBlur: 20
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: 3,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data: [
                                [
                                    {name: "荆州市检察院", value2: '沙市区检察院'},
                                    {name: "沙市区检察院"}
                                ],
                                [
                                    {name: '荆州市检察院', value2: '江陵县检察院'},
                                    {name: '江陵县检察院'}
                                ],
                                [
                                    {name: '荆州市检察院', value2: '洪湖市检察院'},
                                    {name: '洪湖市检察院'}
                                ],
                                [
                                    {name: '荆州市检察院', value2: '监利县检察院'},
                                    {name: '监利县检察院'}
                                ],
                                [
                                    {name: '荆州市检察院', value2: '荆州区检察院'},
                                    {name: '荆州区检察院'}
                                ],
                                [
                                    {name: '荆州市检察院', value2: '松滋市检察院'},
                                    {name: '松滋市检察院'}
                                ],
                                [
                                    {name: '荆州市检察院', value2: '石首市检察院'},
                                    {name: '石首市检察院'}
                                ],
                                [
                                    {name: '荆州市检察院', value2: '公安县检察院'},
                                    {name: '公安县检察院'}
                                ]
                            ]
                        },
                        markPoint: {
                            symbol: 'emptyCircle',
                            symbolSize: function (v) {
                                return 30 + v / 10
                            },
                            effect: {
                                show: true,
                                color: '#f00',
                                period: 30,
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
//                                    {name:'沙市区检察院',value:0},
//                                    {name:'江陵县检察院',value:70},
//                                    {name:'洪湖市检察院',value:60},
//                                    {name:'监利县检察院',value:50},
//                                    {name:'荆州区检察院',value:40},
//                                    {name:'松滋市检察院',value2:'192.168.1.110'},
//                                    {name:'石首市检察院',value:20},
//                                    {name:'公安县检察院',value:10}
                            ]
                        }
                    }
                ]
            };
            myChart.setOption(option);
        }
);
var state = 0;
var timer = setTimeout(function A() {
//        graph.forEach(function (element) {
//            //if(Q.randomBool()){
//            //    element.alarmLabel = null;
//            //    element.alarmColor = null;
//            //    //return;
//            //}
//            if (!element.info) {
//                return;
//            }
//            //if(element.type!="PC"){
//            //    return;
//            //}
//            Q.loadJSON("/getElementByIp?ip=" + element.ip+"&mac='"+element.mac+"'", function (json) {
//                if (json.success) {
//                    var alarmSeverity = AlarmSeverity.random;
//                    element.alarmLabel = json.msg;// "C盘空间不足\nCPU温度过高\nsssssssss" + (1 + Q.randomInt(100)) + alarmSeverity.sortName + (Q.randomBool() ? "+" : "");
//                    element.alarmColor = alarmSeverity.color;
//                } else {
//                    element.alarmLabel = null;
//                    element.alarmColor = null;
//                }
//            });
//            //var alarmSeverity = AlarmSeverity.random;
//            //element.alarmLabel = "123";//C盘空间不足\nCPU温度过高\nsssssssss" + (1 + Q.randomInt(100)) + alarmSeverity.sortName + (Q.randomBool() ? "+" : "");
//            //element.alarmColor = alarmSeverity.color;
//        })
    $.ajax({
        type: "get",
        dataType: 'json',
        url: "switch01Controller.do?getJcyTop",
        success: function (j) {
            if (j.success) {
                var data1 = j.obj.data1;
                var data2 = j.obj.data2;
                if (j.obj.state != state) {
                    option.series[1].markLine.data = data1;
                    option.series[1].markPoint.data = data2;
                    myChart.setOption(option, true);
                    state = j.obj.state;
                }
            }
        }
    });
    timer = setTimeout(A, 5000);
}, 2500);
function destroy() {
    clearTimeout(timer);
}
;
</script>

<div id="main" style="width:1200px;height:700px"></div>
