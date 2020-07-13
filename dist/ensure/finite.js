(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/finite", "../assert/throwable/finite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("../assert/finite");
    const finite_2 = require("../assert/throwable/finite");
    function Finite(value, error = finite_2.default) {
        finite_1.default(value, error);
        return value;
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map