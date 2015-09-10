var app = angular.module("app",['ui.router']) ;

app.controller("IndexController",function($scope){

    $scope.userList = [{"name":"yicj1"},{"name":"yicj2"},{"name":"yicj3"}] ;

}) ;


app.directive('hello', function(){//ng-click���õĺ����ڲ������ֶ�����$('#id').trigger('click') ;//�������ｫɾ������Ϊһ��ָ��
    return {
        restrict: 'AE',
        replace: true,
        scope:{
            list:'='
        },
        controller:function($scope){
            console.info($scope.list) ;
        },
        template: '<ul><li ng-repeat="l in list">{{l.name}}</li></ul>',
        link: function(scope, elem, attrs) {

        }
    };
}) ;