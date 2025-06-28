import { VectorN } from "./VectorN";

export class Vector3 extends VectorN {
    constructor(x: number, y: number, z: number) {
        super([x, y, z]);
    }

    get x(): number {
        return this.values[0];
    }

    get y(): number {
        return this.values[1];
    }

    get z(): number {
        return this.values[2];
    }

    cross(v: Vector3): Vector3 {
        return new Vector3(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x,
        );
    }
}
