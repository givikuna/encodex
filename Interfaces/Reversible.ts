export interface Reversible<T> {
    reverse(): void;
    reversed(): Reversible<T>;
}
