var app = angular.module("app",['ui.router']) ;

app.controller('IndexController',function($scope){

    $scope.sayHello = function(){
        console.info('hello world') ;
    }


}) ;
/**
 * @���ſ���ֱ�ӽ�����ĺ������ݸ�ָ��,
 * ����������scope�ķ������ݸ�ָ������ͨ��&���Ŵ��ݣ�'='�޷����ݷ���
 */
app.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<button class="btn btn-primary">Click me to go to Google</button>',
        replace:true,
        scope:{
            sayHello:'&'
        },
        link: function (scope, element,attrs) {
            element.bind('click', function () {
                scope.sayHello();
            }) ;
        }

    };
}) ;

