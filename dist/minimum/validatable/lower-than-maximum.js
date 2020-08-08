(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/validatable/readonly-merge", "@dikac/t-validator/validatable/callback", "../boolean/lower-than-maximum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-validator/validatable/readonly-merge");
    const callback_1 = require("@dikac/t-validator/validatable/callback");
    const lower_than_maximum_1 = require("../boolean/lower-than-maximum");
    class Greater extends readonly_merge_1.default {
        constructor(object, message) {
            let container = {
                maximum: object.maximum,
                minimum: object.minimum,
                inclusive: object.inclusive,
                value: object
            };
            let msg = callback_1.default(container, lower_than_maximum_1.default, () => message(this));
            super(container, msg, msg);
            this.minimum = object.minimum;
            this.maximum = object.maximum;
            this.inclusive = object.inclusive;
        }
    }
    exports.default = Greater;
});
//# sourceMappingURL=lower-than-maximum.js.map