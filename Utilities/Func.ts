import { Reverse } from "../Types";

export class Func {
    flip<T extends (...args: any[]) => any>(f: T): (...args: Reverse<Parameters<T>>) => ReturnType<T> {
        return (...args: any[]) => f(...args.reverse());
    }

    noop(): any {}

    static once<T extends (...args: any[]) => any>(fn: T): T {
        let called = false;
        let result: ReturnType<T>;
        return ((...args: any[]) => {
            if (!called) {
                result = fn(...args);
                called = true;
            }
            return result;
        }) as T;
    }

    static debounce<T extends (...args: any[]) => void>(fn: T, wait: number): T {
        let timeout: any;
        return ((...args: any[]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), wait);
        }) as T;
    }

    static throttle<T extends (...args: any[]) => void>(fn: T, limit: number): T {
        let inThrottle: boolean;
        return ((...args: any[]) => {
            if (!inThrottle) {
                fn(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        }) as T;
    }

    static memoize<T extends (...args: any[]) => any>(fn: T): T {
        const cache = new Map<string, ReturnType<T>>();
        return ((...args: any[]) => {
            const key = JSON.stringify(args);
            if (!cache.has(key)) {
                cache.set(key, fn(...args));
            }
            return cache.get(key)!;
        }) as T;
    }
}
