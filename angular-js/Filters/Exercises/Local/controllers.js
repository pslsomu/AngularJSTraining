/*

Add a local filter that accepts a team and determines if it's win 
range falls between the range provided by the client. 

REMEMBER: The win range may not be specified so you will need to 
account for when there is no data

*/

var app = angular.module("filterApp", []);
app.controller("MainController", ["$scope", function ($scope) {
   $scope.teams  = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
       { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
       { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
       { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
   ];
   
   $scope.availableForSort = ["Wins", "Loses"];
   
    $scope.winsBetween = function (team) {
    var upperBound = parseInt($scope.winRange.Upper);
    if (!upperBound) {
        upperBound = 10000; 
    }

    var lowerBound = parseInt($scope.winRange.Lower);
    if (!lowerBound) {
        lowerBound = 0; 
    }

    if (team.Wins > lowerBound && team.Wins < upperBound) {
        return true;
    }
    return false;
   };
   
   // View State Variables
   $scope.sortOn = "Wins";
   $scope.sortDirection = true;
   $scope.filter = {};
   
}]);