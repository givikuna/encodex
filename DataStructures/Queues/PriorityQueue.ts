import { Nullable } from "../../Types";
import { Default } from "../../Utilities";
import { MaxHeap } from "../Heaps/MaxHeap";

export class PriorityQueue<T> {
    private heap: MaxHeap<{ priority: number; data: T }>;

    public constructor() {
        this.heap = new MaxHeap((a: { priority: number; data: T }, b: { priority: number; data: T }) =>
            Default.comparator(a.priority, b.priority),
        );
    }

    public insert(element: T, priority: number): void {
        this.heap.insert({ priority: priority, data: element });
    }

    public extract(): Nullable<T> {
        return (this.heap.extract() ?? { data: null }).data;
    }

    public peek(): Nullable<T> {
        return (this.heap.peek() ?? { data: null }).data;
    }

    public asHeap(): MaxHeap<{ priority: number; data: T }> {
        return this.heap;
    }
}
