/*

    Create tests to check both your local and your reusable filter. 
    
    Your local filter should cover the following test cases
        Test when a win range has been provided
        Test when a win range has not been provided
        
    Your reusable filter should cover the following cases:
        Test when you pass all 3 parameters and the array
        Test when you only pass the property name and the array
        Test when you pass no data except the array
        
   Each filter should be maintained within it's own describe block
*/

describe("Testing Filters", function () {
    var testScope, data = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 }
   ];
    
});