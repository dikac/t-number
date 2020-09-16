(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/lower", "@dikac/t-function/assert/callback", "./throwable/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("../boolean/lower");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const lower_2 = require("./throwable/lower");
    /**
     * assert if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
     *
     * @param number
     * @param maximum
     * @param inclusive
     * @param error
     * error factory
     */
    function Lower(number, maximum, inclusive, error = lower_2.default) {
        callback_1.default(number, lower_1.default, error, maximum, inclusive);
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map