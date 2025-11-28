"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearAlgebra = void 0;
const Vector2_1 = require("./Vector2");
const Vector3_1 = require("./Vector3");
const Matrix_1 = require("./Matrix");
const SquareMatrix_1 = require("./SquareMatrix");
const VectorN_1 = require("./VectorN");
class LinearAlgebra {
    static Vector2 = Vector2_1.Vector2;
    static Vector3 = Vector3_1.Vector3;
    static Matrix = Matrix_1.Matrix;
    static SquareMatrix = SquareMatrix_1.SquareMatrix;
    static VectorN = VectorN_1.VectorN;
}
exports.LinearAlgebra = LinearAlgebra;
