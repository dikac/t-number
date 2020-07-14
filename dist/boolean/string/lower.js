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
    /**
     * message for between validation
     */
    function Lower(valid, value, maximum, inclusive) {
        let parts = [];
        parts.push(`value "${value}"`);
        if (valid) {
            parts.push(`is lower`);
        }
        else {
            parts.push(`must lower`);
        }
        if (inclusive) {
            parts.push('or equal');
        }
        parts.push(`than "${maximum}"`);
        return parts.join(' ');
    }
    exports.default = Lower;
});
//# sourceMappingURL=lower.js.map