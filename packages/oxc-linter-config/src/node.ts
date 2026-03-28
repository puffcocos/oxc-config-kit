import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['node'],
  ignorePatterns: [
    'node_modules/**',
    'out/**',
    'build/**',
    'dist/**',
    '.next/**',
    'next-env.d.ts',
  ],
})
