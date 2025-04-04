import type { todos } from '../../database/schema'
import type { TodoDomain } from '../domains/todo.domain'
import type { TodoRepository } from '../infrastructure/todo.repository'

export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async create(todo: typeof todos.$inferInsert): Promise<TodoDomain> {
    return this.todoRepository.create(todo)
  }

  async findAll(): Promise<TodoDomain[]> {
    return this.todoRepository.findAll()
  }

  async delete(id: string): Promise<TodoDomain> {
    return this.todoRepository.delete(id)
  }
}
