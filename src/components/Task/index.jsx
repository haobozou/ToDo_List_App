import "./styles.css";

const Task = ({ item: { uuid, content, isCompleted }, setItems }) => {
  const toggleCompleted = () => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.uuid === uuid) {
          return { ...item, isCompleted: !isCompleted };
        }
        return item;
      });
    });
  };

  const removeItem = () => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.uuid !== uuid);
    });
  };

  return (
    <div className="task">
      <input type="checkbox" className="task__checkbox" id={`task__checkbox${uuid}`} checked={isCompleted} onChange={toggleCompleted} />
      <label className={`task__label${isCompleted ? " completed" : ""}`} htmlFor={`task__checkbox${uuid}`}>
        {content}
      </label>
      <button className="task__button" onClick={removeItem}>Remove</button>
    </div>
  );
};

export default Task;