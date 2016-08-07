$(function () {
    // 购物车鼠标移入和移出效果
	$('.header-right-cart').hover(function(){
    $(this).css('backgroundColor', '#fff');
    $('.header-right-cart span').css('color', '#ff6700');
    $('.cart-content').css({'width': '300px','boxShadow': '0 0 8px #e3e3e3'}).animate({
        height:'100px'
    },300);
},function(){
    $(this).css('background', '#424242');
    $('.header-right-cart span').css('color', '#b0b0b0');
    $('.cart-content').css('width', '300px').animate({
        height:'0px'
    },300);
});

    /*$(function(){
        var flag = false;
        $('.menus').mouseover(function(){
            $('#subnav').css('border', '1px solid #d0d0d0');
            $(this).css('color', '#ff6700');
            $('#'+$(this).attr('subid')).show();
            $('#subnav').height(250);
    });
    $('.menus').mouseout(function(){
        $('#subnav').css('border', '0px solid #d0d0d0');
        $(this).css('color', '#424242');
        if(flag){
          $('#'+$(this).attr('subid')).show();
          $('#subnav').height(250);
        }
    });
    $('#subnav li').mouseover(function(){
        flag = true;
    });
    $('#subnav li').mouseout(function(){
            $(this).hide();
            $(this).height(0);
    })
    })*/

    //导航栏显示效果
    $('.menus').mouseover(function(){
        $('#subnav').css('border', '1px solid #d0d0d0');
        $(this).css('color', '#ff6700');
        $('#'+$(this).attr('subid')).show();
        $('#subnav').height(250);
    });
    $('.menus').mouseout(function(){
        $('#subnav').css('border', '0px solid #d0d0d0');
        $(this).css('color', '#424242');
        $('#'+$(this).attr('subid')).hide();
        $('#subnav').height(0);
    });
    $('#subnav li').mouseover(function(){
        $(this).show();
        $(this).height(250);
    });
    $('#subnav li').mouseout(function(){
        $(this).hide();
        $(this).height(0);
    });




    /* $('.menus').hover(function(){
        $('#subnav').css('border', '1px solid #d0d0d0');
        $(this).css('color', '#ff6700');
        $('#'+$(this).attr('subid')).show();
        $('#subnav').height(250);
    },function(){
        $('#'+$(this).attr('subid')).hide();
        $(this).css('color', '#424242');
        $('#subnav').height(0);
        $('#subnav').css('border', '0px solid #d0d0d0');
    }); */

    //搜索按钮效果
    $('.search-btn').hover(function(){
        $(this).css({'background': '#ff6700', 'color': '#fff'});
    },function(){
        $(this).css({'background': '#fff', 'color': '#424242'});
    });

    //banner显示效果
    $('#banner-menu').children().hover(function(){
        $(this).css('background', '#ff7700');
        $(this).children('.subbanner').css('border', '1px solid #f0f0f0').show();
    },function(){
        $(this).css('background', 'none');
        $(this).children('.subbanner').css('border', '0px solid #f0f0f0').hide();
    });

    //图片自动轮播
    $(function(){
        var i = 0;
        var bannerSubimg = $('#banner-subimg');
        var imgs = $('#banner-subimg li').length;
        function changeImg(){
            var img_i = i*-1226 + 'px';
            bannerSubimg.animate({opacity: '.2'}, 100, function(){
                bannerSubimg.css('left', img_i);
                bannerSubimg.animate({
                    opacity: '1'
                }, 100);
            })
        }
        function auto(){
            i += 1;
            if(i>=imgs){
                i = 0;
            }
            changeImg();
        }
        changeSelfTime = setInterval(auto, 3000);

        //按钮点击切换图片
        $('#banner-img-btn').hover(function(){
            clearInterval(changeSelfTime);
            $('#banner-img-btn').children().show();
        },function(){
            changeSelfTime = setInterval(auto, 3000);
            $('#banner-img-btn').children().hide();
        })
        $('#banner-img-btn1').click(function(){
            i += 1;
            if(i>=imgs){
                i = 0;
            }
            changeImg();
        })
        $('#banner-img-btn2').click(function(){
            i -= 1;
            if(i<=0){
                i = imgs - 1;
            }
            changeImg();
        })
    })
})

