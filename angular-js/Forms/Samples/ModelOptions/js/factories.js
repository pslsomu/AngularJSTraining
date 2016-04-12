angular.module("statesApp.factories", ["ngResource"])
    .constant("baseUri", "http://localhost:9081/")
    .factory("makePath", ["baseUri", function (baseUri) {
        return function (path) {
            return baseUri + path;
        }
    }])
    .factory("stateFactory", ["makePath", "$resource", function (makePath, $resource) {
        return $resource(makePath("States/:id"), { id: '@_id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
                }
       });
    }])
    