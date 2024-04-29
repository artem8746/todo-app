import React, { useEffect, useState } from "react"
import { TodoList } from "../../components/TodoList"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { actions as todosActions } from "../../features/todosSlice";
import { getNextTodoId } from "../../services/getNextTodoId";
import { Todo } from "../../types/Todo";
import styles from './Todos.module.scss';

interface Props {
  isDeleted?: boolean
}

export const Todos: React.FC<Props> = ({ isDeleted }) => {
  const todos = useAppSelector(state => state.todosReducer);
  const dispatch = useAppDispatch();
  const [preparedTodos, setPreparedTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  useEffect(() => {
    setPreparedTodos(
      todos.filter(todo => todo.isActive === !isDeleted)
    )
  }, [isDeleted, todos])

  const handleNewTodoFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTodoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: getNextTodoId(todos),
      title: newTodoTitle.trim(),
      isActive: true
    }

    dispatch(todosActions.add(newTodo));

    setNewTodoTitle('');
  }

  const onNewTodoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
  }

  return (
    <section className={styles.todos}>
      <div className={styles.todos__content}>
        <form onSubmit={handleNewTodoFormSubmit} className={styles.todos__form}>
          <input
            placeholder="What needs to be done?"
            className={styles.todos__input}
            type="text"
            onChange={onNewTodoInputChange}
            value={newTodoTitle}
          />
        </form>
        <TodoList todos={preparedTodos} />
      </div>
    </section>
  );
}