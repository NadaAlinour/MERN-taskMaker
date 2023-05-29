const TaskDetails = ({ task }) => {
  const handleDelete = async () => {
    const response = await fetch("http://localhost:4000/api/tasks/" + task._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      console.log("task deleted");
    }
  };

 

  return (
    <div className="task-container">
      <div className="task-details">
        <h1>{task.name}</h1>
        <p>{task.description}</p>
        <div className="task-details-btn">
          <span>
            <button className="complete-btn">Complete</button>
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
