export class Queue<T> {
    private queue: T[];
    private maxSize: number;

    constructor(queue?: T[], m_size?: number) {
        this.queue = queue || [];
        this.maxSize = m_size || Infinity;
    }

    enqueue(item: T) {
        if (this.isFull()) throw new Error("Queue is full");
        this.queue.push(item);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) throw new Error("Queue is empty");
        const new_queue: T[] = [];
        for (let i: number = 1; i < this.queue.length; i++) {
            new_queue.push(this.queue[i]);
        }
        const val: T | undefined = this.queue[0];
        this.queue = new_queue;
        return val;
    }

    peek(): T | undefined {
        return this.queue[0];
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    isFull(): boolean {
        return this.size() >= this.maxSize;
    }

    size(): number {
        return this.queue.length;
    }
}
