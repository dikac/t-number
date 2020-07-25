(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./number", "../validatable/string/number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("./number");
    const number_2 = require("../validatable/string/number");
    function NumberStandard() {
        return new number_1.default(number_2.default);
    }
    exports.default = NumberStandard;
});
//# sourceMappingURL=number-standard.js.map