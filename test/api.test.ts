// @ts-expect-error vitest pool workers provide a cloudflare:test module AT RUNTIME
// eslint-disable-next-line
import { env } from 'cloudflare:test'
import { compress } from 'hono/compress'
import { describe, it, expect } from 'vitest'
import app from '../server'

describe('GET /api/check', () => {
  app.use(compress({ encoding: 'gzip' }))

  it('Should return 200', async () => {
    const res = await app.request(
      '/api/check',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      { ...env, TEST: true }
    )

    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ status: 'ok' })
  })
})
