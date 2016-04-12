angular.module("myUIRouter", ["ui.router", "myUIRouter.controllers"])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
         $stateProvider.state( 'search', {
                url         : '/',
                templateUrl : 'pages/search.html',
                //controller: 'CustomerDetailCtrl'
            } )
            .state( 'search.list', {
                url         : '/list',
                templateUrl : 'pages/list.html',
                //controller: 'CustomerDetailCtrl'

            } )
            .state( 'search.list.detail', {
                url         : '/details/:id',
                templateUrl : 'pages/detail.html',
                controller: 'DetailController'
            } );

            $urlRouterProvider.otherwise( '/' );
    }]);