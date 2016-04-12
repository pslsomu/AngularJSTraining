var app = angular.module("scopeApp", []);

app.controller("ParentController", ["$scope", function ($scope) {
   $scope.name = "ParentController";
   
}]);

app.controller("FirstChildController", ["$scope", function ($scope) {
   $scope.name = "FirstChildController";
   
}]);

app.controller("SecondChildController", ["$scope", function ($scope) {
   $scope.name = "SecondChildController";
   
}]);

app.controller("ThirdChildController", ["$scope", function ($scope) {
   $scope.name = "ThirdChildController";
   
}]);

