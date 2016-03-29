/**
 * Created by gl on 2015/12/20.
 */

window.onload = function () {

    // 中间 轮播图部分 start
    var tb_mid_bottom = document.getElementById("tb_mid_bottom");
    var spans = tb_mid_bottom.children;
    var ul = document.getElementById("tb_mid_ul");
    var lis = ul.children;
    for(var i = 0; i<lis.length;i++) {
        spans[i].index = i;
        spans[i].onclick = function () {
            ul.style.top = this.index*-207 + "px";
            for(var j = 0; j<lis.length;j++) {
                spans[j].innerHTML = "○";
            }
            this.innerHTML = "●";
        }
    }
    // 中间 轮播图部分 end


    // tb_bottom 订阅我的邮件  部分 start
    var tb_mail_text = document.getElementById("tb_mail_text");
    tb_mail_text.onfocus = function () {
        tb_mail_text.value = "";
    }
    tb_mail_text.onblur = function () {
        if(this.value === ""){
            tb_mail_text.value = "订阅我们的邮件";
        }
    }
    // tb_bottom 订阅我的邮件  部分 end

    // tb_返回顶部  start
    $("tb_arrow").onmouseover = function () {
        this.style.opacity = 0.8;
    }
    $("tb_arrow").onmouseout = function () {
        this.style.opacity = 0.5;
    }
    var timer = null,leader = 0,target = 0;
    window.onscroll = function() {
        scroll().top > 400 ? show("tb_arrow") : hide("tb_arrow");
        leader = scroll().top;
    }
    $("tb_arrow").onclick = function() {
        clearInterval(timer);
        timer = setInterval(function() {
            var step = (target - leader) / 2;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            if(leader == target) {
                clearInterval(timer);
            }
        },30)
    }
    // tb_返回顶部  end



    // 封装的scrollTop() 函数
    function $(id) { return document.getElementById(id);}
    function show(id) { $(id).style.display = "block";}
    function hide(id) { $(id).style.display = "none";}
    function scroll() {  // 开始封装自己的scrollTop
        if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
            // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return {   // 未声明 DTD
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
};

