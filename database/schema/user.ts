import { sql, type InferSelectModel } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { ulid } from 'ulidx'

export const users = sqliteTable('users', {
  id: text('id').$defaultFn(ulid).primaryKey(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
  email: text('email').unique().notNull(),
  password: text('password'),
  name: text('name'),
  image: text('image'),
  provider: text('provider'),
})

export type User = InferSelectModel<typeof users>
