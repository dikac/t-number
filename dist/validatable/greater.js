(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/greater", "@dikac/t-object/value/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const greater_1 = require("./boolean/greater");
    const set_getter_1 = require("@dikac/t-object/value/value/set-getter");
    class Greater {
        constructor(value, minimum, inclusive, messageFactory) {
            this.value = value;
            this.minimum = minimum;
            this.inclusive = inclusive;
            this.messageFactory = messageFactory;
        }
        get valid() {
            return set_getter_1.default(this, 'valid', greater_1.default(this));
        }
        get message() {
            return set_getter_1.default(this, 'message', this.messageFactory(this));
        }
        valueOf() {
            return this.value;
        }
        toString(radix) {
            return this.value.toString(radix);
        }
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map