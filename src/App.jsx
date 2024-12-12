import { useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import Task from "./components/Task";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="App">

      <h1>Todo List</h1>

      <NewTaskForm setItems={setItems} />

      {items.length === 0 && <p>No Todos</p>}
      <ul id="items-list">
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
