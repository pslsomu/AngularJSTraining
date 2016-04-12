angular.module("myNgRouter", ["ngRoute", "myNgRouter.controllers"])
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "pages/home.html",
                controller: "HomeController"
            })
            .when("/person/:pid", {
                templateUrl : "pages/detail.html",
                controller: "DetailController"
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true)
    }]);
