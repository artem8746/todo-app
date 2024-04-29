import React, { useState } from "react"
import { Todo } from "../../types/Todo"
import { EditIcon } from "../../icons/EditIcon"
import { DeleteIcon } from "../../icons/DeleteIcon"
import styles from './TodoItem.module.scss';
import { useAppDispatch } from "../../app/hooks";
import { actions as todosActions } from "../../features/todosSlice";
import { ReturnIcon } from "../../icons/ReturnIcon";

interface Props {
  todo: Todo
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const dispatch = useAppDispatch();

  const handleTodoDelete = () => {
    dispatch(todosActions.changeStatus(todo));
  }

  const handleTodoEditing = () => {
    setIsEditing(true);
  }

  const handleNewTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  }

  const applyCahnges = () => {
    const normalizedNewTitle = newTitle.trim();

    if (!normalizedNewTitle || normalizedNewTitle === todo.title) {
      setNewTitle(todo.title);
      setIsEditing(false);

      return;
    }

    const newTodo: Todo = {
      ...todo,
      title: normalizedNewTitle
    };

    dispatch(todosActions.edit(newTodo));

    setNewTitle(normalizedNewTitle);
    setIsEditing(false);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    applyCahnges();
  }

  const handleBlur = () => {
    applyCahnges();
  }

  return (
    isEditing
      ? (
        <form className={styles['editing-form']} onSubmit={handleSubmit}>
          <input
            autoFocus
            className={styles['editing-form__input']}
            value={newTitle}
            onChange={handleNewTitleChanged}
            onBlur={handleBlur}
          />
        </form>
      )
      : (
        <article className={styles['todo-item']}>
          <p className={styles['todo-item__title']}>{todo.title}</p>

          <div className={styles['todo-item__buttons']}>
            <button onClick={handleTodoEditing}>
              <EditIcon />
            </button>
            <button onClick={handleTodoDelete}>
              {todo.isActive ? <DeleteIcon /> : <ReturnIcon />}
            </button>
          </div>
        </article >
      )
  )
}