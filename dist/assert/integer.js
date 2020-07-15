(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/integer", "./throwable/integer", "@dikac/t-function/assert/parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const integer_1 = require("../boolean/integer");
    const integer_2 = require("./throwable/integer");
    const parameter_1 = require("@dikac/t-function/assert/parameter");
    function Integer(value, error = integer_2.default) {
        parameter_1.default(value, integer_1.default, error);
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map