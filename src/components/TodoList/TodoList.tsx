import React from "react"
import { Todo } from "../../types/Todo"
import { TodoItem } from "../TodoItem"
import styles from './TodoList.module.scss';

interface Props {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className={styles['todo-list']}>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoItem todo={todo} />
      </li>
    ))}
  </ul>
)