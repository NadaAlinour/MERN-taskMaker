import { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

const TaskForm = () => {
  const {dispatch} = useTasksContext();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description } = form;
    const task = { name, description };
    const response = await fetch("http://localhost:4000/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      dispatch({type: 'CREATE_TASK', payload: json});
      // reset form
      setForm({
        name: "",
        description: "",
      });
      console.log("new task added");
    }
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Task description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};
export default TaskForm;
