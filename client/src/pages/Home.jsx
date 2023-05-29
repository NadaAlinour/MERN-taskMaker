import { useEffect } from "react";
import { useState } from "react";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:4000/api/tasks");
      const json = await response.json();
      if (response.ok) {
        console.log(json);
        setTasks(json);
      }
    };
    fetchTasks();
  }, []);
  
  return (
    <div className="home">
      <TaskForm />
      <div className="tasks">
        {tasks.map((task) => (
          <TaskDetails key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};
export default Home;
