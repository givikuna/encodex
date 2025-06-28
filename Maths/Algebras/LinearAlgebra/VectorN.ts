export class VectorN {
    public values: number[];

    constructor(values: number[]) {
        this.values = [...values];
    }

    dim(): number {
        return this.values.length;
    }

    static zero(dim: number): VectorN {
        return new VectorN(Array(dim).fill(0));
    }

    static from(...vals: number[]): VectorN {
        return new VectorN(vals);
    }

    add(v: VectorN): VectorN {
        if (this.dim() !== v.dim()) {
            throw new Error("Dimension mismatch");
        }
        return new VectorN(this.values.map((val: number, i: number): number => val + v.values[i]));
    }

    subtract(v: VectorN): VectorN {
        if (this.dim() !== v.dim()) {
            throw new Error("Dimension mismatch");
        }
        return new VectorN(this.values.map((val: number, i: number): number => val - v.values[i]));
    }

    scale(scalar: number): VectorN {
        return new VectorN(this.values.map((val: number): number => val * scalar));
    }

    dot(v: VectorN): number {
        if (this.dim() !== v.dim()) {
            throw new Error("Dimension mismatch");
        }
        return this.values.reduce(
            (sum: number, val: number, i: number): number => sum + val * v.values[i],
            0,
        );
    }

    magnitude(): number {
        return Math.sqrt(this.values.reduce((sum: number, val: number): number => sum + val ** 2, 0));
    }

    normalize(): VectorN {
        const mag: number = this.magnitude();
        return mag === 0 ? new VectorN(this.values.map((): number => 0)) : this.scale(1 / mag);
    }

    toArray(): number[] {
        return [...this.values];
    }
}
