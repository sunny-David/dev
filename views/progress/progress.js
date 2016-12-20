/**
 * Created by Administrator on 2016/12/19.
 */
/*
$(document).ready(function() {
    var h = $(".about4_main ul li:first-child").height()/2;<!--第一个li高度的一半-->
    var h1 = $(".about4_main ul li:last-child").height()/2;<!--最后一个li高度的一半-->
    $(".line").css("top",h);
    $(".line").height($(".about4_main").height()-h1-h);
});
*/
$(function(){
    var h = $(".about4_main ul li:first-child").height()/2;<!--第一个li高度的一半-->
    var h1 = $(".about4_main ul li:last-child").height()/2;<!--最后一个li高度的一半-->
    $(".line").css("top",h);
    $(".line").height($(".about4_main").height()-h1-h);
});

