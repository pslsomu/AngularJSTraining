/*

Setup an application to sort and filter the following array

Your app should be able to filter on Name, League, and Division
Should sort on Wins and Loses

You should also be able to control the direction of the sort

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
   
}]);