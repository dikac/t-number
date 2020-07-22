(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/finite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const finite_1 = require("../validatable/finite");
    class Finite {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return finite_1.default(value, this.message);
        }
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map