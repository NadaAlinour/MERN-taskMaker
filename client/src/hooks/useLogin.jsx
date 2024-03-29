import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })

    const json = await response.json();

    if(!response.ok) {
        setIsLoading(false);
        setError(json.error);
    }

    if(response.ok) {
        // set context and save response in localstorage (for now)
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({type: 'LOGIN', payload: json});
        setIsLoading(false);
    }
  }

  return {login, isLoading, error};
};
