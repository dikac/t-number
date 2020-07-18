(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../boolean/greater-from-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const greater_from_object_1 = require("../boolean/greater-from-object");
    class Greater extends readonly_merge_1.default {
        constructor(number, minimum, inclusive, message) {
            let container = {
                minimum: minimum,
                inclusive: inclusive,
                value: number
            };
            let msg = callback_1.default(container, greater_from_object_1.default, () => message(this));
            super(container, msg, msg);
            this.minimum = minimum;
            this.inclusive = inclusive;
        }
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map