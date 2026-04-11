export namespace List {
    export function map<T, U>(xs: T[], f: (x: T) => U): U[] {
        return xs.map(f);
    }
}
