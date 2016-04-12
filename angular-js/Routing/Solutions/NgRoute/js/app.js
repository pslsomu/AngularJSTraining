/*
Setup the appropriate application routing

/ should go to the HomeController
/team/ should go to the DetailController and accept an ID parameter

*/

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