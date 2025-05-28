export class Str {
    static title(s: string): string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    static supertrim(s: string): string {
        return s.replace(/\r?\n|\r/g, "").trim();
    }

    static camelCase(s: string): string {
        return s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
    }

    static kebabCase(s: string): string {
        return s
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    static snakeCase(s: string): string {
        return s
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "_")
            .replace(/^_+|_+$/g, "");
    }

    static truncate(s: string, length: number, suffix: string = "..."): string {
        return s.length > length ? s.slice(0, length - suffix.length) + suffix : s;
    }

    static reverse(s: string): string {
        return [...s].reverse().join("");
    }

    static contains(s: string, substring: string, ignoreCase: boolean = false): boolean {
        return ignoreCase ? s.toLowerCase().includes(substring.toLowerCase()) : s.includes(substring);
    }

    static padCenter(s: string, width: number, char: string = " "): string {
        const len = s.length;
        const pad = width - len;
        if (pad <= 0) {
            return s;
        }
        const left = Math.floor(pad / 2);
        const right = pad - left;
        return char.repeat(left) + s + char.repeat(right);
    }
}
