(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./throwable/nan", "@dikac/t-function/assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const nan_1 = require("./throwable/nan");
    const callback_1 = require("@dikac/t-function/assert/callback");
    /**
     * assert if {@param number} is NaN
     *
     * @param number
     * @param error
     * error factory
     */
    function Nan(number, error = nan_1.default) {
        callback_1.default(number, isNaN, error);
    }
    exports.default = Nan;
});
//# sourceMappingURL=nan.js.map