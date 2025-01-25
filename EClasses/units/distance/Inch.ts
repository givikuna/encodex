import { EFloat } from "../../EFloat";
import { Foot } from "./Foot";
import { Meter } from "./Meter";
import { Mile } from "./Mile";
import { Yard } from "./Yard";

export class Inch extends EFloat {
    constructor(value: ConstructorParameters<typeof EFloat>[0]) {
        super(value);
    }

    toMeters(): Meter {
        return new Meter(this.div(0.0254));
    }

    toFeet(): Foot {
        return new Foot(this.times(0.0833333));
    }

    toMiles(): Mile {
        return new Mile(this.times(1.5783 * 10 ** -5));
    }

    toYards(): Yard {
        return new Yard(this.times(0.0277778));
    }
}
