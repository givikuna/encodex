export type Maybe<T> = Just<T> | Nothing<T>;

export class Just<T> {
    readonly type = "Just";
    constructor(public readonly value: T) {}

    isJust(): this is Just<T> {
        return true;
    }

    isNothing(): this is Nothing<T> {
        return false;
    }

    map<U>(f: (value: T) => U): Maybe<U> {
        return new Just(f(this.value));
    }

    flatMap<U>(f: (value: T) => Maybe<U>): Maybe<U> {
        return f(this.value);
    }
}

export class Nothing<T> {
    readonly type = "Nothing";

    isJust(): this is Just<T> {
        return false;
    }

    isNothing(): this is Nothing<T> {
        return true;
    }

    map<U>(_: (value: T) => U): Maybe<U> {
        return new Nothing<U>();
    }

    flatMap<U>(_: (value: T) => Maybe<U>): Maybe<U> {
        return new Nothing<U>();
    }
}

// Helpers
export const just = <T>(value: T): Maybe<T> => new Just(value);
export const nothing = <T = never>(): Maybe<T> => new Nothing<T>();
