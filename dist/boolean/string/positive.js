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
    function Positive(valid, value) {
        if (valid) {
            return `value "${value}" is positive`;
        }
        else {
            return `value "${value}" is not positive`;
        }
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map