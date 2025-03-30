import type { Repositories } from '../infrastructure/repositories'
import { TodoService } from './todo.service'

export type Services = {
  todoService: TodoService
}

export const createServices = (repositories: Repositories): Services => {
  return {
    todoService: new TodoService(repositories.todoRepository),
  }
}
