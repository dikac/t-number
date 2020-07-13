(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function LowerThanMaximum(object) {
        let parts = [];
        parts.push(`minimum "${object.maximum}"`);
        if (object.valid) {
            parts.push(`is lower`);
        }
        else {
            parts.push(`must lower`);
        }
        if (object.inclusive) {
            parts.push('or equal');
        }
        parts.push(`than maximum "${object.minimum}"`);
        return parts.join(' ');
    }
    exports.default = LowerThanMaximum;
});
//# sourceMappingURL=lower-than-maximum.js.map