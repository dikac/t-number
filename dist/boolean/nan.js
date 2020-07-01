(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("./type");
    function Nan(value) {
        if (!type_1.default(value)) {
            return false;
        }
        return isNaN(value);
    }
    exports.default = Nan;
});
//# sourceMappingURL=nan.js.map