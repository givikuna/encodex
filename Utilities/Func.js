"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
class Function {
    flip(f) {
        return (...args) => f(...args.reverse());
    }
}
exports.Function = Function;
