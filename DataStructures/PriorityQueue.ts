import { LinkedList, LNode } from "./SinglyLinkedList";

class PLL<T> extends LinkedList<Item<T>> {
    constructor(...args: Item<T>[]) {
        super(...args);
    }

    insert(value: Item<T>): void {
        if (current == )
        let current: LNode<Item<T>> | null;
        for (let i: number = 0; i < this.size(); i++) {
            current = this.head;
            if (this.head?.data.priority as number < value.priority)
        }
    }
}

class Item<T> {
    public value: T;
    public priority: number;

    constructor(value: T, priority: number) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue<T> {
    private items: LinkedList<Item<T>>;

    constructor() {
        this.items = new LinkedList<Item<T>>();
    }

    enqueue(value: T, priority: number): void {
        this.items.append(new Item(value, priority));
    }
}
