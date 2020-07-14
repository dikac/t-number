(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/message/readonly-merge", "@dikac/t-validatable/message/callback", "../boolean/lower-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-validatable/message/readonly-merge");
    const callback_1 = require("@dikac/t-validatable/message/callback");
    const lower_object_1 = require("../boolean/lower-object");
    class Lower extends readonly_merge_1.default {
        constructor(number, maximum, inclusive, message) {
            let container = {
                maximum: maximum,
                inclusive: inclusive,
                value: number
            };
            let msg = callback_1.default(container, lower_object_1.default, () => message(this));
            super(container, msg, msg);
            this.maximum = maximum;
            this.inclusive = inclusive;
        }
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map