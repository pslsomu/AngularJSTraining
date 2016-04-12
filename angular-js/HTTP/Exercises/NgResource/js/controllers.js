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
   .controller("AppController", ["$scope", "$location", function ($scope, $location) {
       $scope.go = function (path) {
           $location.path(path);
       };
   }])
   .controller("ListController", ["$scope" , function($scope) {
       $scope.selectProduct = function (product) {
           $scope.go("/details/" + product.productID);
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", function($scope, $routeParams) {
       
   }]);