(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/positive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const positive_1 = require("../../assert/string/positive");
    function Positive(object) {
        return positive_1.default(object.valid, object.value, 'value');
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map