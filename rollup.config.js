import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");
const options = require("./tsconfig.json");

module.exports = {
    input: "src/index.tsx",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            exports: "auto",
            inlineDynamicImports: true,
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            exports: "auto",
            inlineDynamicImports: true,
            sourcemap: true
        }
    ],
    external: ["react", "dayjs", "tailwind-merge"],
    plugins: [resolve(), commonjs(), typescript({ ...options.compilerOptions, jsx: "react" })]
};
