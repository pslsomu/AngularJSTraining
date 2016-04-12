/*

In the AppController
    We want to manufacture a $resource that points to http://localhost:9081/Products/ and takes 
    an ID that is mapped to the property of _id
    
    We will need to add a custom method for update because the server doesn't adhere to the standard
    RESTful implementation
    
In the ListController
    We want to get all of the products from the server and display them on a page
    the get all should have it's result $scope.products
    
In the DetailController
    We want to be able to save and delete new products into the system. When the transaction has successfully
    transmitted to the server we want to return to the list page.
    
    If it fails you should output the failure to the console
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
               $scope.product.$save(function (params) {
                   $scope.go("/");
               }).catch(function (params) {
                  console.error("An error occured saving product"); 
               });
           }
       };
   }]);