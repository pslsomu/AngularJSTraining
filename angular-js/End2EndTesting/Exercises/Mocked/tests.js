describe( 'Testing Mocked Backend', function () {

  var URL = 'http://localhost:9080/End2EndTesting/Solutions/Mocked/';

  describe( 'Testing Get All Products', function () {
    beforeEach( function () {
      browser.get( URL );

      
    } );

    it( 'testCase: Verify all have been loaded', function () {
      var nameList = element.all( by.repeater( 'product in products' ) );
      var count;
      nameList.then( function ( names ) {
        count = names.length;
        expect(count).toBe(3);
      } );
     
    } );
  } );
} );

