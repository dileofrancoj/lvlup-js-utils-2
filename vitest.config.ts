import path from 'path'
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      // environment: 'jsdom' // emular tiempos
      alias: {
        '@src': path.resolve(__dirname, '/src')
      }
    }
  })
)
