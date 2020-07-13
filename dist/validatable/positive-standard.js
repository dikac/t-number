(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/positive", "./positive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const positive_1 = require("./string/positive");
    const positive_2 = require("./positive");
    function PositiveStandard(number) {
        return positive_2.default(number, positive_1.default);
    }
    exports.default = PositiveStandard;
});
//# sourceMappingURL=positive-standard.js.map