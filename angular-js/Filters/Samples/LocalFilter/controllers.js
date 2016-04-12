var app = angular.module("filterApp", []);
app.controller("MainController", ["$scope", function ($scope) {
   $scope.people = [
       { "Name":"Bob", "Age":23, "Gender":"Male", "Id":1 },
       { "Name":"Chuck", "Age":31, "Gender":"Male", "Id":2 },
       { "Name":"John", "Age":25, "Gender":"Male", "Id":3 },
       { "Name":"Kate", "Age":42, "Gender":"Female", "Id":4 },
       { "Name":"Abigail", "Age":32, "Gender":"Female", "Id":5 },
       { "Name":"Doris", "Age":26, "Gender":"Female", "Id":6 },
       { "Name":"Jean", "Age":37, "Gender":"Male", "Id":7 }
   ]; 
   
   // Doesn't have to be done this way; however, it acknowledges the use
   // of a variable by this name
   $scope.filter = {};
   
   $scope.ageGreaterThan = function (person) {
      var minimumAge = parseInt($scope.minAge);
      if (!minimumAge) {
          minimumAge = 0;
      }
       
      if (person.Age > minimumAge) {
        return true;
      }
      return false;
   };
}]);