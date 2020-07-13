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
    function Finite(value, valid) {
        if (valid) {
            return `value "${value}" is finite`;
        }
        else {
            return `value "${value}" is not finite`;
        }
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map