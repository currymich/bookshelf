var should = require('should');
describe('Numbers', function() {
  it('should equal itself', function() {
    (10).should.be.exactly(10);
  });

  it('should be able to add', function() {
    (10 + 5).should.be.exactly(15);
  })

  it('and subtract', function() {
    (10 - 5).should.be.exactly(5)
  })
});
