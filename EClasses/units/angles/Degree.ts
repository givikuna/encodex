import { EFloat } from "../../EFloat";
import { Radian } from "./Radian";

export class Degree extends EFloat {
    constructor(value: ConstructorParameters<typeof EFloat>[0]) {
        super(value);
    }

    rad(): Radian {
        return new Radian(this.mult(Math.PI / 180));
    }
}
