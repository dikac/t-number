(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../string/greater-than-minimum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_than_minimum_1 = require("../../string/greater-than-minimum");
    function GreaterThanMaximum(object) {
        return new Error(greater_than_minimum_1.default({
            valid: false,
            maximum: object.maximum,
            minimum: object.minimum,
            inclusive: object.inclusive,
        }));
    }
    exports.default = GreaterThanMaximum;
});
//# sourceMappingURL=greater-than-maximum.js.map