angular.module("myApp.directives", [])
    .directive("dependent", [function () {
        return {
            templateUrl:"directives/partials/list-template.html",
            restrict:"E",
            link: function (scope, element, attrs) {
                scope.$watch("message", function (newValue, oldValue) {
                    console.log("Message has changed to: " + newValue);
                    element.find("ul.log").append("<li>" + oldValue + "</li>");
                });
                
                element.find("button[name=addtime]").on("click", function (evt) { 
                    scope.message = scope.message + ":" + Date();
                    scope.$apply();
                });
                
                element.find("button[name=clearlog]").on("click", function (evt) { 
                    element.find("ul.log").empty();
                });
            }
        };
    }])
    .directive("evaluator", [function () {
        return {
            templateUrl:"directives/partials/evaluator-template.html",
            restrict:"E",
            scope: {
                expression:"=",
                output:"=result",
                expressionDidChange:"&onExpressionChange",
                resultDidChange:"&onResultChange",
                title:"@"
            },
            link: function (scope, element, attrs) {
                element.find("input").on("keyup", function (evt) {
                    scope.expression = $(this).val();
                    scope.$apply(); // Need to do this to persist changes
                    if (typeof scope.expressionDidChange == "function")
                        scope.expressionDidChange();
                });
                
                element.find("button").on("click", function () {
                    scope.output = scope.$eval(scope.expression);
                    element.find("code").html((scope.output) ? scope.output : "Expression '" + scope.expression +"' is invalid and cannot be evaluated");
                    scope.$apply(); // Need to do this to make sure that our changes get persisted.
                    
                    if (typeof scope.resultDidChange == "function")
                        scope.resultDidChange();
                });
            }
        };
    }]);
