/**
 * Created by Administrator on 2016/12/15.
 */
var myapp = angular.module("myapp",["ionic"]);
// 配置路由
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("home",{
        url:"/home",
        templateUrl:"views/home/home.html"
    }) .state("proceeds",{
        url:"/proceeds",
        templateUrl:"views/proceeds/proceeds.html"
        //controller:"proceedsCtrl"
    }).state("code",{
        url:"/code",
        templateUrl:"views/code/code.html",
        //controller:"codeCtrl"
    }).state("invite",{
        url:"/invite",
        templateUrl:"views/invite/invite.html",
        //controller:"inviteCtrl"
    }).state("know",{
        url:"/know",
        templateUrl:"views/know/know.html",
        //controller:"knowCtrl"
    }).state("clear",{
        url:"/clear",
        templateUrl:"views/clear/clear.html",
        //controller:"clearCtrl"
    }).state("progress",{
        url:"/progress",
        templateUrl:"views/progress/progress.html",
        //controller:"progressCtrl"
    }).state("add-att",{
        url:"/add-att",
        templateUrl:"views/add-att/add-att.html",
        controller:"add-attCtrl"
    }).state("my-info",{
        url:"/my-info",
        templateUrl:"views/my-info/my-info.html",
        //controller:"my-infoCtrl"
    });
    // 默认路由
    $urlRouterProvider.otherwise("/home");
});