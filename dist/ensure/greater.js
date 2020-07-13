(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/greater", "../assert/throwable/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("../assert/greater");
    const greater_2 = require("../assert/throwable/greater");
    function Greater(value, minimum, inclusive, error = greater_2.default) {
        greater_1.default(value, minimum, inclusive, error);
        return value;
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map