export interface Filterable<T> {
    filter(predicate: (item: T, index?: number) => boolean): Filterable<T>;
}
