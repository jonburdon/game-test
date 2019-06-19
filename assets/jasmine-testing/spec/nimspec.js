describe("Nim Game", function() {

    describe("Checks Easy Nim game has code", function() {
        it("should exist", function() {
            expect(easyNimGame).toBeDefined();
        });
    });
    
    describe("Checks Easy Nim Game increases Nims taken by 1", function() {
        

        beforeEach(function(){
            setFixtures(`<div id="nimstaken"></div>`);
        })

        it("should increase nimstaken from 0 to 1", function() {
            //arrange
            easyNimGame();
            
            //act
            var result = nimstaken;
            
            //assert
            expect(result).toBe(1);
        });
    });
    
    
    });