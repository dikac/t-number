(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("../validatable/greater");
    class Greater {
        constructor(minimum, inclusive, message) {
            this.minimum = minimum;
            this.inclusive = inclusive;
            this.message = message;
        }
        validate(value) {
            return new greater_1.default(value, this.minimum, this.inclusive, this.message);
        }
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map