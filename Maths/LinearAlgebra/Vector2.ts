import { VectorN } from "./VectorN";

export class Vector2 extends VectorN {
    constructor(x: number, y: number) {
        super([x, y]);
    }

    get x(): number {
        return this.values[0];
    }

    get y(): number {
        return this.values[1];
    }
}
