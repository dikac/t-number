(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/infinite", "../assert/throwable/infinite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const infinite_1 = require("../assert/infinite");
    const infinite_2 = require("../assert/throwable/infinite");
    function Infinite(value, error = infinite_2.default) {
        infinite_1.default(value, error);
        return value;
    }
    exports.default = Infinite;
});
//# sourceMappingURL=infinite.js.map