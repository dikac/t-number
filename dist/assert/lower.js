(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/lower", "./throwable/integer", "@dikac/t-function/assert/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("../boolean/lower");
    const integer_1 = require("./throwable/integer");
    const callback_1 = require("@dikac/t-function/assert/callback");
    function Lower(value, minimum, inclusive, error = integer_1.default) {
        callback_1.default(value, lower_1.default, error, minimum, inclusive);
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map