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
    /**
     * check if {@param number} is infinite
     * @param number
     */
    function Integer(number) {
        if (isFinite(number)) {
            return number === Math.ceil(number);
        }
        return false;
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map