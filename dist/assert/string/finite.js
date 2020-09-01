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
    function Finite(valid, value, subject = '') {
        const sentence = new sentences_is_1.default(valid, [subject, value.toString()]);
        sentence.type = ['finite'];
        return sentence.message;
    }
    exports.default = Finite;
});
//# sourceMappingURL=finite.js.map