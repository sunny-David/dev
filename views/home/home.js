/**
 * Created by Administrator on 2016/12/16.
 */
$(function(){
    var icon=["jiaoyi.png","erweima.png","yaoqing.png","liaojie.png","qingsuan.png","jindu.png","tianjia.png","geren.png"]
    $(".pic-icon").each(function(index){
        $(this).css("background-image","url(images/"+icon[index]+")")
    });
});