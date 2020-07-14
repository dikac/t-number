(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/nan"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const nan_1 = require("../../boolean/string/nan");
    function Nan(object) {
        return nan_1.default(object.valid, object.value);
    }
    exports.default = Nan;
});
//# sourceMappingURL=nan.js.map