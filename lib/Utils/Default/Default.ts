import { Type } from "../../Type/Type";

export class Default {
    public static comparator: Type.Comparator<number, number> = (a: number, b: number): -1 | 0 | 1 =>
        a > b ? 1 : a === b ? 0 : -1;
    public static nil: null = null;
}
