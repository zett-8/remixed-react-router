import { type InferSelectModel } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createInsertSchema } from 'drizzle-zod'
import { ulid } from 'ulidx'

export const todos = sqliteTable('todos', {
  id: text('id').$defaultFn(ulid).primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
})

export type Todo = InferSelectModel<typeof todos>
export const todoInsertSchema = createInsertSchema(todos)
