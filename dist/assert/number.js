(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/number", "@dikac/t-function/assert/callback", "./throwable/number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("../boolean/number");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const number_2 = require("./throwable/number");
    /**
     * assert if {@param value} is number type
     * @param value
     *
     * @param error
     * error factory
     */
    function Number(value, error = number_2.default) {
        callback_1.default(value, number_1.default, error);
    }
    exports.default = Number;
});
//# sourceMappingURL=number.js.map