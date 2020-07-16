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
    function RandomFloat(minimum, maximum, inclusive = true /*, precision ?: number*/) {
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
        let random = Math.random() * (maximum - minimum);
        let result = random + minimum;
        if (inclusive) {
            return result;
        }
        else {
            if (greater_1.default(result, minimum, inclusive) && lower_1.default(result, maximum, inclusive)) {
                return result;
            }
            else {
                return RandomFloat(minimum, maximum, inclusive);
            }
        }
    }
    exports.default = RandomFloat;
});
//# sourceMappingURL=random-float.js.map