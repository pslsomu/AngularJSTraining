/*
Create 3 new validators
    One to verify the range of a given entry
    One to verity that we've entered a positive number
    One to check the product ID
*/

angular.module("productApp.directives", ["productApp.services"])
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
                if (!lowerBound) lowerBound = -1000000;

                ngModelController.$validators.range = function(modelValue, viewValue) {
                    var value = parseInt(viewValue);
                    if (!value)
                        return false;

                    return (value < upperBound && value > lowerBound);
                }
            }

        }
    }])
    .directive("checkProductId", ["productService", "$q", function (productService, $q) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                var initialValue;
                ngModelController.$asyncValidators.checkProductId = function(modelValue, viewValue) {
                    var defer = $q.defer();
                    var result = productService.getById(viewValue);
                    result.$promise.then(function(result) {
                       if (!initialValue) {
                           initialValue = viewValue;
                           defer.resolve(true);
                           return;
                       }

                       if (!result.productID || result.productID == initialValue) {
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
