"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxHeap = void 0;
const MinHeap_1 = require("./MinHeap");
const Default_1 = require("../../Utilities/Default");
class MaxHeap {
    heap;
    constructor(comparator) {
        this.heap = new MinHeap_1.MinHeap((a, b) => (comparator ? -comparator(a, b) : Default_1.Default.comparator(a, b)));
    }
    get size() {
        return this.heap.size();
    }
    peek() {
        return this.heap.peek();
    }
    insert(value) {
        this.heap.insert(value);
    }
    extract() {
        return this.heap.extract();
    }
    toArray() {
        return this.heap.toArray();
    }
}
exports.MaxHeap = MaxHeap;
