/*

    Create messaging so that a team can be selected from the ListController
    and then displayed in the Team Controller

*/

var app = angular.module("scopeApp", []);

app.controller("ParentController", ["$scope", function ($scope) {
   $scope.teams = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
       { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
       { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
       { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
   ];

   $scope.$on("teamWasSelected", function (event, p ) {
      $scope.$broadcast("teamDidChange", p);
   });
}]);

app.controller("ListController", ["$scope", function ($scope) {
   $scope.selectTeam = function (team) {
     $scope.$emit("teamWasSelected", team);
   };
}]);

app.controller("TeamController", ["$scope", function ($scope) {
   $scope.$on("teamDidChange", function (event, p) {
      $scope.team = p;
   });
}]);
