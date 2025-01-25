import { Unit } from "../Unit";
import { Celsius } from "./Celsius";

export class Fahrenheit extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }

    celsius(): Celsius {
        return new Celsius((this.unwrap() * 9) / 5 + 32);
    }
}
