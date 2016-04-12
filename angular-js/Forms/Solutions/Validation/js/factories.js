/*
    Create a factory to wrap the product resource
*/

angular.module("productApp.factories", ["ngResource"])
    .constant("baseUri", "http://localhost:9081/")
    .factory("makePath", ["baseUri", function (baseUri) {
        return function (path) {
            return baseUri + path;
        }
    }])
    .factory("productFactory", ["makePath", "$resource", function (makePath, $resource) {
        return $resource(makePath("Products/:id"), { id: '@_id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
                }
       });
    }])
    