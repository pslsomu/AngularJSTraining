angular.module("myHttp", [])
    .controller("MainController", ["$scope", "$http", function ($scope, $http) {
        var promise = $http({
            method: "GET",
            url:"http://localhost:9081/States"
        });
        
        promise.then(function (result) {
            $scope.states = result.data;
        }).catch(function (result) {
            console.log("An error has occurred");
        });  
    }]);