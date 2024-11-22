import { defineConfig, coverageConfigDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, 'public', '**/*.stories.*'],
    },
  },
})
