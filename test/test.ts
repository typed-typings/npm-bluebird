import test = require('blue-tape');
import Bluebird = require('bluebird');

test('Promise.ctor', (t) => {
  return new Bluebird<void>((resolve, reject) => {
    t.assert(typeof resolve === 'function', 'resolve is a function');
    t.assert(typeof reject === 'function', 'reject is a function');
    resolve(null);
  });
});
