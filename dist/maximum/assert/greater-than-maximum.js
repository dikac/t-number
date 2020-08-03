(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/greater-than-minimum", "./throwable/greater-than-maximum", "@dikac/t-function/assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_than_minimum_1 = require("../boolean/greater-than-minimum");
    const greater_than_maximum_1 = require("./throwable/greater-than-maximum");
    const callback_1 = require("@dikac/t-function/assert/callback");
    function GreaterThanMaximum(object, error = greater_than_maximum_1.default) {
        callback_1.default(object, greater_than_minimum_1.default, error);
    }
    exports.default = GreaterThanMaximum;
});
//# sourceMappingURL=greater-than-maximum.js.map