/*
Using the data below

Create a module named myTeamApp

Create a controller named ListController

Add the data array to a variable in scope so that is accessible to the view
*/


var data = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101 },
       { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82 },
       { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90 },
       { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75 }
   ];


var app = angular.module("myTeamApp", []);
app.controller("ListController", ["$scope", function ($scope) {
    $scope.teams = data;
}])