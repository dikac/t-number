(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/nan"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const nan_1 = require("../string/nan");
    function Nan(number, subject) {
        return new Error(nan_1.default(false, number, subject));
    }
    exports.default = Nan;
});
//# sourceMappingURL=nan.js.map