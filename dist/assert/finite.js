(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./throwable/finite", "@dikac/t-function/assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("./throwable/finite");
    const callback_1 = require("@dikac/t-function/assert/callback");
    function Finite(value, error = finite_1.default) {
        callback_1.default(value, isFinite, error);
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map