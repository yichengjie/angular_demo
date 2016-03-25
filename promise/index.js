var app = angular.module("app",[]) ;


app.controller('IndexController',['$scope','$log','$q',function($scope,$log,$q){

    $log.info('hello world') ;
    $scope.name = "" ;

    function okToGreet(name){
        return name === 'Robin Hood';
    }

    function asyncGreet(name) {
        var deferred = $q.defer();
        setTimeout(function() {
            // ��Ϊ����첽����fn��δ�����첽ִ�У����ǰѴ����װ�� $apply �����У�һ����ȷ�Ĺ۲쵽 model �ĸı�
           $scope.$apply(function() {
                deferred.notify('About to greet ' + name + '.');
                if (okToGreet(name)) {
                    deferred.resolve('Hello, ' + name + '!');
                } else {
                    deferred.reject('Greeting ' + name + ' is not allowed.');
                }
            });
        }, 1000);
        return deferred.promise;
    }



    $scope.test = function () {
        var promise = asyncGreet('Robin Hood2');
        promise.then(function(greeting) {
            //alert();
            console.info('Success: ' + greeting) ;
            $scope.name = 'Success: ' + greeting ;
        }, function(reason) {
            console.info('Failed: ' + reason) ;
            $scope.name = 'Failed: ' + reason ;
           // alert();
        }, function(update) {
            $scope.name = 'Got notification: ' + update ;
            console.info('Got notification: ' + update) ;
           // alert();
        });
    }

}]) ;

