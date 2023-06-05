import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TasksContextProvider } from "./context/TasksContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
