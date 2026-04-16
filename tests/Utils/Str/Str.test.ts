import { Str } from "../../../Utils/Str/Str.ls";

describe("LiveScript String Utilities", () => {
    describe("capitalize", () => {
        it("should capitalize the first letter and lowercase the rest", () => {
            expect(Str.capitalize("hELLO")).toBe("Hello");
        });

        it("should return an empty string if given an empty string", () => {
            expect(Str.capitalize("")).toBe("");
        });
    });

    describe("camelCase", () => {
        it("should convert standard strings to camelCase", () => {
            expect(Str.camelCase("hello world")).toBe("helloWorld");
        });
    });

    describe("kebabCase", () => {
        it("should convert standard strings to kebab-case", () => {
            expect(Str.kebabCase("helloWorld")).toBe("hello-world");
        });
    });
});
