"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
const Utilities_1 = require("../../Utilities");
const MaxHeap_1 = require("../Heaps/MaxHeap");
class PriorityQueue {
    heap;
    constructor() {
        this.heap = new MaxHeap_1.MaxHeap((a, b) => Utilities_1.Default.comparator(a.priority, b.priority));
    }
    insert(element, priority) {
        this.heap.insert({ priority: priority, data: element });
    }
    extract() {
        return (this.heap.extract() ?? { data: null }).data;
    }
    peek() {
        return (this.heap.peek() ?? { data: null }).data;
    }
    asHeap() {
        return this.heap;
    }
}
exports.PriorityQueue = PriorityQueue;
