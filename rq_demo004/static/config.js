requirejs.config({
    baseUrl: 'static/app',
    paths: {
        "jquery":"../requirejs-modules/jquery-1.9.1.min",
        "$":"../requirejs-modules/jquery-1.9.1.min",
        "domReady":"../requirejs-modules/domready",
        "angular":"../requirejs-modules/angular/angular",
        "uiRouter": "../requirejs-modules/angular/angular-ui-router"
    },
    //�����������������������ʱ��İ���
    shim:{
        "angular":{
            exports:"angular"
        },
        "uiRouter":{
            deps:['angular']
        }
    }
});
require(['angular','bootstrap'], function (angular) { //��ʼ��ҳ��
    console.log("config init page...........") ;
}) ;


