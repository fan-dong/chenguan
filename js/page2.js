$(function() {

	/*选择区域浮层*/
	$('.p2_quyu').click(function() {
		$('.p2_dai').show();
	})

	/*关闭区域浮层*/
	$('.p2_close').click(function() {
		$('.p2_dai').hide();
	})

	layui.use('form', function() {
		var form = layui.form;
	});

	layui.use('laydate', function() {
		var laydate = layui.laydate;
		//常规用法
		laydate.render({
			elem: '#p2_test1',
		});

		laydate.render({
			elem: '#p2_test2',
		});
	})
	
	
	
	//统计图tab切换
	/*上边统计图*/
	$('.ddfb span').click(function(){
		$(this).addClass('span_cur').siblings().removeClass('span_cur');
	})
	$('.ddfb_span1').click(function(){
		page2_bar_top1();
	});
	$('.ddfb_span2').click(function(){
		page2_bar_top2();
	});
	
	/*下边统计图*/
	$('.sjfb span').click(function(){
		$(this).addClass('span_cur').siblings().removeClass('span_cur');
	});
	$('.sjfb_span1').click(function(){
		page2_bar_bottom1();
	});
	$('.sjfb_span2').click(function(){
		page2_bar_bottom2();
	});
	$('.sjfb_span3').click(function(){
		page2_bar_bottom3();
	});
})	