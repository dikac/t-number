(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("../../boolean/lower");
    function Lower(object) {
        return lower_1.default(object.value, object.maximum, object.inclusive);
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map