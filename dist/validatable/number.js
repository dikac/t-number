(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/callback", "../boolean/number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-value/message/callback");
    const number_1 = require("../boolean/number");
    function Number(value, message) {
        return callback_1.default(value, number_1.default, message);
    }
    exports.default = Number;
});
//# sourceMappingURL=number.js.map