(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/infinite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const infinite_1 = require("../validatable/infinite");
    class Infinite {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return infinite_1.default(value, this.message);
        }
    }
    exports.default = Infinite;
});
//# sourceMappingURL=infinite.js.map