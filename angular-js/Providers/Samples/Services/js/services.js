angular.module("statesApp.services", ["statesApp.factories"])
    .service("stateService", ["stateFactory", "$q", function (stateFactory, $q) {
        this.all = function() {
            return stateFactory.query();
        }

        this.getById = function(id) {
            return stateFactory.get({id: id});
        }

        this.build = function() {
            return new stateFactory();
        }

        this.delete = function(one) {
            return one.$delete();
        }

        this.save = function(one) {
            var deferred = $q.defer();
            var result = { $promise: deferred.promise, $resolved:false};

            one._id = one.abbreviation;
            stateFactory.get({id:one._id}, function (result) {
                if (result && result._id) {
                    one.$update(function (obj) {
                        angular.extend(result, one);
                        deferred.resolve(one);
                    }).catch(function (err) {
                        deferred.reject(err);
                    }).finally(function(arg) {
                      result.$resolved = true;
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
