// ����ģ�鶼ͨ�� define ������
define(function(require, exports, module) {

    var app = angular.module("app",[]) ;

    app.controller('IndexCtrl',function($scope){
        $scope.userList = [
            {"name":"yicj1"},
            {"name":"yicj2"},
            {"name":"yicj3"}
        ] ;
        $scope.addLine = function(){
            var obj = {"name":""} ;
            $scope.userList.push(obj);
        }
    }) ;

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
        // ֱ�ӵ���
        initValidFunc() ;
    });

    function initValidFunc (){
        $('#form_id').validationEngine();
    }

});