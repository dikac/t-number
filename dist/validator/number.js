(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("../validatable/number");
    class Number {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return number_1.default(value, this.message);
        }
    }
    exports.default = Number;
});
//# sourceMappingURL=number.js.map