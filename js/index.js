$(function () {
	$('.hide-btn').hover(function(){
    $(this).css({'backgroundColor':'rgba(255,255,255,0.3)'});
},function(){
    $(this).css({'backgroundColor':'transparent'});
});
})

$(function () {
	$('.hide-btn').click(function(){
		$('.show').toggle('slow');
	if($('.hide-btn').text() === 'HIDE PORTFOLIO') {
		$(this).text('SHOW PORTFOLIO')
	} else {
		$(this).text('HIDE PORTFOLIO')
	}
	});
})

$(function () {
	$('.show>ul li').mouseenter(function() {
		$(this).children('a').slideDown(200);
	}).mouseleave(function() {
		$(this).children('a').slideUp(200);
	});
})
