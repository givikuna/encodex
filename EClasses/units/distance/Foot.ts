import { EFloat } from "../../EFloat";
import { Unit } from "../Unit";
import { Inch } from "./Inch";
import { Meter } from "./Meter";
import { Mile } from "./Mile";
import { Yard } from "./Yard";

export class Foot extends Unit {
    constructor(value: ConstructorParameters<typeof EFloat>[0]) {
        super(value);
    }

    toMeters(): Meter {
        return new Meter(this.div(3.28084));
    }

    toYards(): Yard {
        return new Yard(this.div(3));
    }

    toInches(): Inch {
        return new Inch(this.mult(12));
    }

    toMiles(): Mile {
        return new Mile(this.div(5280));
    }
}
