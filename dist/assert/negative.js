(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/negative", "./throwable/negative", "@dikac/t-function/assert/parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const negative_1 = require("../boolean/negative");
    const negative_2 = require("./throwable/negative");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    function Negative(value, error = negative_2.default) {
        parameter_1.default(value, negative_1.default, error);
    }
    exports.default = Negative;
});
//# sourceMappingURL=negative.js.map