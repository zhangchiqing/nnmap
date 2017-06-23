var assert = require('assert');
var mapNotNil = require('./index');


var add2 = function(a) {
  return a + 2;
};

var should_pass = function() {
  assert.equal(mapNotNil(add2, 1), 3);
  assert.equal(mapNotNil(add2, 3), 5);
  assert.equal(mapNotNil(add2, undefined), undefined);
  assert.equal(mapNotNil(add2, null), null);
  assert.equal(mapNotNil(add2, 1), mapNotNil(add2)(1));
  assert.equal(mapNotNil(add2, 3), mapNotNil(add2)(3));
  assert.equal(mapNotNil(add2, undefined), mapNotNil(add2)(undefined));
  assert.equal(mapNotNil(add2, null), mapNotNil(add2)(null));
};

describe(__filename, function() {
  it('should_pass', should_pass);
});
