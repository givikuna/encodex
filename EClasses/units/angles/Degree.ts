import { Unit } from "../Unit";
import { Radian } from "./Radian";

export class Degree extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }

    rad(): Radian {
        return new Radian(this.mult(Math.PI / 180));
    }
}
