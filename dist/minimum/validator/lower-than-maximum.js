(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/lower-than-maximum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_than_maximum_1 = require("../validatable/lower-than-maximum");
    class LowerThanMaximum {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return new lower_than_maximum_1.default(value, this.message);
        }
    }
    exports.default = LowerThanMaximum;
});
//# sourceMappingURL=lower-than-maximum.js.map