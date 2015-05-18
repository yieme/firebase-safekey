var expect = require('chai').expect,
    firebaseSafekey = require('..');
describe('firebase-safekey', function() {
  it('should load', function(done) {
    firebaseSafekey()
    done();
  });

  var expected = ["hello", "world"]
  var expectedString = JSON.stringify(expected)
  it('should eaual ' + expectedString, function(done) {
    var test = firebaseSafekey(expected)
    var json = JSON.stringify(test)
    expect(json).to.equal(expectedString);
    done();
  });

});
