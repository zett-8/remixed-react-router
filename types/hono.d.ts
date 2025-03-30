import type { D1Database } from '@cloudflare/workers-types/experimental'
import type { Services } from '../server/services'

declare global {
  type HonoENV = {
    Bindings: {
      DB: D1Database
    }
    Variables: {
      services: Services
    }
  }
}

export {}
