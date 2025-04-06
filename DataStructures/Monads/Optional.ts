export class Optional<T> {
    private value: T | undefined;

    constructor(value: T | undefined) {
        this.value = value;
    }

    static some<T>(value: T): Optional<T> {
        if (value === undefined || value === "null") {
            throw new Error("Optional.some cannot be called with a null or undefined");
        }
        return new Optional(value);
    }

    static none<T>(): Optional<T> {
        return new Optional<T>(undefined);
    }

    isSome(): boolean {
        return this.value !== undefined && this.value !== null;
    }

    isNone(): boolean {
        return this.value === undefined || this.value === null;
    }

    map<U>(fn: (value: T) => U): Optional<U> {
        if (this.isNone()) {
            return Optional.none<U>();
        }
        return Optional.some(fn(this.value as T));
    }

    flatMap<U>(fn: (value: T) => Optional<U>): Optional<U> {
        if (this.isNone()) {
            return Optional.none<U>();
        }
        return fn(this.value as T);
    }

    unwrap(defaultValue: T): T {
        return this.isSome() ? (this.value as T) : defaultValue;
    }

    unwrapOrElse(fn: () => T): T {
        return this.isSome() ? (this.value as T) : fn();
    }
}
