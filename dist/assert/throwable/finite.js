(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/finite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("../string/finite");
    function Finite(number, subject) {
        return new Error(finite_1.default(false, number, subject));
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map