"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanAlgebra = void 0;
class BooleanAlgebra {
    static and(a, b) {
        return a && b;
    }
    static or(a, b) {
        return a || b;
    }
    static not(a) {
        return !a;
    }
    static nand(a, b) {
        return !(a && b);
    }
    static nor(a, b) {
        return !(a || b);
    }
    static xor(a, b) {
        return (a && !b) || (!a && b);
    }
    static xnor(a, b) {
        return (a && b) || (!a && !b);
    }
    static implies(a, b) {
        return !a || b;
    }
    static equiv(a, b) {
        return BooleanAlgebra.xnor(a, b);
    }
}
exports.BooleanAlgebra = BooleanAlgebra;
