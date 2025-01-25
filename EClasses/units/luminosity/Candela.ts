import { Unit } from "../Unit";

export class Candela extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }
}
