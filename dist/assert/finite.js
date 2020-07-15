(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./throwable/finite", "@dikac/t-function/assert/parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("./throwable/finite");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    function Finite(value, error = finite_1.default) {
        parameter_1.default(value, isFinite, error);
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map