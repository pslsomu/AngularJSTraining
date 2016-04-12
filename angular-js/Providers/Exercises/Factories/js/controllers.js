/*  
    Refactor all of the $resource calls to use the newly created factory
    Make sure you add a dependency to your factory
*/
angular.module("productApp.controllers", ["ngResource"])
   .controller("AppController", ["$scope", "$location", "$resource", function ($scope, $location, $resource) {
       $scope.go = function (path) {
           $location.path(path);
       };
          
       $scope.resourceFactory = $resource("http://localhost:9081/Products/:id", { id: '@_id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
                }
       });
   }])
   .controller("ListController", ["$scope" , function($scope) {
       $scope.products = $scope.resourceFactory.query();
       $scope.products.$promise.catch(function (params) {
          console.error("An error occurred querying server"); 
       });
       
       $scope.selectProduct = function (product) {
           $scope.go("/details/" + product.productID);
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", function($scope, $routeParams) {
       $scope.isUpdating = false;
       if ($routeParams.id) {
            $scope.product = $scope.resourceFactory.get({id: $routeParams.id}, function (res) {
                $scope.isUpdating = true;
            });
            $scope.product.$promise.catch(function (params) {
                console.error("An error occurred fetching product"); 
            });
       }
       else {
           $scope.product = new $scope.resourceFactory();
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
               $scope.product._id = $scope.product.productID;
               $scope.product.$save(function (params) {
                   $scope.go("/");
               }).catch(function (params) {
                  console.error("An error occured saving product"); 
               });
           }
       };
   }]);