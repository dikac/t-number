(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./callback", "../boolean/negative"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("./callback");
    const negative_1 = require("../boolean/negative");
    function Negative(number, message) {
        return new callback_1.default(number, negative_1.default, message);
    }
    exports.default = Negative;
});
//# sourceMappingURL=negative.js.map