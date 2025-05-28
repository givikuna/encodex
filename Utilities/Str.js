"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Str = void 0;
class Str {
    static title(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    static supertrim(s) {
        return s.replace(/\r?\n|\r/g, "").trim();
    }
}
exports.Str = Str;
