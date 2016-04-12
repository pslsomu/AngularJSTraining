/*  
    Refactor all of the factory calls for service calls
*/
angular.module("productApp.controllers", ["productApp.services"])
   .controller("AppController", ["$scope", "$location", "productService", function ($scope, $location, productService) {
       $scope.go = function (path) {
           $location.path(path);
       };
   }])
   .controller("ListController", ["$scope" , "productService", function($scope, productService) {
       $scope.products = productService.all();
       $scope.products.$promise.catch(function (params) {
          console.error("An error occurred querying server"); 
       });
       
       $scope.selectProduct = function (product) {
           $scope.go("/details/" + product.productID);
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", "productService", function($scope, $routeParams, productService) {
       $scope.isUpdating = false;
       if ($routeParams.id) {
            $scope.product = productService.getById($routeParams.id);
            $scope.product.$promise.then(function (res) {
                $scope.isUpdating = true;
            }).catch(function (params) {
                console.error("An error occurred fetching product"); 
            });
       }
       else {
           $scope.product = productService.build();
       }
       
       $scope.delete = function () {
           productService.delete($scope.product).then(function (res) {
               $scope.go("/");
           }).catch(function (params) {
                console.error("An error occurred deleting a product"); 
            });
       };
      
       $scope.save = function () {
           $scope.product = productService.save($scope.product);
           $scope.product.$promise.then(function (result) {
                $scope.go("/");
            }).catch(function (params) {
                console.error("An error occurred saving product"); 
            });
       };
   }]);