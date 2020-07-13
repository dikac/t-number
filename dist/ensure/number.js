(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/number", "../assert/throwable/number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("../assert/number");
    const number_2 = require("../assert/throwable/number");
    function Number(value, error = number_2.default) {
        number_1.default(value, error);
        return value;
    }
    exports.default = Number;
});
//# sourceMappingURL=number.js.map