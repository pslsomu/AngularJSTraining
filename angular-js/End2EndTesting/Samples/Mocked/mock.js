angular.module( 'myHttpTest', ['myHttp', 'ngMockE2E'] )
    .run(function($httpBackend) {
        var states =[
        {
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
        },
        {
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
        }];

        //$httpBackend.whenGET(/http:\/\/localhost:9081\/States.*/ ).passThrough();
        $httpBackend.whenGET(/http:\/\/localhost:9081\/States.*/ ).respond(states);
    });
