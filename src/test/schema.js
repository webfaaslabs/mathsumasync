"use strict";

const assert = require("assert");
const schema = require("../schema");

assert.strictEqual(schema.input.type, "array");
assert.strictEqual(schema.output.type, "number");

console.log("input => ", schema.input);
console.log("output => ", schema.output);