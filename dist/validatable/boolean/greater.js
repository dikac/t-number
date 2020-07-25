(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("../../boolean/greater");
    function Greater(object) {
        return greater_1.default(object.value, object.minimum, object.inclusive);
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map