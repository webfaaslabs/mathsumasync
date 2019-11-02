"use strict";

const assert = require("assert");
const moduleTest = require("../lib");

assert.strictEqual(moduleTest(2,3), 5);
assert.strictEqual(moduleTest(2,8), 10);

console.log("2 + 3 = ", moduleTest(2,3));