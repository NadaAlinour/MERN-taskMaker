import { useEffect } from "react";
import {useTasksContext} from "../hooks//useTasksContext";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {
  // const [tasks, setTasks] = useState([]);
  const {tasks, dispatch} = useTasksContext();
 
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:4000/api/tasks");
      const json = await response.json();
      if (response.ok) {
        //console.log(json);
        //setTasks(json);
        dispatch({type: 'SET_TASKS', payload: json});
      }
    };
    fetchTasks();
  }, [dispatch]);
  return (
    <div className="home">
      <TaskForm />
      <div className="tasks">
        {tasks && tasks.map((task) => (
          <TaskDetails key={task._id} task={task} classname={task.isCompleted ? 'completed' : ''}/>
        ))}
      </div>
    </div>
  );
};
export default Home;
