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
    function Number(valid, value) {
        if (valid) {
            return `value is number`;
        }
        else {
            return `value is not number`;
        }
    }
    exports.default = Number;
});
//# sourceMappingURL=number.js.map