angular.module("myUIRouter.filters", [])
    .filter("findById", [function() {
        
        return function(data, id) {
          
          if (!data || !data.length) 
            return data;
            
          var results = [];
          data.forEach(function (one) {
              if (one.Id == id)
                results.push(one);
          })
          return results;  
            
        };
    }]);