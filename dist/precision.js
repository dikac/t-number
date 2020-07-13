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
    function Precision(number, precision) {
        let strings = number.toString().split('.');
        if (strings[1] !== undefined) {
            strings[1] = strings[1].substr(0, precision);
            number = parseFloat(strings.join('.'));
        }
        return number;
    }
    exports.default = Precision;
});
//# sourceMappingURL=precision.js.map