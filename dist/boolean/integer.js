(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./finite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("./finite");
    function Integer(number) {
        if (finite_1.default(number)) {
            return number === Math.floor(number);
        }
        return false;
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map