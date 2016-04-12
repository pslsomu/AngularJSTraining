var app = angular.module("scopeApp", []);

app.controller("ParentController", ["$scope", function ($scope) {
   $scope.people = [
       { "Name":"Bob", "Age":23, "Gender":"Male", "Id":1 },
       { "Name":"Chuck", "Age":31, "Gender":"Male", "Id":2 },
       { "Name":"John", "Age":25, "Gender":"Male", "Id":3 },
       { "Name":"Kate", "Age":42, "Gender":"Female", "Id":4 },
       { "Name":"Abigail", "Age":32, "Gender":"Female", "Id":5 },
       { "Name":"Doris", "Age":26, "Gender":"Female", "Id":6 },
       { "Name":"Jean", "Age":37, "Gender":"Male", "Id":7 }
   ];
   
   $scope.$on("personWasSelected", function (event, p) {
      $scope.$broadcast("personDidChange", p); 
   });
}]);

app.controller("ListController", ["$scope", function ($scope) {
   $scope.selectPerson = function (person) {
     $scope.$emit("personWasSelected", person);  
   };
}]);

app.controller("PersonController", ["$scope", function ($scope) {
   $scope.$on("personDidChange", function (event, p) {
      $scope.person = p; 
   });
}]);
