(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/infinite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const infinite_1 = require("../string/infinite");
    function Infinite(number) {
        return new Error(infinite_1.default(number, false));
    }
    exports.default = Infinite;
});
//# sourceMappingURL=infinite.js.map