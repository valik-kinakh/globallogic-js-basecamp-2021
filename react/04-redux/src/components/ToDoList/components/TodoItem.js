import React from 'react';

const TodoItem = ({ item, removeTodo, completeTodo }) => {

  return(
    <li key={item.id} className='todoElem'>
      <p >{item.item}</p>
      <div className='buttons'>
      {item.completed === false && (
        <button
          style={{ color: "green" }}
          onClick={() => completeTodo(item.id)}
        >
          Done
        </button>
      )}
        <button
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)} >
          Remove
        </button>
      </div>
      {item.completed && <span className="completed">✅</span>}
    </li>
  )
};

export default TodoItem;