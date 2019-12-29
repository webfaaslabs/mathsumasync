"use strict";

declare function require(moduleName: string): any;

const mathSum = require("@webfaaslabs/mathsum");

export async function sum(event: schema.sum.input): Promise<schema.sum.output> {
    return {result: mathSum(event.x, event.y)};
}