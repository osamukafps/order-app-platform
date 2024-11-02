'use strict';

const shipping = require('..');
const assert = require('assert').strict;

assert.strictEqual(shipping(), 'Hello from shipping');
console.info('shipping tests passed');
