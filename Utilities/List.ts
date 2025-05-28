import { Comparator } from "../Types";

import { Default } from "./Default";

export class List {
    static rev<T>(xs: T[]): T[] {
        const ys: T[] = [];
        for (let i: number = xs.length - 1; i >= 0; i--) {
            ys.push(xs[i]);
        }
        return xs;
    }

    static fold<T, U>(f: (a: U, b: T) => U, z: U, xs: T[]): U {
        let memo: U = z;
        for (let i: number = 0; i < xs.length; i++) {
            memo = f(memo, xs[i]);
        }
        return memo;
    }

    static foldl<T, U>(f: (a: U, b: T) => U, z: U, xs: T[]): U {
        return List.fold(f, z, xs);
    }

    static foldr<T, U>(f: (a: U, b: T) => U, z: U, xs: T[]): U {
        return List.foldl(f, z, [...xs].reverse());
    }

    static fold1<T>(f: (a: number, b: T) => number, xs: T[]): number {
        return List.fold(f, 1, xs);
    }

    static foldl1<T>(f: (a: number, b: T) => number, xs: T[]): number {
        return List.fold1(f, xs);
    }

    static foldr1<T>(f: (a: number, b: T) => number, xs: T[]): number {
        return List.foldl1(f, [...xs].reverse());
    }

    static fold0<T>(f: (a: number, b: T) => number, xs: T[]): number {
        return List.fold(f, 0, xs);
    }

    static foldl0<T>(f: (a: number, b: T) => number, xs: T[]): number {
        return List.foldl0(f, xs);
    }

    static foldr0<T>(f: (a: number, b: T) => number, xs: T[]): number {
        return List.foldl0(f, [...xs].reverse());
    }

    static foldt<T>(f: (a: boolean, b: T) => boolean, xs: T[]): boolean {
        return List.fold(f, true, xs);
    }

    static foldlt<T>(f: (a: boolean, b: T) => boolean, xs: T[]): boolean {
        return List.foldt(f, xs);
    }

    static foldrt<T>(f: (a: boolean, b: T) => boolean, xs: T[]): boolean {
        return List.foldlt(f, [...xs].reverse());
    }

    static foldf<T>(f: (a: boolean, b: T) => boolean, xs: T[]): boolean {
        return List.fold(f, false, xs);
    }

    static foldlf<T>(f: (a: boolean, b: T) => boolean, xs: T[]): boolean {
        return List.foldf(f, xs);
    }

    static foldrf<T>(f: (a: boolean, b: T) => boolean, xs: T[]): boolean {
        return List.foldlf(f, [...xs].reverse());
    }

    static folds<T>(f: (a: string, b: T) => string, xs: T[]): string {
        return List.fold(f, "", xs);
    }

    static foldls<T>(f: (a: string, b: T) => string, xs: T[]): string {
        return List.folds(f, xs);
    }

    static foldrs<T>(f: (a: string, b: T) => string, xs: T[]): string {
        return List.foldls(f, [...xs].reverse());
    }

    static filter<T>(f: (a: T, index?: number) => boolean, xs: T[]): T[] {
        return [...xs].filter(f);
    }

    static reject<T>(f: (a: T, index?: number) => boolean, xs: T[]): T[] {
        return List.filter((a: T, index?: number): boolean => !f(a, index), xs);
    }

    static partition<T>(f: (a: T, index?: number) => boolean, xs: T[]): [T[], T[]] {
        return [[...List.filter(f, xs)], [...List.reject(f, xs)]];
    }

    static map<T, U>(f: (a: T, index?: number) => U, xs: T[]): U[] {
        return [...xs].map(f);
    }

    static uniq<T>(xs: T[], f: Comparator<T> = Default.comparator<T>): T[] {
        const ys: T[] = [];
        for (let i: number = 0; i < xs.length; i++) {
            for (let j: number = 0; j < ys.length; j++) {
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
