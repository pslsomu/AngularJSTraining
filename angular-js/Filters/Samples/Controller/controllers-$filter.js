var app = angular.module("myEventHandlers", []);

app.controller("MainController", ["$scope", "$filter", function ($scope, $filter) {
   $scope.people = [
       { "Name":"Bob", "Age":23, "Gender":"Male", "Id":1 },
       { "Name":"Chuck", "Age":31, "Gender":"Male", "Id":2 },
       { "Name":"John", "Age":25, "Gender":"Male", "Id":3 },
       { "Name":"Kate", "Age":42, "Gender":"Female", "Id":4 },
       { "Name":"Abigail", "Age":32, "Gender":"Female", "Id":5 },
       { "Name":"Doris", "Age":26, "Gender":"Female", "Id":6 },
       { "Name":"Jean", "Age":37, "Gender":"Male", "Id":7 }
   ];

   $scope.addPerson = {}; // Set an empty object

   $scope.handleEvent = function (evt) {
       $scope.lastEvent = evt.type;
   };


   $scope.remove = function (person, evt) {
     $scope.handleEvent(evt);

     var location = $scope.people.indexOf(person);
     if (location > -1)
        $scope.people.splice(location, 1);
   };

   $scope.add = function (evt) {
     $scope.handleEvent(evt);

     var filter = { Name:$scope.addPerson.Name };

     var filterFilter = $filter("filter");

     var result = filterFilter($scope.people, filter);
     if (result && result.length > 0) {
         console.error("An element with the given name is already present within array. Cannot add new person");
         return;
     }

     $scope.people.push($scope.addPerson);
     $scope.addPerson = {};

   };
}]);
