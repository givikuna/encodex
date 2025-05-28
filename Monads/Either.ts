export type Either<L, R> = Left<L, R> | Right<L, R>;

export class Left<L, R> {
    readonly type = "Left";
    constructor(public readonly value: L) {}

    isLeft(): this is Left<L, R> {
        return true;
    }

    isRight(): this is Right<L, R> {
        return false;
    }

    map<U>(_: (r: R) => U): Either<L, U> {
        return new Left<L, U>(this.value);
    }

    flatMap<U>(_: (r: R) => Either<L, U>): Either<L, U> {
        return new Left<L, U>(this.value);
    }
}

export class Right<L, R> {
    readonly type = "Right";
    constructor(public readonly value: R) {}

    isLeft(): this is Left<L, R> {
        return false;
    }

    isRight(): this is Right<L, R> {
        return true;
    }

    map<U>(f: (r: R) => U): Either<L, U> {
        return new Right<L, U>(f(this.value));
    }

    flatMap<U>(f: (r: R) => Either<L, U>): Either<L, U> {
        return f(this.value);
    }
}

// Helpers
export const right = <L, R>(value: R): Either<L, R> => new Right(value);
export const left = <L, R>(value: L): Either<L, R> => new Left(value);
