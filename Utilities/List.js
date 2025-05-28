"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const Default_1 = require("./Default");
class List {
    static rev(xs) {
        const ys = [];
        for (let i = xs.length - 1; i >= 0; i--) {
            ys.push(xs[i]);
        }
        return xs;
    }
    static fold(f, z, xs) {
        let memo = z;
        for (let i = 0; i < xs.length; i++) {
            memo = f(memo, xs[i]);
        }
        return memo;
    }
    static foldl(f, z, xs) {
        return List.fold(f, z, xs);
    }
    static foldr(f, z, xs) {
        return List.foldl(f, z, [...xs].reverse());
    }
    static fold1(f, xs) {
        return List.fold(f, 1, xs);
    }
    static foldl1(f, xs) {
        return List.fold1(f, xs);
    }
    static foldr1(f, xs) {
        return List.foldl1(f, [...xs].reverse());
    }
    static fold0(f, xs) {
        return List.fold(f, 0, xs);
    }
    static foldl0(f, xs) {
        return List.foldl0(f, xs);
    }
    static foldr0(f, xs) {
        return List.foldl0(f, [...xs].reverse());
    }
    static foldt(f, xs) {
        return List.fold(f, true, xs);
    }
    static foldlt(f, xs) {
        return List.foldt(f, xs);
    }
    static foldrt(f, xs) {
        return List.foldlt(f, [...xs].reverse());
    }
    static foldf(f, xs) {
        return List.fold(f, false, xs);
    }
    static foldlf(f, xs) {
        return List.foldf(f, xs);
    }
    static foldrf(f, xs) {
        return List.foldlf(f, [...xs].reverse());
    }
    static folds(f, xs) {
        return List.fold(f, "", xs);
    }
    static foldls(f, xs) {
        return List.folds(f, xs);
    }
    static foldrs(f, xs) {
        return List.foldls(f, [...xs].reverse());
    }
    static filter(f, xs) {
        return [...xs].filter(f);
    }
    static reject(f, xs) {
        return List.filter((a, index) => !f(a, index), xs);
    }
    static partition(f, xs) {
        return [[...List.filter(f, xs)], [...List.reject(f, xs)]];
    }
    static map(f, xs) {
        return [...xs].map(f);
    }
    static uniq(xs, f = (Default_1.Default.comparator)) {
        const ys = [];
        for (let i = 0; i < xs.length; i++) {
            for (let j = 0; j < ys.length; j++) {
                if (f(xs[i], ys[j]) == 0) {
                    break;
                }
                if (j == ys.length - 1) {
                    ys.push(xs[i]);
                    break;
                }
            }
        }
        return ys;
    }
}
exports.List = List;
