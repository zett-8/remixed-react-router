import type { Hono } from 'hono'
import { compress } from 'hono/compress'
import { logger } from 'hono/logger'
import { appendTrailingSlash } from 'hono/trailing-slash'

export const setMiddlewares = (app: Hono<HonoENV>): Hono<HonoENV> => {
  app.use(appendTrailingSlash())
  app.use(logger())
  app.use(compress())

  app.use(async (c, next) => {
    const start = Date.now()
    await next()
    const end = Date.now()
    c.res.headers.set('X-Response-Time', `${end - start}`)
  })

  return app
}
