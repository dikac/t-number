(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/number", "./number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("./string/number");
    const number_2 = require("./number");
    function NumberStandard(value) {
        return number_2.default(value, number_1.default);
    }
    exports.default = NumberStandard;
});
//# sourceMappingURL=number-standard.js.map