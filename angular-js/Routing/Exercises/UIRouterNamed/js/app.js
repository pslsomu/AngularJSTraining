/*

Change your state configuration to have named views for the 
default state
    list
    search
    
 These should display the same containers as before
*/
angular.module("myUIRouter", ["ui.router", "myUIRouter.controllers"])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
         $stateProvider.state( 'search', {
                url         : '/',
                templateUrl : 'pages/search.html',
            } )
            .state( 'search.list', {
                url         : '/list',
                templateUrl : 'pages/list.html',
            } )
            .state( 'search.list.detail', {
                url         : '/details/:id',
                templateUrl : 'pages/detail.html',
                controller: 'DetailController'
            } );

            $urlRouterProvider.otherwise( '/' );
    }]);