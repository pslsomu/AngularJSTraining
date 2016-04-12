/*
Configure a cache factory in the AppController

In your ListController make a call to download all of the products. This call should be cached by default
Add a click handler that enables you to clear all of the items from the custom cache
Add a click handler to handle selecting a product so that it moves to the detail page

 Get All Products: http://localhost:9081/Products

In your Detail Controller make a call to fetch a product by a given ID. This call should use the
cache factory created in the app controller

Get Product By ID: http://localhost:9081/Products/:id where :id comes from productID
*/
angular.module("productApp.controllers", [])
   .controller("AppController", ["$scope", "$location", "$cacheFactory", function ($scope, $location, $cacheFactory) {
       $scope.go = function (path) {
           $location.path(path);
       };
       $scope.productCache = $cacheFactory.get("productCache");
       if (!$scope.productCache)
            $scope.productCache = $cacheFactory( "productCache" );
   }])
   .controller("ListController", ["$scope" , "$http", function($scope, $http) {
       $http( {
           url:"http://localhost:9081/Products",
           method:"GET",
           cache: true
       }).then(function (result) {
          $scope.products = result.data;
       }).catch(function (err) {
           console.error("An error occured fetching products", err);
       });

       $scope.selectProduct = function (product) {
           $scope.go("/details/" + product.productID);
       };

       $scope.clearCache = function () {
           $scope.productCache.removeAll();
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", "$http", function($scope, $routeParams, $http) {
       $http( {
           url:"http://localhost:9081/Products/" + $routeParams.id ,
           method:"GET",
           cache: $scope.productCache
       }).then(function (result) {
          $scope.product = result.data;
       }).catch(function (err) {
           console.error("An error occured fetching states", err);
       });
   }]);
