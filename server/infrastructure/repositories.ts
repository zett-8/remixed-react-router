import type { DrizzleD1Database } from 'drizzle-orm/d1'
import * as schema from '~/database/schema'
import { D1TodoRepository } from './todo.repository'

export type Repositories = {
  todoRepository: D1TodoRepository
}

export const createRepositories = (db: DrizzleD1Database<typeof schema>): Repositories => {
  return {
    todoRepository: new D1TodoRepository(db),
  }
}
