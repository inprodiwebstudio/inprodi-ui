// rollup.config.js
import { babel } from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"

export default {
  // entry points
  input: ["src/index.ts"],
  // output files
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      preserveModules : true,
    },
  ],
  external: [/@babel\/runtime/, 'react'],
  // Plugins array
  plugins: [
    resolve(), // resolves package entrypoints
    typescript(),
    babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
  ]
} 