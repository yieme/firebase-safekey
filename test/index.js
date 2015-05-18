var expect = require('chai').expect,
    firebaseSafekey;

describe('firebase-safekey', function() {
  it('should load', function(done) {
    firebaseSafekey = require('..')
    done();
  });

  var expected = { 'key<>p1': 'value1', 'key<>o2<>c': 'value2' }
  var expectedString = JSON.stringify(expected)
  it('should eaual ' + expectedString, function(done) {
    var test = firebaseSafekey.safe({ 'key#1': 'value1', 'key[2]': 'value2' })
    var json = JSON.stringify(test)
    expect(json).to.equal(expectedString);
    done();
  });

});
