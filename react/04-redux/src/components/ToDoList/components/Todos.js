import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../../Store/redux/reducers/reducerTodo';
import { nanoid } from '@reduxjs/toolkit';
import '../main.css';

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: obj => dispatch(addTodos(obj))
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState('');

  function handleTodo(e) {
    setTodo(e.target.value);
  }

  const add = () => {
    if (todo === '') {
      alert('Task is empty');
    } else {
      props.addTodo({
        id: nanoid(),
        item: todo,
        completed: false
      });
      setTodo('');
    }
  };


  return (
    <div className='addTodos'>
      <input type='text' placeholder='Type your to do here' className='input-todo'
             value={todo}
             onChange={e => handleTodo(e)}
      />
      <br />
      <button className='addBtn' onClick={() => add()}>Add</button>

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);