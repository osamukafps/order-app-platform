'use strict';

const orders = require('..');
const assert = require('assert').strict;

assert.strictEqual(orders(), 'Hello from orders');
console.info('orders tests passed');
