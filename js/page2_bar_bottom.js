function page2_bar_bottom1() {

	var page2_bar_bottom = echarts.init(document.getElementById("page2_bar_bottom"));
	option_page2_bar_bottom = {
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
			data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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
				color: '#369bf2',
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		}
	};
	page2_bar_bottom.setOption(option_page2_bar_bottom);
}
function page2_bar_bottom2() {
	var page2_bar_bottom = echarts.init(document.getElementById("page2_bar_bottom"));
	option_page2_bar_bottom = {
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
			data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
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
            }
		}],
		series: [{
				name: '停车天数总和',
				type: 'bar',
				barWidth: '40%',
				data: [100, 300, 200, 300, 400, 200, 100, 300, 300, 200, 300, 200, 150, 53, 28,100, 300, 200, 300, 400, 200, 100, 300, 300, 200, 300, 200, 150, 53, 28]
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
	page2_bar_bottom.setOption(option_page2_bar_bottom);
}
function page2_bar_bottom3() {
	var page2_bar_bottom = echarts.init(document.getElementById("page2_bar_bottom"));
	option_page2_bar_bottom = {
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
			data: ['0-3点','3-6点', '5-8点', '8-11点', '11-14点', '14-17点', '17-19点', '19-21点', '21-0点'],
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
            }
		}],
		series: [{
				name: '停车天数总和',
				type: 'bar',
				barWidth: '40%',
				data: [100, 200, 200, 300, 200, 200, 100, 300, 300]
			},

		],
		itemStyle: {
			normal: {
				color: '#ffcb2a',
				shadowColor: 'rgba(0, 0, 0, 0.1)',
				shadowBlur: 10
			}
		}
	};
	page2_bar_bottom.setOption(option_page2_bar_bottom);
}