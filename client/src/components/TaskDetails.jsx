import { useTasksContext } from "../hooks/useTasksContext";
const TaskDetails = ({task, classname}) => {
  const {dispatch} = useTasksContext();
  
  const handleDelete = async () => {
    const response = await fetch("http://localhost:4000/api/tasks/" + task._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      console.log("task deleted");
      console.log(json)
      dispatch({type: 'DELETE_TASK', payload: json})
    }
  };

  const handleComplete = async () => {
    const response = await fetch("http://localhost:4000/api/tasks/" + task._id, {
      method: "PATCH",
      body: JSON.stringify({
        isCompleted: true
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }) 
    const json = await response.json();
    if(response.ok) {
      console.log("task updated");
      dispatch({type: 'COMPLETE_TASK', payload: json}); 
      console.log(json);      
  }
}

  return (
    <div className="task-container">
      <div className="task-details">
        <h1 className={classname}>{task.name}</h1>
        <p>{task.description}</p>
        <div className="task-details-btn">
          <span>
            <button className="complete-btn" onClick={handleComplete}>Complete</button>
          </span>
          <span>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default TaskDetails;
