import { Optional } from "../Monads/Optional";
import { EString } from "./EString";
import { EChar } from "./EChar";
import { ENumber } from "./ENumber";
import { EBool } from "./EBool";
import { EInteger } from "./EInteger";

export class EList<T> {
    private arr: T[];

    constructor(arr: T[] | EList<T>) {
        if (arr instanceof EList) {
            this.arr = [...arr.unwrap()];
            return;
        }
        this.arr = [...arr];
    }

    static from<T>(arr: ConstructorParameters<typeof EList<T>>[0]): EList<T> {
        return new EList(arr);
    }

    unwrap(): T[] {
        return [...this.arr];
    }

    clone(): EList<T> {
        return new EList([...this.arr]);
    }

    len(): EInteger {
        return EInteger.from(this.arr.length);
    }

    at(index: number): Optional<T> {
        return Optional.some(this.arr[index]);
    }

    push(item: T): this {
        this.arr.push(item);
        return this;
    }

    pop(): Optional<T> {
        return Optional.some(this.arr.pop() as T);
    }

    first(): Optional<T> {
        return Optional.some(this.arr[0]);
    }

    last(): Optional<T> {
        return Optional.some(this.arr[this.arr.length - 1]);
    }

    find(pred: (item: T) => boolean): Optional<T> {
        return Optional.some(this.arr.find(pred) as T);
    }

    filter(fn: (item: T, i?: number) => boolean): EList<T> {
        return new EList(this.arr.filter(fn));
    }

    reject(fn: (item: T, i?: number) => boolean): EList<T> {
        return new EList(this.arr.filter((item, i) => !fn(item, i)));
    }

    map<U>(fn: (item: T, i?: number) => U): EList<U> {
        return new EList(this.arr.map(fn));
    }

    isEmpty(): EBool {
        return EBool.from(this.arr.length === 0);
    }

    join(separator: string | EString | EChar): EString {
        let arr: string[] = [];
        if (
            typeof this.arr[0] === "string" ||
            this.arr[0] instanceof EString ||
            this.arr[0] instanceof EChar
        ) {
            arr =
                this.arr[0] === "string"
                    ? [...(this.unwrap() as string[])]
                    : (this as EList<EString | EChar>)
                          .map((item: EString | EChar): string => item.unwrap())
                          .unwrap();
        } else {
            throw new Error("Cannot join non-string elements (string, EString, EChar only)");
        }

        return EString.from(this.unwrap().join(EString.from(separator).unwrap()));
    }

    rev(): EList<T> {
        return EList.from(this.unwrap().reverse());
    }

    toSet(): Set<T> {
        return new Set(this.unwrap());
    }

    merge(other: EList<T>): EList<T> {
        return new EList([...this.unwrap(), ...other.unwrap()]);
    }

    sort(comparisonFunction?: (a: T, b: T) => number): EList<T> {
        return EList.from(this.unwrap().sort(comparisonFunction));
    }

    fold(initial: T, callback: (a: T, b: T) => T) {
        let mem: T = initial;
        for (let i: number = 0; i < this.len().unwrap(); i++) {
            mem = callback(mem, this.arr[i]);
        }
        return mem;
    }

    foldl(initial: T, callback: (a: T, b: T) => T) {
        return this.fold(initial, callback);
    }

    foldr(initial: T, callback: (a: T, b: T) => T) {
        return this.rev().fold(initial, callback);
    }

    fold1(callback: ((a: number, b: number) => number) | ((a: ENumber, b: ENumber) => ENumber)): number {
        if (!(this.arr[0] instanceof ENumber) || typeof this.arr[0] !== "number") {
            throw new Error("Cannot fold1 over a non-numeric element");
        }
        return typeof this.arr[0] === "number"
            ? (this.clone() as EList<number>).fold(1, callback as (a: number, b: number) => number)
            : (this.clone() as EList<ENumber>)
                  .fold(ENumber.from(1), callback as (a: ENumber, b: ENumber) => ENumber)
                  .unwrap();
    }

    foldl1(callback: ((a: number, b: number) => number) | ((a: ENumber, b: ENumber) => ENumber)): number {
        return this.fold1(callback);
    }

    foldr1(callback: ((a: number, b: number) => number) | ((a: ENumber, b: ENumber) => ENumber)): number {
        return this.rev().fold1(callback);
    }

    fold0(callback: ((a: number, b: number) => number) | ((a: ENumber, b: ENumber) => ENumber)): number {
        if (!(this.arr[0] instanceof ENumber) || typeof this.arr[0] !== "number") {
            throw new Error("Cannot fold0 over a non-numeric element");
        }
        return typeof this.arr[0] === "number"
            ? (this.clone() as EList<number>).fold(0, callback as (a: number, b: number) => number)
            : (this.clone() as EList<ENumber>)
                  .fold(ENumber.from(0), callback as (a: ENumber, b: ENumber) => ENumber)
                  .unwrap();
    }

    foldl0(callback: ((a: number, b: number) => number) | ((a: ENumber, b: ENumber) => ENumber)): number {
        return this.fold0(callback);
    }

    foldr0(callback: ((a: number, b: number) => number) | ((a: ENumber, b: ENumber) => ENumber)): number {
        return this.rev().fold0(callback);
    }

    sum(): T {
        if (!(this.arr[0] instanceof ENumber) || typeof this.arr[0] !== "number") {
            throw new Error("Cannot sum a non-numeric array (number, ENumber only)");
        }
        return (
            typeof this.arr[0] === "number"
                ? this.fold0(
                      typeof this.arr[0] === "number"
                          ? (a: number, b: number): number => a + b
                          : (a: ENumber, b: ENumber): ENumber => a.add(b),
                  )
                : (this as EList<ENumber>).fold(
                      ENumber.from(0),
                      (a: ENumber, b: ENumber): ENumber => a.add(b),
                  )
        ) as T;
    }
}
