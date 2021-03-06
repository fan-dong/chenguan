var data = [
	["2017-09-01", 65],
	["2017-09-03", 54],
	["2017-09-04", 98],
	["2017-09-05", 74],
	["2017-09-06", 32],
	["2017-09-07", 55],
	["2017-09-08", 61],
	["2017-09-09", 18],
	["2017-09-10", 35],
	["2017-09-11", 68],
	["2017-09-12", 97],
	["2017-09-13", 94],
	["2017-09-14", 66],
	["2017-09-15", 54],
	["2017-09-16", 87],
	["2017-09-17", 80],
	["2017-09-18", 84],
	["2017-09-19", 17],
	["2017-09-20", 68],
	["2017-09-21", 29],
	["2017-09-22", 29],
	["2017-09-23", 64],
	["2017-09-24", 60],
	["2017-09-25", 14],
	["2017-09-26", 70],
	["2017-09-27", 58],
	["2017-09-28", 87],
	["2017-09-29", 70],
	["2017-09-30", 53],
	["2017-10-01", 92],
	["2017-10-02", 78],
	["2017-10-03", 56],
	["2017-10-04", 95],
	["2017-10-05", 54],
	["2017-10-06", 68],
	["2017-10-07", 20],
	["2017-10-08", 31],
	["2017-10-09", 37],
	["2017-10-10", 34],
	["2017-10-11", 23],
	["2017-10-14", 80],
	["2017-10-15", 73],
	["2017-10-16", 76],
	["2017-10-17", 13],
	["2017-10-18", 21],
	["2017-10-19", 28],
	["2017-10-20", 25],
	["2017-10-21", 82],
	["2017-10-22", 99],
	["2017-10-23", 16],
	["2017-10-24", 26],
	["2017-10-25", 35],
	["2017-10-26", 78],
	["2017-10-27", 72],
	["2017-10-28", 88],
	["2017-10-29", 14],
	["2017-10-30", 20],
	["2017-10-31", 20],
	["2017-11-01", 65],
	["2017-11-03", 59],
	["2017-11-04", 15],
	["2017-11-05", 79],
	["2017-11-07", 63],
	["2017-11-08", 93],
	["2017-11-09", 80],
	["2017-11-10", 95],
	["2017-11-11", 59],
	["2017-11-13", 65],
	["2017-11-14", 77]
]

function line_chart() {
	var line_chart = echarts.init(document.getElementById("line_chart"));
	line_chart.setOption(option = {
		title: {
			text: '平均小时利用率变化',
			left: 'center',
			textStyle: {
				fontSize: 12
			}
		},
		tooltip: {
			trigger: 'axis',
			formatter: '{b}<br/>{a}: {c}%',
			textStyle:{
				fontSize:10,
			}
		},
		grid: {
			top:"15%",
			right:'13%',
			bottom:"20%",
			containLabel: true
		},
		xAxis: {
			data: data.map(function (item) {
				return item[0];
			})
		},
		yAxis: {
	        type: 'value',
		    axisLabel: {
	            formatter: '{value} %'
	        },
			splitLine: {
				show: false
			},

		},

		dataZoom: [{
			startValue: '2017-09-01'
		}, {
			type: 'inside'
		}],
		visualMap: {
			show: false,
			pieces: [{
				gt: 0,
				lte: 50,
				color: '#096'
			}, {
				gt: 50,
				lte: 100,
				color: '#ffde33'
			}, {
				gt: 100,
				lte: 150,
				color: '#ff9933'
			}, {
				gt: 150,
				lte: 200,
				color: '#cc0033'
			}, {
				gt: 200,
				lte: 300,
				color: '#660099'
			}, {
				gt: 300,
				color: '#7e0023'
			}],
			outOfRange: {
				color: '#999'
			}
		},
		series: {
			name: '平均小时利用率变化',
			type: 'line',
			lineStyle: {
				normal: {
					width: '1'
				}
			},
			data: data.map(function (item) {
				return item[1];
			}),
			markLine: {
				silent: true,
				symbolSize: 1,
				data: [{
					yAxis: 50
				}, {
					yAxis: 100
				}, {
					yAxis: 150
				}, {
					yAxis: 200
				}, {
					yAxis: 300
				}]
			}
		}
	});
}