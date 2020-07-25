(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./greater", "../validatable/string/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("./greater");
    const greater_2 = require("../validatable/string/greater");
    function GreaterStandard(minimum, inclusive) {
        return new greater_1.default(minimum, inclusive, greater_2.default);
    }
    exports.default = GreaterStandard;
});
//# sourceMappingURL=greater-standard.js.map