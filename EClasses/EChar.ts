import { Comparable } from "../Interfaces/Comparable";
import { EBool } from "./EBool";
import { EString } from "./EString";

export class EChar implements Comparable {
    private c: string;

    constructor(c: string | EChar | EString) {
        if (typeof c === "string") {
            this.c = c[0];
        } else if (c instanceof EChar) {
            this.c = c.unwrap();
        } else {
            this.c = c
                .charAt(0)
                .unwrapOrElse((): EChar => EChar.from("0"))
                .unwrap();
        }
    }

    static from(c: ConstructorParameters<typeof EChar>[0]) {
        return new EChar(c);
    }

    static toCharArray(s: string | EString) {
        return [
            ...(typeof s === "string"
                ? s.split("").map((c: string): EChar => EChar.from(c))
                : s.asCharArray()),
        ];
    }

    unwrap(): string {
        return this.c;
    }

    clone(): EChar {
        return new EChar(String(this.unwrap()));
    }

    toString(): EString {
        return new EString(String(this.unwrap()));
    }

    upper(): EChar {
        return new EChar(this.unwrap().toUpperCase());
    }

    lower(): EChar {
        return new EChar(this.unwrap().toLowerCase());
    }

    isDigit(): EBool {
        return new EBool(/\d/.test(this.unwrap()));
    }

    isLetter(): EBool {
        return new EBool(/[a-zA-Z]/.test(this.unwrap()));
    }

    isUpper(): EBool {
        return new EBool(this.unwrap() === this.lower().unwrap() && this.isLetter().unwrap());
    }

    isLower(): EBool {
        return new EBool(this.isUpper().not());
    }

    equals(): EBool {
        return new EBool(this.unwrap() === this.unwrap());
    }

    compareTo(c: EChar): -1 | 0 | 1 {
        return c.unwrap() === this.unwrap() ? 0 : c.unwrap() > this.unwrap() ? -1 : 1;
    }
}
