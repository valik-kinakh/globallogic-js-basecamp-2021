import React from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos, completeTodos } from '../../Store/redux/reducers/reducerTodo';
import TodoItem from './TodoItem';
import '../main.css';

const mapStateToProps = (state) => {
  return {
    todos: state.reducerTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    completeTodo: (id) => dispatch(completeTodos(id))
  };
};

const DisplayTodos = props => {

  return (
    <div className='displayTodos'>
      <ul className='todoList'>
        {props.todos.length > 0
          ? props.todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                completeTodo={props.completeTodo}
              />
            );
          })
          : null}

      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

