angular.module("myNgRouter", ["ngRoute", "myNgRouter.controllers"])
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "pages/home.html",
                controller: "HomeController"
            })
            .when("/team/:id", {
                templateUrl : "pages/detail.html",
                controller: "DetailController"
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);