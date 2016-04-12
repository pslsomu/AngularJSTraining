/*
Add a dependencies to $location in your controllers

Add a method that uses the $location.path as a means to move around in your applciation
*/
angular.module("myNgRouter.controllers", ["myNgRouter.filters"])
   .controller("AppController", ["$scope", "$location", function ($scope, $location) {
       $scope.teams = [
                    { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
                    { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
                    { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
                    { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
                    { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
                ]; 
        $scope.move = function (path) {
            $location.path(path)
        };
   }])
   .controller("HomeController", ["$scope" , function($scope, findByIdFilter) {

   }])
   .controller("DetailController", ["$scope" , "findByIdFilter", "$routeParams", function($scope, findByIdFilter, $routeParams) {
       var results = findByIdFilter($scope.teams, $routeParams.id);
       if (results && results.length > 0)
            $scope.team = results[0];
   }]);