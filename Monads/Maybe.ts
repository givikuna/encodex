export class Maybe<T> {
    private value: T | null;

    private constructor(value: T | null) {
        this.value = value;
    }

    static of<T>(value: T): Maybe<T> {
        return new Maybe(value);
    }

    static none<T>(): Maybe<T> {
        return new Maybe<T>(null);
    }

    public map<U>(fn: (value: T) => U): Maybe<U> {
        return this.value === null ? Maybe.none<U>() : Maybe.of(fn(this.value));
    }

    public flatMap<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
        return this.value === null ? Maybe.none<U>() : fn(this.value);
    }

    public getOrElse(defaultValue: T): T {
        return this.value === null ? defaultValue : this.value;
    }
}
