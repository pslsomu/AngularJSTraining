describe("TestFixture: Controller", function () {

    var testScope, personToDelete, numberOfPeople;

    beforeEach( function () {
        module( 'myEventHandlers' );
        inject( function ( $controller, $rootScope ) {
            testScope = $rootScope.$new();
            $controller( 'MainController', { $scope : testScope } );
            personToDelete = testScope.people[2];
            numberOfPeople = testScope.people.length;
        });
    });

    it("testCase: remove(one)", function () {
        expect(testScope.people.length).toBe(numberOfPeople);

        expect(testScope.people).toContain(personToDelete);
        testScope.remove(personToDelete);

        expect(testScope.people).not.toContain(personToDelete);
        expect(testScope.people.length).toBe(numberOfPeople - 1);

    });

    it("testCase: Add a person", function () {
        var person = { "Name":"Jacob", "Age":31, "Gender":"Male", "Id":8 };
        expect(testScope.people.length).toBe(numberOfPeople);

        testScope.addPerson = person;
        expect(testScope.people).not.toContain(person);
        
        testScope.add();
        expect(testScope.addPerson).toEqual({});
        
        expect(testScope.people).toContain(person);
        expect(testScope.people.length).toBe(numberOfPeople + 1);
    });
});
