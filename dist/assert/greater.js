(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/greater", "./throwable/integer", "@dikac/t-function/assert/parameter-arguments"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("../boolean/greater");
    const integer_1 = require("./throwable/integer");
    const parameter_arguments_1 = require("@dikac/t-function/assert/parameter-arguments");
    function Greater(value, minimum, inclusive, error = integer_1.default) {
        parameter_arguments_1.default(value, greater_1.default, error, [minimum, inclusive]);
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map