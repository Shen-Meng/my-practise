/* 顶部左侧地址*/
$(function () {
	$('.address').hover(function() {
		$(this).children('.address-all').show();
		$(this).children('.address-visible').css('background', '#fff');
	}, function() {
		$(this).children('.address-all').hide();
		$(this).children('.address-visible').css('background', '#f1f1f1');
	});
})

/* 顶部右侧手机京东*/
$(function () {
	$('.shouji').hover(function() {
		$(this).children('#shouji-items').show();
		$(this).children('a').css('background-position', '0 -27px');
	}, function() {
		$(this).children('#shouji-items').hide();
		$(this).children('a').css('background-position', '0 -2px');
	});
})

/* 顶部右侧服务 */
$(function () {
	$('.service').hover(function() {
		$(this).children('ul').show();
	}, function() {
		$(this).children('ul').hide();
	});
})

/* 搜索框 */
$(function () {
	$('#txt-search').focus(function() {
		if ($('#txt-search').val() == '哎呦不错哦') {
			$(this).val('').css('color', '#333');
		} else {}
	});
	$('#txt-search').blur(function() {
		if ($(this).val() == '哎呦不错哦' || $(this).val() == '' ) {
			$(this).val('哎呦不错哦').css('color', '#999');
		} else {}
	});
})

/* 购物车 */
$(function () {
	$('#cart').mouseenter(function(){
		$(this).children('.cw-icon').addClass('hover1')
		$(this).children('.down').show().addClass('hover2');
	});
	$('#cart').mouseleave(function(){
		$(this).children('.cw-icon').removeClass('hover1')
		$(this).children('.down').hide();
	});
})

/* nav菜单 */
$(function () {
	$('#category').mouseenter(function(){
		$('#cate-box').show();
	});
	$('#category').mouseleave(function(){
		$('#cate-box').hide();
	});
})

/* nav二级菜单(GG...jQuery想不出来了...) */
$(function () {
	var list =$("#cate-box>li");
	for(var i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			this.children[1].style.display="block";
			this.children[0].className="hover";
		}
		list[i].onmouseout=function(){
			this.children[1].style.display="none";
			this.children[0].className="";
		}
	}
})