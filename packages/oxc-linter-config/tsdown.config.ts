import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/common.ts', 'src/react.ts', 'src/node.ts'],
  outDir: 'dist',
  format: 'esm',
  dts: true,
})
