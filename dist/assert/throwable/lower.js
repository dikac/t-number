(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("../string/lower");
    function Lower(number, minimum, inclusive) {
        return new Error(lower_1.default(false, number, minimum, inclusive));
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map