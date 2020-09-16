(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/greater", "./boolean/lower", "./minimum/assert/lower-than-maximum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("./boolean/greater");
    const lower_1 = require("./boolean/lower");
    const lower_than_maximum_1 = require("./minimum/assert/lower-than-maximum");
    /**
     * get random integer
     * @param minimum
     * @param maximum
     * @param inclusive
     */
    function RandomInteger(minimum, maximum, inclusive = true) {
        lower_than_maximum_1.default({
            maximum: maximum,
            minimum: minimum,
            inclusive: inclusive,
        });
        if ((maximum - minimum) <= 1) {
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