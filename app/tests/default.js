var {assert, expect} = require('chai');
//include the assertion and expectations functions.

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
      expect([1,2]).to.be.an('array').that.does.not.include(3);
    });
    it('should return the correct index when the item is present', function(){
        assert.equal([1,2,3].indexOf(2), 1);
        assert.equal([1,2,3].indexOf(3), 2);
        expect('foo').to.be.a('string');
    });
  });
});