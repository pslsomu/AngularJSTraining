describe("Testing Directives", function () {
    var testScope, compile, testScope;
   
   beforeEach( function () {
        module( 'myApp.directives' );
        
        inject( function ( _$compile_, _$rootScope_ ) {
            compile = _$compile_;
            testScope = _$rootScope_;

            testScope.text = "Saying Hello";
        });
    });
    
    it('test echo directive', function() {
        var element = compile( '<echo say="text"></echo>' )( testScope );
        

        testScope.$digest();
        console.log(element.html());
        expect( element.html() ).toContain( testScope.text );
  });
});