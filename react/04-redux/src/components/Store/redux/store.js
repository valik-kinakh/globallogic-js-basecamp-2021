import { configureStore } from '@reduxjs/toolkit';
import { reducerTodo } from './reducers/reducerTodo';
import userReducer from './reducers/userReducer';
import { logger } from 'redux-logger/src';

const store = configureStore({
  reducer: {
    users: userReducer,
    reducerTodo
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
export default store;