(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("./boolean/greater");
    class Greater {
        constructor(value, minimum, inclusive, _message) {
            this.value = value;
            this.minimum = minimum;
            this.inclusive = inclusive;
            this._message = _message;
            this.valid = greater_1.default(this);
        }
        get message() {
            return this._message(this);
        }
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map