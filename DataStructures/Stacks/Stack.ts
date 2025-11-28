import { Collection } from "../../Interfaces/Collection";
type Comparator<T> = (a: T, b: T) => number;
type Nullable<T> = T | null;
import { Default } from "../../Utilities/Default";

export class Stack<T> implements Collection<T>, Iterable<T> {
    private items: T[] = [];
    private comparator: Comparator<T>;

    public constructor(initialItems?: T[], comparator?: Comparator<T>) {
        if (initialItems) {
            this.items = [...initialItems];
        }
        this.comparator = comparator ?? Default.comparator<T>;
    }

    public push(item: T): void {
        this.items.push(item);
    }

    public pop(): Nullable<T> {
        return this.items.pop() ?? null;
    }

    public peek(): Nullable<T> {
        return this.items[this.items.length - 1] ?? null;
    }

    public size(): number {
        return this.items.length;
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    public clear(): void {
        this.items = [];
    }

    public clone(): Stack<T> {
        return new Stack([...this.items]);
    }

    public toArray(): T[] {
        return [...this.items];
    }

    public reverse(): void {
        this.items.reverse();
    }

    public reversed(): Stack<T> {
        const clone: Stack<T> = this.clone();
        clone.reverse();
        return clone;
    }

    public forEach(callback: (item: T, index?: number) => void): void {
        [...this.items].reverse().forEach(callback);
    }

    public map<U>(callback: (item: T, index?: number) => U): Stack<U> {
        return new Stack([...this.items].map(callback));
    }

    public includes(value: T): boolean {
        for (let i: number = 0; i < this.items.length; i++) {
            if (this.comparator(value, this.items[i])) {
                return true;
            }
        }
        return false;
    }

    public filter(predicate: (item: T, index?: number) => boolean): Stack<T> {
        return new Stack([...this.items].filter(predicate));
    }

    public reject(predicate: (item: T, index?: number) => boolean): Stack<T> {
        return this.filter((item: T, index?: number) => !predicate(item, index));
    }

    public reduce<U>(callback: (accumulator: U, item: T, index?: number) => U, initial: U): U {
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
