import {combineReducers} from 'redux';
import { reducerTodo } from './reducerTodo';

const rootReducer=combineReducers({
  reducerTodo,
})

export default rootReducer;