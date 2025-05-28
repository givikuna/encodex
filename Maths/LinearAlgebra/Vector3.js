"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
const VectorN_1 = require("./VectorN");
class Vector3 extends VectorN_1.VectorN {
    constructor(x, y, z) {
        super([x, y, z]);
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
    get z() {
        return this.values[2];
    }
    cross(v) {
        return new Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }
}
exports.Vector3 = Vector3;
