/*

Write a test using the jasmine mocking framework which will create a mock productFactory
and return data

You should (at a minimum) test the all() service method
*/

describe("Testing Controller", function () {

    var productService, productFactory;
    beforeEach( function () {
        module( 'productApp.factories', function ( $provide ) {
             $provide.factory( 'productFactory', function (  ) {
                return {
                    query :  jasmine.createSpy().and.returnValue([{
                        "_id": "56d68af3b4f8cbc7effa44b5",
                        "odata.metadata": "http://services.odata.org/V3/Northwind/Northwind.svc/$metadata#Products/@Element",
                        "productID": 2,
                        "productName": "Chang",
                        "supplierID": 1,
                        "categoryID": 1,
                        "quantityPerUnit": "24 - 12 oz bottles",
                        "unitPrice": 19,
                        "unitsInStock": 17,
                        "unitsOnOrder": 40,
                        "reorderLevel": 25,
                        "discontinued": false
                    }])
                }})
            });

        module( 'productApp.services' );
        inject( function ( _productService_ , _productFactory_) {
            productService = _productService_; // Reference the injected service
            productFactory = _productFactory_; // Reference the injected factory (for Jasmine spy details)
      } );
    });

    it("testCase: test all()", function () {
       var data = productService.all();
       expect(data.length).toBe(1);
       expect(data[0].productName).toBe("Chang");
       
       // Jasmine enables all kinds of metadata about your calls
       console.log(productFactory.query.calls.count()); // Number of calls
       console.log(productFactory.query.calls.argsFor(0)); // Arguments for the first call

    });
});
