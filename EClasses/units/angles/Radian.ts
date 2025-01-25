import { EFloat } from "../../EFloat";
import { ENumber } from "../../ENumber";
import { Degree } from "./Degree";

export class Radian extends EFloat {
    constructor(value: ConstructorParameters<typeof EFloat>[0]) {
        super(value);
    }

    deg(): Degree {
        return new Degree(this.div(ENumber.pi.div(180)));
    }
}
