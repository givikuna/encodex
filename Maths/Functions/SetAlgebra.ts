export class SetAlgebra {
    static union<T>(a: Set<T>, b: Set<T>): Set<T> {
        return new Set([...a, ...b]);
    }

    static intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
        return new Set([...a].filter((x) => b.has(x)));
    }

    static difference<T>(a: Set<T>, b: Set<T>): Set<T> {
        return new Set([...a].filter((x) => !b.has(x)));
    }

    static symmetricDifference<T>(a: Set<T>, b: Set<T>): Set<T> {
        return new Set([...a].filter((x) => !b.has(x)).concat([...b].filter((x) => !a.has(x))));
    }

    static isSubset<T>(a: Set<T>, b: Set<T>): boolean {
        return [...a].every((x) => b.has(x));
    }

    static isSuperset<T>(a: Set<T>, b: Set<T>): boolean {
        return [...b].every((x) => a.has(x));
    }

    static isEqual<T>(a: Set<T>, b: Set<T>): boolean {
        return a.size === b.size && SetAlgebra.isSubset(a, b);
    }
}
