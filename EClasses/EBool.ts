export class EBool {
    static TRUE: EBool = new EBool(true);
    static FALSE: EBool = new EBool(false);

    private b: boolean;

    constructor(b: unknown) {
        this.b = Boolean(b);
    }

    static from(b: unknown): EBool {
        return new EBool(b);
    }

    unwrap(): boolean {
        return this.b;
    }

    clone(): EBool {
        return new EBool(Boolean(this.unwrap()));
    }

    not(): EBool {
        return new EBool(!this.unwrap());
    }

    and(b1: EBool | boolean): EBool {
        const b: EBool = new EBool(b1);
        return new EBool(b.unwrap() && this.unwrap());
    }

    or(b1: EBool | boolean): EBool {
        const b: EBool = new EBool(b1);
        return new EBool(b.unwrap() || this.unwrap());
    }

    xor(b1: EBool | boolean): EBool {
        const b: EBool = new EBool(b1);
        return this.or(b).and(this.nand(b));
    }

    nand(b1: EBool | boolean): EBool {
        const b: EBool = new EBool(b1);
        return this.and(b).not();
    }

    nor(b1: EBool | boolean): EBool {
        const b: EBool = new EBool(b1);
        return this.or(b).not();
    }

    xnor(b1: EBool | boolean): EBool {
        const b: EBool = new EBool(b1);
        return this.xor(b).not();
    }

    xnand(b1: EBool | boolean) {
        const b: EBool = new EBool(b1);
        return this.and(b.not());
    }

    isTrue(): EBool {
        return new EBool(this.unwrap() === true);
    }

    isFalse(): EBool {
        return this.isTrue().not();
    }

    ShefferStroke(b: EBool | boolean): EBool {
        return this.nand(b);
    }

    PeirceArrow(b: EBool | boolean): EBool {
        return this.nor(b);
    }

    is(b1: EBool | boolean): EBool {
        const b: EBool = new EBool(b1);
        return new EBool(b.unwrap() === this.unwrap());
    }
}
