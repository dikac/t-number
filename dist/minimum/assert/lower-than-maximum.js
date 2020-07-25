(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/lower-than-maximum", "./throwable/lower-than-maximum", "@dikac/t-function/assert/parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_than_maximum_1 = require("../boolean/lower-than-maximum");
    const lower_than_maximum_2 = require("./throwable/lower-than-maximum");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    function LowerThanMaximum(object, error = lower_than_maximum_2.default) {
        parameter_1.default(object, lower_than_maximum_1.default, error);
    }
    exports.default = LowerThanMaximum;
});
//# sourceMappingURL=lower-than-maximum.js.map