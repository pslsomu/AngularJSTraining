describe("Testing Filters", function () {

    var testScope, data = [
                { "Name":"Bob", "Age":23, "Gender":"Male", "Id":1 },
                { "Name":"Chuck", "Age":42, "Gender":"Male", "Id":2 },
                { "Name":"John", "Age":25, "Gender":"Male", "Id":3 }];

    describe("testFixture: Local Filter", function () {
        beforeEach( function () {
            module( 'filterApp' );
            inject( function ( $controller, $rootScope ) {
                testScope = $rootScope.$new();
                $controller( 'MainController', { $scope : testScope } );
            });
        });

        it("testCase: ageGreaterThan", function () {

            testScope.minAge = 30;
            expect(testScope.minAge).toBe(30);
            data.forEach(function (one) {
                var result = one.Age > testScope.minAge;
                expect(testScope.ageGreaterThan(one)).toBe(result);
            });
        });
    });

    describe("testFixture: Reusable Filter", function () {
        var filter;
        beforeEach( function () {
            module( 'filterApp.filters' );
            inject( function ( $filter ) {
                filter = $filter( 'overTheHill');
            });
        });

        it("testCase: overTheHill", function () {
            var result = filter(data);
            expect(result.length).toBe(1);
            expect(result).toContain({ "Name":"Chuck", "Age":42, "Gender":"Male", "Id":2 });
        });
    });

    describe("testFixture: Complex Reusable Filter", function () {
        var filter;
        beforeEach( function () {
            module( 'complexFilterApp.filters' );
            inject( function ( $filter ) {
                filter = $filter( 'greaterThan');
            });
        });

        it("testCase: greaterThan", function () {
            var result = filter(data, 40, "Age");
            expect(result.length).toBe(1);
            expect(result).toContain({ "Name":"Chuck", "Age":42, "Gender":"Male", "Id":2 });
        });
    });
});
