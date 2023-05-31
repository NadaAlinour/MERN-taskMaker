import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw error("useTasksContext must be used inside a TasksContextProvider");
  }
  return context;
};
