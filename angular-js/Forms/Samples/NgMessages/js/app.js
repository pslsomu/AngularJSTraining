angular.module("statesApp", ["ngRoute", "ngMessages", "statesApp.controllers", "angularJsClass.directives"])
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "pages/list.html",
                controller: "ListController"
            })
            .when("/details/:id?", {
                templateUrl : "pages/detail.html",
                controller: "DetailController"
            })
            .otherwise({
                redirectTo: '/'
            });
            
            //$locationProvider.html5Mode(true)
    }]);