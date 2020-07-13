(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./random-integer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const random_integer_1 = require("./random-integer");
    function RandomIntegerFromObject(object) {
        return random_integer_1.default(object.minimum, object.maximum, object.inclusive);
    }
    exports.default = RandomIntegerFromObject;
});
//# sourceMappingURL=random-integer-from-object.js.map