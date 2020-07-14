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
    function Infinite(valid, value) {
        if (valid) {
            return `value "${value}" is infinite`;
        }
        else {
            return `value "${value}" is not infinite`;
        }
    }
    exports.default = Infinite;
});
//# sourceMappingURL=infinite.js.map