class LNode<T> {
    public data: T;
    public next: LNode<T> | null;

    constructor(data: T, next: LNode<T> | null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList<T> {
    private head: LNode<T> | null;

    constructor() {
        this.head = null;
    }

    getHead(): LNode<T> | null {
        return this.head;
    }

    append(data: T): this {
        const newNode = new LNode(data, null);

        if (this.head === null) {
            this.head = newNode;
            return this;
        }

        let current = this.head;
        while (current.next !== null) current = current.next;
        current.next = newNode;

        return this;
    }

    prepend(data: T): this {
        this.head = new LNode(data, this.head);
        return this;
    }

    remove(data: T): this {
        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.data === data) {
                current.next = current.next.next;
                break;
            }
        }
        return this;
    }

    find(data: T): LNode<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) return current;
            current = current.next;
        }
        return null;
    }

    isEmpty(): boolean {
        return this.head === null;
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
