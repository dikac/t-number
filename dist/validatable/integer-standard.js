(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/integer", "./integer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const integer_1 = require("./string/integer");
    const integer_2 = require("./integer");
    function IntegerStandard(number) {
        return integer_2.default(number, integer_1.default);
    }
    exports.default = IntegerStandard;
});
//# sourceMappingURL=integer-standard.js.map