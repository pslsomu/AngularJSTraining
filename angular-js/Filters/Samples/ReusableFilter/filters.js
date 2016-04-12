angular.module("filterApp.filters", [])
    .filter("overTheHill", [function() {

      var ageMax = 40;
      return function(data) {
            var result = [];

            data.forEach(function(one) {
                if (one.Age >= ageMax) {
                    result.push(one);
                }
            });
            return result;
        }
    }]);
