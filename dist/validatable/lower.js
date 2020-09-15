(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/lower", "@dikac/t-object/value/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("./boolean/lower");
    const set_getter_1 = require("@dikac/t-object/value/value/set-getter");
    class Lower {
        constructor(value, maximum, inclusive, messageFactory) {
            this.value = value;
            this.maximum = maximum;
            this.inclusive = inclusive;
            this.messageFactory = messageFactory;
        }
        get valid() {
            return set_getter_1.default(this, 'valid', lower_1.default(this));
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
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map