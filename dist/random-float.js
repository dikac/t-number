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
    function RandomFloat(minimum, maximum, precision) {
        if (maximum === undefined) {
            maximum = minimum;
            minimum = 0;
        }
        if (precision !== undefined && precision < 0) {
            throw new Error(`precision must greater than 0`);
        }
        if (minimum > maximum) {
            throw new Error(`minimum(${minimum}) must not greater than maximum(${maximum})`);
        }
        let random = Math.random() * (maximum - minimum);
        let result = random + minimum;
        if (precision) {
            let strings = result.toString().split('.');
            if (strings[1] !== undefined) {
                strings[1] = strings[1].substr(0, precision);
                //console.log('===============');
                //console.log(precision);
                //console.log(strings);
                result = parseFloat(strings.join('.'));
                //console.log(result);
            }
        }
        return result;
    }
    exports.default = RandomFloat;
});
//# sourceMappingURL=random-float.js.map