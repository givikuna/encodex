import { Unit } from "../Unit";

export class Mole extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }
}
