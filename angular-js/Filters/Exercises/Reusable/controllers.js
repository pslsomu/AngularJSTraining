/*

Add a module dependency to your controllers module on the filters module
containing your "between" filter

*/

angular.module("filterApp.controllers", [])
.controller("MainController", ["$scope", function ($scope) {
   $scope.teams  = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
       { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
       { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
       { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
   ];
   
   $scope.availableForSort = ["Wins", "Loses"];
   
   // View State Variables
   $scope.sortOn = "Wins";
   $scope.sortDirection = true;
   $scope.filter = {};
   $scope.winRange = {};
}]);