import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

module.exports = {
    input: "src/index.tsx",
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
            inlineDynamicImports: true
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
            inlineDynamicImports: true
        }
    ],
    external: ["react", "dayjs"],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
    jsx: {
        mode: "preserve",
        factory: "React.createElement",
        fragment: "React.Fragment",
        importSource: "react"
    }
};
