import { Unit } from "../Unit";
import { Fahrenheit } from "./Fahrenheit";

export class Celsius extends Unit {
    constructor(value: ConstructorParameters<typeof Unit>[0]) {
        super(value);
    }

    fahrenheit(): Fahrenheit {
        return new Fahrenheit((this.unwrap() * 9) / 5 + 32);
    }
}
