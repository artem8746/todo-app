import { Todo } from "../types/Todo";

export const getNextTodoId = (todos: Todo[]) => {
  if (!todos.length) {
    return 1;
  }

  return Math.max(...todos.map(todo => todo.id)) + 1
}