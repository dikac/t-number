(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../boolean/lower-from-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const lower_from_object_1 = require("../boolean/lower-from-object");
    class Lower extends readonly_merge_1.default {
        constructor(number, maximum, inclusive, message) {
            let container = {
                maximum: maximum,
                inclusive: inclusive,
                value: number
            };
            let msg = callback_1.default(container, lower_from_object_1.default, () => message(this));
            super(container, msg, msg);
            this.maximum = maximum;
            this.inclusive = inclusive;
        }
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map