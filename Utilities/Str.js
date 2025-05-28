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
    static camelCase(s) {
        return s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
    }
    static kebabCase(s) {
        return s
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }
    static snakeCase(s) {
        return s
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "_")
            .replace(/^_+|_+$/g, "");
    }
    static truncate(s, length, suffix = "...") {
        return s.length > length ? s.slice(0, length - suffix.length) + suffix : s;
    }
    static reverse(s) {
        return [...s].reverse().join("");
    }
    static contains(s, substring, ignoreCase = false) {
        return ignoreCase ? s.toLowerCase().includes(substring.toLowerCase()) : s.includes(substring);
    }
    static padCenter(s, width, char = " ") {
        const len = s.length;
        const pad = width - len;
        if (pad <= 0) {
            return s;
        }
        const left = Math.floor(pad / 2);
        const right = pad - left;
        return char.repeat(left) + s + char.repeat(right);
    }
}
exports.Str = Str;
