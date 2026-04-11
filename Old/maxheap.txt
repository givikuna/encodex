import { MinHeap } from "./MinHeap";

import { Default } from "../../Utilities/Default";
type Nullable<T> = T | null;

export class MaxHeap<T> {
    private heap: MinHeap<T>;

    public constructor(comparator: (a: T, b: T) => number = Default.comparator) {
        this.heap = new MinHeap<T>((a, b) => -comparator(a, b));
    }

    public size(): number {
        return this.heap.size();
    }

    public peek(): Nullable<T> {
        return this.heap.peek();
    }

    public insert(value: T): void {
        this.heap.insert(value);
    }

    public extract(): Nullable<T> {
        return this.heap.extract();
    }

    public toArray(): T[] {
        return this.heap.toArray();
    }
}
