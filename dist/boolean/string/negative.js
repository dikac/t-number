(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Negative(valid, value) {
        if (valid) {
            return `value "${value}" is negative`;
        }
        else {
            return `value "${value}" is not negative`;
        }
    }
    exports.default = Negative;
});
//# sourceMappingURL=negative.js.map