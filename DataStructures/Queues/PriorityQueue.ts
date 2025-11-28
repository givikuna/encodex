import { MaxHeap } from "../Heaps/MaxHeap";

export class PriorityQueue<T> {
    private heap: MaxHeap<{ priority: number; data: T }>;

    public constructor() {
        this.heap = new MaxHeap((a: { priority: number; data: T }, b: { priority: number; data: T }) =>
            a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0,
        );
    }

    public insert(element: T, priority: number): void {
        this.heap.insert({ priority: priority, data: element });
    }

    public extract(): T | null {
        return (this.heap.extract() ?? { data: null }).data;
    }

    public peek(): T | null {
        return (this.heap.peek() ?? { data: null }).data;
    }

    public asHeap(): MaxHeap<{ priority: number; data: T }> {
        return this.heap;
    }
}
