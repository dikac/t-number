(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("./lower");
    function LowerFromObject(object) {
        return new lower_1.default(object.maximum, object.inclusive, object.message);
    }
    exports.default = LowerFromObject;
});
//# sourceMappingURL=lower-from-object.js.map