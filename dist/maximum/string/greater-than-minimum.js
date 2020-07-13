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
    function GreaterThanMinimum(object) {
        let parts = [];
        parts.push(`maximum "${object.maximum}"`);
        if (object.valid) {
            parts.push(`is greater`);
        }
        else {
            parts.push(`must greater`);
        }
        if (object.inclusive) {
            parts.push('or equal');
        }
        parts.push(`than minimum "${object.minimum}"`);
        return parts.join(' ');
    }
    exports.default = GreaterThanMinimum;
});
//# sourceMappingURL=greater-than-minimum.js.map