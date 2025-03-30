import { createFactory } from 'hono/factory'
import { todoInsertSchema } from '~/database/schema/todo'

const F = createFactory<HonoENV>()

export const todosGet = F.createHandlers(async (c) => {
  const { todoService } = c.get('services')
  const todos = await todoService.findAll()
  return c.json(todos)
})

export const todosPost = F.createHandlers(async (c) => {
  const todo = await c.req.json()
  const validatedTodo = todoInsertSchema.safeParse(todo)
  if (!validatedTodo.success) {
    return c.json({ error: validatedTodo.error }, 400)
  }

  const { todoService } = c.get('services')
  const todos = await todoService.create(validatedTodo.data)
  return c.json(todos)
})

export const todosDelete = F.createHandlers(async (c) => {
  const id = c.req.param('id')
  if (!id) {
    return c.json({ error: 'id is required' }, 400)
  }

  const { todoService } = c.get('services')
  const todos = await todoService.delete(id)
  if (!todos) {
    return c.json({ error: 'todo not found' }, 404)
  }
  return c.json(todos)
})
