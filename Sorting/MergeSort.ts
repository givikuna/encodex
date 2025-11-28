import { Default } from "../Utilities/Default";

type Comparator<T> = (a: T, b: T) => number;

export function mergeSort<T>(array: T[], compare: Comparator<T> = Default.comparator): T[] {
    if (array.length <= 1) {
        return array;
    }

    const mid: number = Math.floor(array.length / 2);
    const left: T[] = mergeSort(array.slice(0, mid), compare);
    const right: T[] = mergeSort(array.slice(mid), compare);

    return merge(left, right, compare);
}

function merge<T>(left: T[], right: T[], compare: Comparator<T>): T[] {
    const result: T[] = [];
    let i: number = 0;
    let j: number = 0;

    while (i < left.length && j < right.length) {
        if (compare(left[i], right[j]) <= 0) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i), right.slice(j));
}
