import { Default } from "../Utilities/Default";
import { List } from "../Utilities/List";

export class EList<T> {
    private items: T[];
    private comparator: (a: T, b: T) => number;

    public constructor(arr: T[], comparator?: (a: T, b: T) => number) {
        this.items = arr;
        this.comparator = comparator ?? Default.comparator;
    }

    public static from<N>(arr: N[], comparator?: (a: N, b: N) => number): EList<N> {
        return new EList(arr, comparator);
    }

    public unwrap(): T[] {
        return [...this.items];
    }

    public clone(): EList<T> {
        return EList.from(this.unwrap());
    }

    public len(): number {
        return this.items.length;
    }

    public at(i: number): T | undefined {
        if (i > 0 && i < this.len()) {
            return this.items[i];
        }
        if (i < 0) {
            const idx = this.len() + i;
            if (idx >= 0) {
                return this.items[idx];
            }
        }
        return undefined;
    }

    public mem(x: T): boolean {
        return this.items.includes(x);
    }

    public rev(): EList<T> {
        return new EList(List.rev(this.unwrap()));
    }

    public rev$(): this {
        this.items = List.rev(this.unwrap());
        return this;
    }

    public filter(f: (x: T, i?: number) => boolean): EList<T> {
        return EList.from(this.clone().unwrap().filter(f));
    }

    public filter$(f: (x: T, i?: number) => boolean): this {
        this.items = this.items.filter(f);
        return this;
    }

    public reject(f: (x: T, i?: number) => boolean): EList<T> {
        return this.filter((x: T, i?: number): boolean => !f(x, i));
    }

    public reject$(f: (x: T, i?: number) => boolean): this {
        return this.filter$((x: T, i?: number): boolean => !f(x, i));
    }

    public map<U>(f: (x: T, i?: number) => U): EList<U> {
        return EList.from(this.clone().unwrap().map(f));
    }

    public map$(f: (x: T, i?: number) => T): this {
        this.items = this.items.map(f);
        return this;
    }

    public uniq(): EList<T> {
        return this.clone().uniq$();
    }

    public uniq$(): this {
        this.items = List.uniq(this.items, this.comparator);
        return this;
    }

    public fold<U>(f: (a: U, b: T) => U, z: U): U {
        return List.fold(f, z, this.unwrap());
    }

    public foldl<U>(f: (a: U, b: T) => U, z: U): U {
        return this.fold(f, z);
    }

    public foldr<U>(f: (a: U, b: T) => U, z: U): U {
        return this.clone().rev().foldl(f, z);
    }

    public fold1(f: (a: number, b: T) => number): number {
        return this.fold(f, 1);
    }

    public foldl1(f: (a: number, b: T) => number): number {
        return this.fold1(f);
    }

    public foldr1(f: (a: number, b: T) => number): number {
        return this.foldr(f, 1);
    }

    public fold0(f: (a: number, b: T) => number): number {
        return this.fold(f, 0);
    }

    public foldl0(f: (a: number, b: T) => number): number {
        return this.fold0(f);
    }

    public foldr0(f: (a: number, b: T) => number): number {
        return this.foldr(f, 0);
    }

    public foldt(f: (a: boolean, b: T) => boolean): boolean {
        return this.fold(f, true);
    }

    public foldlt(f: (a: boolean, b: T) => boolean): boolean {
        return this.foldt(f);
    }

    public foldrt(f: (a: boolean, b: T) => boolean): boolean {
        return this.foldr(f, true);
    }

    public foldf(f: (a: boolean, b: T) => boolean): boolean {
        return this.fold(f, false);
    }

    public foldlf(f: (a: boolean, b: T) => boolean): boolean {
        return this.foldf(f);
    }

    public foldrf(f: (a: boolean, b: T) => boolean): boolean {
        return this.foldr(f, false);
    }

    public folds(f: (a: string, b: T) => string): string {
        return this.fold(f, "");
    }

    public foldls(f: (a: string, b: T) => string): string {
        return this.folds(f);
    }

    public foldrs(f: (a: string, b: T) => string): string {
        return this.foldr(f, "");
    }
}
