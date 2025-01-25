import { EFloat } from "../../EFloat";
import { Unit } from "../Unit";
import { Foot } from "./Foot";
import { Inch } from "./Inch";
import { Meter } from "./Meter";
import { Yard } from "./Yard";

export class Mile extends Unit {
    constructor(value: ConstructorParameters<typeof EFloat>[0]) {
        super(value);
    }

    toMeters(): Meter {
        return new Meter(this.div(1609.34));
    }

    toFeet(): Foot {
        return new Foot(this.times(5280));
    }

    toInches(): Inch {
        return new Inch(this.times(63360));
    }

    toYards(): Yard {
        return new Yard(this.times(1760));
    }
}
