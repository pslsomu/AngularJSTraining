angular.module("myUIRouter.controllers", ["myUIRouter.filters"])
   .controller("AppController", ["$scope", function ($scope) {
       $scope.teams = [
                    { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
                    { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
                    { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
                    { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
                    { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
                ]; 
        
        $scope.availableForSort = ["Name", "League", "Division"];
        $scope.sortOn = $scope.availableForSort[0];
        $scope.sortDirection = false;
        
        $scope.filter = {};
   }])
   .controller("DetailController", ["$scope" , "findByIdFilter", "$stateParams", function($scope, findByIdFilter, $stateParams) {
       var results = findByIdFilter($scope.teams, $stateParams.id);
       if (results && results.length > 0)
            $scope.team = results[0];
   }]);