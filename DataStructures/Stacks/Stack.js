"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const Default_1 = require("../../Utilities/Default");
class Stack {
    items = [];
    comparator;
    constructor(initialItems, comparator) {
        if (initialItems) {
            this.items = [...initialItems];
        }
        this.comparator = comparator ?? (Default_1.Default.comparator);
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop() ?? null;
    }
    peek() {
        return this.items[this.items.length - 1] ?? null;
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    clone() {
        return new Stack([...this.items]);
    }
    toArray() {
        return [...this.items];
    }
    reverse() {
        this.items.reverse();
    }
    reversed() {
        const clone = this.clone();
        clone.reverse();
        return clone;
    }
    forEach(callback) {
        [...this.items].reverse().forEach(callback);
    }
    map(callback) {
        return new Stack([...this.items].map(callback));
    }
    includes(value) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.comparator(value, this.items[i])) {
                return true;
            }
        }
        return false;
    }
    filter(predicate) {
        return new Stack([...this.items].filter(predicate));
    }
    reject(predicate) {
        return this.filter((item, index) => !predicate(item, index));
    }
    reduce(callback, initial) {
        return [...this.items].reverse().reduce(callback, initial);
    }
    [Symbol.iterator]() {
        let i = this.items.length - 1;
        return {
            next: () => {
                if (i >= 0) {
                    return { done: false, value: this.items[i--] };
                }
                return { done: true, value: undefined };
            },
        };
    }
}
exports.Stack = Stack;
