/*  
    Refactor all of the $resource calls to use the newly created factory
    Make sure you add a dependency to your factory
*/
angular.module("productApp.controllers", ["productApp.factories"])
   .controller("AppController", ["$scope", "$location", "productFactory", function ($scope, $location, productFactory) {
       $scope.go = function (path) {
           $location.path(path);
       };
   }])
   .controller("ListController", ["$scope" , "productFactory", function($scope, productFactory) {
       $scope.products = productFactory.query();
       $scope.products.$promise.catch(function (params) {
          console.error("An error occurred querying server"); 
       });
       
       $scope.selectProduct = function (product) {
           $scope.go("/details/" + product.productID);
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", "productFactory", function($scope, $routeParams, productFactory) {
       $scope.isUpdating = false;
       if ($routeParams.id) {
            $scope.product = productFactory.get({id: $routeParams.id}, function (res) {
                $scope.isUpdating = true;
            });
            $scope.product.$promise.catch(function (params) {
                console.error("An error occurred fetching product"); 
            });
       }
       else {
           $scope.product = new productFactory();
       }
       
       $scope.delete = function () {
         $scope.product.$delete(function (params) {
             $scope.go("/");
         }).catch(function (params) {
            console.error("An error occurred deleting a product"); 
        });
       };
      
       $scope.save = function () {
           if ($routeParams.id) {
               $scope.product.$update(function (params) {
                   $scope.go("/");
               }).catch(function (params) {
                  console.error("An error occured updating product"); 
               });
           }
           else {
               $scope.product.$save(function (params) {
                   $scope.go("/");
               }).catch(function (params) {
                  console.error("An error occured saving product"); 
               });
           }
       };
   }]);