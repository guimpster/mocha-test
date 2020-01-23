require('should')

const {three} = require('../')

describe('Should test your main function', () => {
  it('Should return the correct result', async () => {
    three().should.be.equal(3)
  })
})