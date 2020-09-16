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
     * check if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
     *
     * @param number
     * @param minimum
     * @param inclusive
     */
    function Greater(number, minimum, inclusive = false) {
        return inclusive ? number >= minimum : number > minimum;
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map