function page2_bar_top1() {
	var page2_bar_top = echarts.init(document.getElementById("page2_bar_top"));
	option_page2_bar_top = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			top:'3%',
			right: '4%',
			bottom: '16%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['上城区', '下城区', '西湖区', '拱墅区', '江干区', '滨江区', '萧山区', '余杭区'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			axisTick: {
				alignWithLabel: true
			},
			splitLine:{
                show:false,
          	},
			type:'value',
		}],
		series: [{
				name: '停车天数总和',
				type: 'bar',
				barWidth: '40%',
				data: [100, 125, 200, 185, 110, 130, 150, 90]
			},

		],
		itemStyle: {
			normal: {
				color: '#369bf2',
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		}
	};
	page2_bar_top.setOption(option_page2_bar_top);
}


function page2_bar_top2() {

	var page2_bar_top = echarts.init(document.getElementById("page2_bar_top"));
	option_page2_bar_top = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '16%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['武林商圈', '湖滨商圈', '吴山商圈', '黄龙商圈', '滨江商圈', '钱江世纪城商圈', '庆春商圈', '九堡商圈', '城西商圈', '下沙商圈', '城北商圈','钱江新城商圈'],
				alignWithLabel: true
		}],
		yAxis: [{
			axisTick: {
				alignWithLabel: true
			},
			 splitLine:{
                show:false,
            }
		}],
		series: [{
				name: '停车天数总和',
				type: 'bar',
				barWidth: '40%',
				data: [100, 300, 200, 300, 400, 200, 100, 300, 300, 200, 300, 200]
			},

		],
		itemStyle: {
			normal: {
				color: '#ff6a2a',
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		}
	};
	page2_bar_top.setOption(option_page2_bar_top);
}