import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import Task from "./components/Task";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="App">

      <h1 className="todo-list-title">Todo List</h1>

      <NewTaskForm setItems={setItems} />

      {items.length === 0 && <p className="todo-list-default">No Todos</p>}
      <ul className="todo-list">
        {items.map((item) => (
          <li key={item.uuid} >
            <Task item={item} setItems={setItems} />
          </li>
        ))}
      </ul>

    </div>
  );
};

export default App;
