/**
 * Created by Administrator on 2016/12/15.
 */
var my_module=angular.module('myApp',["ionic"]);
//step 2:在主模块中，要创建对应的控制器（可以有多个）
//       $scope对象是angular框架所创建，然后传进来使用的。-“依赖注入”
my_module.controller('myctr',function($scope){
    $scope.selectedProvince="";
    $scope.City="";
    $scope.data=[
        {province:"河南省",cities:["郑州市","洛阳市","开封市"]},
        {province:"河北省",cities:["石家庄市","邢台市","唐山市"]},
        {province:"四川省",cities:["成都市","绵阳市","乐山市"]}
    ];
});
