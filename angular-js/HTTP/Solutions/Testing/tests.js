/*
Setup your test to verify that a call is being made to http://localhost:9081/Products

It should respond with a static set of data that you control
Your test should veriy the call has occurred and verify that you have returned a successful result
*/

describe("Testing Controller", function () {

    var testScope, controllerService, httpBackend;

    beforeEach( function () {
        module( 'myHttp' );
        inject( function ( $controller, $rootScope, $httpBackend ) {
            httpBackend = $httpBackend;
            controllerService = $controller;
            $httpBackend.when('GET', 'http://localhost:9081/Products')
                .respond([{
                            "_id": "56d478d2b4f8cbc7effa43e8",
                            "odata.metadata": "http://services.odata.org/V3/Northwind/Northwind.svc/$metadata#Products/@Element",
                            "productID": 1,
                            "productName": "Chai",
                            "supplierID": 1,
                            "categoryID": 1,
                            "quantityPerUnit": "10 boxes x 20 bags",
                            "unitPrice": 18,
                            "unitsInStock": 39,
                            "unitsOnOrder": 0,
                            "reorderLevel": 10,
                            "discontinued": false
                        },
                ]);


            testScope = $rootScope.$new();
        });
    });

    it("test fetch products", function () {
        controllerService( 'MainController', { $scope : testScope } );
        httpBackend.flush();

        expect(testScope.products.length).toBe(1);
        expect(testScope.products[0].productName).toBe("Chai");
    });
});
