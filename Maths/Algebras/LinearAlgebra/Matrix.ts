export class Matrix {
    public rows: number[][];

    constructor(rows: number[][]) {
        if (!rows.every((row) => row.length === rows[0].length)) {
            throw new Error("All matrix rows must be the same length");
        }
        this.rows = rows;
    }

    rowCount(): number {
        return this.rows.length;
    }

    columnCount(): number {
        return this.rows[0].length;
    }

    add(other: Matrix): Matrix {
        if (this.rowCount() !== other.rowCount() || this.columnCount() !== other.columnCount()) {
            throw new Error("Matrix dimensions must match for addition");
        }

        const result: number[][] = this.rows.map((row: number[], i: number): number[] =>
            row.map((val: number, j: number): number => val + other.rows[i][j]),
        );
        return new Matrix(result);
    }

    multiply(other: Matrix): Matrix {
        if (this.columnCount() !== other.rowCount()) {
            throw new Error("Invalid dimensions for matrix multiplication");
        }

        const result: number[][] = Array.from({ length: this.rowCount() }, (): number[] =>
            Array(other.columnCount()).fill(0),
        );

        for (let i: number = 0; i < this.rowCount(); i++) {
            for (let j: number = 0; j < other.columnCount(); j++) {
                for (let k = 0; k < this.columnCount(); k++) {
                    result[i][j] += this.rows[i][k] * other.rows[k][j];
                }
            }
        }

        return new Matrix(result);
    }

    transpose(): Matrix {
        const transposed: number[][] = [];
        for (let i: number = 0; i < this.columnCount(); i++) {
            transposed[i] = this.rows.map((row: number[]): number => row[i]);
        }
        return new Matrix(transposed);
    }
}
