let {expect, assert} = require('chai');

describe('We testing something', function(){
    it('should not fuck up', function(){
        expect(function(a){
            return 5
        }()).to.equal(5);
    })
});
