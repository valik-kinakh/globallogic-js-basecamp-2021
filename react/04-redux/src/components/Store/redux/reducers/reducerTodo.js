import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoReducer = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true
          };
        }
        return todo;
      });
    }

  }
});

export const { addTodos, removeTodos, completeTodos } = todoReducer.actions;
export const reducerTodo = todoReducer.reducer;