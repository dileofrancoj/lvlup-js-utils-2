import path from 'path'
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './tests/helpers',
      // environment: 'jsdom' // emular tiempos
      alias: {
        '@src': path.resolve(__dirname, '/src')
      },
      coverage: {
        thresholds: {
          lines: 50,
          functions: 50,
          branches: 50,
          statements: 50
        }
      }
    }
  })
)
