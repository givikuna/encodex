import { Unit } from "../Unit";

export class Volt extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }
}
