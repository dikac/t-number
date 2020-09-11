(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-must"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_must_1 = require("@dikac/t-string/message/sentences-must");
    function Integer(valid, value, subject = '') {
        const sentence = sentences_must_1.default(valid, [subject]);
        sentence.expect = ['integer number'];
        sentence.comma.push('expect');
        if (!valid) {
            sentence.actual.push('actual', `"${value.toString()}"`);
        }
        return sentence.message;
    }
    exports.default = Integer;
});
//# sourceMappingURL=integer.js.map