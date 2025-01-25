import { EFloat } from "../../EFloat";
import { Foot } from "./Foot";
import { Meter } from "./Meter";
import { Inch } from "./Inch";
import { Mile } from "./Mile";
import { Unit } from "../Unit";

export class Yard extends Unit {
    constructor(value: ConstructorParameters<typeof EFloat>[0]) {
        super(value);
    }

    toMeters(): Meter {
        return new Meter(this.div(0.9144));
    }

    toFeet(): Foot {
        return new Foot(this.times(3));
    }

    toInches(): Inch {
        return new Inch(this.times(36));
    }

    toMiles(): Mile {
        return new Mile(this.times(0.000568182));
    }
}
