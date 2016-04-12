describe( 'Testing highlight-match.html', function () {

  var URL = 'http://localhost:9080/End2EndTesting/Samples/Mocked/';

  describe( 'Testing Get All States', function () {
    beforeEach( function () {
      browser.get( URL );

      
    } );

    it( 'testCase: check all states', function () {
      element.all( by.repeater( 'state in states' ) )
      .then( function ( names ) {
        count = expect(names.length).toBe(2);
      } );
    } );
    
    
    it( 'testCase: check filter states', function () {
      element( by.model( 'criteria.name' ) ).sendKeys( 'Ar' );
      
      var stateList = element.all( by.repeater( 'state in states' ) );
      stateList.then( function ( names ) {
        expect(names.length).toBe(1);
      } );
    } );
    
    it( 'testCase: clear filter', function () {
      element( by.model( 'criteria.name' ) ).sendKeys( 'Ar' );
      
      element.all( by.repeater( 'state in states' ) )
        .then( function ( names ) {
            expect(names.length).toBe(1);
        });
      
      element( by.buttonText( 'Clear' ) ).click();
      element.all( by.repeater( 'state in states' ) )
        .then( function ( names ) {
            expect(names.length).toBe(2);
        });
    } );
    
  } );
} );

