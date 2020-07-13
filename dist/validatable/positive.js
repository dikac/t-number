(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/message/callback", "../boolean/positive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-validatable/message/callback");
    const positive_1 = require("../boolean/positive");
    function Positive(number, message) {
        return callback_1.default(number, positive_1.default, message);
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map