(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/greater-than-minimum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_than_minimum_1 = require("../validatable/greater-than-minimum");
    class GreaterThanMinimum {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return new greater_than_minimum_1.default(value, this.message);
        }
    }
    exports.default = GreaterThanMinimum;
});
//# sourceMappingURL=greater-than-minimum.js.map