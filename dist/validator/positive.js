(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/positive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const positive_1 = require("../validatable/positive");
    class Positive {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return positive_1.default(value, this.message);
        }
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map