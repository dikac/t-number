(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../string/lower-than-maximum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_than_maximum_1 = require("../../string/lower-than-maximum");
    function LowerThanMaximum(object) {
        return new Error(lower_than_maximum_1.default({
            valid: false,
            maximum: object.maximum,
            minimum: object.minimum,
            inclusive: object.inclusive,
        }));
    }
    exports.default = LowerThanMaximum;
});
//# sourceMappingURL=lower-than-maximum.js.map