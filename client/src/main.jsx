import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TasksContextProvider } from "./context/TasksContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>
);
