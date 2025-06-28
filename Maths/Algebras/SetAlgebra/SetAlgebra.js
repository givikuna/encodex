"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetAlgebra = void 0;
class SetAlgebra {
    static union(a, b) {
        return new Set([...a, ...b]);
    }
    static intersection(a, b) {
        return new Set([...a].filter((x) => b.has(x)));
    }
    static difference(a, b) {
        return new Set([...a].filter((x) => !b.has(x)));
    }
    static symmetricDifference(a, b) {
        return new Set([...a].filter((x) => !b.has(x)).concat([...b].filter((x) => !a.has(x))));
    }
    static isSubset(a, b) {
        return [...a].every((x) => b.has(x));
    }
    static isSuperset(a, b) {
        return [...b].every((x) => a.has(x));
    }
    static isEqual(a, b) {
        return a.size === b.size && SetAlgebra.isSubset(a, b);
    }
}
exports.SetAlgebra = SetAlgebra;
