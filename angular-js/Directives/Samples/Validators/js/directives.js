angular.module("statesApp.directives", ["statesApp.services"])
    .directive("positiveInteger", [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                ngModelController.$validators.number = function(modelValue, viewValue) {
                    var value = parseInt(viewValue);
                    if (!value)
                        return false;

                    return (value > 0);
                }
            }

        }
    }])
    .directive("range", [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                upper:"=",
                lower:"="
            },
            link: function (scope, element, attrs, ngModelController) {

                var upperBound = parseInt(scope.upper);
                if (!upperBound) upperBound = 1000000;

                var lowerBound = parseInt(scope.lower);
                if (!lowerBound) upperBound = -1000000;

                ngModelController.$validators.range = function(modelValue, viewValue) {
                    var value = parseInt(viewValue);
                    if (!value)
                        return false;

                    return (value < upperBound && value > lowerBound);
                }
            }

        }
    }])
    .directive("checkAbbreviation", ["stateService", "$q", function (stateService, $q) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                var initialValue;
                ngModelController.$asyncValidators.checkAbbreviation = function(modelValue, viewValue) {
                    var defer = $q.defer();
                    var result = stateService.getById(viewValue);
                    result.$promise.then(function(result) {
                       if (!initialValue) {
                           initialValue = viewValue;
                           defer.resolve();
                           return;
                       }

                       if (!result.abbreviation || result.abbreviation === initialValue) {
                           defer.resolve();
                       }
                       else {
                           defer.reject();
                       }

                    })
                    .catch(function (err) {
                       defer.reject();
                    });
                    return defer.promise;
                }
            }

        }
    }]);
