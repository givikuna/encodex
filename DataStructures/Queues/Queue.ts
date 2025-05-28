import { Collection } from "../../Interfaces/Collection";

import { Comparator } from "../../Types/Comparator";

import { Default } from "../../Utilities/Default";

export class Queue<T> implements Collection<T>, Iterable<T> {
    private items: T[] = [];
    private comparator: Comparator<T>;

    constructor(initialItems?: T[], comparator?: Comparator<T>) {
        if (initialItems) {
            this.items = initialItems;
        }
        this.comparator = comparator ?? Default.comparator<T>;
    }

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    last(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items.length = 0;
    }

    toArray(): T[] {
        return [...this.items];
    }

    clone(): Queue<T> {
        return new Queue(this.items);
    }

    reverse(): void {
        this.items.reverse();
    }

    reversed(): Queue<T> {
        const clone: Queue<T> = this.clone();
        clone.reverse();
        return clone;
    }

    findIndex(predicate: (item: T, index?: number) => boolean): number {
        return this.items.findIndex(predicate);
    }

    includes(value: T): boolean {
        for (let i: number = 0; i < this.items.length; i++) {
            if (this.comparator(value, this.items[i]) == 0) {
                return true;
            }
        }
        return false;
    }

    remove(predicate: (item: T, index?: number) => boolean): boolean {
        const index: number = this.findIndex(predicate);
        if (index != -1) {
            this.items.splice(index, -1);
            return true;
        }
        return false;
    }

    removeAll(predicate: (item: T, index?: number) => boolean): number {
        let count: number = 0;
        this.items = this.items.filter((item: T, index: number): boolean => {
            const keep: boolean = !predicate(item, index);
            if (!keep) count++;
            return keep;
        });
        return count;
    }

    forEach(callback: (item: T, index?: number) => void): void {
        this.items.forEach(callback);
    }

    map<U>(callback: (item: T, index?: number) => U): Queue<U> {
        return new Queue([...this.items].map(callback));
    }

    filter(predicate: (item: T, index?: number) => boolean): Queue<T> {
        return new Queue([...this.items].filter(predicate));
    }

    reject(predicate: (item: T, index?: number) => boolean): Queue<T> {
        return this.filter((item: T, index?: number) => !predicate(item, index));
    }

    reduce<U>(callback: (accumulator: U, item: T, index?: number) => U, initial: U): U {
        return [...this.items].reduce(callback, initial);
    }

    [Symbol.iterator](): Iterator<T> {
        let i: number = 0;
        const data: T[] = this.items;
        return {
            next(): IteratorResult<T> {
                if (i < data.length) {
                    return { done: false, value: data[i++] };
                }
                return { done: true, value: undefined as any };
            },
        };
    }
}
