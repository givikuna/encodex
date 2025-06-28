"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
const VectorN_1 = require("./VectorN");
class Vector2 extends VectorN_1.VectorN {
    constructor(x, y) {
        super([x, y]);
    }
    get x() {
        return this.values[0];
    }
    get y() {
        return this.values[1];
    }
}
exports.Vector2 = Vector2;
