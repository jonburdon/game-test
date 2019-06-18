describe("Nim Game", function() {

    beforeEach(function() {
        game = new easyNimGame();
    });

    describe("Checks Easy Nim game has code", function() {
        it("should exist", function() {
            expect(easyNimGame).toBeDefined();
        });
    });
    
    describe("Checks Easy Nim Game increases Nims taken by 1", function() {
        it("should increase nimstaken from 0 to 1", function() {
            var result = this.nimstaken
            expect(result).toBe(1);
            return 1;
        });
    });

});