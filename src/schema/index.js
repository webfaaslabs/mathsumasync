"use strict";

module.exports.format = "json-schema";

module.exports.input = {
    type: "array",
    items: {type: "number"}
};

module.exports.output = {
    type: "number"
};