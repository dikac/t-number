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
     * check if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
     *
     * @param number
     * @param maximum
     * @param inclusive
     */
    function Lower(number, maximum, inclusive = false) {
        return inclusive ? number <= maximum : number < maximum;
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map