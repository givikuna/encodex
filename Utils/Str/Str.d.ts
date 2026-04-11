export namespace Str {
    /**
     * Capitalizes the first letter of a string and converts the rest to lowercase.
     * @param it - The string to capitalize.
     * @returns The capitalized string.
     * @example
     * ```typescript
     * Str.capitalize('hELLO'); // Returns 'Hello'
     * ```
     */
    export function capitalize(it: string): string;

    /**
     * Converts a string to Title Case (capitalizes the first letter of each word).
     * @param it - The string to convert.
     * @returns The title-cased string.
     * @example
     * ```typescript
     * Str.title('hello world'); // Returns 'Hello World'
     * ```
     */
    export function title(it: string): string;

    /**
     * Converts a string to camelCase.
     * @param it - The string to convert.
     * @returns The camel-cased string.
     * @example
     * ```typescript
     * Str['camel-case']('hello world'); // Returns 'helloWorld'
     * ```
     */
    export function camelCase(it: string): string;

    /**
     * Converts a string to kebab-case.
     * @param it - The string to convert.
     * @returns The kebab-cased string.
     * @example
     * ```typescript
     * Str['kebab-case']('helloWorld'); // Returns 'hello-world'
     * ```
     */
    export function kebabCase(it: string): string;

    /**
     * Converts a string to snake_case.
     * @param it - The string to convert.
     * @returns The snake-cased string.
     * @example
     * ```typescript
     * Str['snake-case']('helloWorld'); // Returns 'hello_world'
     * ```
     */
    export function snakeCase(it: string): string;

    /**
     * Removes whitespace from both ends of a string.
     * @param it - The string to trim.
     * @returns The trimmed string.
     */
    export function trim(it: string): string;

    /**
     * Removes whitespace from both ends and collapses internal whitespace to single spaces.
     * @param it - The string to supertrim.
     * @returns The cleaned string.
     * @example
     * ```typescript
     * Str.supertrim('  hello    world  '); // Returns 'hello world'
     * ```
     */
    export function supertrim(it: string): string;

    /**
     * Truncates a string to a specific length, adding an omission indicator.
     * @param s - The string to truncate.
     * @param l - The maximum length including the omission string.
     * @param o - The omission string (defaults to '...').
     * @returns The truncated string.
     * @example
     * ```typescript
     * Str.trunc('Hello World', 8); // Returns 'Hello...'
     * ```
     */
    export function trunc(s: string, l: number, o?: string): string;

    /**
     * Splits a string into an array of substrings.
     * @param se - The separator (string or RegExp).
     * @param s - The string to split.
     * @returns An array of strings.
     */
    export function split(se: string | RegExp, s: string): string[];

    /**
     * Joins an array of strings into a single string.
     * @param se - The separator string.
     * @param xs - The array of strings to join.
     * @returns The joined string.
     */
    export function join(se: string, xs: string[]): string;

    /**
     * Reverses a string, properly handling multi-code point characters.
     * @param it - The string to reverse.
     * @returns The reversed string.
     */
    export function rev(it: string): string;

    /**
     * Returns the length of the string.
     * @param it - The target string.
     * @returns The number of characters.
     */
    export function size(it: string): number;

    /*
     * Checks if a string contains a specific substring.
     * @param search - The substring to look for.
     * @param s - The source string.
     * @returns True if found, false otherwise.
     */
    export function contains(search: string, s: string): boolean;

    /**
     * Determines if a value is a palindrome (ignoring non-alphanumeric characters and case).
     * @param it - The value to check.
     * @returns True if the value is a palindrome.
     * @example
     * ```typescript
     * Str.palindrome('A man, a plan, a canal: Panama'); // Returns true
     * ```
     */
    export function palindrome(it: unknown): boolean;
}
