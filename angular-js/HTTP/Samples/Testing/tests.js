describe("Testing Controller", function () {

    var testScope, controllerService;

    beforeEach( function () {
        module( 'myHttp' );
        inject( function ( $controller, $rootScope, $httpBackend ) {
            httpBackend = $httpBackend;
            controllerService = $controller;
            $httpBackend.expect('GET', 'http://localhost:9081/States')
                .respond([{
                            "_id": "AZ",
                            "name": "ARIZONA",
                            "abbreviation": "AZ",
                            "capital": "Phoenix",
                            "mostPopulousCity": "Phoenix",
                            "population": 6595778,
                            "squareMiles": 114006,
                            "timeZone1": "MT (UTC-07)",
                            "timeZone2": "",
                            "dst": "NO"
                        }
                ]);

            testScope = $rootScope.$new();
        });
    });

    it("test fetch states", function () {
        controllerService( 'MainController', { $scope : testScope } );
        httpBackend.flush();

        expect(testScope.states.length).toBe(1);
        expect(testScope.states[0].name).toBe("ARIZONA");
    });
});
