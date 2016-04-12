/*
Setup your controller to invoke a http request to http://localhost:9081/Products

It should set the successful result to a variable called products 
*/
angular.module("myHttp", [])
    .controller("MainController", ["$scope", "$http", function ($scope, $http) {
        var promise = $http({
            method: "GET",
            url:"http://localhost:9081/Products"
        });
        
        promise.then(function (result) {
            $scope.products = result.data;
        }).catch(function (result) {
            console.log("An error has occurred");
        });  
    }]);