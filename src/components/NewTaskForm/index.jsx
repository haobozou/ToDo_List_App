import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const NewTaskForm = ({ setItems }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) {
      return;
    }
    setItems((prevItems) => {
      return [...prevItems, {
        uuid: uuidv4(),
        content: newTodo,
        isCompleted: false,
      }];
    });
    setNewTodo("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>

      <div className="new-task-form__info">
        <label htmlFor="new-task-form__input">
          New Todo:&nbsp;
        </label>
        <input
          type="text" id="new-task-form__input" value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }} />
      </div>

      <button type="submit" className="new-task-form__button">
        Add
      </button>

    </form>
  );
};

export default NewTaskForm;
