/*
    Implement a product serivce that wraps the product factory and appropriately handles 
    the logic to execute the save
*/
angular.module("productApp.services", ["productApp.factories"])
    .service("productService", ["productFactory", "$q", function (productFactory, $q) {
        this.all = function() {
            return productFactory.query();
        }
        
        this.getById = function(id) {
            return productFactory.get({id: id});
        }
        
        this.build = function() {
            return new productFactory();
        }
        
        this.delete = function(one) {
            return one.$delete();
        }
        
        this.save = function(one) {
            var deferred = $q.defer();
            var result = { $promise: deferred.promise, $resolved:false};
            productFactory.get({id:(one._id) ? one._id : -1}, function (result) {
                if (result && result._id) {
                    one.$update(function (obj) {
                        angular.extend(result, one);
                        result.$resolved = true;
                        deferred.resolve(one);
                    }).catch(function (err) {
                        result.$resolved = true;
                        deferred.reject(err);
                    });
                }
                else {
                    one.$save(function (obj) {
                        angular.extend(result, one);
                        result.$resolved = true;
                        deferred.resolve(one);
                    }).catch(function (err) {
                        result.$resolved = true;
                        deferred.reject(err);
                    });
                }
            });
            return result;
        }
    }])
    