angular.module("statesApp.controllers", [])
   .controller("AppController", ["$scope", "$location", "$cacheFactory", function ($scope, $location, $cacheFactory) {
       $scope.go = function (path) {
           $location.path(path);
       };
       $scope.stateCache = $cacheFactory.get("stateCache");
       if (!$scope.stateCache)
        $scope.stateCache = $cacheFactory( "stateCache" );
   }])
   .controller("ListController", ["$scope" , "$http", function($scope, $http) {
       $http( {
           url:"http://localhost:9081/States",
           method:"GET",
           cache: true
       }).then(function (result) {
          $scope.states = result.data;
       }).catch(function (err) {
           console.error("An error occured fetching states", err);
       });


       $scope.selectState = function (state) {
           $scope.go("/details/" + state._id);
       };

       $scope.clearCache = function () {
           $scope.stateCache.removeAll();
       };
   }])
   .controller("DetailController", ["$scope" , "$routeParams", "$http", function($scope, $routeParams, $http) {
       $http( {
           url:"http://localhost:9081/States/" + $routeParams.id ,
           method:"GET",
           cache: $scope.stateCache
       }).then(function (result) {
          $scope.state = result.data;
       }).catch(function (err) {
           console.error("An error occured fetching states", err);
       });
   }]);
