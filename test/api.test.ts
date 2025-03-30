// @ts-expect-error vitest pool workers provide a cloudflare:test module AT RUNTIME
// eslint-disable-next-line
import { env } from 'cloudflare:test'
import { describe, it, expect, beforeAll, vi, afterAll } from 'vitest'
import app from '../server'
import { setTestEnv } from './utils'

describe('GET /api/check', () => {
  let testEnv

  beforeAll(() => {
    testEnv = setTestEnv(env)

    vi.mock('@hono/clerk-auth', () => ({
      clerkMiddleware: vi.fn().mockImplementation(() => (_, next) => next()),
      getAuth: vi.fn().mockImplementation(() => ({})),
    }))
  })

  afterAll(() => {
    vi.resetAllMocks()
  })

  it('Should return 200', async () => {
    const res = await app.request(
      '/api/check',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      testEnv
    )

    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ status: 'ok' })
  })
})
