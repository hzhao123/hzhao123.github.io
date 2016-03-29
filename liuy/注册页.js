/**
 * Created by Andy on 15/12/20.
 */
$(function(){
    //获得焦点清除input框内文字
    $(".regist_input").on("focus",function(){
        if($(this).hasClass("regist_test")) {
            $(this).val("");
            $(this).next().next().removeClass();
        }else if($(this).hasClass("regist_pswin")) {
            $(this).val("");
            $(this).next().next().removeClass();
            $(".regist_danger1").removeClass("regist_danger1");
            $(".regist_danger2").removeClass("regist_danger2");
            $(".regist_danger3").removeClass("regist_danger3");
        } else {
            $(this).val("");
            $(this).next().removeClass();
        }
    })
    $(".tel_num").on("blur",function(){
        if(/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/.test($(this).val())){
            $(this).next().addClass("regist_right1");
        } else {
            if($(this).val()!=""){
                $(this).next().addClass("regist_wrong1");
            }
        }
    })
    $(".regist_test").on("blur",function(){
        if($(this).val() == "r8s7"){
            $(this).next().next().addClass("regist_right2");
        } else if($(this).val() == "R8S7"){
            $(this).next().next().addClass("regist_right2");
        }
        else {
            if($(this).val()!=""){
                $(this).next().next().addClass("regist_wrong2");
            }
        }
    })
    $(".regist_pswin").on("blur",function(){
        if(/^[a-zA-Z0-9_-]{6,18}/.test($(this).val())) {
            $(this).next().next().addClass("regist_right3");
            $(".regist_low").addClass("regist_danger1")
            if(/^([a-z].*[0-9])|([A-Z].*[0-9])|[0-9].*[a-zA-Z]$/.test($(this).val())) {
                //  既有大写也有小写
                $(".regist_mid").addClass("regist_danger2");
                $(".regist_danger1").removeClass("regist_danger1");
            }
            if(/^[A-Za-z0-9]+[_][A-Za-z0-9]*$/.test($(this).val())) {
                //  既有大写也有小写
                $(".regist_hei").addClass("regist_danger3");
                $(".regist_danger1").removeClass("regist_danger1");
                $(".regist_danger2").removeClass("regist_danger2");
            }
        } else {
            if($(this).val()!=""){
                $(this).next().next().addClass("regist_wrong3");
            }
        }
    })
    $(".regist_country").on("change",function(){
        $(".tel_area").val(textArr[this.value]);
    })
    var textArr = ["+86","+002","+1","+18","+42"];
})