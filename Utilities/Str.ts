export class Str {
    static title(s: string): string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    static supertrim(s: string): string {
        return s.replace(/\r?\n|\r/g, "").trim();
    }
}
