"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorN = void 0;
class VectorN {
    values;
    constructor(values) {
        this.values = [...values];
    }
    dim() {
        return this.values.length;
    }
    static zero(dim) {
        return new VectorN(Array(dim).fill(0));
    }
    static from(...vals) {
        return new VectorN(vals);
    }
    add(v) {
        if (this.dim() !== v.dim()) {
            throw new Error("Dimension mismatch");
        }
        return new VectorN(this.values.map((val, i) => val + v.values[i]));
    }
    subtract(v) {
        if (this.dim() !== v.dim()) {
            throw new Error("Dimension mismatch");
        }
        return new VectorN(this.values.map((val, i) => val - v.values[i]));
    }
    scale(scalar) {
        return new VectorN(this.values.map((val) => val * scalar));
    }
    dot(v) {
        if (this.dim() !== v.dim()) {
            throw new Error("Dimension mismatch");
        }
        return this.values.reduce((sum, val, i) => sum + val * v.values[i], 0);
    }
    magnitude() {
        return Math.sqrt(this.values.reduce((sum, val) => sum + val ** 2, 0));
    }
    normalize() {
        const mag = this.magnitude();
        return mag === 0 ? new VectorN(this.values.map(() => 0)) : this.scale(1 / mag);
    }
    toArray() {
        return [...this.values];
    }
}
exports.VectorN = VectorN;
