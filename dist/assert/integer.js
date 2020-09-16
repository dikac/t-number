(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/integer", "./throwable/integer", "@dikac/t-function/assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const integer_1 = require("../boolean/integer");
    const integer_2 = require("./throwable/integer");
    const callback_1 = require("@dikac/t-function/assert/callback");
    /**
     * assert if {@param number} is integer
     * @param number
     *
     * @param error
     * error factory
     */
    function Integer(number, error = integer_2.default) {
        callback_1.default(number, integer_1.default, error);
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map