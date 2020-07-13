(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/negative", "./negative"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const negative_1 = require("./string/negative");
    const negative_2 = require("./negative");
    function NegativeStandard(number) {
        return negative_2.default(number, negative_1.default);
    }
    exports.default = NegativeStandard;
});
//# sourceMappingURL=negative-standard.js.map