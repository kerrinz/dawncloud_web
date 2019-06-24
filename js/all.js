jQuery(document).ready(function ($) {
    //开场执行一次
    checkNavStatus();
    //监听滚动距离
    window.addEventListener("scroll", function(event) {
        checkNavStatus();
    });
    //根据当前所处的页面高度检查状态栏
    function checkNavStatus() {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var h_banner = $("#banner").height() - $("#nav").height();
        if(scrollTop > h_banner){
            swichToDark()
        }else {
            swichToLight()
        }
        if (scrollTop > 10) {
            $(".barside .top").show();
        }else {
            $(".barside .top").hide();
        }
    }
    //切换状态栏背景为亮色
    function swichToLight() {
        $("#nav").css("background","transparent");
        $(".navbar-brand img").attr("src","images/nav_logo_white.svg");
        $("#nav nav").addClass("navbar-dark");
        $("#nav nav").removeClass("navbar-light");
    }
    //切换状态栏背景为暗色(透明)
    function swichToDark() {
        $("#nav").css("background","#f0f3f9");
        $(".navbar-brand img").attr("src","images/nav_logo_black.svg");
        $("#nav nav").removeClass("navbar-dark");
        $("#nav nav").addClass("navbar-light");
    }
});
//滚动到顶部
function scrollToTop() {
    $('html,body').animate({scrollTop:0},1000);
}