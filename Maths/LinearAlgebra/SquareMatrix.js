"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareMatrix = void 0;
const Matrix_1 = require("./Matrix");
class SquareMatrix extends Matrix_1.Matrix {
    constructor(rows) {
        if (rows.length !== rows[0].length) {
            throw new Error("Matrix must be square");
        }
        super(rows);
    }
    static identity(size) {
        const result = Array.from({ length: size }, (_, i) => Array.from({ length: size }, (_, j) => (i === j ? 1 : 0)));
        return new SquareMatrix(result);
    }
    determinant() {
        const n = this.rowCount();
        if (n === 1) {
            return this.rows[0][0];
        }
        if (n === 2) {
            const [[a, b], [c, d]] = this.rows;
            return a * d - b * c;
        }
        // Recursive Laplace expansion (not optimized)
        return this.rows[0].reduce((acc, val, col) => {
            const subMatrix = this.rows.slice(1).map((row) => row.filter((_, j) => j !== col));
            const minor = new SquareMatrix(subMatrix);
            const sign = col % 2 === 0 ? 1 : -1;
            return acc + sign * val * minor.determinant();
        }, 0);
    }
    trace() {
        return this.rows.reduce((acc, row, i) => acc + row[i], 0);
    }
}
exports.SquareMatrix = SquareMatrix;
