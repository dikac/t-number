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
    function RandomFloat(minimum, maximum) {
        if (maximum === undefined) {
            maximum = minimum;
            minimum = 0;
        }
        if (minimum > maximum) {
            throw new Error(`minimum(${minimum}) must not greater than maximum(${maximum})`);
        }
        let random = Math.random() * (maximum - minimum);
        return random + minimum;
    }
    exports.default = RandomFloat;
});
//# sourceMappingURL=random-float.js.map