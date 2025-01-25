import { ENumber } from "../../ENumber";
import { Unit } from "../Unit";
import { Degree } from "./Degree";

export class Radian extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }

    deg(): Degree {
        return new Degree(this.div(ENumber.pi.div(180)));
    }
}
