angular.module("angularJsClass.directives", [])
    .directive("formState", [ function () {
        return {
            templateUrl: "/common/helpers/directives/partials/form-state.html",
            restrict:"E",
            scope: {
                form:"=",
                formName:"@form",
            },
            controller : function ($scope) {
                $scope.showFieldSummary = true;
                $scope.showValidationSummary = false;
                
                $scope.toggleFieldSummary = function () {
                    $scope.showFieldSummary = !$scope.showFieldSummary;
                }
                
                $scope.toggleValidationSummary = function () {
                    $scope.showValidationSummary = !$scope.showValidationSummary;
                }
            }
        };
    }])
    .directive("formStateRow", [ function () {
        return {
            templateUrl: "/common/helpers/directives/partials/form-state-field-row.html",
            restrict:"A",
            scope: {
                field:"=",
                name:"=key"
            }
        };
    }]) ;