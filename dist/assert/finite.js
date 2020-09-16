(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./throwable/finite", "@dikac/t-function/assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("./throwable/finite");
    const callback_1 = require("@dikac/t-function/assert/callback");
    /**
     * assert if {@param number} is finite
     *
     * @param number
     * @param error
     * error factory
     */
    function Finite(number, error = finite_1.default) {
        callback_1.default(number, isFinite, error);
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map