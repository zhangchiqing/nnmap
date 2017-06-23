// (a -> b), a? -> b?
var mapNotNil = function(f, value) {
  var isNil = value === undefined || value === null;
  if (isNil) {
    return value;
  }
  return f(value);
};

// (a -> b) -> a? -> b?
module.exports = function(f, value) {
  if (arguments.length === 1) {
    return function(v) {
      return mapNotNil(f, v);
    };
  }
  return mapNotNil(f, value);
};
