import { Unit } from "../Unit";

export class Ampere extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }
}
