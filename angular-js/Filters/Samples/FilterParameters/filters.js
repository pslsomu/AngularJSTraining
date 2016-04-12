/*

Quick Javascript Note

Suppose this object:

var car = { NumberOfWheels: 4, Make: "Ford", Model: "Focus", Year: 2013 };

These properties can be referenced either by name: 

    car.NumberOfWheels ==> returns "4"
    car.Make ==> returns "Ford" 
    
Or by Key

    car["NumberOfWheels"] ==> returns "4"
    car["Make"] ==> returns "Ford"

This is because essentially all javascript objects are represented as key-value
pairs which means they are essentially dictionaries.

This filter takes advantage of that when finding they property value for the object
which we are checking to see if it is greater than the given min.

*/

angular.module("complexFilterApp.filters", [])
    .filter("greaterThan", [function() {
        return function(data, minimum, propertyName) {
            var result = [];
            
            var value = parseInt(minimum);
            if (!value) {
                value = -1000000;
            }
                        
            data.forEach(function(one) {
                var propertyValue = one[propertyName]; // SEE NOTE ABOVE
                if (propertyValue) {
                    propertyValue = parseInt(propertyValue);
                    if (propertyValue && propertyValue > value) {
                        result.push(one);
                    }
                } 
                else if (one > value) {
                    result.push(one);
                }
            });
            return result;  
        }
    }])    
    // Let's take a look at a filter that has a dependency on another filter
    .filter("checkValue", ["filterFilter", function(filterFilter) {
        return function(data, propertyName, propertyValue) {
            if (!propertyName || !propertyValue || !data || !data.length)
                return data;
            
            var filter = {};
            filter[propertyName] = propertyValue;
            
            return filterFilter(data, filter);
        }
    }]);;