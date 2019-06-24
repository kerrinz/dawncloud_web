$(document).ready(function(){

	//置顶导航
        var wh=$(window).height();
        $(window).scroll(function(){
            var s=$(window).scrollTop();
            if(s>0){
            $("#header").addClass("header_lucency");
            $(".tm_bg").show();
            }
            else{
            $("#header").removeClass("header_lucency");
            $(".tm_bg").hide();
            }
        });
	
	//回到顶部
	var wh=$(window).height();
	$(window).scroll(function(){
	var s=$(window).scrollTop();
		if(s>0){
		$("#top").css("display","block");
		}
		else{
		$("#top").css("display","none");
		}
	});
	 //当点击跳转链接后，回到页面顶部位置
	$("#top").click(function() {
	    $('body,html').animate({scrollTop: 0},500);
	    return false;
	});

	//文档手册
	str = $(".documentlist .caption p").text().substr(0,54) + " ...";
	$(".documentlist .caption p").text(str);

	//公司新闻正文超出隐藏
	str = $(".c_news .n_text p").text().substr(0,58) + " ...";
	$(".c_news .n_text p").text(str);


	$(".barside .bds_wx").mouseenter(function(){
		$(this).find(".bds_popup").show();
	})
	$(".barside .bds_wx").mouseleave(function(){
		$(this).find(".bds_popup").hide();
	})
});

