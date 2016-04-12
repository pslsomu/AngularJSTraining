angular.module("myNgRouter", ["ngRoute", "myNgRouter.controllers"])
    .config(["$routeProvider", function($routeProvider) {
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
    }]);