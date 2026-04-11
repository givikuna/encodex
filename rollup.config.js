import typescript from "@rollup/plugin-typescript";
import livescript from "rollup-plugin-livescript";

export default {
    input: "src/index.ts",
    output: {
        file: "dist/bundle.js",
        format: "es",
        sourcemap: true,
    },
    plugins: [livescript(), typescript()],
};
