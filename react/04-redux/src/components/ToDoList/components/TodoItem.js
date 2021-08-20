import React from 'react';

const TodoItem = ({ item, removeTodo, completeTodo }) => {

  return (
    <li key={item.id} className='todoElem'>
      <p>{item.item}</p>
      <div className='buttons'>
        {item.completed === false && (
          <button
            style={{ color: 'green' }}
            onClick={() => completeTodo(item.id)}
            className='optionBtn'
          >
            Done
          </button>
        )}
        {
          item.completed === true && (
            <span>✅</span>
          )}
        <button
          style={{ color: 'red' }}
          onClick={() => removeTodo(item.id)}
          className='optionBtn'
        >
          Remove
        </button>
      </div>

    </li>
  );
};

export default TodoItem;