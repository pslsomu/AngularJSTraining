/*

Setup our route configuration

Should look to have 3 states, 
    Search
    List
    Details
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