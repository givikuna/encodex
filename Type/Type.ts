export namespace Type {
    export type Nullable<T> = T | null;
    export type ReversedArray<T extends any[]> = T extends [infer Head, ...infer Tail]
        ? [...ReversedArray<Tail>, Head]
        : [];
    export type FlippedFunction<T> = T extends (...args: infer P) => infer R
        ? (...args: ReversedArray<P>) => R
        : never;
    export type Prettify<T> = { [K in keyof T]: T[K] } & {};
    export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
    export type ElementOf<T> = T extends (infer U)[] ? U : never;
    export type Awaitable<T> = T | Promise<T>;
    export type If<T> = T extends true ? true : false;
}
