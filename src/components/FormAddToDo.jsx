/* eslint-disable react/prop-types */
import { useState } from "react";

function FormAddToDo({ onAddNewItem }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmitButton(event) {
    event.preventDefault();
    if (!taskName) {
      return;
    }
    const newTask = {
      id: Date.now(),
      taskStatus: 0,
      desc: taskName,
    };
    onAddNewItem(newTask);
    setTaskName("");
  }

  return (
    <div className="main-container-list">
      <form onSubmit={handleSubmitButton}>
        <div className="mb-3">
          <label htmlFor="inputListItem" className="form-label">
            Add to Do
          </label>
          <input
            type="text"
            className="form-control"
            id="inputListItem"
            value={taskName}
            onChange={(event) => {
              setTaskName(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default FormAddToDo;
