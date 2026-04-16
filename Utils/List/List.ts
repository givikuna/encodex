export namespace List {
    export function map<T, U>(xs: T[], f: (x: T) => U): U[] {
        const a: U[] = [];
        for (let i = 0; i < xs.length; i++) {
            a.push(f(xs[i]));
        }
        return a;
    }

    export function tail<T>(xs: T[]): T[] {
        const a: T[] = [];
        for (let i = 1; i < xs.length; i++) {
            a.push(xs[i]);
        }
        return a;
    }

    export function last<T>(xs: T[]): T | undefined {
        return xs.length == 0 ? undefined : xs[xs.length - 1];
    }

    export function initial<T>(xs: T[]): T[] {
        const a: T[] = [];
        for (let i = 0; i < xs.length - 1; i++) {
            a.push(xs[i]);
        }
        return a;
    }

    export function slice<T>(xs: T[], start: number, end: number = xs.length): T[] {
        const a: T[] = [];
        for (let i = start; i < end; i++) {
            a.push(xs[i]);
        }
        return a;
    }

    export function take<T>(xs: T[], n: number): T[] {
        const a: T[] = [];
        for (let i = 0; i < n; i++) {
            a.push(xs[i]);
        }
        return a;
    }

    export function drop<T>(xs: T[], n: number): T[] {
        const a: T[] = [];
        for (let i = n; i < xs.length; i++) {
            a.push(xs[i]);
        }
        return a;
    }

    export function split<T>(xs: T[], index: number): [T[], T[]] {
        const a: T[] = [];
        const b: T[] = [];
        for (let i = 0; i < index; i++) {
            a.push(xs[i]);
        }
        for (let i = index; i < xs.length; i++) {
            b.push(xs[i]);
        }
        return [a, b];
    }

    export function span<T>(xs: T[], pred: (val: T) => boolean): [T[], T[]] {
        const a: T[] = [];
        const b: T[] = [];
        for (let i = 0; i < xs.length; i++) {
            if(pred(xs[i])){
                a.push(xs[i]);
                continue;
            }
            for (let j = i; j < xs.length; j++) {
                b.push(xs[i]);
            }
            break;
        }
        return [a, b];
    }

    export function at<T>(xs: T[], index: number): T | undefined {
        if(index >= xs.length || index < -xs.length) return undefined;
        return (index < 0) ? xs[xs.length+index] : xs[index];
    }

    export function len<T>(xs: T[]): number {
        let a: number = 0;
        for(const {} of xs){
            a++;
        }
        return a;
    }

    export function empty<T>(xs: T[]): boolean {
        return len(xs) == 0;
    }

    export function rev<T>(xs: T[]): T[] {
        const a: T[] = [];
        for (let i = xs.length-1; i >= 0; i--) {
            a.push(xs[i]);
        }
        return a;
    }

    //uniq

    //sort

    export function concat<T>(...lists: T[][]): T[] {
        let a: T[] = [];
        for(const list of lists){
            for(const x of list){
                a.push(x);
            }
        }
        return a;
    }

    //diff

    //intersection

    //union

    export function chunk<T>(xs: T[], n:number): T[][] {
        if(n == 0) return [];
        let a: T[][] = [];
        for(let i = 0; i < xs.length;){
            let b: T[] = [];
            for(let j = 0; j < n && i < xs.length; j++){
                b.push(xs[i]);
                i++;
            }
            a.push(b);
        }
        return a;
    }

    //group

    
}
