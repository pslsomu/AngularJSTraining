describe("MyTest Scope", function() {
   
   
   it("Adding Test Fixture", function () {
       expect(2 + 2).toBe(4);
       expect(2 + 2).not.toBe(5);
   });
   
      it("Greater Than", function () {
       expect(2 + 2).toBeGreaterThan(3);
       expect(2 + 2).not.toBeGreaterThan(10);
   });
    
});