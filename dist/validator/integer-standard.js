(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./integer", "../validatable/string/integer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const integer_1 = require("./integer");
    const integer_2 = require("../validatable/string/integer");
    function IntegerStandard() {
        return new integer_1.default(integer_2.default);
    }
    exports.default = IntegerStandard;
});
//# sourceMappingURL=integer-standard.js.map