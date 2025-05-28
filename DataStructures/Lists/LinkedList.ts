import { Collection } from "../../Interfaces/Collection";

import { Comparator } from "../../Types/Comparator";
import { Nullable } from "../../Types/Nullable";

import { Default } from "../../Utilities/Default";

export class LLNode<T> {
    public value: T;
    public next: Nullable<LLNode<T>>;

    constructor(value: T, next: Nullable<LLNode<T>> = null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList<T> implements Collection<T>, Iterable<T> {
    private head: LLNode<T> | null = null;
    private tail: LLNode<T> | null = null;
    private length: number = 0;
    private comparator: Comparator<T>;

    constructor(initialItems?: T[], comparator?: Comparator<T>) {
        if (initialItems) {
            this.head = new LLNode(initialItems[0], null);
            let cur: LLNode<T> = this.head;
            for (let i: number = 1; i < initialItems.length; i++) {
                cur.next = new LLNode(initialItems[i], null);
                cur = cur.next;
            }
        }
        this.comparator = comparator ?? Default.comparator<T>;
    }

    append(value: T): void {
        const node: LLNode<T> = new LLNode(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    prepend(value: T): void {
        const node: LLNode<T> = new LLNode(value, this.head);
        this.head = node;
        if (!this.tail) this.tail = node;
        this.length++;
    }

    remove(value: T): boolean {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            this.length--;
            return true;
        }

        let current: LLNode<T> = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            if (current.next === this.tail) this.tail = current;
            current.next = current.next.next;
            this.length--;
            return true;
        }

        return false;
    }

    get(index: number): T | undefined {
        if (index < 0 || index >= this.length) return undefined;
        let current: Nullable<LLNode<T>> = this.head;
        let i = 0;
        while (i < index && current) {
            current = current.next;
            i++;
        }
        return current?.value;
    }

    findIndex(predicate: (value: T, index?: number) => boolean): number {
        let current: Nullable<LLNode<T>> = this.head;
        let i: number = 0;
        while (current) {
            if (predicate(current.value, i)) return i;
            current = current.next;
            i++;
        }
        return -1;
    }

    includes(value: T): boolean {
        return !(this.findIndex((v: T): boolean => this.comparator(value, v) === 0) === -1);
    }

    toArray(): T[] {
        const arr: T[] = [];
        let current: Nullable<LLNode<T>> = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    clear(): void {
        this.head = this.tail = null;
        this.length = 0;
    }

    size(): number {
        return this.length;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    clone(): LinkedList<T> {
        const newList: LinkedList<T> = new LinkedList<T>();
        for (const item of this) newList.append(item);
        return newList;
    }

    map<U>(callback: (item: T, index?: number) => U): LinkedList<U> {
        const ll: LinkedList<U> = new LinkedList<U>();

        let cur: Nullable<LLNode<T>> = this.head;
        while (cur != null) {
            ll.append(callback(cur.value));
            cur = cur.next;
        }

        return ll;
    }

    filter(callback: (item: T, index?: number) => boolean): LinkedList<T> {
        const ll: LinkedList<T> = new LinkedList<T>();
        let cur: Nullable<LLNode<T>> = this.head;

        while (cur != null) {
            if (callback(cur.value)) {
                ll.append(cur.value);
            }
            cur = cur.next;
        }

        return ll;
    }

    reject(predicate: (item: T, index?: number) => boolean): LinkedList<T> {
        return this.filter((item: T, index?: number) => !predicate(item, index));
    }

    reduce<U>(callback: (accumulator: U, item: T, index?: number) => U, initial: U): U {
        return [...this.toArray()].reduce(callback, initial);
    }

    reverse(): void {
        let cur: Nullable<LLNode<T>> = this.head;
        let prev: Nullable<LLNode<T>> = null;
        let next: Nullable<LLNode<T>>;

        while (cur !== null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        this.head = prev;
    }

    reversed(): LinkedList<T> {
        const clone: LinkedList<T> = this.clone();
        clone.reverse();
        return clone;
    }

    [Symbol.iterator](): Iterator<T> {
        let current: Nullable<LLNode<T>> = this.head;
        return {
            next(): IteratorResult<T> {
                if (current) {
                    const value: T = current.value;
                    current = current.next;
                    return { done: false, value };
                }
                return { done: true, value: undefined as any };
            },
        };
    }

    toString(): string {
        return `LinkedList(${this.toArray().join(" -> ")})`;
    }

    toJSON(): T[] {
        return this.toArray();
    }
}
