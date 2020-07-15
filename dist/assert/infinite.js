(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/infinite", "./throwable/infinite", "@dikac/t-function/assert/parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const infinite_1 = require("../boolean/infinite");
    const infinite_2 = require("./throwable/infinite");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    function Infinite(value, error = infinite_2.default) {
        parameter_1.default(value, infinite_1.default, error);
    }
    exports.default = Infinite;
});
//# sourceMappingURL=infinite.js.map