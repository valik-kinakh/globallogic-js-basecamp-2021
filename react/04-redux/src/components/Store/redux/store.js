import {createStore,applyMiddleware } from "@reduxjs/toolkit";
import { reducerTodo } from "./reducers/reducerTodo";
import rootReducer from './reducers/rootReducer';
import { logger } from 'redux-logger/src';

const store=createStore(rootReducer,applyMiddleware(logger))
export default store;