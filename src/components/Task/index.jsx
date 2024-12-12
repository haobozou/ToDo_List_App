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
    <>
      <input type="checkbox" id={`task-label${uuid}`} checked={isCompleted} onChange={toggleCompleted} />
      <label htmlFor={`task-label${uuid}`}>
        {content}
      </label>
      <button onClick={removeItem}>Remove</button>
    </>
  );
};

export default Task;