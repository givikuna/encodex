import { Collection } from "../../Interfaces/Collection";

import { Comparator } from "../../Types/Comparator";

import { Default } from "../../Utilities/Default";

export class Stack<T> implements Collection<T>, Iterable<T> {
    private items: T[] = [];
    private comparator: Comparator<T>;

    constructor(initialItems?: T[], comparator?: Comparator<T>) {
        if (initialItems) {
            this.items = [...initialItems];
        }
        this.comparator = comparator ?? Default.comparator<T>;
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    size(): number {
        return this.items.length;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    clear(): void {
        this.items.length = 0;
    }

    clone(): Stack<T> {
        return new Stack([...this.items]);
    }

    toArray(): T[] {
        return [...this.items];
    }

    reverse(): void {
        this.items.reverse();
    }

    reversed(): Stack<T> {
        const clone: Stack<T> = this.clone();
        clone.reverse();
        return clone;
    }

    forEach(callback: (item: T, index?: number) => void): void {
        [...this.items].reverse().forEach(callback);
    }

    map<U>(callback: (item: T, index?: number) => U): Stack<U> {
        return new Stack([...this.items].map(callback));
    }

    includes(value: T): boolean {
        for (let i: number = 0; i < this.items.length; i++) {
            if (this.comparator(value, this.items[i])) {
                return true;
            }
        }
        return false;
    }

    filter(predicate: (item: T, index?: number) => boolean): Stack<T> {
        return new Stack([...this.items].filter(predicate));
    }

    reject(predicate: (item: T, index?: number) => boolean): Stack<T> {
        return this.filter((item: T, index?: number) => !predicate(item, index));
    }

    reduce<U>(callback: (accumulator: U, item: T, index?: number) => U, initial: U): U {
        return [...this.items].reverse().reduce(callback, initial);
    }

    [Symbol.iterator](): Iterator<T> {
        let i: number = this.items.length - 1;
        return {
            next: (): IteratorResult<T> => {
                if (i >= 0) {
                    return { done: false, value: this.items[i--] };
                }
                return { done: true, value: undefined as any };
            },
        };
    }
}
