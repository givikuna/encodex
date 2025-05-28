"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.left = exports.right = exports.Right = exports.Left = void 0;
class Left {
    value;
    type = "Left";
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return true;
    }
    isRight() {
        return false;
    }
    map(_) {
        return new Left(this.value);
    }
    flatMap(_) {
        return new Left(this.value);
    }
}
exports.Left = Left;
class Right {
    value;
    type = "Right";
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return false;
    }
    isRight() {
        return true;
    }
    map(f) {
        return new Right(f(this.value));
    }
    flatMap(f) {
        return f(this.value);
    }
}
exports.Right = Right;
// Helpers
const right = (value) => new Right(value);
exports.right = right;
const left = (value) => new Left(value);
exports.left = left;
