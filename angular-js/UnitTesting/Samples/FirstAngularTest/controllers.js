var app = angular.module("myEventHandlers", []);

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
   
   $scope.addPerson = {}; // Set an empty object
   
   $scope.handleEvent = function (evt) {
       $scope.lastEvent = evt.type;
   };
   
   
   $scope.remove = function (person, evt) {
       if (evt)
        $scope.handleEvent(evt);
     
       var location = $scope.people.indexOf(person);
       if (location > -1)
            $scope.people.splice(location, 1);  
   };
   
   $scope.add = function (evt) {
      if (evt)
        $scope.handleEvent(evt);  
     
     $scope.people.push($scope.addPerson);
     $scope.addPerson = {};
     
   };
}]);