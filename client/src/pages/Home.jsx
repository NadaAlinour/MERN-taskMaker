import { useEffect } from "react";
import { useTasksContext } from "../hooks//useTasksContext";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  // const [tasks, setTasks] = useState([]);
  const { tasks, dispatch } = useTasksContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:4000/api/tasks", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        //console.log(json);
        //setTasks(json);
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };
    if (user) {
      fetchTasks();
    }
  }, [dispatch, user]);
  return (
    <div className="home">
      <TaskForm />
      <div className="tasks">
        {tasks &&
          tasks.map((task) => (
            <TaskDetails
              key={task._id}
              task={task}
              classname={task.isCompleted ? "completed" : ""}
            />
          ))}
      </div>
    </div>
  );
};
export default Home;
