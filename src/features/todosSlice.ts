import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/getLocalStorage';
import { localStorageTodos } from '../constants/constants';
import { Todo } from '../types/Todo';

const [localTodos, setLocalTodos] = getLocalStorage(
  localStorageTodos,
  []
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: localTodos as Todo[],
  reducers: {
    add: (todos, action: PayloadAction<Todo>) => {
      const newTodos = [...todos, action.payload];

      setLocalTodos(newTodos);

      return newTodos;
    },
    changeStatus: (todos, action: PayloadAction<Todo>) => {
      const newTodos = todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, isActive: !todo.isActive }
        }

        return todo;
      });

      setLocalTodos(newTodos);

      return newTodos;
    },
    edit: (todos, action: PayloadAction<Todo>) => {
      const newTodos = todos.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }

        return todo;
      });

      setLocalTodos(newTodos);

      return newTodos;
    }
  },
});

export const todosReducer = todosSlice.reducer;

export const actions = { ...todosSlice.actions };
