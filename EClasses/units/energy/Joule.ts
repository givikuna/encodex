import { Unit } from "../Unit";

export class Joule extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }
}
