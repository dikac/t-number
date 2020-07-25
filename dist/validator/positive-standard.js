(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./positive", "../validatable/string/positive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const positive_1 = require("./positive");
    const positive_2 = require("../validatable/string/positive");
    function PositiveStandard() {
        return new positive_1.default(positive_2.default);
    }
    exports.default = PositiveStandard;
});
//# sourceMappingURL=positive-standard.js.map