/*
Create a unit test that contains a describe for verifying the methods in the 
ListController

    You should execute 3 tests
        One to verify that a team was deleted
        One to verify that a team was added
        One to verify that the restore works properly
        

REMEMBER - You will need to invoke your list controller and validate
your state against a test scope
*/

describe("TestFixture: ListController", function () {
    
    var testScope, teamToDelete, numberOfTeams;
    beforeEach( function () {
        module( 'myTeamApp' );
        inject( function ( $controller, $rootScope ) {
            testScope = $rootScope.$new();
            $controller( 'ListController', { $scope : testScope } );
            teamToDelete = testScope.teams[2];
            numberOfTeams = testScope.teams.length;
        });
    });
    
    it("testCase: Delete a team", function () {
        expect(testScope.teams.length).toBe(numberOfTeams);
        
        expect(testScope.teams).toContain(teamToDelete);
        testScope.removeTeam(teamToDelete);
        
        expect(testScope.teams).not.toContain(teamToDelete);
        expect(testScope.teams.length).toBe(numberOfTeams - 1);
        
    });
    
    it("testCase: Add a team", function () {
        var team = { "Name":"Yankees", "League":"AL", "Division":"Central", "Wins":85, "Loses":75, "Id":8 }
        expect(testScope.teams.length).toBe(numberOfTeams);
        
        testScope.newTeam = team;
        expect(testScope.teams).not.toContain(team);
        
        testScope.addTeam();
        expect(testScope.newTeam).toEqual({});
        
        expect(testScope.teams).toContain(team);
        expect(testScope.teams.length).toBe(numberOfTeams + 1);
    });
    
    it("testCase: Restoring teams", function () {
        testScope.removeTeam(testScope.teams[0]);
        testScope.removeTeam(testScope.teams[0]);
        
        expect(testScope.teams.length).toBe(numberOfTeams - 2);
        expect(testScope.deleted.length).toBe(2);
        
        testScope.restoreAll();
        
        expect(testScope.teams.length).toBe(numberOfTeams);
        expect(testScope.deleted.length).toBe(0);
    });
});