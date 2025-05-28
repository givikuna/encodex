import { Reverse } from "../Types";

export class Function {
    flip<T extends (...args: any[]) => any>(f: T): (...args: Reverse<Parameters<T>>) => ReturnType<T> {
        return (...args: any[]) => f(...args.reverse());
    }
}
