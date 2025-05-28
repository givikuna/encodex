export class BitwiseLogic {
    static and(a: number, b: number): number {
        return a & b;
    }

    static or(a: number, b: number): number {
        return a | b;
    }

    static xor(a: number, b: number): number {
        return a ^ b;
    }

    static not(a: number): number {
        return ~a;
    }

    static shiftLeft(a: number, bits: number): number {
        return a << bits;
    }

    static shiftRight(a: number, bits: number): number {
        return a >> bits;
    }

    static unsignedShiftRight(a: number, bits: number): number {
        return a >>> bits;
    }
}
