var app = angular.module("app",[]) ;

app.controller('IndexController',function($scope){

    $scope.sayHello = function(){

        console
    }

});

app.directive('hello', function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope:true,
        controller:function($scope){
            //ע������һ��Ҫд��this.sayHello()��
            //���д��$scope.sayHello()���ȵ�ָ�����޷���ȡ��
            this.sayHello = function(){
                console.info('hello world....') ;
            }
            $scope.sayHello2 = function(){
                console.info('hello world 2 ....') ;
            }
        },
        controllerAs:'helloCtrl',
        template:'<div><h1>hello world <br/><mybtn></mybtn></h1></div>',
        link: function(scope, elem, attrs,helloCtrl) {
            console.info(helloCtrl) ;
            helloCtrl.sayHello() ;
            //�������Բ��ܵ��õģ���ֱ�ӱ���,
            //helloCtrl.sayHello2() ;
        }
    };
});



app.directive('mybtn', function(){
    return {
        restrict: 'AE',
        replace: true,
        require:'^hello',
        controller:function($scope,helloCtrl){
            console.info('***********************') ;
            console.info(helloCtrl) ;
            console.info('***********************') ;
        },
        scope:true,
        template:'<button class="btn btn-default">click test</button>',
        link: function(scope, elem, attrs,ctrl) {
            scope.$apply(function(){

            }) ;

            elem.bind('click', function () {
                ctrl.sayHello() ;
            }) ;
        }
    };
});


