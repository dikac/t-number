(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/integer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const integer_1 = require("../validatable/integer");
    class Integer {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return integer_1.default(value, this.message);
        }
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map