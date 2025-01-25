import { EFloat } from "../EFloat";

export class Unit extends EFloat {
    constructor(value: ConstructorParameters<typeof EFloat>[0]) {
        super(value);
    }

    yotta(): EFloat {
        return this.e(24);
    }

    zetta(): EFloat {
        return this.e(21);
    }

    exa(): EFloat {
        return this.e(18);
    }

    peta(): EFloat {
        return this.e(15);
    }

    tera(): EFloat {
        return this.e(12);
    }

    giga(): EFloat {
        return this.e(9);
    }

    mega(): EFloat {
        return this.e(6);
    }

    kilo(): EFloat {
        return this.e(3);
    }

    hecto(): EFloat {
        return this.e(2);
    }

    deca(): EFloat {
        return this.e(1);
    }

    deci(): EFloat {
        return this.e(-1);
    }

    centi(): EFloat {
        return this.e(-2);
    }

    milli(): EFloat {
        return this.e(-3);
    }

    micro(): EFloat {
        return this.e(-6);
    }

    nano(): EFloat {
        return this.e(-9);
    }

    pico(): EFloat {
        return this.e(-12);
    }

    femto(): EFloat {
        return this.e(-15);
    }

    atto(): EFloat {
        return this.e(-18);
    }

    zepto(): EFloat {
        return this.e(-21);
    }

    yocto(): EFloat {
        return this.e(-24);
    }
}
