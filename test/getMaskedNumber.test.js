var expect = require('chai').expect
var getMaskedNumber = require('../getMaskedNumber')

describe('masked number',function(){
  it('should be 1 for 1',function(){
    expect(getMaskedNumber(1)).to.be.equal(1)
  })
  it('should be 2 for 2',function(){
    expect(getMaskedNumber(2)).to.be.equal(2)
  })
  it('should be Fizz for 3',function(){
    expect(getMaskedNumber(3)).to.be.equal('Fizz')
  })
})
