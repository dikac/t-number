(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/negative"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const negative_1 = require("../../boolean/string/negative");
    function Negative(object) {
        return negative_1.default(object.valid, object.value);
    }
    exports.default = Negative;
});
//# sourceMappingURL=negative.js.map