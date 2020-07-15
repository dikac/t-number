(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/number", "@dikac/t-function/assert/parameter", "./throwable/number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("../boolean/number");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    const number_2 = require("./throwable/number");
    function Number(value, error = number_2.default) {
        parameter_1.default(value, number_1.default, error);
    }
    exports.default = Number;
});
//# sourceMappingURL=number.js.map