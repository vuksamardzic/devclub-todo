import React from 'react';
import './App.css';
import Todo from './components/todo/Todo';


const App = () => {
  const [name, setName] = React.useState('');
  const [list, setList] = React.useState([]);

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (name) {
      const data = {
        name: name,
        id: generateID()
      };
      setName('');
      setList([...list, data]);
    }
  };

  const onInputNameChange = (ev) => {
    setName(ev.target.value);
  };

  const handleTodoDelete = (id) => {
    setList([...list.filter(i => i.id !== id)]);
  };

  const generateID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="App">
      <header className="App__header">
        <h3>Todo app</h3>
        <form onSubmit={onSubmit} className="flex-cc">
          <input type="text"
                 placeholder="example: try react"
                 className="App__input fg-1 d-flex"
                 value={name}
                 onChange={onInputNameChange}/>
          <button className="App__button App__button--blue"
                  type="submit">Submit
          </button>
        </form>
      </header>
      <div className="App__body">
        {list.length ? '' : 'add something to do :)'}
        {list.map(data => <Todo data={data}
                                emitTodoDelete={handleTodoDelete}
                                key={data.id}/>)}
      </div>
    </div>
  );
};

export default App;
