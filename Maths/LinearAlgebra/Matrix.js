"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
class Matrix {
    rows;
    constructor(rows) {
        if (!rows.every((row) => row.length === rows[0].length)) {
            throw new Error("All matrix rows must be the same length");
        }
        this.rows = rows;
    }
    rowCount() {
        return this.rows.length;
    }
    columnCount() {
        return this.rows[0].length;
    }
    add(other) {
        if (this.rowCount() !== other.rowCount() || this.columnCount() !== other.columnCount()) {
            throw new Error("Matrix dimensions must match for addition");
        }
        const result = this.rows.map((row, i) => row.map((val, j) => val + other.rows[i][j]));
        return new Matrix(result);
    }
    multiply(other) {
        if (this.columnCount() !== other.rowCount()) {
            throw new Error("Invalid dimensions for matrix multiplication");
        }
        const result = Array.from({ length: this.rowCount() }, () => Array(other.columnCount()).fill(0));
        for (let i = 0; i < this.rowCount(); i++) {
            for (let j = 0; j < other.columnCount(); j++) {
                for (let k = 0; k < this.columnCount(); k++) {
                    result[i][j] += this.rows[i][k] * other.rows[k][j];
                }
            }
        }
        return new Matrix(result);
    }
    transpose() {
        const transposed = [];
        for (let i = 0; i < this.columnCount(); i++) {
            transposed[i] = this.rows.map((row) => row[i]);
        }
        return new Matrix(transposed);
    }
}
exports.Matrix = Matrix;
