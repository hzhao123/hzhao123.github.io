/**
 * Created by Administrator on 2015/12/20.
 */
var jscxma = document.getElementById("jscxma");
var lis = jscxma.children;   // 得到了所有的btn
// alert(lis.length);
for(var i=0; i<lis.length;i++) {   // 遍历按钮
    // 给每个小按钮指定一个 索引号
    lis[i].index = i;
    lis[i].onmousemove = function() {
        // alert(this.index);    索引号 按钮
        //  清除所有人，剩下我自己   li 也是全部都隐藏  剩下 当前li
        for(var j = 0;j < lis.length; j++)
        {
            lis[j].className = "cxm_cloth_a2";
        }
        lis[this.index].className = "currt";   // 留下当前的一个  li  this.index
        }
    //lis[i].onmouseout = function () {
    //    //lis.className = "cxm_cloth_a2";
    //}
    lis[i].onmouseout = function(){
        //for(var k = 0;k < lis.length; k++)
        //{
        //    lis[k].className = "cxm_cloth_a2";
        //}
        this.className = "cxm_cloth_a2";   // 留下当前的一个  li  this.index
    }

}
