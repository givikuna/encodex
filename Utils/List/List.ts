export namespace List {
    export function map<T, U>(xs: T[], f: (x: T) => U): U[] {
        const a: U[] = [];
        for(let i = 0; i < xs.length; i++){
            a.push(f(xs[i]));
        }
        return a;
    }

    export function tail<T>(xs: T[]): T[] {
        const a: T[] = [];
        for(let i = 1; i < xs.length; i++){
            a.push(xs[i]);
        }
        return a;
    }

    export function last<T>(xs: T[]): T | undefined {
        return xs.length == 0 ? undefined : xs[xs.length-1];
    }

    export function initial<T>(xs: T[]): T[] {
        const a: T[] = [];
        for(let i = 0; i < xs.length-1; i++){
            a.push(xs[i]);
        }
        return a;
    }

    export function slice<T>(xs: T[], start: number, end: number = xs.length): T[] {
        const a: T[] = [];
        for(let i = start; i < end; i++){
            a.push(xs[i]);
        }
        return a;
    }

    export function take<T>(xs: T[], n: number): T[] {
        const a: T[] = [];
        for(let i = 0; i < n; i++){
            a.push(xs[i]);
        }
        return a;
    }
}
