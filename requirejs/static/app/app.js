//������������Ƕ�������еĿ����������񣬹�������ָ��
define(['angular','uiRouter','./services/index','./controllers/index'],function(angular){
    'use strice' ;
    var myApp = angular.module('myApp',['services','controllers','ui.router']) ;
    return myApp ;
})