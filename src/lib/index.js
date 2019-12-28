"use strict";

const EventEmitter = require("events");
const emitter = new EventEmitter();
const mathSum = require("@webfaaslabs/mathsum");
const mathSumSchema = require("../schema");

emitter.on("math.sum.queue1", (event, context) => {
    console.log("event received in math.sum.queue1!", "event:", event, "context", context);

    context.reply = new Promise(function(resolve, reject){
        let newContext = {};
        emitter.emit("math.sum", event, newContext);
        newContext.reply.then(function(value){
            resolve(value);
        })
    })
})

emitter.on("math.sum", (event, context) => {
    console.log("event received in math.sum", "event:", event, "context", context);

    context.reply = new Promise(function(resolve, reject){
        resolve(mathSum(event.x, event.y));
    })
})

emitter.on("math.sum#schema", (event, context) => {
    context.reply = mathSumSchema;
})

module.exports = emitter;