/* 
Add a depdency to your module
*/

angular.module("productApp", ["ngRoute", "productApp.controllers"])
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
    }]);