"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Func = void 0;
class Func {
    flip(f) {
        return (...args) => f(...args.reverse());
    }
    noop() { }
    static once(fn) {
        let called = false;
        let result;
        return ((...args) => {
            if (!called) {
                result = fn(...args);
                called = true;
            }
            return result;
        });
    }
    static debounce(fn, wait) {
        let timeout;
        return ((...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), wait);
        });
    }
    static throttle(fn, limit) {
        let inThrottle;
        return ((...args) => {
            if (!inThrottle) {
                fn(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        });
    }
    static memoize(fn) {
        const cache = new Map();
        return ((...args) => {
            const key = JSON.stringify(args);
            if (!cache.has(key)) {
                cache.set(key, fn(...args));
            }
            return cache.get(key);
        });
    }
}
exports.Func = Func;
