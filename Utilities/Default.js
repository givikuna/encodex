"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
class Default {
    static comparator(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
    }
}
exports.Default = Default;
