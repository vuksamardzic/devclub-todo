import './Todo.css';
import React from 'react';


const Todo = props => {
  const onTodoDelete = (id) => {
    props.emitTodoDelete(id);
  };

  return (
    <div className="Todo">
      <div className="flex-cc lh-1">{props.data.name}</div>
      <div>
        <img className="Todo__remove flex-cc"
             onClick={() => onTodoDelete(props.data.id)}
             src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtMjU2IDBjLTE0MS4xNjQwNjIgMC0yNTYgMTE0LjgzNTkzOC0yNTYgMjU2czExNC44MzU5MzggMjU2IDI1NiAyNTYgMjU2LTExNC44MzU5MzggMjU2LTI1Ni0xMTQuODM1OTM4LTI1Ni0yNTYtMjU2em0wIDAiIGZpbGw9IiNmNDQzMzYiLz48cGF0aCBkPSJtMzUwLjI3MzQzOCAzMjAuMTA1NDY5YzguMzM5ODQzIDguMzQzNzUgOC4zMzk4NDMgMjEuODI0MjE5IDAgMzAuMTY3OTY5LTQuMTYwMTU3IDQuMTYwMTU2LTkuNjIxMDk0IDYuMjUtMTUuMDg1OTM4IDYuMjUtNS40NjA5MzggMC0xMC45MjE4NzUtMi4wODk4NDQtMTUuMDgyMDMxLTYuMjVsLTY0LjEwNTQ2OS02NC4xMDkzNzYtNjQuMTA1NDY5IDY0LjEwOTM3NmMtNC4xNjAxNTYgNC4xNjAxNTYtOS42MjEwOTMgNi4yNS0xNS4wODIwMzEgNi4yNS01LjQ2NDg0NCAwLTEwLjkyNTc4MS0yLjA4OTg0NC0xNS4wODU5MzgtNi4yNS04LjMzOTg0My04LjM0Mzc1LTguMzM5ODQzLTIxLjgyNDIxOSAwLTMwLjE2Nzk2OWw2NC4xMDkzNzYtNjQuMTA1NDY5LTY0LjEwOTM3Ni02NC4xMDU0NjljLTguMzM5ODQzLTguMzQzNzUtOC4zMzk4NDMtMjEuODI0MjE5IDAtMzAuMTY3OTY5IDguMzQzNzUtOC4zMzk4NDMgMjEuODI0MjE5LTguMzM5ODQzIDMwLjE2Nzk2OSAwbDY0LjEwNTQ2OSA2NC4xMDkzNzYgNjQuMTA1NDY5LTY0LjEwOTM3NmM4LjM0Mzc1LTguMzM5ODQzIDIxLjgyNDIxOS04LjMzOTg0MyAzMC4xNjc5NjkgMCA4LjMzOTg0MyA4LjM0Mzc1IDguMzM5ODQzIDIxLjgyNDIxOSAwIDMwLjE2Nzk2OWwtNjQuMTA5Mzc2IDY0LjEwNTQ2OXptMCAwIiBmaWxsPSIjZmFmYWZhIi8+PC9zdmc+Cg=="
             alt="remove icon"/>
      </div>
    </div>
  );
};

export default Todo;
