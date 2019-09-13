var { expect } = require('chai');
var baahubali = require('./index');

describe('baahubali-names', () => {
    describe('all', () => {
        it('should be an array of strings', () => {
            expect(baahubali.all).to.satisfy(array => array.every(item => typeof item === 'string'));
        });

        it('should contain `Amarendra Baahubali (Baahu)`', () => {
          expect(baahubali.all).to.include('Amarendra Baahubali (Baahu)');
        })
        
    });

    describe('random', () => {
        it('should return a random item from the baahubali.all', () => {
            var randomItem = baahubali.random();

            expect(baahubali.all).to.include(randomItem);
        });
        
        it('should return an array of random items if passed a number', () => {
            var randomItems = baahubali.random(3);
            
            expect(randomItems).to.have.length(3);
            
            randomItems.forEach(item => {
                expect(baahubali.all).to.include(item);
            })
        })
        
        
    });
})