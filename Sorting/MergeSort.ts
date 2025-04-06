function merge<T>(
    xs: T[],
    ys: T[],
    compare: (x: T, y: T) => -1 | 0 | 1 = (x: T, y: T): -1 | 0 | 1 => (x > y ? 1 : x < y ? -1 : 0),
): T[] {
    const sortedArray: T[] = [];
    let x_i: number = 0;
    let y_i: number = 0;
    while (x_i < xs.length || y_i < ys.length) {
        if (x_i >= xs.length) {
            for (let i: number = y_i; i < ys.length; i++) sortedArray.push(ys[y_i++]);
            break;
        } else if (y_i >= ys.length) {
            for (let i: number = x_i; i < xs.length; i++) sortedArray.push(xs[x_i++]);
            break;
        }
        if (compare(xs[x_i], ys[y_i]) === 1) sortedArray.push(ys[y_i++]);
        else sortedArray.push(xs[x_i++]);
    }

    return sortedArray;
}

export function mergeSort<T>(
    arr: T[],
    compare: (x: T, y: T) => -1 | 0 | 1 = (x: T, y: T): -1 | 0 | 1 => (x > y ? 1 : x < y ? -1 : 0),
): T[] {
    let sortedArray: T[] = [];
    if (arr.length > 1) {
        const mid: number = Math.floor(arr.length / 2);
        const leftArray: T[] = mergeSort(arr.slice(0, mid), compare);
        const rightArray: T[] = mergeSort(arr.slice(mid), compare);
        sortedArray = merge(leftArray, rightArray, compare);
        return sortedArray;
    }

    return arr;
}
