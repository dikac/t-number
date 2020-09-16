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
     * check if {@param number} is positive
     * @param number
     */
    function Positive(number) {
        return number > 0;
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map