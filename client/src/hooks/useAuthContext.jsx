import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw error("useAuthContext must be used inside a AuthContextProvider");
  }
  return context;
};
