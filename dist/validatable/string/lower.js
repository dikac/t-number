(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("../../assert/string/lower");
    /**
     * message for between validation
     */
    function Lower(instance) {
        return lower_1.default(instance.valid, instance.value, instance.maximum, instance.inclusive, 'value');
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map