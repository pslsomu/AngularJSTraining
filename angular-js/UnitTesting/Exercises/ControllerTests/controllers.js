var data = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
       { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
       { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
       { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
   ];

var app = angular.module("myTeamApp", []);
app.controller("ListController", ["$scope", "$log", function ($scope, $log) {
    $scope.teams = data;
    $scope.deleted = [];
    $scope.newTeam = {};
    
    $scope.teamSequenceId = $scope.teams.length;
    
    $scope.addTeam = function () {
        $scope.teamSequenceId++;
        $scope.newTeam.Id = $scope.teamSequenceId;
        $scope.teams.push($scope.newTeam);
        $log.info("Team with ID:" + $scope.teamSequenceId + " Has been added");
        
        $scope.newTeam = {};
    };
    
    $scope.removeTeam = function (team) {
        var location = $scope.teams.indexOf(team);
        if (location > -1) {
            $scope.deleted.push($scope.teams[location]);
            $scope.teams.splice(location, 1);
        }
    };
    
    $scope.restoreAll = function () {
        $scope.deleted.forEach(function (one) {
           $scope.teams.push(one); 
        });
        $scope.deleted = [];
    };
}])