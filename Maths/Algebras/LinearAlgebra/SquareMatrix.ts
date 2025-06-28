import { Matrix } from "./Matrix";

export class SquareMatrix extends Matrix {
    constructor(rows: number[][]) {
        if (rows.length !== rows[0].length) {
            throw new Error("Matrix must be square");
        }
        super(rows);
    }

    static identity(size: number): SquareMatrix {
        const result: number[][] = Array.from({ length: size }, (_: number, i: number): number[] =>
            Array.from({ length: size }, (_: number, j: number): number => (i === j ? 1 : 0)),
        );
        return new SquareMatrix(result);
    }

    determinant(): number {
        const n: number = this.rowCount();

        if (n === 1) {
            return this.rows[0][0];
        }
        if (n === 2) {
            const [[a, b], [c, d]] = this.rows;
            return a * d - b * c;
        }

        // Recursive Laplace expansion (not optimized)
        return this.rows[0].reduce((acc, val, col) => {
            const subMatrix: number[][] = this.rows.slice(1).map((row) => row.filter((_, j) => j !== col));
            const minor: SquareMatrix = new SquareMatrix(subMatrix);
            const sign: number = col % 2 === 0 ? 1 : -1;
            return acc + sign * val * minor.determinant();
        }, 0);
    }

    trace(): number {
        return this.rows.reduce((acc: number, row: number[], i: number): number => acc + row[i], 0);
    }
}
