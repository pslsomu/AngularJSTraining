describe("Testing Controller", function () {

    var myService;
    beforeEach( function () {
        module( 'statesApp.factories', function ( $provide ) {
             $provide.factory( 'stateFactory', function ( $log ) {
                return {
                    query : function () {
                    return [{
                            "_id": "AK",
                            "name": "ALASKA",
                            "abbreviation": "AK",
                            "capital": "Juneau",
                            "mostPopulousCity": "Anchorage",
                            "population": 698473,
                            "squareMiles": 656425,
                            "timeZone1": "AKST (UTC-09)",
                            "timeZone2": "HST (UTC-10)",
                            "dst": "YES"
                        }];
                    }
                }})
            });

        module( 'statesApp.services' );
        inject( function ( stateService ) {
            myService = stateService;
      } );
    });

    it("test fetch states", function () {
       var data = myService.all();
       expect(data.length).toBe(1);
       expect(data[0].name).toBe("ALASKA");

    });
});
