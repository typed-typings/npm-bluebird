/// <reference path="./main.d.ts" />
/// <reference path="../typings/main.d.ts" />
import test = require('blue-tape');
import BlueBirdPromise = require('bluebird');

test('Promise.ctor', (t) => {
  return new BlueBirdPromise((resolve, reject) => {
    resolve();
  });
});
