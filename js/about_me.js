$(function () {
	$('body').backstretch([
 		"images/about_me/1.jpg",
 		"images/about_me/2.jpg",
		"images/about_me/3.jpg",
		"images/about_me/4.jpg",
		"images/about_me/5.jpg",
		"images/about_me/6.jpg",
		"images/about_me/7.jpg"
 			], 	{duration: 1500, fade: 1500});
})

$(function () {
	$("h1.tm-title").mouseover(function() {
		$(this).text('进入我的项目主页');
		$(this).css({
			textDecoration: 'underline',
			cursor: 'pointer'
		});
	}).mouseout(function() {
		$(this).text('Hello, 我是沈檬');
		$(this).css({
			textDecoration: 'none'
		});
	}).click(function() {
		window.location.href="index.html";
	});
})