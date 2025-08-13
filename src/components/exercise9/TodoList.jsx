import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0);
  const [notCompletedTasks, setNotCompletedTasks] = useState(0);

  return (
    <div className="container w-25">
      <input
        type="text"
        className="form-control"
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="btn btn-info my-2"
        onClick={() => {
          if (text.trim() !== "") {
            const newTask = {
              id: crypto.randomUUID(),
              name: text,
              isDone: false,
            };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setNotCompletedTasks(updatedTasks.length - completedTasks);
            setText("");
          }
        }}
      >
        Add
      </button>

      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              checked={task.isDone}
              onChange={(e) => {
                const updatedTasks = tasks.map((t) =>
                  t.id === task.id ? { ...t, isDone: e.target.checked } : t
                );
                setTasks(updatedTasks);

                if (e.target.checked) {
                  setCompletedTasks(completedTasks + 1);
                  setNotCompletedTasks(notCompletedTasks - 1);
                } else {
                  setCompletedTasks(completedTasks - 1);
                  setNotCompletedTasks(notCompletedTasks + 1);
                }
              }}
            />
            <label className="form-check-label">{task.name}</label>
          </li>
        ))}
      </ul>

      <span className="m-2">Y: {completedTasks}</span>
      <span className="m-2">X: {notCompletedTasks}</span>
    </div>
  );
};

export default TodoList;
