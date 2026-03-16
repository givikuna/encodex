export class Either<L, R> {
    private readonly left: L | null;
    private readonly right: R | null;

    private constructor(left: L | null, right: R | null) {
        this.left = left;
        this.right = right;
    }

    static Left<L, R>(value: L): Either<L, R> {
        return new Either<L, R>(value, null);
    }

    static Right<L, R>(value: R): Either<L, R> {
        return new Either<L, R>(null, value);
    }

    isLeft(): boolean {
        return this.left !== null;
    }

    map<U>(fn: (value: R) => U): Either<L, U> {
        return this.isLeft() ? Either.Left<L, U>(this.left as L) : Either.Right<L, U>(fn(this.right as R));
    }

    flatMap<U>(fn: (value: R) => Either<L, U>): Either<L, U> {
        return this.isLeft() ? Either.Left<L, U>(this.left as L) : fn(this.right as R);
    }
}
