(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./finite", "../validatable/string/finite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("./finite");
    const finite_2 = require("../validatable/string/finite");
    function FiniteStandard() {
        return new finite_1.default(finite_2.default);
    }
    exports.default = FiniteStandard;
});
//# sourceMappingURL=finite-standard.js.map