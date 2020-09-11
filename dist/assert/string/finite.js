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
    function Finite(valid, value, subject = '') {
        const sentence = sentences_must_1.default(valid, [subject]);
        sentence.expect = ['finite number'];
        sentence.comma.push('expect');
        if (!valid) {
            sentence.actual.push('actual', `"${value.toString()}"`);
        }
        return sentence.message;
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map