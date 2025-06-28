"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitwiseLogic = void 0;
class BitwiseLogic {
    static and(a, b) {
        return a & b;
    }
    static or(a, b) {
        return a | b;
    }
    static xor(a, b) {
        return a ^ b;
    }
    static not(a) {
        return ~a;
    }
    static shiftLeft(a, bits) {
        return a << bits;
    }
    static shiftRight(a, bits) {
        return a >> bits;
    }
    static unsignedShiftRight(a, bits) {
        return a >>> bits;
    }
}
exports.BitwiseLogic = BitwiseLogic;
