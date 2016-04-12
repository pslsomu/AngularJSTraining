/* 
    Create a mock module that passes the data for our Product Service
    Remember you will need to reference your main module
*/

angular.module( 'myHttpTest', ['myHttp', 'ngMockE2E'] )
    .run(function($httpBackend) {
        var data =[
        {
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
        },
        {
            "_id": "56d68af3b4f8cbc7effa44b6",
            "odata.metadata": "http://services.odata.org/V3/Northwind/Northwind.svc/$metadata#Products/@Element",
            "productID": 3,
            "productName": "Aniseed Syrup",
            "supplierID": 1,
            "categoryID": 2,
            "quantityPerUnit": "12 - 550 ml bottles",
            "unitPrice": 10,
            "unitsInStock": 13,
            "unitsOnOrder": 70,
            "reorderLevel": 25,
            "discontinued": false
        },
        {
            "_id": "56d68af3b4f8cbc7effa44b7",
            "odata.metadata": "http://services.odata.org/V3/Northwind/Northwind.svc/$metadata#Products/@Element",
            "productID": 6,
            "productName": "Grandma's Boysenberry Spread",
            "supplierID": 3,
            "categoryID": 2,
            "quantityPerUnit": "12 - 8 oz jars",
            "unitPrice": 25,
            "unitsInStock": 120,
            "unitsOnOrder": 0,
            "reorderLevel": 25,
            "discontinued": false
        }];

        $httpBackend.whenGET(/http:\/\/localhost:9081\/Products.*/ ).respond(data);

    });