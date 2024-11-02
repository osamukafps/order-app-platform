'use strict';

const payments = require('..');
const assert = require('assert').strict;

assert.strictEqual(payments(), 'Hello from payments');
console.info('payments tests passed');
