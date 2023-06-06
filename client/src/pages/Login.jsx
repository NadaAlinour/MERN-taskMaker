import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const {login, isLoading, error} = useLogin();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(login);
    login(loginData.email, loginData.password);
  };

  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div>
          <label>Email:</label><br></br>
          <br></br>
          <input
            type="text"
            placeholder="your email here"
            value={login.email}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                email: e.target.value,
              });
            }}
          ></input>
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Password:</label><br></br>
          <br></br>
          <input
            type="password"
            placeholder="your password here"
            value={login.password}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                password: e.target.value,
              });
            }}
          ></input>
        </div>
        <br></br>
        <button type="submit" disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}

      </form>
    </div>
  );
};
export default Login;
