//������������Ƕ�������еĿ����������񣬹�������ָ��
define('app/app',['angular','app/controllers/index','app/services/index'],function(angular){
    'use strice' ;
    var myApp = angular.module('myApp',['controllers','services']) ;
    console.log("app page init....................") ;
    console.log(myApp) ;
    console.log("app page init....................") ;
    return myApp ;;
})