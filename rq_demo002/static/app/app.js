//������������Ƕ�������еĿ����������񣬹�������ָ��
define('app/app',['angular','app/services/index','app/controllers/index'],function(angular){
    'use strice' ;
    var myApp = angular.module('myApp',['services','controllers']) ;
    return myApp ;
})