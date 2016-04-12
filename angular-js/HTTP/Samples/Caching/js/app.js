angular.module("statesApp", ["ngRoute", "statesApp.controllers"])
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "pages/list.html",
                controller: "ListController"
            })
            .when("/details/:id", {
                templateUrl : "pages/detail.html",
                controller: "DetailController"
            })
            .otherwise({
                redirectTo: '/'
            });
            
            //$locationProvider.html5Mode(true)
    }]);