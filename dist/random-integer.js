(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/greater", "./boolean/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("./boolean/greater");
    const lower_1 = require("./boolean/lower");
    function RandomInteger(minimum, maximum, inclusive = true) {
        if (minimum > maximum) {
            throw new Error(`minimum (${minimum}) must not greater than maximum (${maximum})`);
        }
        else if (minimum === maximum) {
            if (!inclusive) {
                throw new Error(`minimum (${minimum}) must not equal maximum (${maximum}) in exclusive mode`);
            }
            else {
                return minimum;
            }
        }
        else if ((maximum - minimum) <= 1) {
            if (!inclusive) {
                throw new Error(`minimum (${minimum}) and maximum (${maximum}) different must greater than 1 in exclusive mode`);
            }
        }
        let random = Math.random() * (maximum - minimum + 1);
        random = Math.floor(random + minimum);
        if (inclusive) {
            return random;
        }
        else {
            if (greater_1.default(random, minimum, inclusive) && lower_1.default(random, maximum, inclusive)) {
                return random;
            }
            else {
                return RandomInteger(minimum, maximum, inclusive);
            }
        }
    }
    exports.default = RandomInteger;
});
//# sourceMappingURL=random-integer.js.map