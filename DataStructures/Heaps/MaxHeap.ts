import { MinHeap } from "./MinHeap";

import { Default } from "../../Utilities/Default";

export class MaxHeap<T> {
    private heap: MinHeap<T>;

    constructor(comparator?: (a: T, b: T) => number) {
        this.heap = new MinHeap<T>((a, b) => (comparator ? -comparator(a, b) : Default.comparator(a, b)));
    }

    get size(): number {
        return this.heap.size();
    }

    peek(): T | undefined {
        return this.heap.peek();
    }

    insert(value: T): void {
        this.heap.insert(value);
    }

    extract(): T | undefined {
        return this.heap.extract();
    }

    toArray(): T[] {
        return this.heap.toArray();
    }
}
