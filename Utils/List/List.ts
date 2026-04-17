export namespace List {
    export function listEach<T>(list: T[], fn: (val: T, index: number) => void): void {
        for(let i = 0; i < list.length; i++){
            fn(list[i],i);
        }
    }
    export function map<T, U>(xs: T[], f: (x: T) => U): U[] {
        const a: U[] = [];
        for (let i = 0; i < xs.length; i++) {
            a.push(f(xs[i]));
        }
        return a;
    }

    export function compact<T>(list: (T | null | undefined | false | 0 | "")[]): T[] {
        const a: T[] = [];
        for(const x of list) {
            if(x != null && x != undefined && x != false && x != 0 && x != ""){
                a.push(x);
            }
        }
        return a;
    }

    //filter

    //reject

    //partition

    //find

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

    export function uniq<T>(list: T[]) : T[] {
        let a: T[] = [];
        for(const x of list){
            if(!a.includes(x)) a.push(x)
        }
        return a;
    }

    export function sort<T>(list: T[]) : T[] {
        let a: T[] = list.sort();
        return a;
    }

    export function concat<T>(...lists: T[][]): T[] {
        let a: T[] = [];
        for(const list of lists){
            for(const x of list){
                a.push(x);
            }
        }
        return a;
    }

    //flatten

    export function diff<T>(l1: T[],l2: T[]): T[] {
        let a: T[] = [];
        let b: T[] = intersection(l1,l2);
        let c: T[] = union(l1,l2);
        for(const x of c){
            if(!b.includes(x)){
                a.push(x)
            }
        }
        return a;
    }

    export function intersection<T>(l1: T[],l2: T[]): T[] {
        let a: T[] = [];
        for(const x of l1){
            if(l2.includes(x)){
                a.push(x)
            }
        }
        return a;
    }

    export function union<T>(l1: T[],l2: T[]): T[] {
        let a: T[] = [];
        for(const x of l1){
            a.push(x)
        }
        for(const x of l2){
            if(!a.includes(x)){
                a.push(x)
            }
        }
        return a;
    }

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

    //and all

    //or any

    export function sum(list: number[]) : number {
        let a:number = 0;
        for(const num of list){
            a += num;
        }
        return a
    }

    export function product(list: number[]) : number {
        let a:number = 1;
        for(const num of list){
            a *= num;
        }
        return a
    }

    export function mean(list: number[]) : number {
        let a:number = sum(list);
        let b:number = len(list);
        return a/b
    }

    export function max(list: number[]) : number {
        if(empty(list)) return -1;
        let a:number = list[0];
        for(let i = 1; i < list.length; i++) {
            if(list[i] > a) a = list[i];
        }
        return a
    }

    export function min(list: number[]) : number {
        if(empty(list)) return -1;
        let a:number = list[0];
        for(let i = 1; i < list.length; i++) {
            if(list[i] < a) a = list[i];
        }
        return a
    }

    export function mem<T>(list: T[], val: T): boolean {
        for(const a of list){
            if(a == val) return true
        }
        return false
    }

    export function zip<T, U>(l1: T[], l2: U[]): Array<[T, U]>{
        let a: Array<[T,U]> = [];
        let l: number = Math.min(len(l1),len(l2));
        
        for(let i = 0; i < l; i++){
            a.push([l1[i],l2[i]]);
        }

        return a;
    }

    export function zipW<T, U, V>(l1: T[], l2: U[], fn: (a: T, b: U) => V): V[] {
        let a: V[] = [];
        let l: number = Math.min(len(l1),len(l2));
        
        for(let i = 0; i < l; i++){
            a.push(fn(l1[i],l2[i]));
        }

        return a
    }

    export function zipA<T, U>(l1: T[], l2: U[]): Array<[T | undefined, U | undefined]> {
        let a: Array<[T|undefined,U|undefined]> = [];
        let l: number = Math.max(len(l1),len(l2));
        
        for(let i = 0; i < l; i++){
            a.push([i < len(l1) ? l1[i] : undefined,i < len(l2) ? l2[i] : undefined]);
        }

        return a;
    }

    export function zipAW<T, U, V>(l1: T[], l2: U[], fn: (a: T | undefined, b: U | undefined) => V): V[] {
        let a: V[] = [];
        let l: number = Math.max(len(l1),len(l2));
        
        for(let i = 0; i < l; i++){
            a.push(fn(i < len(l1) ? l1[i] : undefined,i < len(l2) ? l2[i] : undefined));
        }

        return a;
    }

    //folds and scans
}