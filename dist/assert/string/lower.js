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
     * message for lower validation
     */
    function Lower(valid, value, minimum, inclusive, subject = '') {
        const sentence = new sentences_is_1.default(valid, [subject, value.toString()]);
        sentence.type = [minimum.toString()];
        if (inclusive) {
            sentence.expectation = {
                invalid: ['must lower or equal than'],
                valid: ['is lower or equal than'],
            };
        }
        else {
            sentence.expectation = {
                invalid: ['must lower than'],
                valid: ['is lower than'],
            };
        }
        return sentence.message;
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map