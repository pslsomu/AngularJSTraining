/*

Create a module named filterApp.filters

Create a filter named "between" that accepts a 
    propertyName - String name of the property to check
    upper - Number containing the upper bound
    lower - Number containing the lower bound
    
It should return data where the given properties value is between the upper
and lower bound provided

REMEMBER: Handle the case where no data is provided
*/

angular.module("filterApp.filters", [])
.filter("between", [ function() {
    
    return function (data, propertyName, upper, lower) {
      if (!data || !data.length) 
        return data;
      
      if (!propertyName) 
        return data;
      
      var upperBound = parseInt(upper);
      if (!upperBound)
        upperBound = 100000;
        
      var lowerBound = parseInt(lower);
      if (!lowerBound)
        lowerBound = -1;
      
      var results = [];
      
      data.forEach(function(one) {
          if (one && one[propertyName]) {
              var value = parseInt(one[propertyName]);
              if (value && value > lowerBound && value < upperBound){
                  results.push(one);
              }
              
          } 
      });
      
      return results;
    };
} 
]);