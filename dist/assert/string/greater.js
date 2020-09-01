(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_is_1 = require("@dikac/t-string/message/sentences-is");
    /**
     * message for greater validation
     */
    function Greater(valid, value, minimum, inclusive, subject = '') {
        const sentence = new sentences_is_1.default(valid, [subject, value.toString()]);
        sentence.type = [minimum.toString()];
        if (inclusive) {
            sentence.expectation = {
                invalid: ['must greater or equal than'],
                valid: ['is greater or equal than'],
            };
        }
        else {
            sentence.expectation = {
                invalid: ['must greater than'],
                valid: ['is greater than'],
            };
        }
        return sentence.message;
    }
    exports.default = Greater;
});
//# sourceMappingURL=greater.js.map