import { EBool } from "./EBool";
import { ENumber } from "./ENumber";

export class EInteger extends ENumber {
    constructor(value: ConstructorParameters<typeof ENumber>[0]) {
        super(Math.floor(ENumber.from(value).unwrap()));
    }

    static override from(value: ConstructorParameters<typeof EInteger>[0]): EInteger {
        return new EInteger(value);
    }

    override isInt(): EBool {
        return EBool.TRUE;
    }

    override isFloat(): EBool {
        return EBool.FALSE;
    }

    override add(other: EInteger | number): EInteger {
        return new EInteger(this.unwrap() + EInteger.from(other).unwrap());
    }

    override subtract(other: EInteger | number): EInteger {
        return new EInteger(this.unwrap() - EInteger.from(other).unwrap());
    }

    override sub(other: Parameters<typeof this.subtract>[0]): EInteger {
        return this.subtract(other);
    }

    override multiply(other: EInteger | number): EInteger {
        return new EInteger(this.unwrap() * EInteger.from(other).unwrap());
    }

    override mult(other: Parameters<typeof this.subtract>[0]): EInteger {
        return this.multiply(other);
    }

    override divide(other: EInteger | number): EInteger {
        return new EInteger(this.unwrap() / EInteger.from(other).unwrap());
    }

    override div(other: Parameters<typeof this.divide>[0]): ENumber {
        return new ENumber(this.divide(other));
    }

    mod(other: EInteger | number): EInteger {
        return new EInteger(this.unwrap() % EInteger.from(other).unwrap());
    }
}
