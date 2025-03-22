export class Cycle<T> {
    private xs: ReadonlyArray<T>;

    public constructor(xs: T[]) {
        this.xs = xs;
    }

    public get(i: number): T {
        let index: number = i;
        if (i < 0) {
            while (index + this.xs.length <= 0) {
                index = index + this.xs.length;
            }
            index = this.xs.length - 1 + index;
        } else while (index - this.xs.length >= 0) index = index - this.xs.length;
        return this.xs[index];
    }
}
