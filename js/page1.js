$('.span_nav').click(function () {
	$(this).css({
		'color': '#279efc',
		'background': '#fff'
	}).siblings('.span_nav').css({
		'color': '#fff',
		'background': 'transparent'
	});
	var index = $(this).index();
	$('.page').hide();
	$('.page').eq(index).show();

	//极高数据
	var json_p = {
		"data": [{
				"sw": 120.185113,
				"ne": 30.179931,
				"tit": "彩虹大厦"
			},
			{
				"sw": 120.192875,
				"ne": 30.185176,
				"tit": "长江小区"
			},
			{
				"sw": 120.174423,
				"ne": 30.190998,
				"tit": "江南大道"
			},
			{
				"sw": 120.191383,
				"ne": 30.178761,
				"tit": "滨文路"
			},
			{
				"sw": 120.174208,
				"ne": 30.173703,
				"tit": "火炬大道"
			},
			{
				"sw": 120.188725,
				"ne": 30.187689,
				"tit": "滨康路"
			},
			{
				"sw": 120.165656,
				"ne": 30.188064,
				"tit": "伟业路"
			},
		]
	}

	//较高数据
	var json_r = {
		"data": [
			{
				"sw": 120.16041,
				"ne": 30.178698,
				"tit": "滨文路2"
			},
			{
				"sw": 120.19203,
				"ne": 30.177262,
				"tit": "西湘路"
			},
			{
				"sw": 120.195839,
				"ne": 30.185566,
				"tit": "长江路2"
			},
			{
				"sw": 120.1771,
				"ne": 30.169597,
				"tit": "火炬大道辅路"
			},
		]
	}

	//一般数据
	var json_y = {
		"data": [{
				"sw": 120.177514,
				"ne": 30.189749,
				"tit": "滨安路"
			},
			{
				"sw": 120.180101,
				"ne": 30.164554,
				"tit": "火炬大道3"
			},
			{
				"sw": 120.166662,
				"ne": 30.177855,
				"tit": "杭州医学院"
			},
			{
				"sw": 120.179903,
				"ne": 30.188017,
				"tit": "凯和大厦"
			},		
		]
	}

	//较低数据
	var json_g = {
		"data": [{
				"sw": 120.157841,
				"ne": 30.190639,
				"tit": "联庄"
			},
			{
				"sw": 120.168818,
				"ne": 30.179635,
				"tit": "滨文路3"
			},
			{
				"sw": 120.155451,
				"ne": 30.17389,
				"tit": "浦沿路"
			},
			{
				"sw": 120.171836,
				"ne": 30.17414,
				"tit": "东冠社区"
			},
			{
				"sw": 120.189156,
				"ne": 30.183631,
				"tit": "建业路"
			},
		]
	}

	//不同的标记点
	var marker_p,
		marker_r,
		marker_y,
		marker_g;

	// 不同的标记图片
	var icon_p = new BMap.Icon("img/round-1.png", new BMap.Size(30, 30)),
		icon_r = new BMap.Icon("img/round-2.png", new BMap.Size(30, 30)),
		icon_y = new BMap.Icon("img/round-3.png", new BMap.Size(30, 30)),
		icon_g = new BMap.Icon("img/round-4.png", new BMap.Size(30, 30));

	//给相同类的点一个标记
	var catagory_p = 0;
	var catagory_r = 1;
	var catagory_y = 2;
	var catagory_g = 3;

	//把相应的点归类，放在不同的数组里
	var listmarker_p = [];
	var listmarker_r = [];
	var listmarker_y = [];
	var listmarker_g = [];

	var Div = '<div ="popover" style="width:500px;height:230px;">' +
		'<div class="popover_tit" style="height: 30px;line-height: 1;text-align: center;border-bottom: 1px solid #C2C2C2;padding:0;margin:0"></div>' +
		'<div style="overflow:hidden">' +
		'<div id="line_chart" style="float:left;width:250px;height:200px">' +
		'</div><div id="bar_chart" style="float:right;width:250px;height:200px"></div>' +
		'</div></div>';

	var map = new BMap.Map("map2");
	var point = new BMap.Point(120.181735,30.178588);
	map.centerAndZoom(point, 15);
	map.enableScrollWheelZoom(true);

	function addMarker(point, icon, marker, title, ctgry) {
		var marker = marker;
		marker = new BMap.Marker(point, {
			icon: icon
		});
		var infoWindow = new BMap.InfoWindow(Div);
		map.addOverlay(marker);
		marker.addEventListener('click', function () {
			this.openInfoWindow(infoWindow);
			$('.popover_tit').text(title);
			line_chart();
			bar_chart();
		});
		if (ctgry == 0) {
			listmarker_p.push(marker);
		} else if (ctgry == 1) {
			listmarker_r.push(marker);
		} else if (ctgry == 2) {
			listmarker_y.push(marker);
		} else if (ctgry == 3) {
			listmarker_g.push(marker);
		}
	}

	function buildMarker(jobj, icon, marker, ctgry) {
		for (var i = 0; i < jobj.data.length; i++) {
			var point = new BMap.Point(jobj.data[i].sw, jobj.data[i].ne);
			var title = jobj.data[i].tit + "平均小时利用率详情";
			addMarker(point, icon, marker, title, ctgry);
		}
	}

	buildMarker(json_p, icon_p, marker_p, catagory_p);
	buildMarker(json_r, icon_r, marker_r, catagory_r);
	buildMarker(json_y, icon_y, marker_y, catagory_y);
	buildMarker(json_g, icon_g, marker_g, catagory_g);



	layui.use('form', function () {
		var form = layui.form;
		form.on('checkbox(jigao)', function (data) {
			var x = $('#jigao').prop('checked');
			var xList = listmarker_p;
			if (x == true) {
				if (xList.length > 0) {
					for (var i = 0; i < xList.length; i++) {
						xList[i].show();
					}
				}
			} else {
				if (xList.length > 0) {
					for (var i = 0; i < xList.length; i++) {
						xList[i].hide();
					}
				}
			}
		});

		form.on('checkbox(jiaogao)', function (data) {
			var x = $('#jiaogao').prop('checked');
			var xList = listmarker_r;
			if (x == true) {
				if (xList.length > 0) {
					for (var i = 0; i < xList.length; i++) {
						xList[i].show();
					}
				}
			} else {
				if (xList.length > 0) {
					for (var i = 0; i < xList.length; i++) {
						xList[i].hide();
					}
				}
			}
		});

		form.on('checkbox(yiban)', function (data) {
			var x = $('#yiban').prop('checked');
			var xList = listmarker_y;
			if (x == true) {
				if (xList.length > 0) {
					for (var i = 0; i < xList.length; i++) {
						xList[i].show();
					}
				}
			} else {
				if (xList.length > 0) {
					for (var i = 0; i < xList.length; i++) {
						xList[i].hide();
					}
				}
			}
		});

		form.on('checkbox(jiaodi)', function (data) {
			var x = $('#jiaodi').prop('checked');
			var xList = listmarker_g;
			if (x == true) {
				if (xList.length > 0) {
					for (var i = 0; i < xList.length; i++) {
						xList[i].show();
					}
				}
			} else {
				if (xList.length > 0) {
					for (var i = 0; i < xList.length; i++) {
						xList[i].hide();
					}
				}
			}
		});

		layui.use('laydate', function () {
			var laydate = layui.laydate;
			//常规用法
			laydate.render({
				elem: '#p1_test1',
			});

			laydate.render({
				elem: '#p1_test2',
			});

		})

	})


});

/*选择区域浮层*/
$('.p1_quyu1').click(function () {
	$('.p1_dai').show();
})

/*关闭区域浮层*/
$('.p1_close1').click(function () {
	$('.p1_dai').hide();
})

/*关地图弹出的浮层闭*/
$('.popover_close').click(function () {
	$('.popover').hide();
})
/*区域选择变为滨文路 */
$('#bwl').click(function () {
	var value = $(this).text();
	$('.p1_quyu1').val(value);
})

/*区域选择变为东信大道*/
$('#dxdd').click(function () {
	var value = $(this).text();
	$('.p1_quyu1').val(value);
})

/*区域选择变为滨江区*/
$('#all').click(function () {
	var value = $(this).text();
	$('.p1_quyu1').val(value);
})

$('.p1_dai li').click(function () {
	$('.p1_dai').hide();
});
//点击分析按钮  出现不同的热力图
$("#fenxiBtn").click(function(){
	$('.container').show();
	var ipt = $('.p1_quyu1');
	if(ipt.val() == "滨江区"){
		heatMapAll();
	}else if(ipt.val() == "东信大道"){
		dxdd();
	}else if(ipt.val() == "滨文路"){
		bwl();
	}
	
});
layui.use('laydate', function () {
	var laydate = layui.laydate;
	//常规用法
	laydate.render({
		elem: '#p1_test1',
	});

	laydate.render({
		elem: '#p1_test2',
	});

})

