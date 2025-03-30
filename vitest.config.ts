import { defineWorkersProject } from '@cloudflare/vitest-pool-workers/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineWorkersProject(() => ({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    server: {
      deps: {
        inline: ['@hono/clerk-auth', '@clerk/react-router', '@clerk/backend', 'snakecase-keys'],
      },
    },
    poolOptions: {
      workers: { wrangler: { configPath: './wrangler.toml' } },
    },
  },
}))
