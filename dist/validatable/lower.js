(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/lower"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("./boolean/lower");
    class Lower {
        constructor(value, maximum, inclusive, _message) {
            this.value = value;
            this.maximum = maximum;
            this.inclusive = inclusive;
            this._message = _message;
            this.valid = lower_1.default(this);
        }
        get message() {
            return this._message(this);
        }
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map