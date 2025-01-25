import { Unit } from "../Unit";

export class Coulomb extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }
}
