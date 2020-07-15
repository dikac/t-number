(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/positive", "./throwable/positive", "@dikac/t-function/assert/parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const positive_1 = require("../boolean/positive");
    const positive_2 = require("./throwable/positive");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    function Positive(value, error = positive_2.default) {
        parameter_1.default(value, positive_1.default, error);
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map