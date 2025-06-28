"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nothing = exports.just = exports.Nothing = exports.Just = void 0;
class Just {
    value;
    type = "Just";
    constructor(value) {
        this.value = value;
    }
    isJust() {
        return true;
    }
    isNothing() {
        return false;
    }
    map(f) {
        return new Just(f(this.value));
    }
    flatMap(f) {
        return f(this.value);
    }
}
exports.Just = Just;
class Nothing {
    type = "Nothing";
    isJust() {
        return false;
    }
    isNothing() {
        return true;
    }
    map(_) {
        return new Nothing();
    }
    flatMap(_) {
        return new Nothing();
    }
}
exports.Nothing = Nothing;
// Helpers
const just = (value) => new Just(value);
exports.just = just;
const nothing = () => new Nothing();
exports.nothing = nothing;
