
/*选择区域浮层*/
$('.p1_quyu1').click(function () {
	$('.p1_dai').show();
});

/*关闭区域浮层*/
$('.close').click(function () {
	$('.p1_dai').hide();
});

//区域选择
$('.p1_dai li').click(function(){
	$('.p1_dai').hide();
});
//日期插件
layui.use('laydate', function() {
	var laydate = layui.laydate;
	laydate.render({
		elem: '#p1_test1',
	});

	laydate.render({
		elem: '#p1_test2',
	});
});
var map = new BMap.Map("map"); // 创建地图实例
var point = new BMap.Point(120.182659,30.248978);
map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(); // 允许滚轮缩放

var dataRoad = [
	[120.175976,30.259832,"00140","污水井盖","平海路","报警"],
	[120.190996,30.2637,"00100","污水井盖","庆春路","报警"],
	
	[120.175976,30.259832,"00140","污水井盖","平海路","报警 "],
	[120.190996,30.2637,"00100","污水井盖","庆春路","报警 "],
	
//	[120.175976,30.259832,"00140","污水井盖","平海路","正常 "],
//	[120.190996,30.2637,"00100","污水井盖","庆春路","正常 "],
//	[120.162789,30.240084,"00138","污水井盖","南山路","正常"],
//	[120.18478,30.251471,"00141","污水井盖","定安路","正常"],
//	[120.174755,30.246386,"00101","污水井盖","上城区高银街120号","正常"],
//	[120.173066,30.251752,"00102","污水井盖","上城区定安路122号","正常"],
//	[120.187942,30.259083,"00103","污水井盖","上城区华藏寺巷15","正常"],
//	[120.198003,30.251409,"00104","污水井盖","上城区清江路105","正常"],
//	[120.191176,30.245606,"00105","污水井盖","上城区海潮路80-6号","正常"],
//	[120.192609,30.252257,"00175","污水井盖","清泰街","正常"],

	[120.162789,30.240084,"00138","污水井盖","南山路","正常"],
	[120.18478,30.251471,"00141","污水井盖","定安路","正常"],
	[120.174755,30.246386,"00101","污水井盖","上城区高银街120号","正常"],
	[120.173066,30.251752,"00102","污水井盖","上城区定安路122号","正常"],
	[120.187942,30.259083,"00103","污水井盖","上城区华藏寺巷15","正常"],
	[120.198003,30.251409,"00104","污水井盖","上城区清江路105","正常"],
	[120.191176,30.245606,"00105","污水井盖","上城区海潮路80-6号","正常"],
	[120.192609,30.252257,"00175","污水井盖","清泰街","正常"],

	[120.168604,30.244687,"00125","污水井盖","四宜路","污水超警戒线"],
	[120.168673,30.242162,"00136","污水井盖","四宜路","污水超警戒线"],
	[120.168643,30.244389,"00132","污水井盖","四宜路","污水超警戒线"],
	[120.168723,30.242892,"00141","污水井盖","四宜路","井盖移动"],
	[120.168688,30.242502,"00142","污水井盖","四宜路","井盖移动"],
	[120.168637,30.244424,"00135","污水井盖","四宜路","井盖损坏"],
	[120.168733,30.243305,"00133","污水井盖","四宜路","井盖损坏"],

	[120.190112,30.252912,"00181","污水井盖","清泰街","井盖移动"],
	[120.183159,30.252928,"00182","污水井盖","清泰街","井盖移动"],
	[120.187578,30.252897,"00183","污水井盖","清泰街","井盖损坏"],
	[120.193831,30.251805,"00184","污水井盖","清泰街","井盖损坏"],
	[120.196525,30.25154,"00185","污水井盖","清泰街","污水超警戒线"],
	[120.188117,30.253021,"00186","污水井盖","清泰街","污水超警戒线"],
	[120.185958,30.252811,"00178","污水井盖","清泰街","污水超警戒线"],
	[120.195142,30.251929,"00172","污水井盖","清泰街","污水超警戒线"],
	[120.18871,30.253177,"00164","污水井盖","清泰街","井盖移动"],
	[120.18332,30.253014,"00158","污水井盖","清泰街","井盖移动"],
	[120.192663,30.252078,"00187","污水井盖","清泰街","井盖移动"],
	[120.179404,30.252764,"00171","污水井盖","清泰街","井盖损坏"],
	[120.182817,30.252951,"00185","污水井盖","清泰街","井盖损坏"],
	[120.195394,30.251454,"00192","污水井盖","清泰街","井盖损坏"],
	[120.187884,30.252959,"00193","污水井盖","清泰街","污水超警戒线"],
	[120.186878,30.25285,"00194","污水井盖","清泰街","污水超警戒线"],
	[120.18474,30.252943,"00195","污水井盖","清泰街","井盖移动"],
	[120.181775,30.252943,"00196","污水井盖","清泰街","井盖移动"],
	[120.179853,30.252756,"00197","污水井盖","清泰街","井盖移动"],
	[120.180392,30.252803,"00198","污水井盖","清泰街","井盖损坏"],
	[120.18156,30.252881,"00200","污水井盖","清泰街","井盖损坏"],
	[120.184794,30.25285,"00201","污水井盖","清泰街","井盖损坏"]
];

var road_qt = 0;
var road_sy = 1;
var road_qt_list = [];
var road_sy_list = [];
var road_all = [];

var Div = '<div ="popover" style="width:200px;height:70px;">' +
	'<p class="bianhao"></p>' +
	'<p class="yongtu"></p>' +
	'<p class="weizhi"></p>' +
	'<p class="yuanyin"></p>' +
	'</div>';

var icon_jg = new BMap.Icon("img/jg.png", new BMap.Size(32, 32));
var icon_cc = new BMap.Icon("img/cc.png", new BMap.Size(32, 32));
var icon_yd = new BMap.Icon("img/yd.png", new BMap.Size(32, 32));
var icon_sh = new BMap.Icon("img/sh.png", new BMap.Size(32, 32));
var icon_zc = new BMap.Icon("img/zc.png", new BMap.Size(32, 32));
var icon_s = new BMap.Icon("img/s.png", new BMap.Size(70, 70));
var marker;
var bjList = [];
function addMarker(point, bianhao, yongtu, weizhi, yuanyin, ctgry) {
	if(yuanyin == "报警原因：报警") {
		marker = new BMap.Marker(point, {
			icon: icon_jg
		});
		bjList.push(marker);
	}
	else if(yuanyin == "报警原因：污水超警戒线") {
		marker = new BMap.Marker(point, {
			icon: icon_cc
		});
		marker.hide();
	}
	else if(yuanyin == "报警原因：井盖移动") {
		marker = new BMap.Marker(point, {
			icon: icon_yd
		});
		marker.hide();
	}
	else if(yuanyin == "报警原因：井盖损坏") {
		marker = new BMap.Marker(point, {
			icon: icon_sh
		});
		marker.hide();
	}else if(yuanyin == "报警原因：正常"){
		marker = new BMap.Marker(point, {
			icon: icon_zc
		});
	}else if(yuanyin == "报警原因：报警 "){
		marker = new BMap.Marker(point, {
			icon: icon_s
		});
	}
	if(weizhi == "位置：四宜路") {
		road_sy_list.push(marker);
	}
	if(weizhi == "位置：清泰街") {
		road_qt_list.push(marker);
	}
	road_all.push(marker);


	var infoWindow = new BMap.InfoWindow(Div);
	map.addOverlay(marker);
	marker.addEventListener('click', function() {
		this.openInfoWindow(infoWindow);
		$('.bianhao').text(bianhao);
		$('.yongtu').text(yongtu);
		$('.weizhi').text(weizhi);
		$('.yuanyin').text(yuanyin);

	});

}

function buildMarker(jobj, ctgry) {
	for(var i = 0; i < jobj.length; i++) {
		var point = new BMap.Point(jobj[i][0], jobj[i][1]);
		var bianhao = "井盖编号：" + jobj[i][2];
		var yongtu = "用途：" + jobj[i][3];
		var weizhi = "位置：" + jobj[i][4];
		var yuanyin = "报警原因：" + jobj[i][5];
		addMarker(point, bianhao, yongtu, weizhi, yuanyin, ctgry);
	}
}
buildMarker(dataRoad, road_sy);
//报警闪烁
var a = true;
var timer;
(function(){
	timer = setInterval(function(){
		if(a){
			for(var i =0;i<bjList.length;i++){
				bjList[i].show();
			}
			a = false;
		}else{
			for(var i =0;i<bjList.length;i++){
				bjList[i].hide();
			}
			a = true;
		}
	},1000);
})();

var flag = true;
var polylineList1 = [];
$('.fc_2').click(function() {
	//清泰街路线
	var polyline = new BMap.Polyline([
		new BMap.Point(120.19798,30.251601),
		new BMap.Point(120.19703,30.251419),
		new BMap.Point(120.190914,30.252784),
		new BMap.Point(120.185958,30.252811),
		new BMap.Point(120.184506,30.252945),
		new BMap.Point(120.182336,30.252959),
		new BMap.Point(120.180802,30.253017),
		new BMap.Point(120.178578,30.252735),
	], {strokeColor:"blue", strokeWeight:5, strokeOpacity:0});   //创建折线
	map.addOverlay(polyline);
	polylineList1.push(polyline);

	if(flag) {
		for(var i = 0; i < road_qt_list.length; i++) {
			road_qt_list[i].show();
		};
		for(var i =0;i<polylineList1.length;i++){
			polylineList1[i].show();
		}
		flag = false;
	} else {
		for(var i = 0; i < road_qt_list.length; i++) {
			road_qt_list[i].hide();
		};
		for(var i =0;i<polylineList1.length;i++){
			polylineList1[i].hide();
		}
		flag = true;
	}

});

var flag2 = true;
var polylineList2 = [];
$('.fc_1').click(function() {
	//四宜路路线
	var polyline = new BMap.Polyline([
		new BMap.Point(120.168674,30.24553),
		new BMap.Point(120.168509,30.245478),
		new BMap.Point(120.168354,30.24547),
		new BMap.Point(120.168604,30.244687),
		new BMap.Point(120.168788,30.244019),
		new BMap.Point(120.168479,30.241477),
		new BMap.Point(120.168463,30.241429),
		new BMap.Point(120.168535,30.241222),
		new BMap.Point(120.16851,30.241071),
	], {strokeColor:"blue", strokeWeight:5, strokeOpacity:0}); //创建折线
	polylineList2.push(polyline);
	map.addOverlay(polyline);
	if(flag2) {
		for(var i = 0; i < road_sy_list.length; i++) {
			road_sy_list[i].show();
		};
		for(var i =0;i<polylineList2.length;i++){
			polylineList2[i].show();
		}
		flag2 = false;
	} else {
		for(var i = 0; i < road_sy_list.length; i++) {
			road_sy_list[i].hide();
		};
		for(var i =0;i<polylineList2.length;i++){
			polylineList2[i].hide();
		}
		flag2 = true;
	}
});

$('.searchBtn').click(function() {
	marker.hide();
	clearInterval(timer);
	var r = $('.searchInput').val();
	if(r) {
		for(var i = 0; i < dataRoad.length; i++) {
			if(dataRoad[i][2] == r) {
				$('.wz').text('位置：' + dataRoad[i][4]);
				$('.zt').text('状态：' + dataRoad[i][5]);
				$('.yt').text('用途：' + dataRoad[i][3]);
				var po = new BMap.Point(dataRoad[i][0], dataRoad[i][1]);
				var yuanyin = dataRoad[i][5];
				map.centerAndZoom(po, 16);
				for(var i = 0; i < road_all.length; i++) {
					road_all[i].hide();
				}
				if(yuanyin == "报警") {
					marker = new BMap.Marker(po, {
						icon: icon_jg
					});
				}
				else if(yuanyin == "污水超警戒线") {
					marker = new BMap.Marker(po, {
						icon: icon_cc
					});
				}
				else if(yuanyin == "井盖移动") {
					marker = new BMap.Marker(po, {
						icon: icon_yd
					});
				}
				else if(yuanyin == "井盖损坏") {
					marker = new BMap.Marker(po, {
						icon: icon_sh
					});
				}
				map.addOverlay(marker);
			} else {
				$('.wz').text('输入错误，请输入正确的井盖编号！');
				$('.zt').text('');
				$('.yt').text('');
			}
		}
	}
});

var myChart = echarts.init(document.getElementById('bar'));
var option = {
    legend:{
        data:['污水超警戒线','井盖移动','井盖损坏'],
        left:0,
        padding:0,
        itemGap:5,
        itemWidth:20,
        textStyle:{
        	fontSize:10,
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
	},
    xAxis: [
        {
            type: 'category',
            data: ['四宜路','清泰街'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis:{
        type: 'value',
        name: '故障次数',
    },
    label:{
       normal:{
         show:true,
         position:'top'
       }

    },
    series: [

        {
            name:'污水超警戒线',
            type:'bar',
            data:[80,40],
	        itemStyle: {
	            normal: {
	                color: '#369bf2'
	            }
	        }
	    },
        {
            name:'井盖移动',
            type:'bar',
            data:[51,50],
            itemStyle: {
	            normal: {
	                color: '#ff6a2a'
	            }
	        },
        },
        {
            name:'井盖损坏',
            type:'bar',
            data:[30,60],
            itemStyle: {
	            normal: {
	                color: '#ffcb2a'
	            }
	        },
        },
    ]
};
myChart.setOption(option);

