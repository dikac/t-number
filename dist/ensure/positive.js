(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/positive", "../assert/throwable/positive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const positive_1 = require("../assert/positive");
    const positive_2 = require("../assert/throwable/positive");
    function Positive(value, error = positive_2.default) {
        positive_1.default(value, error);
        return value;
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map