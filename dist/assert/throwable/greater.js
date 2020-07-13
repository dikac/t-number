(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("../string/greater");
    function Greater(number, minimum, inclusive) {
        return new Error(greater_1.default(number, minimum, inclusive, false));
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map