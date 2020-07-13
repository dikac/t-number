(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/string/infinite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const infinite_1 = require("../../assert/string/infinite");
    function Infinite(object) {
        return infinite_1.default(object.value, object.valid);
    }
    exports.default = Infinite;
});
//# sourceMappingURL=infinite.js.map