export class BooleanAlgebra {
    static and(a: boolean, b: boolean): boolean {
        return a && b;
    }

    static or(a: boolean, b: boolean): boolean {
        return a || b;
    }

    static not(a: boolean): boolean {
        return !a;
    }

    static nand(a: boolean, b: boolean): boolean {
        return !(a && b);
    }

    static nor(a: boolean, b: boolean): boolean {
        return !(a || b);
    }

    static xor(a: boolean, b: boolean): boolean {
        return (a && !b) || (!a && b);
    }

    static xnor(a: boolean, b: boolean): boolean {
        return (a && b) || (!a && !b);
    }

    static implies(a: boolean, b: boolean): boolean {
        return !a || b;
    }

    static equiv(a: boolean, b: boolean): boolean {
        return BooleanAlgebra.xnor(a, b);
    }
}
