/*
    Write a unit test to check the postiveOrNegative Directive

    It should have 2 test cases. One for positive numbers and one for negative numbers

*/
describe("Testing Directives", function () {
    var testScope, compile, testScope;

   beforeEach( function () {
        module( 'myApp.directives' );

        inject( function ( _$compile_, _$rootScope_ ) {
            compile = _$compile_;
            testScope = _$rootScope_;
        });
    });

    it('test positive number', function() {
        testScope.number = 3;
        var element = compile( '<positive-or-negative number="number"></positive-or-negative>' )( testScope );
        testScope.$digest();
        console.log(element.html());
        expect( element.html() ).toContain( "Positive" );
    });

    it('test change', function() {
        testScope.number = 3;
        var element = compile( '<positive-or-negative number="number"></positive-or-negative>' )( testScope );
        testScope.$digest();
        expect( element.html() ).toContain( "Positive" );

        testScope.number = -13;
        testScope.$apply();
        expect( element.html() ).toContain( "Negative" );

        testScope.number = 13;
        testScope.$digest();
        expect( element.html() ).toContain( "Positive" );
    });

    it('test negative number', function() {
        testScope.number = -3;
        var element = compile( '<positive-or-negative number="number"></positive-or-negative>' )( testScope );
        testScope.$digest();
        console.log(element.html());
        expect( element.html() ).toContain( "Negative" );
    });
});
