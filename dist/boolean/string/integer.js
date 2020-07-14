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
    function Integer(valid, value) {
        if (valid) {
            return `value "${value}" is integer`;
        }
        else {
            return `value "${value}" is not integer`;
        }
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map