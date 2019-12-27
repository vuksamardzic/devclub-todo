import './Todo.css';
import React from 'react';
import ico from './remove-icon.png';


const Todo = props => {
  const onTodoDelete = (id) => {
    props.emitTodoDelete(id);
  };

  return (
    <div className="Todo">
      <div className="Todo__text">{props.data.name}</div>
      <img className="Todo__remove flex-cc"
           onClick={() => onTodoDelete(props.data.id)}
           src={ico}
           alt="remove icon"/>
    </div>
  );
};

export default Todo;
