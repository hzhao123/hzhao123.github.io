/**
 * Created by 9470 on 2015/12/19.
 */
    $(document).ready(function () {
        /*首页轮播图*/
        var Bgo = 0;
        var timer = null;
        var bannrW = $(".cyf_banner_top ul li img").width();
        var bannrMw = $(".cyf_banner_top ul li").length-1;
        $(".cyf_banner_bottom ol li").mouseenter(function () {
            var $index = $(this).index();
            $(this).addClass("cyf_banner_bottom_alter").siblings().removeClass();
            $(".cyf_banner_top ul").stop().animate({left: $index * -1150},300);
            Bgo = $index;
        });

        //左边箭头
        $(".cyf_banner_top .cyf_banner_left").click(function(){
            Bgo--;
            if(Bgo < 0){
                Bgo = bannrMw;
            }
            $(".cyf_banner_bottom ol li").eq(Bgo).addClass("cyf_banner_bottom_alter").siblings().removeClass();
            $(".cyf_banner_top ul").stop().animate({left: Bgo * -1150},300);
        });

        //右边箭头
        $(".cyf_banner_top .cyf_banner_right").click(function(){

            Bgo++;
            if(Bgo > bannrMw){
                Bgo = 0;
            }
            $(".cyf_banner_bottom ol li").eq(Bgo).addClass("cyf_banner_bottom_alter").siblings().removeClass();
            $(".cyf_banner_top ul").stop().animate({left: Bgo * -1150},300);
        });

        //自动播放和定时器
        timer = setInterval(autoplay,2000);
        function autoplay(){
            Bgo++;
            if(Bgo > bannrMw){
                Bgo = 0;
            }
            $(".cyf_banner_bottom ol li").eq(Bgo).addClass("cyf_banner_bottom_alter").siblings().removeClass();
            $(".cyf_banner_top ul").stop().animate({left: Bgo * -1150},300);
        }

        //鼠标移上停止定时器模块
        $(".cyf_banner_top").hover(function(){
            clearInterval(timer);
        },function(){
            clearInterval(timer);
            timer = setInterval(autoplay,2000);
        })

        /*首页展柜图*/
        //上边箭头
        var Sgo = 0;
        var showcaseH = $(".cyf_showcase_roll ul").height();
        var showcaseMw = $(".cyf_showcase_roll ul").length-1;
        $(".cyf_showcase_right_one").click(function(){
            Sgo--;
            if(Sgo < 0) {
                Sgo = showcaseMw;
                $(".cyf_showcase_roll").css({"bottom":"0px","top":"auto"});
                return
            }
            $(".cyf_showcase_roll").show().animate({top:Sgo*-180},500);
        })
        $(".cyf_showcase_right_two").click(function(){
            Sgo++;
            if(Sgo > showcaseMw) {
                Sgo = 0;
                $(".cyf_showcase_roll").css("top","0px");
                return
            }
            $(".cyf_showcase_roll").show().animate({top:Sgo*-180},500);
        })
    })
