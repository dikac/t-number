(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("../../assert/string/greater");
    /**
     * message for between validation
     */
    function Greater(instance) {
        return greater_1.default(instance.value, instance.minimum, instance.inclusive, instance.valid);
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map