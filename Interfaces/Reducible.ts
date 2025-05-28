export interface Reducible<T> {
    reduce<U>(callback: (accumulator: U, item: T, index?: number) => U, initial: U): U;
}
