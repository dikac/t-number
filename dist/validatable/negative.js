(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/callback", "../boolean/negative"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-validator/validatable/callback");
    const negative_1 = require("../boolean/negative");
    function Negative(number, message) {
        return callback_1.default(number, negative_1.default, message);
    }
    exports.default = Negative;
});
//# sourceMappingURL=negative.js.map