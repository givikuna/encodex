export class FILOStack<T> {
    private maxSize: number;
    private stack: T[];

    constructor(stack?: T[], maxSize?: number) {
        this.maxSize = maxSize || Infinity;
        this.stack = stack || [];
    }

    push(item: T) {
        if (this.isFull()) throw new Error("Stack is full");
        this.stack.push(item);
    }

    pop(): T | undefined {
        return this.stack.pop();
    }

    top(): T | undefined {
        return this.stack[this.stack.length - 1];
    }

    size(): number {
        return this.stack.length;
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    isFull(): boolean {
        return this.size() >= this.maxSize;
    }
}
