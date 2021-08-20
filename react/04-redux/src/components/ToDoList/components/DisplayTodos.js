import React, { useState } from "react";
import { connect } from "react-redux";
import {addTodos,removeTodos,completeTodos} from '../../Store/redux/reducers/reducerTodo';
import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
  return {
    todos: state.reducerTodo,
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  }
}

const DisplayTodos=props=>{
  const [sort, setSort] = useState("active");

  return(
    <div className='displayTodos'>
      <div className="buttons">

        <button
          onClick={() => setSort("active")}
        >
          Active
        </button>

        <button
          onClick={() => setSort("completed")}
        >
          Completed
        </button>

        <button
          onClick={() => setSort("all")}
        >
          All
        </button>

      </div>
      <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
            return (
              item.completed === false && (

                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  completeTodo={props.completeTodo}
                />

              )
            );
          })
          : null}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
            return (
              item.completed === true && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  completeTodo={props.completeTodo}
                />
              )
            );
          })
          : null}
        {props.todos.length > 0 && sort === "all"
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
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

