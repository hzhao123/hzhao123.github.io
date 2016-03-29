/**
 * Created by wq on 2015/12/19.
 */
$(document).ready(function(){

    var wq = 0;
    var timer = null;
    var middleW = $(".girls-wq-middle-pics ul li").width();
    $(".girls-wq-middle").hover(function(){
        $(".wq-middle-icons-prev, .wq-middle-icons-next").css("display","inline-block");
    },function(){
        $(".wq-middle-icons-prev, .wq-middle-icons-next").css("display","none");
    });
    /*小点控制模块*/
    $(".girls-wq-middle-icons ol li").mouseenter(function(){
        var $index = $(this).index();

        $(".girls-wq-middle-pics ul").css({"left":$index*-570,"opacity":0.5});
        $(".girls-wq-middle-pics ul").stop().animate({opacity:1},500)
        $(".girls-wq-middle-icons ol li").eq($index).addClass("girls-wq-middle-alter").siblings().removeClass();
        wq = $index;

    });

    $(".wq-middle-icons-prev").click(function() {
        wq--;
        var icons = $(".girls-wq-middle-pics ul li").length-1;
        if(wq < 0) {
            wq = icons;
        }
        $(".girls-wq-middle-pics ul").css({"left":wq*-570,"opacity":0.5});
        $(".girls-wq-middle-pics ul").stop().animate({opacity:1},500);
        $(".girls-wq-middle-icons ol li").eq(wq).addClass("girls-wq-middle-alter").siblings().removeClass();
    });

    $(".wq-middle-icons-next").click(function() {
        wq++;
        var icons = $(".girls-wq-middle-pics ul li").length-1;
        if(wq > icons) {
            wq = 0;
        }
        $(".girls-wq-middle-pics ul").css({"left":wq*-570,"opacity":0.5});
        $(".girls-wq-middle-pics ul").stop().animate({opacity:1},500);
        $(".girls-wq-middle-icons ol li").eq(wq).addClass("girls-wq-middle-alter").siblings().removeClass();
    });

    timer = setInterval(wqautoplay,2000);
    function wqautoplay(){
        wq++;
        var icons = $(".girls-wq-middle-pics ul li").length-1;
        if(wq > icons) {
            wq = 0;
        }
        $(".girls-wq-middle-pics ul").css({"left":wq*-570,"opacity":0.5});
        $(".girls-wq-middle-pics ul").stop().animate({opacity:1},500);
        $(".girls-wq-middle-icons ol li").eq(wq).addClass("girls-wq-middle-alter").siblings().removeClass();
    }

    $(".girls-wq-middle-pics").hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer = setInterval(wqautoplay,2000);
    })
})