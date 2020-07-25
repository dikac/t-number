(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./infinite", "../validatable/string/infinite"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const infinite_1 = require("./infinite");
    const infinite_2 = require("../validatable/string/infinite");
    function InfiniteStandard() {
        return new infinite_1.default(infinite_2.default);
    }
    exports.default = InfiniteStandard;
});
//# sourceMappingURL=infinite-standard.js.map