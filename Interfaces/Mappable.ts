export interface Mappable<T> {
    map<U>(callback: (item: T, index?: number) => U): Mappable<U>;
}
