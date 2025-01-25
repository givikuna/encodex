import { Comparable } from "../Interfaces/Comparable";

import { EChar } from "./EChar";
import { Optional } from "../Monads/Optional";
import { EBool } from "./EBool";

export class EString implements Comparable {
    private s: EChar[];

    constructor(s: string | EString | EChar | EChar[]) {
        if (typeof s === "string") {
            this.s = [...EChar.toCharArray(s)];
        } else if (s instanceof EChar) {
            this.s = [s];
        } else if (Array.isArray(s)) {
            this.s = [...s.map((c: EChar): EChar => c.clone())];
        } else if (s instanceof EString) {
            this.s = [...s.clone().asCharArray()];
        } else {
            this.s = [];
        }
    }

    static from(s: ConstructorParameters<typeof EString>[0]): EString {
        return new EString(s);
    }

    unwrap(): string {
        return this.s.map((c: EChar): string => c.unwrap()).join("");
    }

    clone(): EString {
        return new EString(this.unwrap());
    }

    len(): number {
        return this.s.length;
    }

    asCharArray(): EChar[] {
        return [...this.s];
    }

    charAt(index: number): Optional<EChar> {
        return Optional.some(this.s[index] || null);
    }

    append(s: string | EChar): this {
        if (typeof s === "string") {
            this.s.push(...EChar.toCharArray(s));
        } else if (s instanceof EChar) {
            this.s.push(s);
        }
        return this;
    }

    prepend(s: string | EChar): this {
        if (typeof s === "string") {
            this.s = EChar.toCharArray(s).concat(this.s);
        } else if (s instanceof EChar) {
            this.s = [s, ...this.s];
        }
        return this;
    }

    insertAt(index: number, s: string | EChar): this {
        if (typeof s === "string") {
            this.s.splice(index, 0, ...EChar.toCharArray(s));
        } else if (s instanceof EChar) {
            this.s.splice(index, 0, s);
        }
        return this;
    }

    removeAt(index: number): this {
        if (index >= 0 && index < this.len()) {
            this.s.splice(index, 1);
        }
        return this;
    }

    replaceAt(index: number, s: string | EChar) {
        if (index >= 0 && index < this.len()) {
            this.removeAt(index);
            this.insertAt(index, s);
        }
    }

    upper(): EString {
        return new EString(this.unwrap().toUpperCase());
    }

    lower(): EString {
        return new EString(this.unwrap().toLowerCase());
    }

    rev(): EString {
        return new EString([...this.clone().asCharArray().reverse()]);
    }

    contains(sub: ConstructorParameters<typeof EString>[0]): EBool {
        return new EBool(this.unwrap().includes(EString.from(sub).unwrap()));
    }

    lastIndexOf(sub: ConstructorParameters<typeof EString>[0]): number {
        return this.unwrap().lastIndexOf(EString.from(sub).unwrap());
    }

    startsWith(sub: ConstructorParameters<typeof EString>[0]): EBool {
        return new EBool(this.unwrap().startsWith(EString.from(sub).unwrap()));
    }

    endsWith(sub: ConstructorParameters<typeof EString>[0]): EBool {
        return new EBool(this.unwrap().endsWith(EString.from(sub).unwrap()));
    }

    clear(): this {
        this.s = [];
        return this;
    }

    isEmpty(): EBool {
        return new EBool(this.len() === 0);
    }

    compareTo(s: EString): -1 | 0 | 1 {
        return s.unwrap() === this.unwrap() ? 0 : s.unwrap() > this.unwrap() ? -1 : 1;
    }
}
