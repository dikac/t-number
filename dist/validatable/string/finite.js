(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/finite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("../../assert/string/finite");
    function Finite(object) {
        return finite_1.default(object.valid, object.value);
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map