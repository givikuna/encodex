export class DLLNode<T> {
    public data: T;
    public next: DLLNode<T> | null;
    public prev: DLLNode<T> | null;

    constructor(data: T, next: DLLNode<T> | null = null, prev: DLLNode<T> | null = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

export class DoublyLinkedList<T> {
    protected head: DLLNode<T> | null;

    constructor(...args) {
        this.head = null;
        for (const arg of args) this.append(arg);
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    append(val: T): void {
        const node: DLLNode<T> = new DLLNode(val);

        if (this.isEmpty()) {
            this.head = node;
            return;
        }

        let current: DLLNode<T> = this.head!;
        while (current.next !== null) current = current.next;
        current.next = node;
        node.prev = current;
    }

    remove(val: T): void {
        if (this.isEmpty()) return;

        if (this.head!.data === val) {
            this.head = this.head!.next;
            if (this.head !== null) this.head.prev = null;
            return;
        }

        let current: DLLNode<T> = this.head!;
        while (current.next !== null) {
            if (current.next.data === val) {
                current.next = current.next.next;
                if (current.next !== null) current.next.prev = current;
                return;
            }
            current = current.next;
        }
    }

    reverse(): void {
        if (this.isEmpty()) return;

        let current: DLLNode<T> = this.head!;
        while (current.next !== null) current = current.next;

        while (current.prev !== null) {
            const temp: T = current.data;
            current.data = current.prev.data;
            current.prev.data = temp;
            current = current.prev;
        }
    }
}
