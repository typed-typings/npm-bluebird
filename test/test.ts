import test = require('blue-tape');
import Bluebird = require('bluebird');

test('Promise.ctor', (t) => {
  return new Bluebird<void>((resolve, reject) => {
    t.assert(typeof resolve === 'function', 'resolve is a function');
    t.assert(typeof reject === 'function', 'reject is a function');
    resolve(null);
  });
});

test('reflect', (t) => {
  let promises = [Bluebird.resolve(1), Bluebird.resolve(2), Bluebird.reject(3)];

  t.plan(3);
  let good = [1, 2];
  Bluebird.all(promises.map(function (promise) {
    return promise.reflect();
  })).each(function (inspection: Bluebird.Inspection<number>) {
    if (inspection.isFulfilled()) {
      let v = inspection.value();
      t.assert(~good.indexOf(v));
      good.splice(good.indexOf(v), 1);
    } else {
      t.equal(inspection.reason(), 3);
    }
  });
});
