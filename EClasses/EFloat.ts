import { EInteger } from "./EInteger";
import { ENumber } from "./ENumber";

export class EFloat extends ENumber {
    constructor(value: ConstructorParameters<typeof ENumber>[0]) {
        super(Number.parseFloat(ENumber.from(value).unwrap().toString()));
    }

    static override from(value: ConstructorParameters<typeof ENumber>[0]): EFloat {
        return new EFloat(value);
    }

    floor(): EInteger {
        return new EInteger(Math.abs(this.unwrap()));
    }

    ceil(): EInteger {
        return new EInteger(Math.ceil(this.unwrap()));
    }

    round(): EInteger {
        return new EInteger(Math.round(this.unwrap()));
    }
}
