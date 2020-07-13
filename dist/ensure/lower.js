(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/lower", "../assert/throwable/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("../assert/lower");
    const lower_2 = require("../assert/throwable/lower");
    function Lower(value, maximum, inclusive, error = lower_2.default) {
        lower_1.default(value, maximum, inclusive, error);
        return value;
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map