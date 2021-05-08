import assert from 'assert';
import factorial from './factorial.mjs';

// Example
//assert.equal(factorial(3), 2);
assert.equal(factorial(3), 6, 'ERrrrrrrROR');
assert.equal(factorial(1), 1);
assert.equal(factorial(7), 5040);

