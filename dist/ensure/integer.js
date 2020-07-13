(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/integer", "../assert/throwable/integer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const integer_1 = require("../assert/integer");
    const integer_2 = require("../assert/throwable/integer");
    function Integer(value, error = integer_2.default) {
        integer_1.default(value, error);
        return value;
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map