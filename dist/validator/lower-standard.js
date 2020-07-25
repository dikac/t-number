(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lower", "../validatable/string/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("./lower");
    const lower_2 = require("../validatable/string/lower");
    function LowerStandard(maximum, inclusive) {
        return new lower_1.default(maximum, inclusive, lower_2.default);
    }
    exports.default = LowerStandard;
});
//# sourceMappingURL=lower-standard.js.map