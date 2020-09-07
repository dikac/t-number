(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-validator/validatable/callback");
    class Callback extends callback_1.default {
        valueOf() {
            return this.value;
        }
        toString(radix) {
            return this.value.toString(radix);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map