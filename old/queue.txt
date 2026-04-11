import { Collection } from "../../Interfaces/Collection";

type Comparator<T> = (a: T, b: T) => number;
type Nullable<T> = T | null;

import { Default } from "../../Utilities/Default";

export class Queue<T> implements Collection<T>, Iterable<T> {
    private items: T[] = [];
    private comparator: Comparator<T>;

    public constructor(initialItems?: T[], comparator?: Comparator<T>) {
        if (initialItems) {
            this.items = initialItems;
        }
        this.comparator = comparator ?? Default.comparator<T>;
    }

    public enqueue(item: T): void {
        this.items.push(item);
    }

    public dequeue(): Nullable<T> {
        return this.items.shift() ?? null;
    }

    public peek(): Nullable<T> {
        return this.items[0] ?? null;
    }

    public last(): Nullable<T> {
        return this.items[this.items.length - 1] ?? null;
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    public size(): number {
        return this.items.length;
    }

    public clear(): void {
        this.items.length = 0;
    }

    public toArray(): T[] {
        return [...this.items];
    }

    public clone(): Queue<T> {
        return new Queue(this.items);
    }

    public reverse(): void {
        this.items.reverse();
    }

    public reversed(): Queue<T> {
        const clone: Queue<T> = this.clone();
        clone.reverse();
        return clone;
    }

    public findIndex(predicate: (item: T, index?: number) => boolean): number {
        return this.items.findIndex(predicate);
    }

    public includes(value: T): boolean {
        for (let i: number = 0; i < this.items.length; i++) {
            if (this.comparator(value, this.items[i]) == 0) {
                return true;
            }
        }
        return false;
    }

    public remove(predicate: (item: T, index?: number) => boolean): boolean {
        const index: number = this.findIndex(predicate);
        if (index != -1) {
            this.items.splice(index, -1);
            return true;
        }
        return false;
    }

    public removeAll(predicate: (item: T, index?: number) => boolean): number {
        let count: number = 0;
        this.items = this.items.filter((item: T, index: number): boolean => {
            const keep: boolean = !predicate(item, index);
            if (!keep) count++;
            return keep;
        });
        return count;
    }

    public forEach(callback: (item: T, index?: number) => void): void {
        this.items.forEach(callback);
    }

    public map<U>(callback: (item: T, index?: number) => U): Queue<U> {
        return new Queue([...this.items].map(callback));
    }

    public filter(predicate: (item: T, index?: number) => boolean): Queue<T> {
        return new Queue([...this.items].filter(predicate));
    }

    public reject(predicate: (item: T, index?: number) => boolean): Queue<T> {
        return this.filter((item: T, index?: number) => !predicate(item, index));
    }

    public reduce<U>(callback: (accumulator: U, item: T, index?: number) => U, initial: U): U {
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
