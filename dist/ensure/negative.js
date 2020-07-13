(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/negative", "../assert/throwable/negative"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const negative_1 = require("../assert/negative");
    const negative_2 = require("../assert/throwable/negative");
    function Negative(value, error = negative_2.default) {
        negative_1.default(value, error);
        return value;
    }
    exports.default = Negative;
});
//# sourceMappingURL=negative.js.map