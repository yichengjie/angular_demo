//������������Ƕ�������еĿ����������񣬹�������ָ��
define('app/app',['angular','uiRouter','app/services/index','app/controllers/index'],function(angular){
    'use strice' ;
    var myApp = angular.module('myApp',['services','controllers','ui.router']) ;
    return myApp ;
})