(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/greater", "@dikac/t-function/assert/callback", "./throwable/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("../boolean/greater");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const greater_2 = require("./throwable/greater");
    /**
     * assert if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
     *
     * @param number
     * @param minimum
     * @param inclusive
     * @param error
     * @constructor
     */
    function Greater(number, minimum, inclusive, error = greater_2.default) {
        callback_1.default(number, greater_1.default, error, minimum, inclusive);
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map