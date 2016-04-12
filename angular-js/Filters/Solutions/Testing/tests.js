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

    describe("Test Local Filter", function () {
        beforeEach( function () {
            module( 'filterApp' );
            inject( function ( $controller, $rootScope ) {
                testScope = $rootScope.$new();
                $controller( 'MainController', { $scope : testScope } );
            });
        });

        it("testCase: winsBetween no winRange", function () {
            data.forEach(function (one) {
                var result = one.Wins > -1 && one.Wins < 100000;
                expect(testScope.winsBetween(one)).toBe(result);
            });
        });

        it("testCase: winsBetween provided winRange", function () {
            testScope.winRange = { Upper:80, Lower:20 };
            expect(testScope.winRange).toEqual({ Upper:80, Lower:20 });

            data.forEach(function (one) {
                var result = one.Wins > 20 && one.Wins < 80;
                expect(testScope.winsBetween(one)).toBe(result);
            });
        });
    });

    describe("Test Reusable Filter", function () {
        var filter;
        beforeEach( function () {
            module( 'filterApp.filters' );
            inject( function ( $filter ) {
                filter = $filter( 'between');
            });
        });

        it("testCase: between with parameters", function () {
            var result = filter(data, "Wins", 80, 20);
            expect(result.length).toBe(1);
            expect(result).toContain({ "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 });
        });

        it("testCase: between only property name", function () {
            var result = filter(data, "Wins");
            expect(result.length).toBe(2);
            expect(result).toContain({ "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 });
        });

        it("testCase: between no parameters", function () {
            var result = filter(data);
            expect(result.length).toBe(2);
        });
    });
});
