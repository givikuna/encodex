"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = mergeSort;
const Default_1 = require("../Utilities/Default");
function mergeSort(array, compare = Default_1.Default.comparator) {
    if (array.length <= 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid), compare);
    const right = mergeSort(array.slice(mid), compare);
    return merge(left, right, compare);
}
function merge(left, right, compare) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (compare(left[i], right[j]) <= 0) {
            result.push(left[i++]);
        }
        else {
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i), right.slice(j));
}
