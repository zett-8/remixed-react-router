import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { drizzle } from 'drizzle-orm/d1'
import type { Hono } from 'hono'
import { contextStorage } from 'hono/context-storage'
import { createFactory } from 'hono/factory'
import { logger } from 'hono/logger'
import * as schema from '../database/schema/index'
import { createRepositories } from './infrastructure/repositories'
import { createServices } from './services'

export const setMiddlewares = (app: Hono<HonoENV>): Hono<HonoENV> => {
  app.use(logger())
  app.use(contextStorage())

  app.use(async (c, next) => {
    const start = Date.now()
    await next()
    const end = Date.now()
    c.res.headers.set('X-Response-Time', `${end - start}`)
  })

  app.use(setInfrastructure)
  app.use('*', clerkMiddleware())
  app.use('/dashboard/*', setAuthForDashboard)
  app.use('/api/*', setAuthForAPI)

  return app
}

const F = createFactory<HonoENV>()

const setInfrastructure = F.createMiddleware(async (c, next) => {
  const repositories = createRepositories(drizzle(c.env.DB, { schema }))
  const services = createServices(repositories)

  c.set('services', services)

  return next()
})

const setAuthForDashboard = F.createMiddleware(async (c, next) => {
  const auth = getAuth(c)

  if (!auth || !auth.userId) {
    return c.redirect('/')
  }

  return next()
})

const setAuthForAPI = F.createMiddleware(async (c, next) => {
  const _ = getAuth(c)

  // do some other auth for API

  return next()
})
