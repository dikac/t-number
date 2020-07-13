(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/negative"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const negative_1 = require("../validatable/negative");
    class Negative {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return negative_1.default(value, this.message);
        }
    }
    exports.default = Negative;
});
//# sourceMappingURL=negative.js.map