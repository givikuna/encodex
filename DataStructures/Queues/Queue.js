"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const Default_1 = require("../../Utilities/Default");
class Queue {
    items = [];
    comparator;
    constructor(initialItems, comparator) {
        if (initialItems) {
            this.items = initialItems;
        }
        this.comparator = comparator ?? (Default_1.Default.comparator);
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift() ?? null;
    }
    peek() {
        return this.items[0] ?? null;
    }
    last() {
        return this.items[this.items.length - 1] ?? null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items.length = 0;
    }
    toArray() {
        return [...this.items];
    }
    clone() {
        return new Queue(this.items);
    }
    reverse() {
        this.items.reverse();
    }
    reversed() {
        const clone = this.clone();
        clone.reverse();
        return clone;
    }
    findIndex(predicate) {
        return this.items.findIndex(predicate);
    }
    includes(value) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.comparator(value, this.items[i]) == 0) {
                return true;
            }
        }
        return false;
    }
    remove(predicate) {
        const index = this.findIndex(predicate);
        if (index != -1) {
            this.items.splice(index, -1);
            return true;
        }
        return false;
    }
    removeAll(predicate) {
        let count = 0;
        this.items = this.items.filter((item, index) => {
            const keep = !predicate(item, index);
            if (!keep)
                count++;
            return keep;
        });
        return count;
    }
    forEach(callback) {
        this.items.forEach(callback);
    }
    map(callback) {
        return new Queue([...this.items].map(callback));
    }
    filter(predicate) {
        return new Queue([...this.items].filter(predicate));
    }
    reject(predicate) {
        return this.filter((item, index) => !predicate(item, index));
    }
    reduce(callback, initial) {
        return [...this.items].reduce(callback, initial);
    }
    [Symbol.iterator]() {
        let i = 0;
        const data = this.items;
        return {
            next() {
                if (i < data.length) {
                    return { done: false, value: data[i++] };
                }
                return { done: true, value: undefined };
            },
        };
    }
}
exports.Queue = Queue;
