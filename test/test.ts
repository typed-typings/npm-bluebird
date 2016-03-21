/// <reference path="./main.d.ts" />
/// <reference path="../typings/main.d.ts" />
import test = require('blue-tape');
import BlueBirdPromise = require('bluebird');

test('Promise.ctor', (t) => {
  return new BlueBirdPromise((resolve, reject) => {
    t.assert(typeof resolve === 'function', 'resolve is a function');
    t.assert(typeof reject === 'function', 'reject is a function');
    resolve();
  });
});
