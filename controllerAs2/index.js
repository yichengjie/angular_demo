var app = angular.module("app",[]) ;







app.factory('FormData', function() {
    var contextPath = "oc" ;
    var carrCode = "HW" ;
    var action = "add";
    console.log("[contextPath : "+contextPath+"],[carrCode : "+carrCode+"],[action:"+action+"]") ;
    return {
        contextPath:contextPath,
        carrCode:carrCode,
        serviceAndSubCode:'',
        serviceType:"F",//s7�а�����Ϣ//Ĭ��ֵΪ'F'//����ѡ���s5������'F'/'M'
        action:action,
        sel1:{"showStr":"","value":""},
        sel2:{"showStr":"","value":""},
        sel3:{"showStr":"","value":""},
        firstMaintenanceDate:'2015-08-21',//-----------ҳ��ڶ����ֿ�ʼ--------------//
        lastMaintenanceDate:'2015-08-21',
        description:'',//����
        fareBasis:'',//�˼ۻ���
        noChargeNotAvailable:"",//'E'��ʱ��'���'//s7�а�����Ϣ
        list170VO:[//����//��Ӧ������շ�
            {"saleGeographicPointType":"A","saleGeographicPoint":"1","specFeeAmount":"11","specFeeCurrency":"CNY","selected":false},
            {"saleGeographicPointType":"N","saleGeographicPoint":"YY","specFeeAmount":"22","specFeeCurrency":"CNY","selected":true}
        ],//-------------ҳ��ڶ����ֽ���---------------------------//
        sequenceNumber:'',//���ȼ����//--------------------ҳ��������ֿ�ʼ---------------------------//
        passengerTypeCode:'',//�ÿ�����
        frequentFlyerStatus:'',//���ÿ�״̬
        cabin:'',//����ȼ�
        rbdTableNo198:'',//��ʱûɶ��,��̨Ҳ��ʹ������ֶ�
        list198VO:[//�������Ա�
            //{"mktOp":"O","cxr":"A","rbd1":"001","rbd2":"002","rbd3":"003","rbd4":"004","rbd5":"005","selected":false},
            //{"mktOp":"E","cxr":"A","rbd1":"001","rbd2":"002","rbd3":"003","rbd4":"004","rbd5":"005","selected":true}
        ],
        upgradeToRbdTableNo198:'',//��ʱûɶ�ã���̨Ҳ���Ǹ��ֶ�
        list198UpgradeVO:[//��λ���Ա������������Ա�
            {"cxr":"A","rbd1":"w","rbd2":"w","rbd3":"w","rbd4":"w","rbd5":"w","selected":true}
        ],
        securityTableNo183:'',//������ȫ��//��ʱûɶ�ã���̨Ҳ���Ǹ��ֶ�
        list183VO:[//��ȫ������
            {"geographicSpecificationType":"S","geographicSpecification":"CC","codeType":"","code":"","selected":true}
        ],
        carrierFlightTableNo186:'',//������Ϣ��//��ʱûɶ�ã���̨Ҳ���Ǹ��ֶ�
        list186VO:[
            {"mktCarrier":"�г���","optCarrier":"���˷�","fltNo1":"001","fltNo2":"002","selected":true}
        ],
        equipment:'',//����
        startTime:'',//��ʼʱ��
        stopTime:'',//����ʱ��
        list178Loc1Id:'',//����1���id
        list178Loc1:[//����1��Ӧ�ı��
            {"geoLocType":"N","geoLocSpec":"CC","appl":"N","selected":true}
        ],
        list178Loc2Id:'',//����2���id
        list178Loc2:[//����2��Ӧ�ı��

        ],
        list178Loc3Id:'',//����3���id
        list178Loc3:[//����2��Ӧ�ı��

        ],
        geoSpecFromToWithin:'',//��������
        geoSpecSectPortJourney:'P',//��������//Ŀǰ���ص��Ƕ������ַ�����P��
        geoSpecLoc1Type:'',//����1����
        geoSpecLoc1:'',//����1����
        geoSpecLoc2Type:'',//����2����
        geoSpecLoc2:'',//����2����
        geoSpecLoc3Type:'',//����3����
        geoSpecLoc3:''//����3����
    }
});

app.controller('IndexController',function($scope,FormData){

     $scope.data =  {
         name:'yicj',
     } ;
    $scope.flag1 = true ;
    $scope.flag2 = true ;
    var cc = {} ;
    angular.extend(cc,FormData) ;
    cc.contextPath = 'hello world' ;

    cc.ttt = 'xxx' ;

    //console.info('cc contextPath : ' + cc.contextPath) ;
    //console.info('FormData contextPath : ' + FormData.contextPath) ;
    //console.info(cc.list170VO) ;
    //delete cc.list170VO ;
    //console.info(cc.list170VO) ;
    //console.info(FormData) ;

    for(var p in cc){
        //console.info(p  + ' --- ' + FormData[p]) ;
        var flag =  FormData.hasOwnProperty(p);
        if(flag){
            cc[p]  = FormData[p] ;
        }
    }

    console.info(cc) ;




});

app.directive('hello', function(){
    return {
        restrict: 'AE',
        replace: 'true',
        scope:{
            geoType:'='
        },
        controller:function($scope){
            $scope.myName = "hello hello " ;
        },
        controllerAs:'helloCtrl',
        template:'<div><h1>hello world <br/></h1><span ng-transclude=""></span></div>',
        transclude:true,
        link: function(scope, elem, attrs,helloCtrl) {
            elem.bind('click',function(){
                console.info(scope.geoType) ;
            }) ;

        }
    };
});



