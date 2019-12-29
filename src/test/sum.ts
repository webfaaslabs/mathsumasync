"use strict";

import { sum } from "../index";

sum({x:2, y:8}).then((response) => {
    console.log("response", response);
});

//assert.strictEqual(response, 10);