import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/base.ts', 'src/react.ts', 'src/node.ts', 'src/react-compiler.ts'],
  outDir: 'dist',
  format: 'esm',
  dts: true,
})
