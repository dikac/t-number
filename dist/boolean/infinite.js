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
    function Infinite(number) {
        switch (number) {
            case Number.POSITIVE_INFINITY:
            case Number.NEGATIVE_INFINITY:
                return true;
        }
        return false;
    }
    exports.default = Infinite;
});
//# sourceMappingURL=infinite.js.map