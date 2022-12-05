import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");

export default {
    input: "src/index.tsx",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            exports: "auto",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            exports: "auto",
            sourcemap: true
        }
    ],
    external: ["react", "dayjs"],
    plugins: [resolve(), commonjs(), typescript()]
};
