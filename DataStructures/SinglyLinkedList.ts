import { Stack } from "./Stack";

export class LNode<T> {
    public data: T;
    public next: LNode<T> | null;

    constructor(data: T, next: LNode<T> | null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList<T> {
    protected head: LNode<T> | null;

    constructor(...args: T[]) {
        this.head = null;
        if (args[0] != null && args[0] != undefined) {
            this.head = new LNode(args[0], null);
            let current: LNode<T> = this.head;
            for (let i: number = 1; i < args.length; i++) {
                current.next = new LNode(args[i], null);
                current = current.next;
            }
        }
    }

    size(): number {
        if (this.head == null) return 0;
        let count: number = 1;
        let current: LNode<T> | null = this.head;
        while (current?.next !== null) {
            count++;
            current = current?.next ?? null;
        }
        return count;
    }

    null(): this {
        this.head = null;
        return this;
    }

    isEmpty(): boolean {
        return this.head == null;
    }

    first(): T | null {
        return this.head?.data ?? null;
    }

    peek(): T | null {
        return this.head?.data ?? null;
    }

    append(value: T): void {
        let last: LNode<T> | null = this.head;
        while (last?.next !== null) {
            last = last?.next ?? null;
        }
        last.next = new LNode(value, null);
    }

    prepend(value: T): void {
        this.head = new LNode(value, this.head);
    }

    unshift(value: T): void {
        this.prepend(value);
    }

    shift(): T | null {
        const data: T | null = this.first();
        this.head = this.head?.next ?? null;
        return data;
    }

    last(): T | null {
        if (this.head === null) return null;
        let current: LNode<T> = this.head;
        while (current.next !== null) current = current.next;
        return current.data;
    }

    clear(): void {
        this.head = null;
    }

    toArray(): T[] {
        let arr: T[] = [];
        if (this.isEmpty()) return arr;
        let current = this.head;
        while (current !== null) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }

    rev(): this {
        const stack: Stack<T> = new Stack<T>();
        while (!this.isEmpty()) stack.push(this.shift()!);
        while (!stack.isEmpty()) this.append(stack.pop()!);
        return this;
    }

    stringify(): string {
        let s: string = "";
        if (this.isEmpty()) return s;
        let current = this.head;
        while (current !== null) {
            s += `${current.data}${current.next == null ? "" : " -> "}`;
            current = current.next;
        }
        return s;
    }
}
