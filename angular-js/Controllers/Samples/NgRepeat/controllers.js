var app = angular.module("myRepeater", []);

app.controller("MainController", ["$scope", function ($scope) {
  $scope.numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
}]);
