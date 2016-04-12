angular.module("myApp.directives", [])
    .directive("pane", [function () {
        return {
            templateUrl:"directives/partials/pane-template.html",
            restrict:"E",
            transclude:true,
            require: '?^^container',
            scope: {
                header:"="
            },
            link: function (scope, element, attrs, containerController) {
                if (containerController)
                    containerController.addPane( scope );
                else
                    scope.selected = true;
            }
        };
    }])
    .directive("container", [function () {
        return {
            templateUrl:"directives/partials/pane-container-template.html",
            restrict:"E",
            transclude:true,
            scope:{},
            controller: function ( $scope ) {
                var panes = $scope.panes = [];
                $scope.select = function ( pane ) {
                    panes.forEach( function ( one ) {
                        one.selected = false;
                    } );
                    pane.selected = true;
                };

                this.addPane = function ( pane ) {
                    if ( panes.length === 0 ) {
                        $scope.select( pane );
                    }
                    panes.push( pane );
                };
            },
            link: function (scope, element, attrs) {
            }
        };
    }]);
