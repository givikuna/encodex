"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LLNode = void 0;
const Default_1 = require("../../Utilities/Default");
class LLNode {
    value;
    next;
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.LLNode = LLNode;
class LinkedList {
    head = null;
    tail = null;
    length = 0;
    comparator;
    constructor(initialItems, comparator) {
        if (initialItems) {
            this.head = new LLNode(initialItems[0], null);
            let cur = this.head;
            for (let i = 1; i < initialItems.length; i++) {
                cur.next = new LLNode(initialItems[i], null);
                cur = cur.next;
            }
        }
        this.comparator = comparator ?? (Default_1.Default.comparator);
    }
    append(value) {
        const node = new LLNode(value);
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return value;
    }
    prepend(value) {
        const node = new LLNode(value, this.head);
        this.head = node;
        if (!this.tail)
            this.tail = node;
        this.length++;
        return value;
    }
    remove(value) {
        if (!this.head)
            return null;
        if (this.head.value === value) {
            this.head = this.head.next;
            if (!this.head)
                this.tail = null;
            this.length--;
            return value;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            if (current.next === this.tail)
                this.tail = current;
            current.next = current.next.next;
            this.length--;
            return value;
        }
        return null;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let current = this.head;
        let i = 0;
        while (i < index && current) {
            current = current.next;
            i++;
        }
        return (current ?? { value: null }).value;
    }
    findIndex(predicate) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (predicate(current.value, i))
                return i;
            current = current.next;
            i++;
        }
        return -1;
    }
    includes(value) {
        return !(this.findIndex((v) => this.comparator(value, v) === 0) === -1);
    }
    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
    clear() {
        this.head = this.tail = null;
        this.length = 0;
    }
    size() {
        return this.length;
    }
    isEmpty() {
        return this.length === 0;
    }
    clone() {
        const newList = new LinkedList();
        for (const item of this)
            newList.append(item);
        return newList;
    }
    map(callback) {
        const ll = new LinkedList();
        let cur = this.head;
        while (cur != null) {
            ll.append(callback(cur.value));
            cur = cur.next;
        }
        return ll;
    }
    filter(callback) {
        const ll = new LinkedList();
        let cur = this.head;
        while (cur != null) {
            if (callback(cur.value)) {
                ll.append(cur.value);
            }
            cur = cur.next;
        }
        return ll;
    }
    reject(predicate) {
        return this.filter((item, index) => !predicate(item, index));
    }
    reduce(callback, initial) {
        return [...this.toArray()].reduce(callback, initial);
    }
    reverse() {
        let cur = this.head;
        let prev = null;
        let next;
        while (cur !== null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = prev;
    }
    reversed() {
        const clone = this.clone();
        clone.reverse();
        return clone;
    }
    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    const value = current.value;
                    current = current.next;
                    return { done: false, value };
                }
                return { done: true, value: undefined };
            },
        };
    }
    toString() {
        return `LinkedList(${this.toArray().join(" -> ")})`;
    }
    toJSON() {
        return this.toArray();
    }
}
exports.LinkedList = LinkedList;
