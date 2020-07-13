(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./random-float"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const random_float_1 = require("./random-float");
    function RandomFloatFromObject(object) {
        return random_float_1.default(object.minimum, object.maximum, object.inclusive);
    }
    exports.default = RandomFloatFromObject;
});
//# sourceMappingURL=random-float-from-object.js.map