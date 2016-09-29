var expect = require('chai').expect
var getMaskedNumber = require('../getMaskedNumber')

describe('masked number',function(){
  it('should be 1 for 1',function(){
    expect(getMaskedNumber(1)).to.be.equal(1)
  })
})
