
/*选择区域浮层*/
$('.p1_quyu1').click(function () {
	$('.p1_dai').show();
})

/*关闭区域浮层*/
$('.close').click(function () {
	$('.p1_dai').hide();
})

//区域选择
$('.p1_dai li').click(function(){
	$('.p1_dai').hide();
});
//$('#nsl').click(function(){
//	var value = $(this).text();
//	$('.p1_quyu1').val(value);
//});
//$('#wlgc').click(function(){
//	var value = $(this).text();
//	$('.p1_quyu1').val(value);
//})

var marker;
var markerList = [];
var rectList = [];
var jhList = [];
var marker2;



//绘制矩形的数据
var dateRect =[
	[120.167408,30.254227,120.167314,30.253705],
	[120.164673,30.244591,120.164798,30.244166],
	[120.167147,30.252683,120.167314,30.252036],
	[120.170798,30.277683,120.170897,30.277133],
	[120.17016,30.27279,120.170286,30.272279],
	[120.171773,30.28265,120.171651,30.281745]
];
//共享单车停放点数据
	//将军路85号
var data = [
	[120.167363,30.253829,"南山路258号","50","32"],
	[120.164727,30.244357,"南山路182-1","120","60"],
	[120.167196,30.252371,"南山路236号","80","40"],
	[120.170856,30.27725,"体育场路352号","220","180"],
	[120.171714,30.282162,"中山北路561号","90","80"],
	[120.170214,30.272634,"延安路516号","260","230"],
	
]
//热力图数据	
var points =[
    {"lng":120.169397,"lat":30.276155,"count":50},
    {"lng":120.168965,"lat":30.273317,"count":10},
    {"lng":120.169469,"lat":30.273005,"count":15},
    {"lng":120.169289,"lat":30.273161,"count":30},
    {"lng":120.17105,"lat":30.274003,"count":8},
    {"lng":120.171121,"lat":30.272849,"count":15},
    {"lng":120.169145,"lat":30.272131,"count":6},
    {"lng":120.167528,"lat":30.271529,"count":36},
    {"lng":120.167528,"lat":30.271539,"count":80},
    {"lng":120.167456,"lat":30.273192,"count":70},
    {"lng":120.168606,"lat":30.270977,"count":63},
    {"lng":120.168606,"lat":30.270981,"count":50},
    {"lng":120.168678,"lat":30.275843,"count":23},
    {"lng":120.167097,"lat":30.275188,"count":6},
    {"lng":120.168498,"lat":30.273972,"count":34},
    {"lng":120.169576,"lat":30.274346,"count":40},
    {"lng":120.168714,"lat":30.272818,"count":6},
    {"lng":120.171193,"lat":30.274221,"count":8},

    {"lng":120.193579,"lat":30.267577,"count":60},
    {"lng":120.1971,"lat":30.261776,"count":20},
    {"lng":120.191495,"lat":30.265144,"count":80},
    {"lng":120.193867,"lat":30.266517,"count":50},
    {"lng":120.192501,"lat":30.265768,"count":71},
    {"lng":120.194513,"lat":30.264209,"count":75},
    {"lng":120.192214,"lat":30.263086,"count":35},
    {"lng":120.192142,"lat":30.262774,"count":15},
    {"lng":120.19631,"lat":30.262212,"count":12},
    {"lng":120.200119,"lat":30.262899,"count":8},
    {"lng":120.196669,"lat":30.260528,"count":13},
    {"lng":120.192357,"lat":30.261838,"count":5},
    {"lng":120.19631,"lat":30.26059,"count":45},
    {"lng":120.127536,"lat":30.234072,"count":51},
    {"lng":120.192285,"lat":30.260091,"count":48},
    {"lng":120.196741,"lat":30.258968,"count":32},
    {"lng":120.19207,"lat":30.259405,"count":12},

    {"lng":120.166558,"lat": 30.25198,"count":92},
    {"lng": 120.167708,"lat": 30.254289,"count":62},
    {"lng": 120.165983,"lat":30.25067,"count":75},
    {"lng":120.16663,"lat":30.249235,"count":48},
    {"lng":120.167708,"lat": 30.250109,"count":101},
    {"lng": 120.165264,"lat":30.249734,"count":82},
    {"lng":120.164761,"lat":30.249547,"count":65},
    {"lng": 120.164186,"lat":30.248424,"count":35},
    {"lng":120.165336," lat":30.2478,"count":58},
    {"lng": 120.164186,"lat": 30.247238,"count":63},
    {"lng": 120.166342,"lat": 30.2478,"count":112},
    {"lng": 120.163971,"lat":30.244867,"count":98},
    {"lng": 120.165552,"lat":30.246427,"count":78},
    {"lng":120.163252,"lat":30.242995,"count":42},
    {"lng":120.163252,"lat": 30.242995,"count":15},
    {"lng":120.165408,"lat": 30.246989,"count":23},
    {"lng":120.165121,"lat": 30.241248,"count":34},
    {"lng": 120.163109,"lat":30.242309,"count":85},
    {"lng": 120.163324,"lat":30.24287,"count":64},
    {"lng": 120.167923,"lat":30.241622,"count":59},
	 {"lng": 120.168195,"lat":30.281431,"count":60},
	 {"lng": 120.164171,"lat":30.279685,"count":12},
	 {"lng": 120.166902,"lat":30.2722,"count":90},
	 {"lng": 120.174088,"lat":30.276441,"count":50},
	 {"lng": 120.167764,"lat":30.262967,"count":65},
	 {"lng": 120.165752,"lat":30.271825,"count":40},
	 {"lng": 120.17337,"lat":30.267209,"count":6},
	 {"lng": 120.168052,"lat":30.262842,"count":35},
	 {"lng": 120.173657,"lat":30.258475,"count":32},
	 {"lng": 120.167908,"lat":30.258225,"count":51},
	 {"lng": 120.170064,"lat":30.253109,"count":18},
	 {"lng": 120.173226,"lat":30.267583,"count":100},
	 {"lng": 120.175094,"lat":30.288542,"count":80},
	 {"lng": 120.170639,"lat":30.289665,"count":75},
	 {"lng": 120.170639,"lat":30.289665,"count":30},
	 {"lng": 120.17107,"lat":30.280932,"count":16},
	 {"lng": 120.167477,"lat":30.276816,"count":65},
	 {"lng": 120.174376,"lat":30.278687,"count":40},
	 {"lng":120.165321,"lat":30.287045 ,"count":10},
	 {"lng": 120.162015,"lat":30.283053,"count":16},
	 {"lng": 120.164602,"lat":30.28218,"count":70},
	 {"lng": 120.169633,"lat":30.28929,"count":61},
	 {"lng": 120.16877,"lat":30.288417,"count":35},
	 {"lng": 120.174232,"lat":30.288791,"count":12},
	 {"lng": 120.173082,"lat":30.279934,"count":40},
	 {"lng": 120.166902,"lat":30.267334,"count":21},
	 {"lng": 120.162303,"lat":30.26908,"count":20},
	 {"lng": 120.172795,"lat":30.262717,"count":64},
	 {"lng": 120.17452,"lat":30.268176,"count":18},
	 {"lng": 120.16798,"lat":30.267396,"count":45},
	 {"lng": 120.167405,"lat":30.267771,"count":30},
	 {"lng": 120.171717,"lat":30.266149,"count":60},
	 {"lng": 120.167837,"lat":30.288729,"count":70},
	 {"lng": 120.167837,"lat":30.288729,"count":50},
	 {"lng": 120.172292,"lat":30.290725,"count":25}
   ];
//聚合图数据
var pts =[
		[120.167466,30.254211,"将军路83号","8：00-17：00","100次"],
		[120.164776,30.244116,"南山路178号","8：00-17：00","40次"],
		[120.167227,30.251970,"南山路230号","8：00-17：00","180次"],
		[120.170851,30.277086,"体育场路352号","8：00-17：00","60次"],
		[120.171629,30.282712,"中山北路573号","8：00-17：00","20次"],
		[120.170214,30.272891,"延安路526号","8：00-17：00","65次"],

];
var Box = '<div id="mask" style="width:200px;height:50px;">' +
		'<p></p>'+
		'<p class="dizhi"></p>'+
		'<p class="max"></p>'+
		'<p class="now"></p>'+
		'</div>';
//聚合图icon
var icon_20 = new BMap.Icon("img/m20.png", new BMap.Size(40, 40));
var icon_60 = new BMap.Icon("img/m60.png", new BMap.Size(40, 40));
var icon_65 = new BMap.Icon("img/m65.png", new BMap.Size(40, 40));
var icon_180 = new BMap.Icon("img/m180.png", new BMap.Size(40, 40));
var icon_100 = new BMap.Icon("img/m100.png", new BMap.Size(40, 40));
var icon_40 = new BMap.Icon("img/m40.png", new BMap.Size(40, 40));
var Div = '<div id="popover" style="width:200px;height:70px;">' +
'<p></p>'+
'<p class="address"></p>'+
'<p class="time"></p>'+
'<p class="wt"></p>'+
'</div>';

		
$('#fenxiBtn4').click(function() {
	$('.container').show();
	var map = new BMap.Map("map");
	var point = new BMap.Point(120.167295, 30.255989);
	map.centerAndZoom(point, 14);
	map.enableScrollWheelZoom(true);

	//绘制矩形
	function addRect(data) {
		for(var i = 0; i < dateRect.length; i++) {
			var pStart = new BMap.Point(data[i][0], data[i][1]);
			var pEnd = new BMap.Point(data[i][2], data[i][3]);

			var rectangle = new BMap.Polygon([
				new BMap.Point(pStart.lng, pStart.lat),
				new BMap.Point(pEnd.lng, pStart.lat),
				new BMap.Point(pEnd.lng, pEnd.lat),
				new BMap.Point(pStart.lng, pEnd.lat)
			], {
				strokeColor: "blue",
				strokeWeight: 2,
				strokeOpacity: 0.5
			});
			map.addOverlay(rectangle);
			rectList.push(rectangle);
		}

	}
	addRect(dateRect); //显示矩形
	//隐藏矩形
	function hideRect() {
		for(var i = 0; i < rectList.length; i++) {
			rectList[i].hide();
		}
	};
	//绘制单车停放点

	function addBike(point, dizhi, max, now) {
		var icon = new BMap.Icon("img/bike_icon.png", new BMap.Size(30, 37));
		var marker = new BMap.Marker(point, {
			icon: icon
		});
		var infoWindow = new BMap.InfoWindow(Box);
		map.addOverlay(marker);
		markerList.push(marker);
		marker.addEventListener('click', function() {
			this.openInfoWindow(infoWindow);
			$('.dizhi').text(dizhi);
			$('.max').text(max);
			$('.now').text(now);

		});

	}

	function buildBike(jobj) {
		for(var i = 0; i < jobj.length; i++) {
			var point = new BMap.Point(jobj[i][0], jobj[i][1]);
			var dizhi = "地址：" + jobj[i][2];
			var max = "最大可停车数：" + jobj[i][3];
			var now = "当前停车数：" + jobj[i][4];
			addBike(point, dizhi, max, now);
		}
	}
	buildBike(data);

	function showMarker() {
		addRect(dateRect);
		buildBike(data);
	};

	function hideMarker() {
		hideRect();
		for(var i = 0; i < markerList.length; i++) {
			markerList[i].hide();
		}
	}

	//聚合图
	function addJh(point, address, time, wt) {
		if(wt == "违停事件：20次") {
			marker2 = new BMap.Marker(point, {
				icon: icon_20
			});
		} else if(wt == "违停事件：40次") {
			marker2 = new BMap.Marker(point, {
				icon: icon_40
			});
		} else if(wt == "违停事件：60次") {
			marker2 = new BMap.Marker(point, {
				icon: icon_60
			});
		} else if(wt == "违停事件：65次") {
			marker2 = new BMap.Marker(point, {
				icon: icon_65
			});
		} else if(wt == "违停事件：100次") {
			marker2 = new BMap.Marker(point, {
				icon: icon_100
			});
		} else if(wt == "违停事件：180次") {
			marker2 = new BMap.Marker(point, {
				icon: icon_180
			});
		}
		var infoWindow = new BMap.InfoWindow(Div);
		map.addOverlay(marker2);
		jhList.push(marker2);
		marker2.addEventListener('click', function() {
			this.openInfoWindow(infoWindow);
			$('.address').text(address);
			$('.time').text(time);
			$('.wt').text(wt);

		});

	}

	function buildJh(jobj) {
		for(var i = 0; i < jobj.length; i++) {
			var point = new BMap.Point(jobj[i][0], jobj[i][1]);
			var address = "地址：" + jobj[i][2];
			var time = "时间段：" + jobj[i][3];
			var wt = "违停事件：" + jobj[i][4];
			addJh(point, address, time, wt);
		}
	}

	//隐藏聚合图
	function hideJh() {
		for(var i = 0; i < jhList.length; i++) {
			jhList[i].hide();
		}
	}

	//热力图
	if(!isSupportCanvas()) {
		alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
	}
	heatmapOverlay = new BMapLib.HeatmapOverlay({
		"radius": 20
	});
	map.addOverlay(heatmapOverlay);
	heatmapOverlay.setDataSet({
		data: points,
		max: 100
	});
	//是否显示热力图
	heatmapOverlay.hide();

	function setGradient() {
		var gradient = {};
		var colors = document.querySelectorAll("input[type='color']");
		colors = [].slice.call(colors, 0);
		colors.forEach(function(ele) {
			gradient[ele.getAttribute("data-key")] = ele.value;
		});
		heatmapOverlay.setOptions({
			"gradient": gradient
		});
	};
	//判断浏览区是否支持canvas
	function isSupportCanvas() {
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	};
	layui.use('form', function() {
		var form = layui.form;
		form.on('checkbox(wl)', function(data) {
			var x = $(this).prop('checked');
			if(x == true) {
				showMarker();
			} else {
				hideMarker();
			}
		});
		form.on('checkbox(rl)', function(data) {
			var x = $(this).prop('checked');
			if(x == true) {
				heatmapOverlay.show();
			} else {
				//是否显示热力图
				heatmapOverlay.hide();
			}
		});
		form.on('checkbox(jh)', function(data) {
			var x = $(this).prop('checked');
			if(x == true) {
				//显示聚合图
				buildJh(pts);
				$('.top20').show();
			} else {
				hideJh();
				$('.top20').hide();
			}
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
		})
	});

})

