function bar_chart() {

	var bar_chart = echarts.init(document.getElementById("bar_chart"));
	option_bar = {
		color: ['#369bf2'],
		title: {
			text: '停车高峰时间分布',
			left: 'center',
			textStyle: {
				fontSize: 12
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			top:"15%",
			right: '4%',
			bottom: '16%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			axisTick: {
				alignWithLabel: true
			}
		}],
		series: [{
				name: '停车天数总和',
				type: 'bar',
				barWidth: '40%',
				data: [100, 300, 200, 300, 400, 200, 100, 300, 300, 200, 300, 200, 150, 53, 28, 30, 40, 25, 10]
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
	bar_chart.setOption(option_bar);
}