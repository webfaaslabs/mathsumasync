"use strict";

const assert = require("assert");
const moduleTest = require("../lib");

var context1 = {};
var context2 = {};
console.log("send math.sum.queue1", moduleTest.emit("math.sum.queue1", {x:2, y:3}, context1));
console.log("send math.sum", moduleTest.emit("math.sum", {x:2, y:8}, context2));

console.log("***wait response***");

if (context1.reply){
    context1.reply.then(function(response){
        console.log("math.sum.queue1.response:", response);
        assert.strictEqual(response, 5);
    }).catch(function(err){
        console.log("math.sum.queue1.err:", err);
    })
}

if (context2.reply){
    context2.reply.then(function(response){
        console.log("math.sum.response:", response);
        assert.strictEqual(response, 10);
    }).catch(function(err){
        console.log("math.sum.err:", err);
    })
}

/*
assert.strictEqual(moduleTest(2,3), 5);
assert.strictEqual(moduleTest(2,8), 10);

console.log("2 + 3 = ", moduleTest(2,3));
*/