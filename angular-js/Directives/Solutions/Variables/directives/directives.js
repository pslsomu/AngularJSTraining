/*
    Create a directive called timer

    It should look to create an isolate scope which accepts a varible to keep track of
    the elapsed time and report it back to the controller

    You should be able to
        Start the Timer
        Stop the Timer
        Reset the timer back to 0

    Upon initialization it should set the ticks (elapsed time to 0)
*/
angular.module("myApp.directives", [])
    .directive("timer", ["$interval", "dateFilter", function ($interval, dateFilter) {
        return {
            templateUrl:"directives/partials/timer-template.html",
            restrict:"E",
            scope: {
                counter:"="
            },
            link: function (scope, element, attrs) {
                var format = 'M/d/yy h:mm:ss a', interval;
                scope.counter = 0;

                element.find("button[name=start]").on("click", function () {
                    var el = $(this);
                    if (scope.started) {
                        el.text("Start");
                        if (angular.isDefined(interval))
                            $interval.cancel(interval);
                    }
                    else {   /// {{myDate | date }}
                        element.find("span").html("Started On: " + dateFilter(new Date(), format));
                        interval = $interval(function() {  scope.counter++; }, 1000);
                        el.text("Stop");
                    }
                    scope.started = !scope.started;
                    scope.$apply();
                });

                element.find("button[name=reset]").on("click", function () {
                    scope.counter = 0;
                    element.find("span").html("");
                    scope.$apply();
                });

                element.on('$destroy', function() {
                    if (angular.isDefined(interval))
                        $interval.cancel(interval);
                });
            }
        };
    }]);
