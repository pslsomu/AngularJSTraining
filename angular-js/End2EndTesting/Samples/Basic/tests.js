describe( 'Testing highlight-match.html', function () {

  var URL = 'http://localhost:9080/HTTP/Samples/Basic/';

  describe( 'Testing Get All States', function () {
    beforeEach( function () {
      browser.get( URL );


    } );

    it( 'get the list of states', function () {
      var promise  = element.all( by.repeater( 'state in states' ) );
      promise.then( function ( list ) {
        expect(list.length).toBe(50);
      } );

    } );
  } );
} );
