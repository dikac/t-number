(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("../validatable/lower");
    class Lower {
        constructor(maximum, inclusive, message) {
            this.maximum = maximum;
            this.inclusive = inclusive;
            this.message = message;
        }
        validate(value) {
            return new lower_1.default(value, this.maximum, this.inclusive, this.message);
        }
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map