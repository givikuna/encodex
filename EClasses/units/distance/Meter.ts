import { EFloat } from "../../EFloat";
import { ENumber } from "../../ENumber";
import { Unit } from "../Unit";
import { Foot } from "./Foot";

export class Meter extends Unit {
    constructor(value: ConstructorParameters<typeof EFloat>[0]) {
        super(value);
    }

    toFeet(): Foot {
        return new Foot(this.times(3.28084));
    }

    toMile(): ENumber {
        return this.div(1609.344);
    }

    toYard(): ENumber {
        return this.div(0.9144);
    }

    toInch(): ENumber {
        return this.div(0.0254);
    }
}
