import { Comparator } from "../../Types/Comparator";

import { Default } from "../../Utilities/Default";

export class MinHeap<T> {
    private heap: T[] = [];
    private comparator: Comparator<T>;

    constructor(comparator?: (a: T, b: T) => number) {
        this.comparator = comparator ?? Default.comparator;
    }

    size(): number {
        return this.heap.length;
    }

    peek(): T | undefined {
        return this.heap[0];
    }

    insert(value: T): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    extract(): T | undefined {
        if (this.heap.length === 0) return undefined;
        const top = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return top;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (this.comparator(element, parent) >= 0) break;

            this.heap[index] = parent;
            index = parentIndex;
        }

        this.heap[index] = element;
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallest = index;

            if (leftIndex < length && this.comparator(this.heap[leftIndex], this.heap[smallest]) < 0) {
                smallest = leftIndex;
            }

            if (rightIndex < length && this.comparator(this.heap[rightIndex], this.heap[smallest]) < 0) {
                smallest = rightIndex;
            }

            if (smallest === index) break;

            this.heap[index] = this.heap[smallest];
            index = smallest;
        }

        this.heap[index] = element;
    }

    toArray(): T[] {
        return [...this.heap];
    }
}
