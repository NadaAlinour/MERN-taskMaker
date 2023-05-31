import { useReducer, createContext } from "react";
export const TasksContext = createContext();

// state: previous state
// action: type property from-ish dispatch
export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        tasks: action.payload,
      };
    case "CREATE_TASK":
      return {
        tasks: [action.payload, ...state.tasks],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };
    case "COMPLETE_TASK":
      // update the completed task
      // I WASN'T RETURNING ANYTHING FROM THE MAP FUNCTION error fixed :3
      return {
        tasks: state.tasks.map((task) => {
          return task._id === action.payload._id ? action.payload : task;
        }),
      };
    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, {
    tasks: null,
  });

  return (
    <TasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
