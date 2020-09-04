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
    function Positive(valid, value, subject = '') {
        let sentence = sentences_is_1.default(valid);
        sentence.object.push('positive');
        sentence.subject.push(subject, value.toString());
        return sentence.message;
    }
    exports.default = Positive;
});
//# sourceMappingURL=positive.js.map